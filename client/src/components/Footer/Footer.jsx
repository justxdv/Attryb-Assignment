import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
      
    <footer>
        <div className='footerContainer'>
            <div className='footerContent'>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore iusto impedit ipsa ipsum sit! A voluptatum eum adipisci eos, corrupti nobis reprehenderit, quam iusto corporis natus, facilis illum sit?</p>
            </div>
            <div className='footerContent'>
            <h3>Contact Us</h3>
            <p>Email: buyCars@gmai.com</p>
            <p>Phone: 98XXXXXXX89 </p>
            </div>
            {/* <div className='footerContent'>
                <h3>Follow Us Here</h3>
                <div className="social-media-icons">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div> */}
            
            </div>
            <div className='footerBottom'>
            <p style={{ display:'flex',justifyContent:'center' }}>
        &copy;{new Date().getFullYear()} company name | All rights reserved | Terms Of Service | Privacy
      </p>
            </div>
      
</footer>
  
  )
}

export default Footer
