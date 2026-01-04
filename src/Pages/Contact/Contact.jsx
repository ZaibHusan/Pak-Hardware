import React from 'react'
import "./Contact.css"
import Discount from '../../Components/Discount/Discount'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="contact-hero">
          <img src="https://i.pinimg.com/1200x/21/1a/d8/211ad85f92e12fa8b909036291cf34f2.jpg" alt="" />
          <div className="hero-text-d">
            <h1><span>Contact</span> Us</h1>
            <p><span onClick={()=>navigate("/")}>Home</span> <span>{">"}</span> <span>Contact</span></p>
          </div>
        </div>
        <div className="contact-main">
          <div className="main-left">
            <div className="main-left-top">
              <h1>Get in Touch</h1>
              <p>Do you have any questions or feedback? We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
            </div>
            <div className="main-left-bottom">
              <div className="main-left-bottom-left">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Your Phone' />
              </div>
              <div className="main-left-bottom-right">
                <textarea placeholder='Your Message'></textarea>
                <button>Send Message</button>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="main-righ-box">
              <span className='material-symbols-outlined'>phone_in_talk</span>
              <h2>Phone Number</h2>
              <p>(123) 456-7890</p>
            </div>
            <div className="main-righ-box">
              <span className='material-symbols-outlined'>email</span>
              <h2>Email Address</h2>
              <p>7o3mU@example.com</p>
            </div>
            <div className="main-righ-box">
              <span className='material-symbols-outlined'>location_on</span>
              <h2>Address</h2>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mapp-address">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.8599780314194!2d72.01794015096378!3d34.9345508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc74ec35c63b81%3A0x739f8cf1f1fc6457!2sW2M9%2BR9P%2C%20Toormang%2C%20Pakistan!5e0!3m2!1sen!2s!4v1767396971308!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
      <Discount />
    </div>
  )
}
