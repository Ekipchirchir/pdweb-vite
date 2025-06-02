import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AuthCallback() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('AuthCallback: Processing URL at:', location.pathname, location.search);
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const accountId = params.get('accountId');
    const fullname = params.get('fullname');
    const email = params.get('email');
    const balance = params.get('balance');
    const currency = params.get('currency');
    console.log('AuthCallback: URL params:', { token, accountId, fullname, email, balance, currency });

    if (!token) {
      console.log('AuthCallback: No token found, redirecting to /app/deriv-connect');
      navigate('/app/deriv-connect', { replace: true });
      return;
    }

    try {
      console.log('AuthCallback: Calling login with token');
      login(token, { accountId, fullname, email, balance, currency });
      console.log('AuthCallback: Login called, checking user state:', user);
    } catch (error) {
      console.error('AuthCallback: Login error:', error.message);
      setError('Failed to authenticate. Please try again.');
      navigate('/app/deriv-connect', { replace: true });
      return;
    }
  }, [location, login, navigate]);

  useEffect(() => {
    if (user) {
      console.log('AuthCallback: User state updated, navigating to /app/home');
      navigate('/app/home', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {error ? <p className="text-red-500">{error}</p> : <p>Processing login...</p>}
    </div>
  );
}