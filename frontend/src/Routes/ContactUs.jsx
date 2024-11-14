import React, { useState, useEffect} from 'react';
import StickyHeader from '../StickyHeader';
import Footer from '../Footer';
import s1 from '../Assets/s1.jpg'
import CoolLoader from '../CoolLoader';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // You can adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
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
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarOpen(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSnackbarMessage(result.error || 'Something went wrong!');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <CoolLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader />
      
      <div className="relative h-[700px] w-full">
        <img 
          src={s1}
          alt="Contact us hero" 
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          CONTACT US
        </h1>
      </div>

      <div className="flex-grow py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          
          <div className="flex-1 bg-blue-600 text-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">Feel free to contact us any time.</h2>
              <p className="mt-2">We will get back to you as soon as we can.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className={`w-full p-3 rounded bg-transparent border ${
                    errors.name ? 'border-red-300' : 'border-white/30'
                  } text-white placeholder-white/70 focus:outline-none focus:border-white`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-300 text-sm">{errors.name}</p>
                )}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className={`w-full p-3 rounded bg-transparent border ${
                    errors.email ? 'border-red-300' : 'border-white/30'
                  } text-white placeholder-white/70 focus:outline-none focus:border-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-300 text-sm">{errors.email}</p>
                )}
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  className={`w-full p-3 rounded bg-transparent border ${
                    errors.subject ? 'border-red-300' : 'border-white/30'
                  } text-white placeholder-white/70 focus:outline-none focus:border-white`}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-300 text-sm">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  rows={4}
                  className={`w-full p-3 rounded bg-transparent border ${
                    errors.message ? 'border-red-300' : 'border-white/30'
                  } text-white placeholder-white/70 focus:outline-none focus:border-white resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-300 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="md:w-96 p-8 bg-white rounded-lg shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Head Office</h3>
                <p className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Plot No-434/9, Industrial Area,<br/>
                  Post-Hirapur, Raipur-492099,<br/>
                  Chhattisgarh, India.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Factory Address</h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Plot No-156/1, 160 & 161,<br/>
                    New Patharidih, Urla,<br/>
                    Raipur, Chhattisgarh, Ind
                  </p>
                  
                  <p className="flex items-start gap-2">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Plot No. 21/A,<br/>
                    Light Industrial Area Bhilai-<br/>
                    490026, Dist. - Durg (C.G.)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sales@saei.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Snackbar 
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;