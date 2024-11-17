import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validateRequired = (value, fieldName) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phone) {
      return 'Phone number is required';
    }
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number';
    }
    return '';
  };

  const validateForm = () => {
    const formErrors = {
      firstName: validateRequired(formData.firstName, 'First Name'),
      lastName: validateRequired(formData.lastName, 'Last Name'),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateRequired(formData.message, 'Message')
    };
    
    return Object.keys(formErrors).reduce((acc, key) => {
      if (formErrors[key]) {
        acc[key] = formErrors[key];
      }
      return acc;
    }, {});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://unifence-backend-1.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        
        setFormData({
          firstName: '',
          lastName: '',
          businessName: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      } else {
        setSnackbarMessage(result.error || 'Failed to send message.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = `w-full bg-transparent border-b border-gray-200 focus:border-gray-400 
    focus:outline-none py-2 text-gray-600 text-sm`;

  const errorStyle = "text-red-500 text-xs mt-1";

  const getInputClassName = (fieldName) => 
    `${inputStyle} ${errors[fieldName] ? 'border-red-500' : ''}`;

  return (
    <div className="w-full relative overflow-hidden py-4 md:py-16 flex items-center justify-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-cyan-500 to-green-500">
        {/* Grid Pattern */}
        <svg 
          className="absolute w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Curved Lines */}
        <svg
          className="absolute right-0 top-0 h-full opacity-20"
          viewBox="0 0 100 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 Q 50 400 100 800"
            stroke="white"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M20 0 Q 70 400 120 800"
            stroke="white"
            fill="none"
            strokeWidth="1"
          />
        </svg>

        {/* Circuit Pattern */}
        <svg
          className="absolute left-0 bottom-0 w-full h-64 opacity-10"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50 L 20 50 L 30 20 L 40 80 L 50 50 L 70 50"
            stroke="white"
            fill="none"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
          <path
            d="M80 50 L 100 50 L 110 20 L 120 80 L 130 50 L 150 50"
            stroke="white"
            fill="none"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      <div className="w-full max-w-[1000px] mx-4 md:mx-auto bg-white rounded-2xl p-4 md:p-12 relative z-10">
        <h2 className="text-2xl md:text-[32px] font-bold text-center text-slate-800 mb-4 md:mb-12">
          GET IN TOUCH
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={getInputClassName('firstName')}
                  required
                />
                <span className="text-red-500">*</span>
              </div>
              {errors.firstName && <p className={errorStyle}>{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={getInputClassName('lastName')}
                  required
                />
                <span className="text-red-500">*</span>
              </div>
              {errors.lastName && <p className={errorStyle}>{errors.lastName}</p>}
            </div>
          </div>
          
          <div>
            <input
              type="text"
              name="businessName"
              placeholder="Business name (optional)"
              value={formData.businessName}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClassName('email')}
                  required
                />
                <span className="text-red-500">*</span>
              </div>
              {errors.email && <p className={errorStyle}>{errors.email}</p>}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={getInputClassName('phone')}
                  required
                />
                <span className="text-red-500">*</span>
              </div>
              {errors.phone && <p className={errorStyle}>{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={getInputClassName('message')}
              rows={4}
              required
            />
            {errors.message && <p className={errorStyle}>{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-2 md:py-3 mt-2 md:mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;