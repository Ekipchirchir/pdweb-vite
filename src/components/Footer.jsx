import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="footer-container flex flex-wrap justify-between gap-20">
          <div className="footer-column">
            <h3
              style={{
                color: '#f7e2c2',
                fontSize: '1.2rem',
                marginBottom: '15px',
                borderBottom: '2px solid #8B6200',
                paddingBottom: '5px',
              }}
            >
              About PesaDownload
            </h3>
            <p style={{ fontSize: '0.875rem' }}>
              PesaDownload offers fast and secure Mpesa transactions for Deriv.com, enabling seamless withdrawals and deposits in seconds.
            </p>
          </div>
          <div className="footer-column">
            <h3
              style={{
                color: '#f7e2c2',
                fontSize: '1.2rem',
                marginBottom: '15px',
                borderBottom: '2px solid #8B6200',
                paddingBottom: '5px',
              }}
            >
              Quick Links
            </h3>
            <Link to="/" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Home
            </Link>
            <Link to="/#features" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Features
            </Link>
            <Link to="/#how-it-works" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              How It Works
            </Link>
            <Link to="/#download" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Download
            </Link>
            <Link to="/#testimonials" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Testimonials
            </Link>
            <Link to="/#faq" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              FAQ
            </Link>
            <Link to="/#contact" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Contact
            </Link>
          </div>
          <div className="footer-column">
            <h3
              style={{
                color: '#f7e2c2',
                fontSize: '1.2rem',
                marginBottom: '15px',
                borderBottom: '2px solid #8B6200',
                paddingBottom: '5px',
              }}
            >
              Legal
            </h3>
            <Link to="/privacypolicy" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Privacy Policy
            </Link>
            <Link to="/termsofuse" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              Terms of Use
            </Link>
            <Link to="/#faq" style={{ color: '#d1d1d1', display: 'block', marginBottom: '10px' }}>
              FAQ
            </Link>
          </div>
          <div className="footer-column">
            <h3
              style={{
                color: '#f7e2c2',
                fontSize: '1.2rem',
                marginBottom: '15px',
                borderBottom: '2px solid #8B6200',
                paddingBottom: '5px',
              }}
            >
              Follow Us
            </h3>
            <div className="footer-social">
              <a
                href="#"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p
            style={{
              borderTop: '1px solid #444',
              paddingTop: '20px',
              textAlign: 'center',
              color: '#888',
              fontSize: '0.9rem',
            }}
          >
            © 2025 PesaDownload. All rights reserved. Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}