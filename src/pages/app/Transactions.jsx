import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'https://downloadpesa-app-backend-production.up.railway.app/api/auth/transactions',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // Check if response.data is an array or contains an array
        if (Array.isArray(response.data)) {
          setTransactions(response.data);
        } else if (response.data && Array.isArray(response.data.transactions)) {
          setTransactions(response.data.transactions);
        } else {
          setTransactions([]); // Fallback to empty array if no valid data
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError('Failed to load transactions. Please try again later.');
        setTransactions([]); // Ensure transactions is an array even on error
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: '0.75rem', paddingLeft: '16rem', background: 'linear-gradient(to bottom right, #f9fafb, rgba(250, 204, 21, 0.12), #f3f4f6)', position: 'relative' }} className="md:p-4">
      <div style={{ maxWidth: '64rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>Transaction History</h2>
        {loading ? (
          <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Loading...</p>
        ) : error ? (
          <p style={{ fontSize: '0.875rem', color: '#ef4444' }}>{error}</p>
        ) : transactions.length === 0 ? (
          <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>No transactions found.</p>
        ) : (
          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem', overflowX: 'auto' }}>
            <table style={{ minWidth: '100%' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', color: '#4b5563' }}>Date</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', color: '#4b5563' }}>Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', color: '#4b5563' }}>Amount (KES)</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', color: '#4b5563' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index} style={{ borderTop: '1px solid #d1d5db' }}>
                    <td style={{ padding: '0.75rem' }}>{new Date(tx.date).toLocaleDateString()}</td>
                    <td style={{ padding: '0.75rem' }}>{tx.type}</td>
                    <td style={{ padding: '0.75rem' }}>{tx.amount}</td>
                    <td style={{ padding: '0.75rem' }}>{tx.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}