import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: 'What is PesaDownload?', answer: 'PesaDownload is a platform for seamless Mpesa transactions with Deriv.com.' },
    { question: 'Is it secure?', answer: 'Yes, we use bank-level encryption to protect your transactions.' },
    { question: 'How do I get support?', answer: 'Reach out via our contact form or email us at info.pesadownload@gmail.com.' },
  ];

  return (
    <main style={{ backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white', opacity: 1 }}>
              Fast & Secure Mpesa Transactions for Deriv.com
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'white', opacity: 1 }}>
              PesaDownload revolutionizes your financial transactions with Mpesa.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
              <a
                href="/Assets/downloads/DownloadPesa.apk"
                style={{
                  backgroundColor: 'white',
                  color: '#8B6200',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
                className="transition transform hover:translate-y-1"
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#e5e7eb')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
              >
                Download Now <i className="fas fa-arrow-down" style={{ marginLeft: '0.5rem' }}></i>
              </a>
              <Link
                to="#"
                style={{
                  border: '2px solid white',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
                className="transition transform hover:translate-y-1"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#8B6200';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Open Web App <i className="fas fa-external-link-alt" style={{ marginLeft: '0.5rem' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            Why Choose PesaDownload?
          </h2>
          <div className="grid md:grid-cols-4">
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Instant Transactions
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Withdraw or deposit funds to your Deriv.com account in seconds.</p>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Bank-Level Security
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Your transactions are protected with advanced encryption.</p>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                P2P Transactions
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Easily transfer funds between Deriv.com users.</p>
            </div>
            <div className="features-card">
              <div className="features-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                MT5 Trading Integration
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Seamless MT5 trading coming soon.</p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3">
            <div className="text-center">
              <div className="features-icon">
                <i className="fas fa-download"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Step 1: Download the App
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Get PesaDownload from our secure link.</p>
            </div>
            <div className="text-center">
              <div className="features-icon">
                <i className="fas fa-link"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Step 2: Connect Deriv
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Link your Deriv account securely.</p>
            </div>
            <div className="text-center">
              <div className="features-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Step 3: Transact Instantly
              </h3>
              <p style={{ color: '#4b5563', opacity: 1 }}>Deposit or withdraw funds with ease.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/Assets/downloads/DownloadPesa.apk"
              style={{
                backgroundColor: '#8B6200',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
              className="transition transform hover:translate-y-1"
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section className="download-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            Download PesaDownload
          </h2>
          <div className="grid md:grid-cols-2">
            <div className="download-card">
              <div className="features-icon">
                <i className="fas fa-download"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Direct Download
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem', opacity: 1 }}>
                Get the latest version from our secure servers.
              </p>
              <a
                href="/Assets/downloads/DownloadPesa.apk"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
                className="transition transform hover:translate-y-1"
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
              >
                Download APK
              </a>
              <p style={{ color: '#4b5563', marginTop: '0.5rem', opacity: 1 }}>Version 1.0.0</p>
            </div>
            <div className="download-card">
              <div className="features-icon">
                <i className="fab fa-google-play"></i>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', opacity: 1 }}>
                Google Play Store
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem', opacity: 1 }}>
                Download from the official Google Play Store.
              </p>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#8B6200',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
                className="transition transform hover:translate-y-1"
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
              >
                Get on Play Store
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="testimonial-avatar">
                  EK
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', opacity: 1 }}>Emmanuel K.</h4>
                  <div style={{ display: 'flex', color: '#facc15' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p style={{ color: '#4b5563', opacity: 1 }}>"PesaDownload has transformed how I manage my Deriv.com funds."</p>
            </div>
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="testimonial-avatar">
                  SM
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#1f2937', opacity: 1 }}>Sarah M.</h4>
                  <div style={{ display: 'flex', color: '#facc15' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
              <p style={{ color: '#4b5563', opacity: 1 }}>"Fast and reliable Mpesa transactions every time!"</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-button"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', opacity: 1 }}>
                    {faq.question}
                  </h3>
                  <i
                    className={`fas ${openFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                    style={{ color: '#4b5563' }}
                  ></i>
                </button>
                <div
                  className={`faq-content ${openFaq === index ? 'open' : 'closed'}`}
                >
                  <p style={{ opacity: 1 }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            Get in Touch
          </h2>
          <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '2rem', opacity: 1 }}>
            Have questions or need support? Reach out to us!
          </p>
          <form className="contact-form">
            <div className="mb-4">
              <label htmlFor="name" style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', opacity: 1 }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className="contact-input"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', opacity: 1 }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="contact-input"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" style={{ display: 'block', color: '#374151', fontWeight: '500', marginBottom: '0.5rem', opacity: 1 }}>
                Message
              </label>
              <textarea
                id="message"
                className="contact-textarea"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#8B6200',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
              }}
              className="transition transform hover:translate-y-1"
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#6B4A00')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#8B6200')}
            >
              Send Message
            </button>
          </form>
          <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '2rem', opacity: 1 }}>
            Or email us at{' '}
            <a href="mailto:info.pesadownload@gmail.com" style={{ color: '#8B6200', textDecoration: 'underline' }}>
              info.pesadownload@gmail.com
            </a>
          </p>
        </div>
      </section>
      {/* User Stats Section */}
      <section className="stats-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937', opacity: 1 }}>
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#8B6200', marginBottom: '1rem', opacity: 1 }}>
                10,000+
              </div>
              <p style={{ color: '#4b5563', opacity: 1 }}>Active Users</p>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#8B6200', marginBottom: '1rem', opacity: 1 }}>
                1M+
              </div>
              <p style={{ color: '#4b5563', opacity: 1 }}>Transactions Processed</p>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#8B6200', marginBottom: '1rem', opacity: 1 }}>
                99.9%
              </div>
              <p style={{ color: '#4b5563', opacity: 1 }}>Uptime Reliability</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}