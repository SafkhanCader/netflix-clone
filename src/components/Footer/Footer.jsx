import React, { useState } from 'react';
import './Footer.css';
import facebookIcon from '../../assets/facebook_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import youtubeIcon from '../../assets/youtube_icon.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // State to store selected language
  const [language, setLanguage] = useState('en');

  // Text content based on selected language
  const textContent = {
    en: {
      faq: 'FAQ',
      investor: 'Investor Relations',
      privacy: 'Privacy',
      speed: 'Speed Test',
      help: 'Help Centre',
      jobs: 'Jobs',
      cookie: 'Cookie Preferences',
      legal: 'Legal Notices',
      account: 'Account',
      watch: 'Ways to Watch',
      corporate: 'Corporate Information',
      onlyNetflix: 'Only on Netflix',
      media: 'Media Centre',
      terms: 'Terms of Use',
      contact: 'Contact Us',
      brand: `© 1997-${currentYear} Netflix, Inc.`
    },
    hi: {
      faq: 'सामान्य प्रश्न',
      investor: 'निवेशक संबंध',
      privacy: 'गोपनीयता',
      speed: 'स्पीड टेस्ट',
      help: 'सहायता केंद्र',
      jobs: 'नौकरियां',
      cookie: 'कुकी प्राथमिकताएँ',
      legal: 'कानूनी नोटिस',
      account: 'खाता',
      watch: 'देखने के तरीके',
      corporate: 'कॉर्पोरेट जानकारी',
      onlyNetflix: 'केवल Netflix पर',
      media: 'मीडिया केंद्र',
      terms: 'उपयोग की शर्तें',
      contact: 'संपर्क करें',
      brand: `© 1997-${currentYear} Netflix, Inc.`
    },
    es: {
      faq: 'Preguntas Frecuentes',
      investor: 'Relaciones con Inversores',
      privacy: 'Privacidad',
      speed: 'Prueba de Velocidad',
      help: 'Centro de Ayuda',
      jobs: 'Empleos',
      cookie: 'Preferencias de Cookies',
      legal: 'Avisos Legales',
      account: 'Cuenta',
      watch: 'Formas de Ver',
      corporate: 'Información Corporativa',
      onlyNetflix: 'Solo en Netflix',
      media: 'Centro de Medios',
      terms: 'Términos de Uso',
      contact: 'Contáctenos',
      brand: `© 1997-${currentYear} Netflix, Inc.`
    },
    fr: {
      faq: 'FAQ',
      investor: 'Relations Investisseurs',
      privacy: 'Confidentialité',
      speed: 'Test de Vitesse',
      help: 'Centre d’Aide',
      jobs: 'Emplois',
      cookie: 'Préférences des Cookies',
      legal: 'Mentions Légales',
      account: 'Compte',
      watch: 'Modes de Visionnage',
      corporate: 'Informations Corporatives',
      onlyNetflix: 'Uniquement sur Netflix',
      media: 'Centre Média',
      terms: 'Conditions d’Utilisation',
      contact: 'Contactez-nous',
      brand: `© 1997-${currentYear} Netflix, Inc.`
    },
    de: {
      faq: 'FAQ',
      investor: 'Investor Relations',
      privacy: 'Datenschutz',
      speed: 'Geschwindigkeitstest',
      help: 'Hilfe-Center',
      jobs: 'Jobs',
      cookie: 'Cookie-Einstellungen',
      legal: 'Rechtliche Hinweise',
      account: 'Konto',
      watch: 'Sehoptionen',
      corporate: 'Unternehmensinformationen',
      onlyNetflix: 'Nur auf Netflix',
      media: 'Medienzentrum',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
      brand: `© 1997-${currentYear} Netflix, Inc.`
    }
  };

  return (
    <footer className="footer" role="contentinfo">

      {/* Social Media Icons */}
      <div className="footer__social">
        <a href="#" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="#" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#" aria-label="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
      </div>

      {/* Link Columns */}
      <div className="footer__links">
        <ul>
          <li><a href="#">{textContent[language].faq}</a></li>
          <li><a href="#">{textContent[language].investor}</a></li>
          <li><a href="#">{textContent[language].privacy}</a></li>
          <li><a href="#">{textContent[language].speed}</a></li>
        </ul>
        <ul>
          <li><a href="#">{textContent[language].help}</a></li>
          <li><a href="#">{textContent[language].jobs}</a></li>
          <li><a href="#">{textContent[language].cookie}</a></li>
          <li><a href="#">{textContent[language].legal}</a></li>
        </ul>
        <ul>
          <li><a href="#">{textContent[language].account}</a></li>
          <li><a href="#">{textContent[language].watch}</a></li>
          <li><a href="#">{textContent[language].corporate}</a></li>
          <li><a href="#">{textContent[language].onlyNetflix}</a></li>
        </ul>
        <ul>
          <li><a href="#">{textContent[language].media}</a></li>
          <li><a href="#">{textContent[language].terms}</a></li>
          <li><a href="#">{textContent[language].contact}</a></li>
        </ul>
      </div>

      {/* Language Selector */}
      <div className="footer__lang">
        <select
          aria-label="Select language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
        </select>
      </div>

      {/* Brand */}
      <p className="footer__brand">{textContent[language].brand}</p>
    </footer>
  );
}
