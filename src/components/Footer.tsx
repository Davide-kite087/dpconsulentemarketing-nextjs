'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Footer() {

    useEffect(() => {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        const handleScroll = () => {
            if (window.scrollY > 300) {
                scrollToTopBtn?.classList.add('show');
            } else {
                scrollToTopBtn?.classList.remove('show');
            }
        };
        const handleScrollToTopClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        window.addEventListener('scroll', handleScroll);
        scrollToTopBtn?.addEventListener('click', handleScrollToTopClick);

        const floatingContactMain = document.querySelector('.floating-contact-main');
        const floatingContactOptions = document.querySelector('.floating-contact-options');

        const handleFloatingContactClick = () => {
            floatingContactOptions?.classList.toggle('active');
            floatingContactMain?.classList.toggle('active');
        };

        floatingContactMain?.addEventListener('click', handleFloatingContactClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollToTopBtn?.removeEventListener('click', handleScrollToTopClick);
            floatingContactMain?.removeEventListener('click', handleFloatingContactClick);
        };
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="site-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-grid">
                            <div className="footer-info">
                                <div className="footer-logo">
                                    <span className="logo-icon pulse-animation">
                                        <i className="fas fa-chart-line"></i>
                                    </span>
                                    <h3 className="gradient-text">Davide Porcu</h3>
                                </div>
                                <p className="footer-description">
                                    Consulente di Marketing Digitale specializzato in Google Ads, SEO e ottimizzazione di siti web. 
                                    Aiuto le aziende a trovare nuovi clienti e aumentare la loro visibilità online attraverso strategie innovative e basate sui dati.
                                </p>
                                <div className="footer-social">
                                    <a href="https://linkedin.com/in/davide-porcu-8ba324178/" target="_blank" rel="noopener noreferrer"
                                    className="social-link" aria-label="LinkedIn Davide Porcu">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://wa.me/+393803149231" target="_blank" rel="noopener noreferrer"
                                    className="social-link whatsapp" aria-label="WhatsApp Davide Porcu">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="mailto:info@dpconsulentemarketing.it"
                                    className="social-link email" aria-label="Email Davide Porcu">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                                <div className="footer-badge" style={{ marginTop: '20px' }}>
                                    <span className="badge badge-success">
                                        <i className="fas fa-certificate"></i>
                                        Google Partner
                                    </span>
                                </div>
                            </div>
                            <nav className="footer-nav" aria-labelledby="services-heading">
                                <h4 id="services-heading">
                                    <i className="fas fa-tools"></i>
                                    Servizi
                                </h4>
                                <ul>
                                    <li><Link href="/#servizi">Google Ads Management</Link></li>
                                    <li><Link href="/#servizi">SEO & Ottimizzazione</Link></li>
                                    <li><Link href="/#servizi">E-commerce Solutions</Link></li>
                                    <li><Link href="/#servizi">Sviluppo Siti Web</Link></li>
                                    <li><Link href="/#servizi">Social Media Marketing</Link></li>
                                    <li><Link href="/#servizi">Analytics & Tracking</Link></li>
                                </ul>
                            </nav>
                            <nav className="footer-nav" aria-labelledby="areas-heading">
                                <h4 id="areas-heading">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Zone di Servizio
                                </h4>
                                <ul>
                                    <li><Link href="/agenzia-marketing-cagliari">Marketing Cagliari</Link></li>
                                    <li><Link href="/agenzia-marketing-sardegna">Marketing Sardegna</Link></li>
                                    <li><Link href="/digital-marketing-cagliari">Digital Marketing Cagliari</Link></li>
                                    <li><Link href="/consulente-marketing-kitesurf-sardegna">Marketing Kitesurf</Link></li>
                                    <li><Link href="/consulente-marketing-sardegna">Consulente Sardegna</Link></li>
                                    <li><Link href="/#progetti">Portfolio Progetti</Link></li>
                                </ul>
                            </nav>
                            <div className="footer-contact">
                                <h4>
                                    <i className="fas fa-headset"></i>
                                    Contatti Rapidi
                                </h4>
                                <div className="contact-info">
                                    <div className="contact-item-footer">
                                        <i className="fas fa-envelope pulse-subtle"></i>
                                        <div>
                                            <strong>Email</strong>
                                            <a href="mailto:info@dpconsulentemarketing.it">info@dpconsulentemarketing.it</a>
                                        </div>
                                    </div>
                                    <div className="contact-item-footer">
                                        <i className="fas fa-phone pulse-subtle"></i>
                                        <div>
                                            <strong>Telefono</strong>
                                            <a href="tel:+393803149231">+39 380 3149231</a>
                                        </div>
                                    </div>
                                    <div className="contact-item-footer">
                                        <i className="fas fa-clock pulse-subtle"></i>
                                        <div>
                                            <strong>Orari</strong>
                                            <span>Lun-Ven 9:00-18:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="quick-contact">
                                    <Link href="/#contatti" className="btn btn-primary btn-small">
                                        <i className="fas fa-paper-plane"></i>
                                        Contattami Ora
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <div className="copyright">
                                <p>
                                    &copy; {currentYear} 
                                    <strong> Davide Porcu</strong> - Consulente Marketing Digitale. 
                                    <span className="rights"> Tutti i diritti riservati.</span>
                                </p>
                            </div>
                            <div className="footer-links">
                                <Link href="/privacy-policy" className="footer-link">
                                    <i className="fas fa-shield-alt"></i>
                                    Privacy Policy
                                </Link>
                                <span className="separator">|</span>
                                <Link href="/privacy-policy#cookie-policy" className="footer-link">
                                    <i className="fas fa-cookie-bite"></i>
                                    Cookie Policy
                                </Link>
                                <span className="separator">|</span>
                                <button type="button" onClick={() => console.log('Gestisci Consenso Cookie')} className="footer-link cookie-settings-link" title="Gestisci le tue preferenze sui cookie" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
                                    <i className="fas fa-cog"></i>
                                    Gestisci Consenso Cookie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-to-top" id="scrollToTop">
                    <div className="scroll-icon">
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <span className="scroll-text">Torna su</span>
                </div>
            </footer>
            
            <div className="floating-contact">
                <div className="floating-contact-main">
                    <i className="fas fa-comments"></i>
                </div>
                <div className="floating-contact-options">
                    <a href="tel:+393803149231" className="floating-btn phone" aria-label="Chiamaci">
                        <i className="fas fa-phone"></i>
                        <span>Chiama</span>
                    </a>
                    <a href="https://wa.me/+393803149231" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                        <span>WhatsApp</span>
                    </a>
                    <a href="mailto:info@dpconsulentemarketing.it" className="floating-btn email" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </>
    );
}
