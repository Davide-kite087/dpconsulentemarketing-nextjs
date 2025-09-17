import Image from 'next/image';
import Link from 'next/link';
import Faq from '@/components/Faq'; // Creeremo questo componente per la logica delle FAQ

export default function Home() {
  return (
    <>
      {/* Hero Header */}
      <header className="hero-header">
        <div className="hero-overlay"></div>
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-animation-top">
              <div className="spectacular-logo-animation">
                <div className="central-orb">
                  <div className="orb-core"></div>
                  <div className="orb-ring ring-1"></div>
                  <div className="orb-ring ring-2"></div>
                  <div className="orb-ring ring-3"></div>
                </div>
                <div className="orbiting-elements">
                  <div className="orbit-item chart-icon" style={{'--orbit-delay': '0s'} as React.CSSProperties}><i className="fas fa-chart-line"></i></div>
                  <div className="orbit-item target-icon" style={{'--orbit-delay': '1s'} as React.CSSProperties}><i className="fas fa-bullseye"></i></div>
                  <div className="orbit-item rocket-icon" style={{'--orbit-delay': '2s'} as React.CSSProperties}><i className="fas fa-rocket"></i></div>
                </div>
                <div className="energy-particles">
                  <div className="particle" style={{'--angle': '0deg', '--delay': '0s'} as React.CSSProperties}></div>
                  <div className="particle" style={{'--angle': '60deg', '--delay': '0.3s'} as React.CSSProperties}></div>
                  <div className="particle" style={{'--angle': '120deg', '--delay': '0.6s'} as React.CSSProperties}></div>
                  <div className="particle" style={{'--angle': '180deg', '--delay': '0.9s'} as React.CSSProperties}></div>
                  <div className="particle" style={{'--angle': '240deg', '--delay': '1.2s'} as React.CSSProperties}></div>
                  <div className="particle" style={{'--angle': '300deg', '--delay': '1.5s'} as React.CSSProperties}></div>
                </div>
                <div className="energy-waves">
                  <div className="wave wave-1"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave wave-3"></div>
                </div>
                <div className="sparkles">
                  <div className="sparkle" style={{'--x': '20%', '--y': '20%', '--delay': '0.5s'} as React.CSSProperties}>✦</div>
                  <div className="sparkle" style={{'--x': '80%', '--y': '30%', '--delay': '1.2s'} as React.CSSProperties}>✧</div>
                  <div className="sparkle" style={{'--x': '30%', '--y': '80%', '--delay': '1.8s'} as React.CSSProperties}>★</div>
                  <div className="sparkle" style={{'--x': '70%', '--y': '70%', '--delay': '2.4s'} as React.CSSProperties}>✦</div>
                </div>
              </div>
            </div>
            <h1>Davide Porcu<br />Consulente Digital Marketing Cagliari</h1>
          </div>
          <p className="tagline">Esperto di Digital Marketing, SEO & Google Ads Specialist | Cagliari</p>
          <div className="cta-buttons">
            <a href="#contatti" className="primary-btn">Contattami</a>
            <a href="#servizi" className="secondary-btn">Scopri i Servizi</a>
          </div>
        </div>
      </header>

      <main>
        {/* Intro Section */}
        <section className="section intro-section fade-in-section">
            <div className="container">
                <div className="intro-card card">
                    <div className="card-body">
                    <div className="marketing-animation">
                        <div className="animation-container">
                            <div className="device laptop"><i className="fas fa-laptop"></i><div className="screen-glow"></div></div>
                            <div className="device mobile"><i className="fas fa-mobile-alt"></i><div className="signal-waves"><span></span><span></span><span></span></div></div>
                            <div className="chart-container">
                                <div className="chart-bar" style={{'--height': '60%', '--delay': '0.2s'} as React.CSSProperties}></div>
                                <div className="chart-bar" style={{'--height': '80%', '--delay': '0.4s'} as React.CSSProperties}></div>
                                <div className="chart-bar" style={{'--height': '45%', '--delay': '0.6s'} as React.CSSProperties}></div>
                                <div className="chart-bar" style={{'--height': '90%', '--delay': '0.8s'} as React.CSSProperties}></div>
                                <div className="chart-bar" style={{'--height': '70%', '--delay': '1s'} as React.CSSProperties}></div>
                            </div>
                            <div className="targeting-circle"><div className="target-ring"></div><div className="target-ring"></div><div className="target-ring"></div><div className="target-center"><i className="fas fa-bullseye"></i></div></div>
                            <div className="network-dots">
                                <div className="dot" style={{'--x': '20%', '--y': '25%', '--delay': '0.1s'} as React.CSSProperties}></div>
                                <div className="dot" style={{'--x': '75%', '--y': '35%', '--delay': '0.3s'} as React.CSSProperties}></div>
                                <div className="dot" style={{'--x': '50%', '--y': '65%', '--delay': '0.5s'} as React.CSSProperties}></div>
                                <div className="dot" style={{'--x': '85%', '--y': '75%', '--delay': '0.7s'} as React.CSSProperties}></div>
                            </div>
                            <svg className="connection-lines" viewBox="0 0 300 200">
                                <path className="connection-line" d="M60,50 Q150,25 240,70" />
                                <path className="connection-line" d="M60,50 Q100,125 150,130" />
                                <path className="connection-line" d="M240,70 Q200,100 150,130" />
                                <path className="connection-line" d="M150,130 Q200,140 255,150" />
                            </svg>
                            <div className="floating-particles">
                                <div className="particle" style={{'--x': '15%', '--y': '15%', '--duration': '4s', '--delay': '0s'} as React.CSSProperties}></div>
                                <div className="particle" style={{'--x': '85%', '--y': '25%', '--duration': '3.5s', '--delay': '0.5s'} as React.CSSProperties}></div>
                                <div className="particle" style={{'--x': '25%', '--y': '75%', '--duration': '4.5s', '--delay': '1s'} as React.CSSProperties}></div>
                                <div className="particle" style={{'--x': '75%', '--y': '85%', '--duration': '3.8s', '--delay': '1.5s'} as React.CSSProperties}></div>
                                <div className="particle" style={{'--x': '50%', '--y': '20%', '--duration': '4.2s', '--delay': '2s'} as React.CSSProperties}></div>
                            </div>
                        </div>
                    </div>
                        <h2 className="text-gradient">Strategie di Digital Marketing Efficaci</h2>
                    <p>Consulente di <strong>digital marketing</strong> con oltre 13 anni di esperienza nella gestione e pianificazione di strategie su misura per le aziende di <strong>Cagliari</strong> e della Sardegna. Specializzato in Google Ads, SEO e ottimizzazione dei siti web, utilizzo un approccio analitico e l&apos;intelligenza artificiale per aiutare le imprese locali a trovare nuovi clienti, aumentare la visibilità online e trasformare gli obiettivi di business in risultati concreti attraverso tecniche di digital marketing innovative.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="section services-section fade-in-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag badge badge-info">Cosa offro</span>
                    <h2 className="text-shadow">I Miei Servizi</h2>
                    <div className="section-divider"></div>
                </div>
                
                <div className="services-grid">
                    {/* Service Card 1 */}
                    <div className="service-card card animate-fadeInUp">
                        <div className="card-body">
                            <div className="service-icon"><div className="google-ads-animation"><div className="search-lens"><i className="fas fa-search"></i></div><div className="ad-results"><div className="ad-line"></div><div className="ad-line"></div><div className="ad-line"></div></div><div className="click-indicator"></div></div></div>
                            <h3>Google Ads</h3>
                            <p>Gestione completa di campagne Google Ads: Search, Shopping, Performance Max, Display e Google Hotel. Ottimizzazione del budget per massimizzare il ROI.</p>
                            <Link href="/google-ads-per-servizi" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    {/* ... (repeat for all other service cards) ... */}
                    <div className="service-card card animate-fadeInUp animate-delay-100"><div className="card-body"><div className="service-icon"><div className="analytics-animation"><div className="chart-bars-container"><div className="analytics-bar" style={{'--height': '20%', '--delay': '0.2s'} as React.CSSProperties}></div><div className="analytics-bar" style={{'--height': '45%', '--delay': '0.4s'} as React.CSSProperties}></div><div className="analytics-bar" style={{'--height': '30%', '--delay': '0.6s'} as React.CSSProperties}></div><div className="analytics-bar" style={{'--height': '70%', '--delay': '0.8s'} as React.CSSProperties}></div><div className="analytics-bar" style={{'--height': '55%', '--delay': '1s'} as React.CSSProperties}></div><div className="analytics-bar" style={{'--height': '85%', '--delay': '1.2s'} as React.CSSProperties}></div></div><div className="trend-arrow"><i className="fas fa-arrow-trend-up"></i></div><div className="data-pulse"></div></div></div><h3>Analisi e Monitoraggio</h3><p>Implementazione di Google Tag Manager e Google Analytics per tracciare conversioni e ottenere dati concreti sull&apos;efficacia delle tue campagne.</p><Link href="#contatti" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link></div></div>
                    <div className="service-card card animate-fadeInUp animate-delay-200"><div className="card-body"><div className="service-icon"><div className="ecommerce-animation"><div className="shopping-cart"><i className="fas fa-shopping-cart"></i></div><div className="cart-items"><div className="item"></div><div className="item"></div><div className="item"></div></div><div className="money-indicator">€</div></div></div><h3>E-commerce</h3><p>Ottimizzazione del feed di Google Merchant Center e gestione di campagne Shopping per aumentare le vendite online.</p><Link href="#contatti" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link></div></div>
                    <div className="service-card card animate-fadeInUp animate-delay-300"><div className="card-body"><div className="service-icon"><div className="seo-animation"><div className="rocket-container"><i className="fas fa-rocket"></i><div className="exhaust"></div></div><div className="search-rankings"><div className="rank-bar rank-1"></div><div className="rank-bar rank-2"></div><div className="rank-bar rank-3"></div></div></div></div><h3>SEO</h3><p>Strategie di ottimizzazione per motori di ricerca per migliorare il posizionamento organico del tuo sito e aumentare la visibilità online.</p><Link href="#contatti" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link></div></div>
                    <div className="service-card card animate-fadeInUp animate-delay-400"><div className="card-body"><div className="service-icon"><div className="website-animation"><div className="laptop-container"><i className="fas fa-laptop"></i><div className="website-screen"><div className="site-header"><div className="logo-placeholder"></div><div className="nav-items"><div className="nav-item"></div><div className="nav-item"></div><div className="nav-item"></div></div></div><div className="site-content"><div className="hero-section"><div className="hero-text-line"></div><div className="hero-text-line short"></div><div className="cta-button-placeholder"></div></div><div className="content-blocks"><div className="content-block"><div className="block-image"></div><div className="block-text"></div></div><div className="content-block"><div className="block-image"></div><div className="block-text"></div></div></div></div><div className="scrollbar"><div className="scroll-thumb"></div></div><div className="mouse-cursor"></div><div className="loading-dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div></div></div><div className="laptop-glow"></div></div></div><h3>Siti Web</h3><p>Creazione, aggiornamento e manutenzione di siti web ottimizzati per i motori di ricerca e orientati alla conversione.</p><Link href="#contatti" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link></div></div>
                    <div className="service-card card animate-fadeInUp animate-delay-500"><div className="card-body"><div className="service-icon"><div className="social-animation"><div className="users-group"><i className="fas fa-users"></i></div><div className="social-interactions"><div className="like-heart">💙</div><div className="share-arrow">➤</div><div className="comment-bubble">💬</div></div><div className="engagement-pulse"></div></div></div><h3>Social Media</h3><p>Gestione di profili social e creazione di contenuti per Instagram e Facebook per aumentare l&apos;engagement e la visibilità del tuo brand.</p><Link href="#contatti" className="service-cta btn btn-secondary btn-small">Scopri di più <i className="fas fa-arrow-right"></i></Link></div></div>
                </div>
            </div>
        </section>

        {/* Process Section */}
        <section id="processo" className="section process-section fade-in-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag badge badge-warning">Come lavoro</span>
                    <h2 className="text-shadow">Il Mio Processo</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="process-timeline">
                    <div className="timeline-item card"><div className="timeline-icon"><div className="analysis-animation"><i className="fas fa-search-plus"></i><div className="scan-line"></div><div className="data-dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div></div></div><div className="timeline-content"><div className="timeline-number">01</div><h3>Analisi</h3><p>Studio approfondito della tua attività, del target e della concorrenza per individuare le migliori opportunità di crescita.</p></div></div>
                    <div className="timeline-item card"><div className="timeline-icon"><div className="strategy-animation"><i className="fas fa-tasks"></i><div className="checklist-items"><div className="check-item"></div><div className="check-item"></div><div className="check-item"></div></div><div className="completion-indicator"></div></div></div><div className="timeline-content"><div className="timeline-number">02</div><h3>Strategia</h3><p>Definizione di un piano di marketing personalizzato basato sugli obiettivi specifici del tuo business e sul budget disponibile.</p></div></div>
                    <div className="timeline-item card"><div className="timeline-icon"><div className="implementation-animation"><div className="gear-system"><i className="fas fa-cog gear-1"></i><i className="fas fa-cog gear-2"></i></div><div className="progress-indicator"></div></div></div><div className="timeline-content"><div className="timeline-number">03</div><h3>Implementazione</h3><p>Creazione e ottimizzazione delle campagne Google Ads, implementazione di Google Tag Manager e messa a punto di strategie SEO.</p></div></div>
                    <div className="timeline-item card"><div className="timeline-icon"><div className="optimization-animation"><div className="chart-bars"><i className="fas fa-chart-bar"></i></div><div className="growth-indicators"><div className="arrow-up">↗</div><div className="percentage">+25%</div></div><div className="optimization-pulse"></div></div></div><div className="timeline-content"><div className="timeline-number">04</div><h3>Analisi e Ottimizzazione</h3><p>Monitoraggio costante delle performance con reportistica dettagliata e ottimizzazione continua per massimizzare i risultati.</p></div></div>
                </div>
            </div>
        </section>
        
        {/* Projects Section */}
        <section id="progetti" className="section projects-section fade-in-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag badge badge-success">Portfolio</span>
                    <h2 className="text-shadow">Progetti Recenti</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="projects-grid">
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/kitezone.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://kitezone.it" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Kitezone Sardegna"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#kitezone-case" className="project-details-icon-link" aria-label="Dettagli progetto Kitezone Sardegna"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-success">Scuola Kitesurf</span></div></div></div><div className="project-content"><h3>Kitezone Sardegna</h3><p>Gestione commerciale e marketing digitale per la società sportiva leader nel settore kitesurf in Sardegna. Creazione di contenuti, ottimizzazione SEO e gestione campagne ADS.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/gioelaura.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://gioelaura.com" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Giò e Laura"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#gioelaura-case" className="project-details-icon-link" aria-label="Dettagli progetto Giò e Laura"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-warning">E-commerce Moda</span></div></div></div><div className="project-content"><h3>Giò e Laura</h3><p>Gestione campagne Google Shopping e Google Search per l&apos;e-commerce di moda. Supervisione del feed e ottimizzazione di Google Merchant Center.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/sail-experience.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://sailexperience.it" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Sail Experience"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#sailexperience-case" className="project-details-icon-link" aria-label="Dettagli progetto Sail Experience"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-info">Tour Barche a Vela</span></div></div></div><div className="project-content"><h3>Sail Experience</h3><p>Ottimizzazione del sito web e gestione delle campagne pubblicitarie per società di noleggio e tour in barca a vela di Cagliari.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/cosi-mallorca.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://cosimallorca.com" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Così Cucina e Aperitivi"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#cosi-case" className="project-details-icon-link" aria-label="Dettagli progetto Così Cucina e Aperitivi"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-success">Ristorante Italiano</span></div></div></div><div className="project-content"><h3>Così Cucina e Aperitivi</h3><p>Realizzazione da zero del nuovo sito web in Inglese e Spagnolo per un ristorante italiano a Palma di Maiorca. Gestione campagne ADS e implementazione Google Tag Manager.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/villa-madau.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://villamadau.it" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Villa Madau"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#villamadau-case" className="project-details-icon-link" aria-label="Dettagli progetto Villa Madau"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-warning">Hotel Boutique</span></div></div></div><div className="project-content"><h3>Villa Madau</h3><p>Gestione del sito web e campagne Google Hotel per un boutique hotel a Pula. Ottimizzazione SEO e analisi dettagliata tramite Google Analytics.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/crespiac.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://crespiac.com" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Crespiac"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#crespiac-case" className="project-details-icon-link" aria-label="Dettagli progetto Crespiac"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-info">Assicurazioni Crediti</span></div></div></div><div className="project-content"><h3>Crespiac</h3><p>Gestione di campagne ADS e ottimizzazione SEO per società di assicurazione crediti, cauzioni e fideiussioni. Implementazione di Google Tag Manager.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/noestrum.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://www.noestrum.com/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Noestrum"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#noestrum-case" className="project-details-icon-link" aria-label="Dettagli progetto Noestrum"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-info">Noleggio Gommoni e Tour</span></div></div></div><div className="project-content"><h3>Noestrum</h3><p>Consulenza strategica per il sito web di questa società di noleggio gommoni e tour in barca. Gestione completa delle campagne Google Ads, sia in italiano che in inglese.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/omb.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://www.bikerenthouse.com/it/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Bike Rent House"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#bikerenthouse-case" className="project-details-icon-link" aria-label="Dettagli progetto Bike Rent House"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-warning">Noleggio Bici</span></div></div></div><div className="project-content"><h3>Bike Rent House</h3><p>Consulenza per l&apos;ottimizzazione del sito web di questo importante noleggio bici e officina a Cagliari. Gestione completa delle campagne Google Ads, sia in italiano che in inglese.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/capitana-sail-pro.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://www.sailprocapitana.it/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Capitana Sail Pro"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#capitanasailpro-case" className="project-details-icon-link" aria-label="Dettagli progetto Capitana Sail Pro"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-success">Charter Barche a Vela</span></div></div></div><div className="project-content"><h3>Capitana Sail Pro</h3><p>Realizzazione da zero del sito web multilingua (italiano e inglese) per questa società di charter e tour in barca a vela. Gestione completa delle campagne Google Ads in entrambe le lingue.</p></div></div>
                    <div className="project-card card highlight-card"><div className="project-image" style={{backgroundImage: "url('/victory-by-lord-nelson.jpg')"}}><div className="project-overlay"><div className="project-overlay-content"><div className="overlay-icons"><div className="overlay-icon-item tooltip-container"><a href="https://victorycapitana.it/" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Visita sito Victory by Lord Nelson"><i className="fas fa-external-link-alt"></i></a><div className="tooltip">Visita Sito</div></div><div className="overlay-icon-item tooltip-container"><Link href="/consulente-marketing-cagliari#victory-case" className="project-details-icon-link" aria-label="Dettagli progetto Victory by Lord Nelson"><i className="fas fa-info-circle"></i></Link><div className="tooltip">Scopri di più</div></div></div></div><div className="project-category"><span className="badge badge-info">Ristorante Pesce</span></div></div></div><div className="project-content"><h3>Victory by Lord Nelson</h3><p>Consulenza strategica per il sito web di questo ristorante di pesce a Cagliari. Gestione completa delle campagne Google Ads, sia in italiano che in inglese.</p></div></div>
                </div>
            </div>
        </section>

        {/* Local Services Section */}
        <section id="servizi-locali" className="section local-services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag badge badge-primary">Marketing Territoriale</span>
                    <h2 className="text-shadow">Servizi Marketing in Sardegna</h2>
                    <div className="section-divider"></div>
                    <p className="section-intro">Offro servizi specializzati di <strong>digital marketing</strong> in tutta la Sardegna, con particolare focus nell&apos;area di Cagliari. Scopri come le mie strategie di marketing digitale possono aiutare la tua attività locale a crescere online e raggiungere nuovi clienti. <Link href="/digital-marketing-cagliari" style={{color: '#2563eb', fontWeight: 600}}>Esplora i servizi di Digital Marketing a Cagliari</Link>.</p>
                </div>
                <div className="local-services-grid">
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="nautical-animation"><div className="ship-base"><i className="fas fa-ship"></i></div><div className="waves-nautical"><div className="wave-nautical wave-1"></div><div className="wave-nautical wave-2"></div><div className="wave-nautical wave-3"></div></div><div className="ads-targets"><div className="target-ring targeting-1"></div><div className="target-ring targeting-2"></div></div><div className="specialty-badge">NEW</div></div></div></div></div><div className="local-service-content"><h3>Google Ads Turismo Nautico</h3><p><strong>SPECIALIZZAZIONE UNICA</strong>: Google Ads per charter, tour nautici e scuole kitesurf. Case study comprovati con ROI 5x+.</p><Link href="/google-ads-turismo-nautico-sardegna" className="local-service-btn btn btn-primary btn-small">Scopri Specializzazione <i className="fas fa-anchor"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="charter-animation"><div className="yacht-base"><i className="fas fa-anchor"></i></div><div className="luxury-elements"><div className="luxury-star" style={{'--x': '20%', '--y': '30%', '--delay': '0.3s'} as React.CSSProperties}>✦</div><div className="luxury-star" style={{'--x': '80%', '--y': '40%', '--delay': '0.6s'} as React.CSSProperties}>✧</div><div className="luxury-star" style={{'--x': '60%', '--y': '70%', '--delay': '0.9s'} as React.CSSProperties}>★</div></div><div className="success-metrics"><div className="metric-bubble">500k€</div></div><div className="proven-badge">CASE STUDY</div></div></div></div></div><div className="local-service-content"><h3>Digital Marketing Charter Barche</h3><p><strong>RISULTATI COMPROVATI</strong>: Case study Capitana Sail Pro (SEO+ADS=70% contatti organici). Marketing specializzato per charter e noleggio barche.</p><Link href="/digital-marketing-charter-barche-sardegna" className="local-service-btn btn btn-primary btn-small">Case Study <i className="fas fa-chart-line"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="kitesurf-animation"><div className="kite-base"><i className="fas fa-wind"></i></div><div className="wind-lines"><div className="wind-line line-1"></div><div className="wind-line line-2"></div><div className="wind-line line-3"></div></div><div className="action-trail"><div className="trail-dot" style={{'--delay': '0.2s'} as React.CSSProperties}></div><div className="trail-dot" style={{'--delay': '0.4s'} as React.CSSProperties}></div><div className="trail-dot" style={{'--delay': '0.6s'} as React.CSSProperties}></div></div><div className="expertise-badge">VP Kite Zone</div></div></div></div></div><div className="local-service-content"><h3>Marketing Kitesurf & Sport Acquatici</h3><p><strong>ESPERIENZA DIRETTA</strong>: Vice Presidente Kite Zone ASD. Marketing settoriale per scuole kitesurf, windsurf e sport acquatici.</p><Link href="/consulente-marketing-kitesurf-sardegna" className="local-service-btn btn btn-primary btn-small">Vedi Expertise <i className="fas fa-water"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="megaphone-animation"><div className="megaphone-base"><i className="fas fa-bullhorn"></i></div><div className="sound-waves"><div className="wave-sound wave-1"></div><div className="wave-sound wave-2"></div><div className="wave-sound wave-3"></div></div><div className="message-dots"><div className="msg-dot"></div><div className="msg-dot"></div><div className="msg-dot"></div></div></div></div></div></div><div className="local-service-content"><h3>Agenzia Marketing Cagliari</h3><p>Soluzioni di marketing digitale su misura per le aziende di Cagliari. Strategie locali per aumentare la tua visibilità online nel capoluogo sardo.</p><Link href="/agenzia-marketing-cagliari" className="local-service-btn btn btn-primary btn-small">Cresci a Cagliari <i className="fas fa-chart-line"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="map-animation"><div className="map-base"><i className="fas fa-map-marked-alt"></i></div><div className="map-pins"><div className="pin" style={{'--x': '20%', '--y': '30%', '--delay': '0.3s'} as React.CSSProperties}></div><div className="pin" style={{'--x': '70%', '--y': '45%', '--delay': '0.6s'} as React.CSSProperties}></div><div className="pin" style={{'--x': '45%', '--y': '70%', '--delay': '0.9s'} as React.CSSProperties}></div></div><div className="connection-lines-map"><div className="connect-line line-1"></div><div className="connect-line line-2"></div></div></div></div></div></div><div className="local-service-content"><h3>Agenzia Marketing Sardegna</h3><p>Servizi completi di marketing digitale per tutte le attività della Sardegna. Raggiungi nuovi clienti in tutta l&apos;isola con strategie efficaci.</p><Link href="/agenzia-marketing-sardegna" className="local-service-btn btn btn-primary btn-small">Conquista la Sardegna <i className="fas fa-island-tropical"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="consultant-animation"><div className="consultant-base"><i className="fas fa-user-tie"></i></div><div className="briefcase-indicator"><i className="fas fa-briefcase"></i></div><div className="strategy-bubbles"><div className="bubble bubble-1">💡</div><div className="bubble bubble-2">📈</div><div className="bubble bubble-3">🎯</div></div><div className="professional-glow"></div></div></div></div></div><div className="local-service-content"><h3>Consulente Marketing Cagliari</h3><p>Consulenza personalizzata per imprenditori e aziende di Cagliari. Analisi dettagliate e strategie mirate per il mercato locale.</p><Link href="/consulente-marketing-cagliari" className="local-service-btn btn btn-primary btn-small">Consulenza Strategica <i className="fas fa-lightbulb"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="remote-work-animation"><div className="laptop-work"><i className="fas fa-laptop-house"></i></div><div className="typing-indicator"><div className="key-press"></div></div><div className="productivity-elements"><div className="productivity-bar" style={{'--width': '80%', '--delay': '0.5s'} as React.CSSProperties}></div><div className="productivity-bar" style={{'--width': '65%', '--delay': '0.8s'} as React.CSSProperties}></div><div className="productivity-bar" style={{'--width': '90%', '--delay': '1.1s'} as React.CSSProperties}></div></div><div className="wifi-signal"><div className="signal-dot"></div><div className="signal-dot"></div><div className="signal-dot"></div></div></div></div></div></div><div className="local-service-content"><h3>Consulente Marketing Sardegna</h3><p>Supporto professionale per le attività in tutta la Sardegna. Esperienza locale e competenze digitali al servizio del tuo business.</p><Link href="/consulente-marketing-sardegna" className="local-service-btn btn btn-primary btn-small">Supporto Professionale <i className="fas fa-handshake"></i></Link></div></div>
                    <div className="local-service-card card highlight-card"><div className="local-service-image"><div className="local-service-overlay"><div className="local-service-icon"><div className="digital-strategy-animation"><div className="strategy-center"><i className="fas fa-rocket"></i></div><div className="digital-orbits"><div className="orbit orbit-1"><div className="orbit-element">📱</div></div><div className="orbit orbit-2"><div className="orbit-element">💻</div></div><div className="orbit orbit-3"><div className="orbit-element">📊</div></div></div><div className="growth-indicators"><div className="growth-arrow arrow-1"></div><div className="growth-arrow arrow-2"></div><div className="growth-arrow arrow-3"></div></div><div className="digital-pulse"></div></div></div></div></div><div className="local-service-content"><h3>Digital Marketing Cagliari</h3><p><strong>STRATEGIE COMPLETE</strong>: Google Ads, SEO, Social Media e Analytics. Casi studio e ROI misurabili per le aziende cagliaritane.</p><Link href="/digital-marketing-cagliari" className="local-service-btn btn btn-primary btn-small">Strategie Complete <i className="fas fa-rocket"></i></Link></div></div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-image-container">
                        <div className="about-image-box">
                            <Image src="/davide-porcu.jpg" alt="Davide Porcu" width={500} height={500} />
                            <div className="experience-badge">
                                <span className="years">13+</span>
                                <span className="text">Anni di<br/>Esperienza</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="section-header text-left">
                            <span className="section-tag">Chi sono</span>
                            <h2>Davide Porcu</h2>
                            <div className="section-divider left"></div>
                        </div>
                        <div className="about-text">
                            <p>Sono <strong>Davide Porcu</strong>, consulente di <strong>marketing digitale a Cagliari</strong> con oltre 13 anni di esperienza nel settore. Mi occupo della gestione e pianificazione di strategie di marketing digitale per aiutare brand e aziende della <strong>Sardegna</strong> a crescere in modo efficace e sostenibile. La mia formazione in Ingegneria Elettronica e Civile mi ha fornito un approccio analitico che applico quotidianamente nelle strategie digitali per le PMI cagliaritane.</p>
                            <p>Come <strong>consulente marketing Cagliari</strong>, sono specializzato nella creazione e ottimizzazione di strategie di <Link href="/digital-marketing-cagliari" style={{color: '#2563eb', fontWeight: 600}}>digital marketing</Link> su misura per il territorio sardo. Combino competenze in Google Ads, SEO locale, social media marketing e web analytics per massimizzare il ritorno sugli investimenti delle aziende cagliaritane. Integro l&apos;intelligenza artificiale nei miei processi per offrire soluzioni più innovative ed efficienti.</p>
                            <p>La mia esperienza nel mercato locale di <strong>Cagliari e provincia</strong> mi permette di comprendere le specificità del territorio sardo e di sviluppare strategie digitali calibrate sulle reali esigenze delle imprese locali. Oltre all&apos;attività di consulenza, sono Vice Presidente e Istruttore FIV presso l&apos;Associazione Sportiva Federale Kite Zone ASD, dove applico le mie competenze marketing anche nel settore sportivo.</p>
                            <p>Il mio obiettivo è trasformare le esigenze dei clienti <strong>cagliaritani</strong> in risultati concreti e misurabili, aiutandoli a posizionarsi competitivamente nel mercato digitale e a ottenere una crescita sostenibile attraverso strategie innovative di marketing digitale personalizzate per la Sardegna.</p>
                        </div>
                        <div className="certifications">
                            <h3><i className="fas fa-award"></i> Certificazioni Google</h3>
                            <ul className="cert-list">
                                <li><i className="fas fa-check-circle"></i> Google Ads sulla rete di ricerca (2024)</li>
                                <li><i className="fas fa-check-circle"></i> Google Ads sulla pubblicità video (2024)</li>
                                <li><i className="fas fa-check-circle"></i> Annunci Shopping basati sull&apos;IA (2024)</li>
                                <li><i className="fas fa-check-circle"></i> Google Ads sulle misurazioni (2024)</li>
                                <li><i className="fas fa-check-circle"></i> Google Ads sulla rete Display (2024)</li>
                                <li><i className="fas fa-check-circle"></i> Google Analytics (2024)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="section contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info-container">
                        <div className="section-header text-left light">
                            <span className="section-tag">Parliamo</span>
                            <h2>Contattami</h2>
                            <div className="section-divider left"></div>
                        </div>
                        <p className="contact-intro">Hai un progetto in mente? Contattami per una consulenza gratuita e scopriamo insieme come posso aiutarti a raggiungere i tuoi obiettivi.</p>
                        <div className="contact-details">
                            <div className="contact-item"><div className="contact-icon"><i className="fas fa-envelope"></i></div><div className="contact-text"><h4>Email</h4><a href="mailto:info@dpconsulentemarketing.it">info@dpconsulentemarketing.it</a></div></div>
                            <div className="contact-item"><div className="contact-icon"><i className="fas fa-phone"></i></div><div className="contact-text"><h4>Telefono</h4><a href="tel:+393803149231">+39 380 3149231</a></div></div>
                            <div className="contact-item"><div className="contact-icon"><i className="fab fa-linkedin"></i></div><div className="contact-text"><h4>LinkedIn</h4><a href="https://linkedin.com/in/davide-porcu-8ba324178/" target="_blank" rel="noopener noreferrer">Davide Porcu</a></div></div>
                        </div>
                        <div className="social-links">
                            <a href="https://wa.me/+393803149231" target="_blank" rel="noopener noreferrer" className="whatsapp-btn"><i className="fab fa-whatsapp"></i> Scrivimi su WhatsApp</a>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <div className="form-card">
                            {/* Inserire qui un componente form o un servizio come Formspree */}
                            <p>Modulo di contatto in costruzione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* FAQ Section */}
        <Faq />
      </main>
    </>
  );
}
