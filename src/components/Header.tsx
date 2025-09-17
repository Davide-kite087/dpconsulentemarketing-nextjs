'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollPositionRef = useRef(0);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effetto per bloccare lo scroll quando il menu è aperto
    useEffect(() => {
        if (isMenuOpen) {
            scrollPositionRef.current = window.scrollY;
            document.body.classList.add('no-scroll');
            document.body.style.top = `-${scrollPositionRef.current}px`;
        } else {
            document.body.classList.remove('no-scroll');
            document.body.style.removeProperty('top');
            window.scrollTo(0, scrollPositionRef.current);
        }

        // Funzione di cleanup
        return () => {
            document.body.classList.remove('no-scroll');
            document.body.style.removeProperty('top');
        };
    }, [isMenuOpen]);

    // Effetto per la navbar sticky e chiusura menu con ESC
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };
        
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isHomePage]);

    return (
        <>
            <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`main-nav ${isHomePage ? 'home-nav' : ''} ${isScrolled ? 'sticky' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link href="/">
                            <Image 
                                src="/logo-dp.png"
                                alt="Davide Porcu Logo" 
                                className="nav-logo-img"
                                width={150}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                    {/* Il menu toggle è stato spostato fuori dalla nav */}
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/#servizi" onClick={() => setIsMenuOpen(false)}>Servizi</Link></li>
                        <li><Link href="/#processo" onClick={() => setIsMenuOpen(false)}>Processo</Link></li>
                        <li><Link href="/#progetti" onClick={() => setIsMenuOpen(false)}>Progetti</Link></li>
                        <li><Link href="/#servizi-locali" onClick={() => setIsMenuOpen(false)}>Marketing</Link></li>
                        <li><Link href="/#about" onClick={() => setIsMenuOpen(false)}>Chi Sono</Link></li>
                        <li><Link href="/#contatti" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Contattami</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
