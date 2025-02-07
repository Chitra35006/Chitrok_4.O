import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../Context/ThemeContext';

const Contact = () => {
  const {theme} = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <section id='contact-section' className={` py-12 mt-20 ${theme === "dark" ? "bg-[#032644]" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Contact Form */}
        <motion.div
          className={`w-full md:w-1/2  p-8 rounded-xl shadow-lg ${theme === "dark" ? "bg-gradient-to-r from-slate-700 via-teal-900 to-teal-700" : "bg-white"}`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}  // Trigger when 50% of the element is in view
        >
          <h2 className={`md:text-3xl text-2xl font-bold mb-4 ${theme === "dark" ? "text-orange-300" : "text-violet-800"}`}>Contact Me</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className={`block text-lg font-medium ${theme === "dark" ? "text-teal-500" : "text-gray-700"}`}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className={`block text-lg font-medium ${theme === "dark" ? "text-teal-500" : "text-gray-700"}`}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className={`block text-lg font-medium ${theme === "dark" ? "text-teal-500" : "text-gray-700"}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Your message here"
                rows="5"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`w-full ${theme === "dark" ? "bg-orange-500" : "bg-violet-800"} text-white py-3 rounded-lg ${theme === "dark" ? "hover:bg-teal-700" : "hover:bg-violet-700"} focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300`}
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side: Contact Information */}
        <motion.div
          className={`w-full md:w-1/2  text-white p-8 rounded-4xl shadow-lg mt-8 md:mt-0 ${theme === "dark" ? "bg-gradient-to-r from-teal-800 via-slate-800 to-slate-900" : "bg-gradient-to-r from-purple-400 via-violet-500 to-violet-900"}`}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}  // Trigger when 50% of the element is in view
        >
          <h2 className="md:text-3xl text-2xl font-bold mb-6">Get in Touch</h2>
          
          {/* Email */}
          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-4 md:text-xl text-base text-red-700" />
            <div>
              <h4 className="md:text-xl text-base font-medium text-red-700">Email</h4>
              <p className="md:text-lg text-[10px]">chitrok24ph@gmail.com</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="mr-4 md:text-xl text-base text-blue-600" />
            <div>
              <h4 className="md:text-xl text-base font-medium text-blue-600">Phone</h4>
              <p className="md:text-lg text-[10px]">+880 182 0865544</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="mb-4 flex items-center">
            <FaWhatsapp className="mr-4 md:text-xl text-base text-green-700" />
            <div>
              <h4 className="md:text-xl text-base font-medium text-green-700">WhatsApp</h4>
              <p className="md:text-lg text-[10px]">+880 153 3765542</p>
            </div>
          </div>

          {/* Additional text */}
          <div className="text-center mt-6">
            <p className="md:text-base text-[12px]">I&apos;m open to new opportunities and collaborations. Let&apos;s work together!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
