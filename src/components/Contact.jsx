import { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp
    const whatsappNumber = '254791610865';
    const whatsappMsg = `Contact Form Submission:%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');

    // Email
    const subject = 'Contact Form Submission';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:kipngenogregory@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Reset form and show confirmation
    setFormData({ name: '', email: '', message: '' });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our team
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 bg-white rounded-lg shadow-lg p-6 md:p-12">
          {/* Left: Map and Socials */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="w-full h-64 rounded-lg overflow-hidden mb-6 shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.733745374551!2d35.27897867376998!3d-0.3730634996232714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a57004f7e924b%3A0xe78a8d64e47e01ed!2sA.%20C.%20K.%20Business%20Park!5e0!3m2!1sen!2ske!4v1748358803358!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition duration-300"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition duration-300"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/wdqZxtM2AFsRfhgo6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline hover:text-primary-800"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="p-3 bg-green-100 text-green-700 rounded text-center mb-2">
                  Message sent! We will get back to you soon.
                </div>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}