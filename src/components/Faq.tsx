'use client';

import { useState, useEffect } from 'react';

const faqData = [
    {
        question: "Cosa fa un consulente marketing digitale a Cagliari?",
        answer: "Un consulente marketing digitale a Cagliari aiuta le aziende locali a crescere online attraverso strategie personalizzate di Google Ads, SEO, social media marketing e ottimizzazione siti web. Mi occupo di aumentare la visibilità online delle PMI cagliaritane, generare lead qualificati e incrementare le vendite attraverso il digital marketing."
    },
    {
        question: "Quanto costa un consulente marketing digitale a Cagliari?",
        answer: "I costi per un consulente marketing digitale a Cagliari variano in base agli obiettivi e alle esigenze specifiche della tua azienda. Offro tariffe competitive e pacchetti personalizzati che includono analisi gratuita iniziale, gestione campagne Google Ads, ottimizzazione SEO e reportistica dettagliata. Contattami per un preventivo personalizzato."
    },
    {
        question: "Come può il digital marketing aiutare la mia azienda a Cagliari?",
        answer: "Il digital marketing può trasformare radicalmente il business della tua azienda a Cagliari: aumentando la visibilità online locale, intercettando clienti che cercano i tuoi servizi su Google, migliorando il posizionamento SEO per ricerche locali e ottimizzando le conversioni. Con le giuste strategie digitali, le aziende cagliaritane possono incrementare fatturato e clienti in modo misurabile."
    },
    {
        question: "Google Ads funziona per le aziende di Cagliari?",
        answer: "Assolutamente sì! Google Ads è particolarmente efficace per le aziende di Cagliari perché permette di targettizzare precisamente utenti nella zona geografica di interesse. Gestisco campagne Google Ads ottimizzate per il mercato cagliaritano, utilizzando keyword locali, estensioni di posizione e strategie di bidding specifiche per massimizzare ROI e conversioni locali."
    },
    {
        question: "Perché scegliere un consulente marketing locale a Cagliari?",
        answer: "Scegliere un consulente marketing locale a Cagliari significa avere un partner che conosce intimamente il mercato sardo, le dinamiche locali, i competitor e le specificità del territorio. Come consulente con base a Cagliari, offro disponibilità per incontri di persona, tempi di risposta rapidi e strategie calibrate sulle reali esigenze delle aziende cagliaritane."
    }
];

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string, answer: string }, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className={`faq-item card ${isOpen ? 'active' : ''}`}>
            <div className="faq-question" onClick={onClick}>
                <h3>{item.question}</h3>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
                <p>{item.answer}</p>
            </div>
        </div>
    );
};

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag badge badge-info">FAQ</span>
                    <h2 className="text-shadow">Domande Frequenti</h2>
                    <div className="section-divider"></div>
                    <p className="section-intro">Le risposte alle domande più comuni sui servizi di marketing digitale a Cagliari</p>
                </div>
                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
