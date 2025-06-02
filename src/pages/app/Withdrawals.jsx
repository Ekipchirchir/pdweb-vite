import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Withdrawals() {
  const [amountUSD, setAmountUSD] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [codeRequestLoading, setCodeRequestLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangeratesapi.io/v1/latest?access_key=YOUR_API_KEY&base=USD&symbols=KES');
        const rate = response.data.rates.KES;
        setExchangeRate(rate - 5); // Subtract 5 from the fetched rate
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setExchangeRate(124.196); // Fallback: 129.196 - 5
      }
    };
    fetchExchangeRate();
  }, []);

  const amountKES = amountUSD && exchangeRate ? (amountUSD * exchangeRate).toFixed(2) : '0.00';
  const minimumUSD = 2;
  const minimumKES = exchangeRate ? (minimumUSD * exchangeRate).toFixed(2) : '0.00';

  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (!amountUSD || amountUSD < minimumUSD) {
      setMessage(`Please enter an amount of at least ${minimumUSD} USD (${minimumKES} KES).`);
      return;
    }
    if (!phone || !/^\+2547\d{8}$/.test(phone)) {
      setMessage('Please enter a valid M-PESA number (e.g., +254712345678).');
      return;
    }
    if (!verificationCode || verificationCode.length !== 6 || !/^\d+$/.test(verificationCode)) {
      setMessage('Please enter a valid 6-digit verification code.');
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
        'https://downloadpesa-app-backend-production.up.railway.app/api/mpesa/withdraw',
        { amount, phone, verificationCode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`Withdrawal of ${amountUSD} USD (${amount} KES) initiated to ${phone}.`);
    } catch (error) {
      setMessage('Error initiating withdrawal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const requestVerificationCode = async () => {
    setCodeRequestLoading(true);
    setMessage('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://downloadpesa-app-backend-production.up.railway.app/api/mpesa/request-verification-code',
        { phone },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Verification code sent to your email.');
    } catch (error) {
      setMessage('Error requesting verification code. Please try again.');
    } finally {
      setCodeRequestLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '0.75rem', background: 'linear-gradient(to bottom right, #f9fafb, rgba(250, 204, 21, 0.12), #f3f4f6)', position: 'relative' }} className="md:p-4">
      <div style={{ maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>Withdraw Funds</h2>
        <div style={{ fontSize: '0.75rem', color: '#4b5563', marginBottom: '0.5rem' }}>
          <p>Minimum Withdrawal: {minimumUSD} USD = {minimumKES} KES</p>
        </div>
        <form onSubmit={handleWithdraw} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Email Verification Code</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem' }}
              required
              placeholder="Enter 6-digit code"
              maxLength="6"
            />
          </div>
          <button
            type="button"
            onClick={requestVerificationCode}
            style={{ width: '100', backgroundColor: '#8B6200', color: 'white', fontWeight: '600', padding: '0.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '0.875rem', opacity: codeRequestLoading ? 0.7 : 1 }}
            disabled={codeRequestLoading || !phone}
            onMouseEnter={(e) => !codeRequestLoading && phone && (e.currentTarget.style.backgroundColor = '#6B4A00')}
            onMouseLeave={(e) => !codeRequestLoading && phone && (e.currentTarget.style.backgroundColor = '#8B6200')}
          >
            {codeRequestLoading ? 'Requesting...' : 'Request Email Verification Code'}
          </button>
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#8B6200', color: 'white', fontWeight: '600', padding: '0.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '0.875rem', opacity: loading ? 0.7 : 1 }}
            disabled={loading || !exchangeRate}
            onMouseEnter={(e) => !loading && exchangeRate && (e.currentTarget.style.backgroundColor = '#6B4A00')}
            onMouseLeave={(e) => !loading && exchangeRate && (e.currentTarget.style.backgroundColor = '#8B6200')}
          >
            {loading ? 'Processing...' : 'Withdraw'}
          </button>
        </form>
        {message && <p style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.875rem', color: '#4b5563' }}>{message}</p>}
      </div>
    </div>
  );
}