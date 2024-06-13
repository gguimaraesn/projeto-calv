// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="/seja-um-instrutor">Seja um instrutor</a></li>
          <li><a href="/quem-somos">Quem Somos</a></li>
          <li><a href="/termos">Termos de Uso</a></li>
        </ul>
      </nav>
      <div className='logo-footer'>
        <img src="/logo.png" alt="" />
      </div>
      <div className='social-links'>
        <a href="link do instagram aqui">
          <img width="24px" src="https://api.iconify.design/mdi:instagram.svg?color=%23ffffff" alt="" />
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;