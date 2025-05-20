import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Linkedin, Github, Twitter, Send, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset submit status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'Email', icon: <Mail size={20} />, href: 'girishmasajjaro@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'www.linkedin.com/in/girishma-sajjarao' },
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/GirishmaSajjarao' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/girishma_sajjarao1612?igsh=MWVhOGF2Y3U2eXpqcQ==' },
  ];

  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Have a question or want to work together? Reach out!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Get In Touch
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm currently open to freelance opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full mr-3">
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Send Me a Message
          </h3>
          
          {submitStatus === 'success' ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
              <p className="font-medium">Thanks for reaching out!</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
              <p className="font-medium">There was a problem sending your message.</p>
              <p>Please try again later.</p>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors
                  ${errors.name 
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                  }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors
                  ${errors.email 
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                  }`}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors
                  ${errors.message 
                    ? 'border-red-500 dark:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                  }`}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full flex items-center justify-center"
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send size={18} className="mr-2" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;