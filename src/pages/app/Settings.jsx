import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const sampleDeposits = 1500.50; // Sample total deposits in user's currency
  const sampleWithdrawals = 800.25; // Sample total withdrawals in user's currency
  const netBalance = sampleDeposits - sampleWithdrawals;

  // Sample recent activity data (replace with real data from backend)
  const recentActivity = [
    { type: 'Deposit', amount: 500.00, date: 'May 30, 2025', time: '10:00 AM EAT' },
    { type: 'Withdrawal', amount: 200.00, date: 'May 29, 2025', time: '03:30 PM EAT' },
    { type: 'Deposit', amount: 1000.50, date: 'May 28, 2025', time: '09:15 AM EAT' },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '0.75rem', background: 'linear-gradient(to bottom right, #f9fafb, rgba(250, 204, 21, 0.12), #f3f4f6)', position: 'relative' }} className="md:p-4">
      <div style={{ maxWidth: '64rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>Dashboard</h2>

        {/* User Details Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>User Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Name</label>
              <input
                type="text"
                value={user?.name || 'N/A'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Email</label>
              <input
                type="email"
                value={user?.email || 'N/A'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Phone Number</label>
              <input
                type="tel"
                value={user?.phone || 'N/A'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Deriv Account ID</label>
              <input
                type="text"
                value={user?.accountId || 'N/A'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Balance</label>
              <input
                type="text"
                value={`${user?.balance || '0.00'} ${user?.currency || 'USD'}`}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>Email Notifications</label>
              <input
                type="text"
                value={user?.notifications?.email ? 'Enabled' : 'Disabled'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563', marginBottom: '0.25rem' }}>SMS Notifications</label>
              <input
                type="text"
                value={user?.notifications?.sms ? 'Enabled' : 'Disabled'}
                disabled
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', fontSize: '0.875rem', backgroundColor: '#f3f4f6' }}
              />
            </div>
          </div>
        </div>

        {/* Deposits vs Withdrawals Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Deposits vs Withdrawals</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Total Deposits: {sampleDeposits} {user?.currency || 'USD'}</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Total Withdrawals: {sampleWithdrawals} {user?.currency || 'USD'}</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Net Balance: {netBalance} {user?.currency || 'USD'}</p>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Recent Activity</h3>
          {recentActivity.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#4b5563' }}>
                  <span>{activity.type}: {activity.amount} {user?.currency || 'USD'}</span>
                  <span>{activity.date} at {activity.time}</span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>No recent activity available.</p>
          )}
        </div>
      </div>
    </div>
  );
}