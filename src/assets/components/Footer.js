import React from 'react';
import lines from '../images/lines.png'
import flogo from '../images/flogo.png'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import inscor from '../images/inscor_logo.png'
// import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={lines} alt="lines" className='line' />
        <img src={flogo} alt="logo" className='logo'/>
        <img src={lines} alt="lines" className='line'/>
        
        {/* Instagram Feed Section - Ensured it's left-aligned */}
        <div className="instagram-feed">
          <h4>Instagram Feed</h4>
          <div className="feed-images">
            <img src={f1} alt="Instagram 1" />
            <img src={f2} alt="Instagram 2" />
            <img src={f3} alt="Instagram 3" />
          </div>
        </div>
        
        <div className="fotitems">
          <div className="location">
            <h4>Our Location</h4>
            <p>1 Shepperton Road</p>
            <p>Graniteside</p>
            <p>Harare, Zimbabwe</p>
          </div>

          <div className="contact-info">
            <h4>Get in Touch With Us</h4>
            <p>Tel: 08080151</p>
            <p>+263 24 2751 431</p>
            <p>+263 242 707 334</p>
            <p>Email: marketing@bakersinnzim.com</p>
          </div>

          <div className="sitemap">
            <h4>Sitemap</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/recipes">Recipes</a></li>
              <li><a href="/kids-corner">Kids Corner</a></li>
            </ul>
          </div>
        </div>
      </div>

      <img src={lines} alt="lines" className='line hr' />

      <div className="footer-bottom">
        <div className='inscorlogo'>
          <p> Subsidiary of <img src={inscor} alt="Iogo" /> </p> 
        </div>  
        <div className='para'> 
          <p>&copy; 2022 Bakers Inn. All rights reserved. Site by <strong className='strong'>Zvikomborero Tetena</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
