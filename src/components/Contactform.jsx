import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true); // Set loading to true

  // Create a new object to send to EmailJS
  const emailParams = {
    to_name: 'Web Admin',
    from_name: formData.name,
    reply_to: formData.email, // Capture email here
    message: formData.message,
  };

  emailjs.send('service_3183b2o', 'template_w1qfhtz', emailParams, 'LSHBDTbjWnPjd4OXA')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true); // Set success state
      setFormData({ name: '', email: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setError('Failed to send the message. Please try again.'); // Set error message
    })
    .finally(() => {
      setLoading(false); // Reset loading state
    });
};

  return (
    <div className="bg-[#ADD8E6] p-4 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-1 text-pink-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-pink-500 rounded-lg p-2"
            style={{ fontFamily: 'Happy Monkey' }} // Apply custom font
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-1 text-pink-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-pink-500 rounded-lg p-2"
            style={{ fontFamily: 'Happy Monkey' }} // Apply custom font
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-1 text-pink-600">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-pink-500 rounded-lg p-2"
            style={{ fontFamily: 'Happy Monkey' }} // Apply custom font
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-pink-500 text-white rounded-lg py-2 font-bold hover:bg-pink-600"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {success && <p className="text-green-600 mt-4">Your message has been sent successfully!</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default ContactForm;
