import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Deposits() {
  const [amountUSD, setAmountUSD] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangeratesapi.io/v1/latest?access_key=YOUR_API_KEY&base=USD&symbols=KES');
        const rate = response.data.rates.KES;
        setExchangeRate(rate + 6);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setExchangeRate(135.2417); // Fallback: 129.2417 + 6 from recent data
      }
    };
    fetchExchangeRate();
  }, []);

  const amountKES = amountUSD && exchangeRate ? (amountUSD * exchangeRate).toFixed(2) : '0.00';
  const minimumUSD = 1;
  const minimumKES = exchangeRate ? (minimumUSD * exchangeRate).toFixed(2) : '0.00';

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!amountUSD || amountUSD < minimumUSD) {
      setMessage(`Please enter an amount of at least ${minimumUSD} USD (${minimumKES} KES).`);
      return;
    }
    if (!phone || !/^\+2547\d{8}$/.test(phone)) {
      setMessage('Please enter a valid M-PESA number (e.g., +254712345678).');
      return;
    }
    if (!exchangeRate) {
      setMessage('Exchange rate not available. Please try again later.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const token = localStorage.getItem('token');
      const amount = amountKES;
      const response = await axios.post(
        'https://downloadpesa-app-backend-production.up.railway.app/api/mpesa/deposit',
        { amount, phone },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`Deposit of ${amountUSD} USD (${amount} KES) initiated to ${phone}.`);
    } catch (error) {
      setMessage('Error initiating deposit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '0.75rem', background: 'linear-gradient(to bottom right, #f9fafb, rgba(250, 204, 21, 0.12), #f3f4f6)', position: 'relative' }} className="md:p-4">
      <div style={{ maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>Make a Deposit</h2>
        <div style={{ fontSize: '0.75rem', color: '#4b5563', marginBottom: '0.5rem' }}>
          <p>Minimum Deposit: {minimumUSD} USD = {minimumKES} KES</p>
        </div>
        <form onSubmit={handleDeposit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Amount (USD)</label>
            <input
              type="number"
              value={amountUSD}
              onChange={(e) => setAmountUSD(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem' }}
              required
              min={minimumUSD}
              step="0.01"
              placeholder={`Enter at least ${minimumUSD} USD`}
            />
            {amountUSD > 0 && exchangeRate && (
              <p style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.25rem' }}>
                Equivalent: {amountKES} KES
              </p>
            )}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>M-PESA Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem' }}
              required
              placeholder="+254712345678"
            />
          </div>
          {amountUSD >= minimumUSD && phone && (
            <p style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.25rem' }}>
              Summary: {amountUSD} USD = {amountKES} KES to {phone}
            </p>
          )}
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#8B6200', color: 'white', fontWeight: '600', padding: '0.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '0.875rem', opacity: loading ? 0.7 : 1 }}
            disabled={loading || !exchangeRate}
            onMouseEnter={(e) => !loading && exchangeRate && (e.currentTarget.style.backgroundColor = '#6B4A00')}
            onMouseLeave={(e) => !loading && exchangeRate && (e.currentTarget.style.backgroundColor = '#8B6200')}
          >
            {loading ? 'Processing...' : 'Deposit'}
          </button>
        </form>
        {message && <p style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.875rem', color: '#4b5563' }}>{message}</p>}
      </div>
    </div>
  );
}