import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith('/app');

  return (
    <nav className={`bg-gray-50 shadow ${isAppRoute ? 'fixed top-0 left-0 right-0 z-[1000]' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={isAppRoute ? "/app" : "/"} className="flex items-center" style={{ textDecoration: 'none' }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <circle cx="100" cy="100" r="95" fill="#d46f29" />
              <circle cx="100" cy="100" r="75" fill="#e08b34" />
              <circle cx="100" cy="100" r="55" fill="#c97629" />
              <text
                x="100"
                y="125"
                textAnchor="middle"
                fontSize="90"
                fontFamily="Georgia, serif"
                fill="#f7e2c2"
                fontWeight="bold"
              >
                P
              </text>
            </svg>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8B6200', opacity: 1 }}>
              PesaDownload
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="flex space-x-6 items-center">
            {isAppRoute ? (
              user ? (
                <>
                  <NavLink
                    to="/app/home"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/app/deposits"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Deposits
                  </NavLink>
                  <NavLink
                    to="/app/withdrawals"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Withdrawals
                  </NavLink>
                  <NavLink
                    to="/app/transactions"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Transactions
                  </NavLink>
                  <NavLink
                    to="/app/support"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Support
                  </NavLink>
                  <NavLink
                    to="/app/settings"
                    className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                    style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={logout}
                    className="transition transform hover:translate-y-1 rounded-full"
                    style={{
                      backgroundColor: '#8B6200',
                      color: 'white',
                      fontWeight: 'bold',
                      padding: '0.5rem 1rem',
                      textDecoration: 'none',
                      opacity: 1,
                      fontSize: '1rem',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/app/deriv-connect"
                  className="transition transform hover:translate-y-1 rounded-full"
                  style={{
                    backgroundColor: '#8B6200',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    opacity: 1,
                    fontSize: '1rem',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
                >
                  Login
                </NavLink>
              )
            ) : (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                  style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/termsofuse"
                  className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                  style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                >
                  Terms of Use
                </NavLink>
                <NavLink
                  to="/privacypolicy"
                  className={({ isActive }) => `text-gray-800 hover:text-[#8B6200] ${isActive ? 'font-bold underline' : ''} transition-colors`}
                  style={{ padding: '0.5rem 1rem', fontSize: '1.1rem' }}
                >
                  Privacy Policy
                </NavLink>
                <a
                  href="/Assets/downloads/DownloadPesa.apk"
                  className="transition transform hover:translate-y-1 rounded-full"
                  style={{
                    backgroundColor: '#8B6200',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    opacity: 1,
                    fontSize: '1rem',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
                >
                  Download App
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
