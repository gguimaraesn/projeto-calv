// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <nav className="nav-links">
        <input type="text"
          className="search"
          placeholder="Pesquisar..." />
        <a
          href="#aprendizado">Aprendizado</a>
        <a href="#premium">Premium</a>
        <a
          href="#categorias">Categorias</a>
      </nav>
      <button className="login-button">Entrar</button>
    </header>
  );
}

export default Header;