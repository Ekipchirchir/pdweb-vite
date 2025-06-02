export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-6">Support</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#1f2937] mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Have questions or need assistance? Contact us via:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:info.pesadownload@gmail.com" className="text-[#8B6200] underline">info.pesadownload@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254746216077" className="text-[#8B6200] underline">+254 746 216 077</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/+254746216077?text=Hello%20PesaDownload%20Support,%20I%20need%20help!" className="text-[#8B6200] underline">Chat with us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}