// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={`/`} className="logo">
        <img src="/logo.png" />
      </Link>
      <nav className="nav-links">
        <input type="text"
          className="search"
          placeholder="Pesquisar..." />
        <Link to={`/register`}>Aprendizado</Link>
        <Link to={`/premium`}>Premium</Link>
        <Link to={`/categorias`}>Categorias</Link>
      </nav>
      <Link to={`/register`} className="login-button">Entrar</Link>
    </header>
  );
}

export default Header;