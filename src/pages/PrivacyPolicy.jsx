import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
            style={{ color: '#1f2937', opacity: 1 }}
          >
            PesaDownload Privacy Policy
          </h1>
          <p
            className="text-sm print-only"
            style={{ color: '#4b5563', opacity: 1 }}
          >
            This document can be printed for reference using the print command in your browser settings.
          </p>
          <p
            className="text-sm no-print"
            style={{ color: '#4b5563', opacity: 1 }}
          >
            Effective Date: May 1, 2025 | Last updated: Tuesday, May 20, 2025, 03:37 PM EAT
          </p>
        </header>

        <section className="content-section">
          <h2 className="section-title">Introduction</h2>
          <p style={{ opacity: 1 }}>
            This Privacy Policy outlines how PesaDownload ("we," "our," or "us") collects, uses, shares, and protects your personal information when you use our mobile application or website. We follow best practices as recommended by Google Play and relevant data protection standards.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">1. Information We Collect</h2>
          <p style={{ opacity: 1 }}>
            To deliver a secure and seamless experience, we collect the following types of data:
          </p>
          <h3 className="subsection-title">Personal Information</h3>
          <p style={{ opacity: 1 }}>
            When you create an account, we may collect your name, email address, phone number, and any other relevant contact details.
          </p>
          <h3 className="subsection-title">Financial Data</h3>
          <p style={{ opacity: 1 }}>
            To enable transactions, we may collect mobile money account details—such as M-PESA or Airtel Money numbers—to support deposits and withdrawals.
          </p>
          <h3 className="subsection-title">Usage Data</h3>
          <p style={{ opacity: 1 }}>
            We gather information about how you interact with the app—such as your device type, operating system, IP address, and in-app behavior—to help improve performance and usability.
          </p>
          <h3 className="subsection-title">Transaction Data</h3>
          <p style={{ opacity: 1 }}>
            We record transaction activity, including deposits, withdrawals, and history, for security, reporting, and fraud prevention purposes.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">2. How We Use Your Information</h2>
          <p style={{ opacity: 1 }}>Your information is used to:</p>
          <ul className="list-disc" style={{ marginLeft: '1.5rem' }}>
            <li style={{ opacity: 1 }}>Deliver and manage our services effectively</li>
            <li style={{ opacity: 1 }}>Improve and personalize your app experience</li>
            <li style={{ opacity: 1 }}>Communicate with you about account activity, support, and updates</li>
            <li style={{ opacity: 1 }}>Process payments securely and detect suspicious or unauthorized activity</li>
            <li style={{ opacity: 1 }}>Fulfill legal obligations and protect user data and our platform</li>
          </ul>
        </section>

        <section className="content-section">
          <h2 className="section-title">3. Sharing and Disclosure of Information</h2>
          <p style={{ opacity: 1 }}>
            We do not sell your personal information. However, we may share your data in the following circumstances:
          </p>
          <h3 className="subsection-title">Service Providers</h3>
          <p style={{ opacity: 1 }}>
            We may work with trusted third-party vendors (such as payment gateways) who help us operate and maintain our services. These partners are obligated to keep your data secure and confidential.
          </p>
          <h3 className="subsection-title">Legal Compliance</h3>
          <p style={{ opacity: 1 }}>
            If required by law, regulation, or legal process (e.g., court orders or government requests), we may disclose your information.
          </p>
          <h3 className="subsection-title">Business Changes</h3>
          <p style={{ opacity: 1 }}>
            In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the business transaction.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">4. Keeping Your Data Secure</h2>
          <p style={{ opacity: 1 }}>
            We use strong security practices to help protect your personal data from unauthorized access or misuse. While no digital system can be completely secure, we continuously monitor and update our security infrastructure to align with current best practices.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">5. Your Privacy Rights</h2>
          <p style={{ opacity: 1 }}>
            You have rights when it comes to your personal data, including:
          </p>
          <ul className="list-disc" style={{ marginLeft: '1.5rem' }}>
            <li style={{ opacity: 1 }}>Requesting access to the information we hold about you</li>
            <li style={{ opacity: 1 }}>Asking for corrections to inaccurate or outdated data</li>
            <li style={{ opacity: 1 }}>Requesting deletion of your data, where legally permitted</li>
            <li style={{ opacity: 1 }}>Limiting how your data is used under certain conditions</li>
          </ul>
          <p style={{ marginTop: '0.5rem', opacity: 1 }}>
            To exercise any of these rights, please contact us directly.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">6. Data Retention</h2>
          <p style={{ opacity: 1 }}>
            We only keep your data for as long as it’s needed to fulfill the purposes outlined in this policy, meet legal requirements, and maintain accurate financial records.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">7. Third-Party Links</h2>
          <p style={{ opacity: 1 }}>
            PesaDownload may include links to other websites or services. Please note that we are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies before sharing any personal information.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">8. Changes to This Privacy Policy</h2>
          <p style={{ opacity: 1 }}>
            We may revise this Privacy Policy from time to time. If any major changes are made, we’ll notify you via the app or email. Be sure to check this page occasionally to stay informed of any updates.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">9. Contact Us</h2>
          <p style={{ opacity: 1 }}>
            If you have any questions or concerns about this Privacy Policy, feel free to reach out to us:
          </p>
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
        </section>
      </div>

      {/* Back to Top and WhatsApp Buttons */}
      <div
        className="back-to-top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ right: '20px', bottom: '80px', backgroundColor: '#8B6200', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        <i className="fas fa-arrow-up"></i>
      </div>
      <a
        href="https://wa.me/+254746216077?text=Hello%20PesaDownload%20Support,%20I%20need%20help!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        id="whatsappBtn"
        style={{ right: '20px', bottom: '20px', backgroundColor: '#25D366', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </main>
  );
}