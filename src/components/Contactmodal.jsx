import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './Contactform'; // Ensure this import is correct

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-pink-600">Contact Us</h2>
              <button onClick={onClose} className="text-pink-600 text-2xl hover:text-pink-800">
                &times; {/* Close button */}
              </button>
            </div>
            <hr className="mb-4" />
            <p className="text-gray-600 mb-4">
              We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
