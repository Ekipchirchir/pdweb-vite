import { useAuth } from '../../contexts/AuthContext';

export default function DerivConnect() {
  const { user } = useAuth();

  const handleConnect = () => {
    const baseCallbackUrl = 'https://downloadpesa-app-backend-production.up.railway.app/callback';
    const derivAuthUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=72314&redirect_uri=${encodeURIComponent(baseCallbackUrl)}&response_type=code`;
    console.log('DerivConnect: Initiating Deriv OAuth, redirecting to:', derivAuthUrl);
    window.location.href = derivAuthUrl;
  };

  // Redirect to dashboard if already authenticated
  if (user) {
    console.log('DerivConnect: User already authenticated, redirecting to /app/home');
    window.location.href = '/app/home';
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center content-section">
        <h2 className="section-title">Connect to Deriv</h2>
        <p className="mb-6" style={{ color: 'var(--gray-600)' }}>Authorize PesaDownload to access your Deriv account securely.</p>
        <button
          onClick={handleConnect}
          className="transition transform hover:translate-y-1 rounded-full"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.75rem 1rem',
          }}
        >
          Connect with Deriv
        </button>
      </div>
    </div>
  );
}