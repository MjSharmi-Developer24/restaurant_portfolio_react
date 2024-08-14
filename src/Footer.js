import React from 'react';
import './Footer.css'; // Optional: for custom styling
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>
          Follow us on
          <Link to="https://twitter.com/yourcompany"> <FaXTwitter /></Link>
          <Link to="https://facebook.com/yourcompany"> <FaFacebookSquare /></Link> 
          <Link to="https://instagram.com/yourcompany"> <FaInstagram /></Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;