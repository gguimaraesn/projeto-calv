// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <header className="header">
        <div className="logo">calv</div>
        <input type="text"
        className="search"
        placeholder="Pesquisar..." />
        <nav className="nav-links">
          <a
          href="#aprendizado">Aprendizado</a>
          <a href="#premium">Premium</a>
          <a
          href="#categorias">Categorias</a>
              <button className="login-button">Entrar</button>
              </nav>
              </header>
  );
}

export default Header;