import { MapPin, Phone, Mail } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'

export default function Footer() {
  return (
<footer className="site-footer">

  {/* Main Footer */}
  <div className="footer-grid">

    {/* Brand */}
    <div>
      <h2 className="brand">Bite <span>House</span></h2>

      <p className="footer-copy">
        Delicious food, bold flavors, and unforgettable bites.
        Made fresh for every craving.
      </p>

      <button className="button button--small" onClick={() => openWhatsApp()}>
        Order Now
      </button>
    </div>

    {/* Quick Links */}
    <div>
      <h3>
        Quick Links
      </h3>

      <ul className="footer-links">
        <li><a href="/">Home</a></li><li><a href="/menu">Menu</a></li><li><a href="/about">About Us</a></li><li><a href="/offers">Offers</a></li><li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    {/* Opening Hours */}
    <div>
      <h3>
        Opening Hours
      </h3>

      <p className="footer-detail">
        Monday - Friday
        <span>
          11:00 AM - 11:00 PM
        </span>
      </p>

      <p className="footer-detail">
        Saturday - Sunday
        <span>
          12:00 PM - 12:00 AM
        </span>
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3>
        Contact Us
      </h3>

      <p className="footer-detail"><MapPin size={14} /> Gujranwala, Pakistan</p>

      <p className="footer-detail"><Phone size={14} /> +92 300 1234567</p>

      <p className="footer-detail"><Mail size={14} /> hello@bitehouse.com</p>

      {/* Social Icons */}
      <div className="social-links">
        <a href="#facebook" aria-label="Facebook">f</a><a href="#instagram" aria-label="Instagram">ig</a><a href="#x" aria-label="X">X</a>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="footer-bottom">

    <p>
      © 2026 Bite House. All Rights Reserved.
    </p>

    <p>
      Crafted with <span className='text-amber-400'>FA Pixels</span> for food lovers.
    </p>

  </div>

</footer>


  )
}
