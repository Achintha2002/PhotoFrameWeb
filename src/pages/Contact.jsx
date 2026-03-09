import React, { useState } from 'react';
import { Facebook, Instagram, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSendEmail = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Open the user's default email client
        window.location.href = `mailto:kavishannethsara46@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-container fade-in">
            <header className="page-header">
                <h1 className="page-title">Get in <span className="highlight">Touch</span></h1>
                <p className="page-subtitle">Let's create something beautiful together. Reach out for bookings, collaborations, or just to say hello.</p>
            </header>

            <div className="contact-content">
                <div className="contact-form-section">
                    <h2>Send a Message</h2>
                    <form className="contact-form" onSubmit={handleSendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                <div className="contact-info-section">
                    <h2>Contact Details</h2>

                    <div className="info-item">
                        <Mail className="info-icon" />
                        <div>
                            <h3>Email</h3>
                            <p>kavishannethsara46@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <h3>Phone</h3>
                            <p>074 0892509 / 076 5718467</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <h3>Address</h3>
                            <p>126/ Dawatagahawatta ,<br />maharagama road ,piliyandala</p>
                        </div>
                    </div>

                    <div className="social-links-section">
                        <h3>Connect with me</h3>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/nethsara.kavishan?utm_source=qr&igsh=MWRoanM0MG80OWMydw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/share/p/18PLVxUf1o/" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="https://wa.me/94740892509" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
