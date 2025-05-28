import { useEffect } from 'react';

export default function TermsOfUse() {
  useEffect(() => {
    const backToTop = document.getElementById('backToTop');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const ctaLeftBanner = document.getElementById('ctaLeftBanner');
    let scrollTimeout;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
        whatsappBtn.classList.add('active');
      } else {
        backToTop.classList.remove('active');
        whatsappBtn.classList.remove('active');
      }

      ctaLeftBanner.classList.remove('active');

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          ctaLeftBanner.classList.add('active');
        }
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-gray-50 px-4 md:px-8 lg:px-16 pt-16">
      {/* Persistent Left-Side CTA Banner */}
      <div className="cta-left-banner" id="ctaLeftBanner">
        <span className="small-text">Fast & Secure! Try Now!</span>
        <a
          href="/Assets/downloads/DownloadPesa.apk"
          className="bg-white text-primary font-bold rounded-full download-btn hover:bg-gray-100"
          style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}
        >
          Download Now <i className="fas fa-arrow-down ml-2"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1
            className="text-3xl font-bold"
            style={{ color: '#1f2937', marginBottom: '0.5rem', opacity: 1 }}
          >
            PesaDownload Terms of Use
          </h1>
          <p
            className="text-sm"
            style={{ color: '#4b5563', opacity: 1 }}
          >
            Last updated: Tuesday, May 20, 2025, 09:46 PM EAT
          </p>
        </header>

        <section className="content-section">
          <h2 className="section-title">Owner and Data Controller</h2>
          <p style={{ opacity: 1 }}><strong>PesaDownload</strong></p>
          <p style={{ opacity: 1 }}>Eldoret, Kenya</p>
          <p style={{ opacity: 1 }}>
            Company contact email: <a href="mailto:info.pesadownload@gmail.com" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>info.pesadownload@gmail.com</a>
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Terms and Conditions</h2>
          <ol className="list-decimal" style={{ marginLeft: '1.5rem' }}>
            <li>
              <h3 className="subsection-title">Acceptance of Terms</h3>
              <p style={{ opacity: 1 }}>
                By downloading, accessing, or using PesaDownload, you agree to abide by these Terms and Conditions. If you do not agree, please do not use the App.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Description of Services</h3>
              <p style={{ opacity: 1 }}>
                PesaDownload facilitates seamless deposits and withdrawals between Deriv.com and M-PESA accounts, including peer-to-peer (P2P) transactions. Services may be updated, modified, or discontinued at any time without prior notice.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Eligibility</h3>
              <p style={{ opacity: 1 }}>
                To use this App, you must be at least 18 years old and either a resident of Kenya or a registered M-PESA user. By registering, you confirm that all information provided is accurate and complete.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">User Responsibilities</h3>
              <p style={{ opacity: 1 }}>
                You are responsible for maintaining the confidentiality of your account information. You agree not to engage in fraudulent activities, tamper with the App’s software, or violate any applicable laws while using PesaDownload.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Fees and Payments</h3>
              <p style={{ opacity: 1 }}>
                PesaDownload does not charge any fees for registration. However, a margin of 4% is applied between the current market exchange rates when transferring between M-PESA and Deriv.com. Refunds are only issued after confirmation of an incomplete transaction.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Intellectual Property</h3>
              <p style={{ opacity: 1 }}>
                All content, branding, and intellectual property in the App belong to PesaDownload. Unauthorized reproduction or misuse is strictly prohibited.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Termination</h3>
              <p style={{ opacity: 1 }}>
                We reserve the right to suspend or terminate access to the App without prior notice if you violate these Terms.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Changes to the Terms</h3>
              <p style={{ opacity: 1 }}>
                We may modify these Terms at any time. Continued use of the App signifies your acceptance of any changes.
              </p>
            </li>
          </ol>
        </section>

        <section className="content-section">
          <h2 className="section-title">Legal Information</h2>
          <ol className="list-decimal" style={{ marginLeft: '1.5rem' }} start="9">
            <li>
              <h3 className="subsection-title">Governing Law</h3>
              <p style={{ opacity: 1 }}>
                These Terms are governed by the laws of Kenya and, in relation to platform integrations, also by Deriv.com’s platform terms. Any disputes must be handled through official communication channels.
              </p>
            </li>
            <li>
              <h3 className="subsection-title">Limitation of Liability</h3>
              <p style={{ opacity: 1 }}>
                PesaDownload is not liable for any direct, indirect, or consequential damages resulting from your use of the App.
              </p>
            </li>
          </ol>
        </section>

        <section className="content-section">
          <h2 className="section-title">Help & Contact</h2>
          <p style={{ opacity: 1 }}>Contact us via:</p>
          <ul className="list-disc" style={{ marginLeft: '1.5rem' }}>
            <li style={{ opacity: 1 }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:info.pesadownload@gmail.com" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                info.pesadownload@gmail.com
              </a>
            </li>
            <li style={{ opacity: 1 }}>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254746216077" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                +254 746 216 077
              </a>
            </li>
            <li style={{ opacity: 1 }}>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/+254746216077?text=Hello%20PesaDownload%20Support,%20I%20need%20help!"
                style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}
              >
                Chat with us
              </a>
            </li>
            <li style={{ opacity: 1 }}>
              <strong>Social Media:</strong>{' '}
              Follow us on{' '}
              <a href="#" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                Facebook
              </a>
              ,{' '}
              <a href="#" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                Twitter
              </a>
              ,{' '}
              <a href="#" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                Instagram
              </a>
              ,{' '}
              <a href="#" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                LinkedIn
              </a>
            </li>
          </ul>
          <p style={{ marginTop: '1rem', opacity: 1 }}><strong>Download:</strong></p>
          <ul className="list-disc" style={{ marginLeft: '1.5rem' }}>
            <li style={{ opacity: 1 }}>
              <a href="#" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                Google Play Store
              </a>
            </li>
            <li style={{ opacity: 1 }}>
              <a href="/Assets/downloads/DownloadPesa.apk" style={{ color: '#8B6200', textDecoration: 'underline', opacity: 1 }}>
                Direct APK Download
              </a>
            </li>
            <li style={{ opacity: 1 }}>
              <strong>Use on Web:</strong> Open Web App (Coming Soon!!)
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2 className="section-title">Additional Information for Users</h2>
          <h3 className="subsection-title">Legal Basis for Data Processing</h3>
          <p style={{ opacity: 1 }}>
            PesaDownload may process personal data when:
          </p>
          <ul className="list-disc" style={{ marginLeft: '1.5rem' }}>
            <li style={{ opacity: 1 }}>You have given consent for specific purposes.</li>
            <li style={{ opacity: 1 }}>Data is required to fulfill a contract or pre-contractual obligation.</li>
            <li style={{ opacity: 1 }}>Compliance with legal requirements is necessary.</li>
            <li style={{ opacity: 1 }}>It serves the public interest or exercise of official authority.</li>
            <li style={{ opacity: 1 }}>It is necessary for legitimate business interests.</li>
          </ul>
          <p style={{ marginTop: '0.5rem', opacity: 1 }}>
            You may contact us to understand which basis applies to your data processing.
          </p>

          <h3 className="subsection-title">System Logs and Maintenance</h3>
          <p style={{ opacity: 1 }}>
            For performance and maintenance, PesaDownload and third-party services may collect logs or IP addresses to monitor usage and fix issues.
          </p>
        </section>
      </div>

      {/* Back to Top and WhatsApp Buttons */}
      <div
        className="back-to-top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          right: '20px',
          bottom: '80px',
          backgroundColor: '#8B6200',
          color: 'white',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
      <a
        href="https://wa.me/+254746216077?text=Hello%20PesaDownload%20Support,%20I%20need%20help!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        id="whatsappBtn"
        style={{
          right: '20px',
          bottom: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </main>
  );
}