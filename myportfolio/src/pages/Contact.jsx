import { useState } from 'react';
import '../styles/Contact.css';

import profileImage from '../assets/images/PatsysHeadshot.jpg';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
    
//left side
  return (
    <div className="contact-container">
      <div className="contact-section">
        <div className="contact-content">
          <h1>Let's Work Together!</h1>
          
          <div className="contact-info">
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">patsyparedes@gmail.com</span>
            </div>
            
            <div className="info-item">
              <span className="label"></span>
              <a href="https://www.linkedin.com/in/patsy-paredes-968a89268/" className="linkedin-button">Visit My LinkedIn</a>
            </div>
            
            <div className="info-item">
              <span className="label"></span>
              <a href="https://www.instagram.com/patsyparedess/">Instagram</a>

            </div>
          </div>
        </div>
        {/* right side */}
        <div className="contact-image">
          <img src={profileImage} alt="Contact" />
        </div>
      </div>
    </div>
  );
}


export default Contact;