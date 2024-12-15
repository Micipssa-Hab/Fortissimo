import React from "react";
import Tof from "../Assets/ellipse.png";
import Blu from "../Assets/blu.png";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="feedback-section">
          <div className="feedback-header">
            <div className="feedback-header-align">
              <img src={Blu} alt="" className="feedback-icon" />
              <h4>Clients Feedback</h4>
            </div>
            <h2 className="title-gras">Look What Our Customers Say !</h2>
            <p className="sous-title">
              Check out our customer's reviews and go to live
              <span className="line-break"></span>
              an amazing hosting event experience.
            </p>
          </div>

          <div className="feedback-container">
            <div className="feedback-card">
              <div className="feedback-quote">“</div>
              <p className="feedback-text">
                attending an event through GATHERLY was a breeze! The process was seamless, and the property exceeded our expectations. From booking to check-out, everything was smooth. Highly recommend!
              </p>
              <hr className="feedback-line" />
              <div className="feedback-user">
                <img src={Tof} alt="User photo" className="user-photo" />
                <div className="user-info">
                  <h5>B. Men Eschouaker</h5>
                  <div className="user-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
          <button className="feedback-arrow left-arrow">←</button>
          <button className="feedback-arrow right-arrow">→</button>

          <div className="pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>


        <footer class="footer">
          <div class="footer-container">
            <div class="footer-column">
              <h4>Logo</h4>
            </div>
            <div class="footer-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Contact us</h4>
              <p> 05 54 76 76 11</p>
              <p> gatherlycontact@gmail.com</p>
              <p> Amizour, N-76 Bejaïa</p>
            </div>
            <div class="footer-column">
              <h4>Your Opinion About Gatherly!</h4>
              <textarea placeholder="Your message (optional)."></textarea>
              <button>Send your message</button>
            </div>
          </div>
          <div class="social-media">
            Follow us on
            <div class="footer-icons">
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
        </footer>




      </div>
    </div>
  );
};

export default Footer;