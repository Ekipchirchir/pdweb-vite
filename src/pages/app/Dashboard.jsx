import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock recent transactions (replace with API data later)
  const recentTransactions = [
    { id: 1, date: '2025-05-30', description: 'Deposit', amount: '$50.00' },
    { id: 2, date: '2025-05-29', description: 'Withdrawal', amount: '$20.00' },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '0.75rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'linear-gradient(to bottom right, #f9fafb, rgba(250, 204, 21, 0.12), #f3f4f6)', position: 'relative', overflow: 'hidden', zIndex: 1 }} className="md:p-4 lg:p-6">
      {/* Background Animation */}
      <div style={{ position: 'absolute', inset: '0', zIndex: 0, opacity: '0.15' }}>
        <div style={{ position: 'absolute', width: '12rem', height: '12rem', backgroundColor: '#8B6200', borderRadius: '9999px', mixBlendMode: 'multiply', filter: 'blur(1.5rem)', animation: 'blob 20s infinite' }}></div>
        <div style={{ position: 'absolute', width: '12rem', height: '12rem', backgroundColor: '#6B4A00', borderRadius: '9999px', mixBlendMode: 'multiply', filter: 'blur(1.5rem)', animation: 'blob 20s infinite', animationDelay: '3s' }}></div>
      </div>

      <div style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Welcome Section */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.25rem', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(0.25rem)', border: '1px solid #e5e7eb' }} className="md:flex-row items-center justify-between">
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', marginRight: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: '700', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#8B6200', color: 'white', transition: 'all 0.3s ease', transform: 'translateY(0)', transformOrigin: 'center' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div style={{ position: 'absolute', bottom: '-0.15rem', right: '-0.15rem', width: '1rem', height: '1rem', backgroundColor: '#10b981', borderRadius: '9999px', border: '1.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 2s infinite' }}>
                <svg style={{ width: '0.6rem', height: '0.6rem', color: 'white' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#8B6200', textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                Welcome, <span style={{ color: '#1f2937' }}>{user?.name || 'User'}</span>!
              </h1>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.25rem' }}>
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} - {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* User Details Section */}
        <div style={{ marginBottom: '1.25rem', borderRadius: '0.5rem', padding: '0.75rem', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: '#8B6200' }}>User Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }} className="md:grid-cols-2">
            <div style={{ padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#f9fafb', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#4b5563' }}>Email</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937' }}>{user?.email || 'N/A'}</span>
            </div>
            <div style={{ padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#f9fafb', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' }} className="md:block">
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#4b5563' }}>Deriv Account</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937' }}>{user?.accountId || 'N/A'}</span>
            </div>
            <div style={{ padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#f9fafb', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' }} className="md:block">
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#4b5563' }}>Balance</span>
              <span style={{ fontSize: '1rem', fontWeight: '700', color: '#8B6200' }}>
                ${user?.balance || '0.00'} <span style={{ fontSize: '0.75rem' }}>{user?.currency || 'USD'}</span>
              </span>
            </div>
            <div style={{ padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#f9fafb', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' }} className="md:block">
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#4b5563' }}>Phone</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937' }}>{user?.phone || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div style={{ marginBottom: '1.25rem', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem', color: '#8B6200' }}>Recent Transactions</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ padding: '0.5rem', color: '#4b5563', fontSize: '0.75rem' }}>Date</th>
                  <th style={{ padding: '0.5rem', color: '#4b5563', fontSize: '0.75rem' }}>Description</th>
                  <th style={{ padding: '0.5rem', color: '#4b5563', fontSize: '0.75rem' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} style={{ backgroundColor: 'white', transition: 'background-color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                    <td style={{ padding: '0.5rem', color: '#1f2937', fontSize: '0.875rem' }}>{transaction.date}</td>
                    <td style={{ padding: '0.5rem', color: '#1f2937', fontSize: '0.875rem' }}>{transaction.description}</td>
                    <td style={{ padding: '0.5rem', color: '#8B6200', fontSize: '0.875rem' }}>{transaction.amount}</td>
                  </tr>
                ))}
                {recentTransactions.length === 0 && (
                  <tr>
                    <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'center', color: '#4b5563', fontSize: '0.875rem' }}>
                      No transactions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div style={{ borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem', color: '#8B6200' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }} className="md:grid-cols-3">
            <a
              href="/app/deposits"
              style={{ display: 'block', textAlign: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', borderRadius: '0.375rem', fontWeight: '600', fontSize: '0.875rem', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#8B6200', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', transform: 'translateY(0)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-0.15rem)'; e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.backgroundColor = '#6B4A00'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.backgroundColor = '#8B6200'; }}
            >
              Deposit Funds
            </a>
            <a
              href="/app/withdrawals"
              style={{ display: 'block', textAlign: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', borderRadius: '0.375rem', fontWeight: '600', fontSize: '0.875rem', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#ef4444', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', transform: 'translateY(0)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-0.15rem)'; e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.backgroundColor = '#dc2626'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.backgroundColor = '#ef4444'; }}
            >
              Withdraw Funds
            </a>
            <a
              href="/app/transactions"
              style={{ display: 'block', textAlign: 'center', paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', borderRadius: '0.375rem', fontWeight: '600', fontSize: '0.875rem', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#e5e7eb', color: '#1f2937', textDecoration: 'none', transition: 'all 0.3s ease', transform: 'translateY(0)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-0.15rem)'; e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.backgroundColor = '#d1d5db'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.backgroundColor = '#e5e7eb'; }}
            >
              View Transactions
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -40px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @media (min-width: 768px) {
            .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
            .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
          }
        `}
      </style>
    </div>
  );
}