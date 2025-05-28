import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
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

          {/* Desktop Menu (Visible on all screens) */}
          <div className="flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              style={{ opacity: 1 }}
            >
              Home
            </NavLink>
            <NavLink
              to="/termsofuse"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              style={{ opacity: 1 }}
            >
              Terms of Use
            </NavLink>
            <NavLink
              to="/privacypolicy"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              style={{ opacity: 1 }}
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/#contact"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              style={{ opacity: 1 }}
            >
              Contact
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
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}