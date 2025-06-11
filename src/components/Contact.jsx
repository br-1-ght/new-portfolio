import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: false,
      success: false,
      message: '',
      loading: true
    });

    try {
      emailjs.init('Na4JFa1soSpYpiobP');
      
      const result = await emailjs.send(
        'service_6nprlco',
        'template_p20ahmg',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Bright Igwe',
        }
      );

      console.log('Email sent successfully:', result.text);
      console.log('Full result:', result);
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully!',
        loading: false
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
          loading: false
        });
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', error.text || error.message);
      
      let errorMessage = 'Failed to send message. ';
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`;
      } else {
        errorMessage += 'Please check your EmailJS configuration.';
      }
      
      setFormStatus({
        submitted: true,
        success: false,
        message: errorMessage,
        loading: false
      });
      
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
          loading: false
        });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>brightigwe417@gmail.com</p>
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+234 808 8179 399</p>
              </div>
            </div>
            
            <div className="contact-socials">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/br-1-ght" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/b2kg.e/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                  disabled={formStatus.loading}
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  required
                  disabled={formStatus.loading}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn submit-btn"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;