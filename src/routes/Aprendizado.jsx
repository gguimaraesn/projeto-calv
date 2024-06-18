import React from 'react';
import './Aprendizado.css';

function Aprendizado() {
  return (
    <section className="aprendizado">
      <div className="aprendizado-content">
        <header className="header">
          <ul>
            <li>Bem Vindo, aqui você acompanha todo seu progresso de aprendizado</li>
          </ul>
        </header>
      </div>

      <div className="content">
        <div className="grid">
          <div className="card">
            <h2>Back-End</h2>
          </div>
        </div>

        <div className="card">
          <h2>Front-End</h2>
        </div>

        <div className="card">
          <h2>Dados</h2>
        </div>

        <div className="card">
          <h2>Mobile</h2>
        </div>

        <div className="card">
          <h2>Redes</h2>
        </div>

        <div className="card">
          <h2>AWS</h2>
        </div>

        <div className="card">
          <h2>Full-Stack</h2>
        </div>

        <div className="card">
          <h2>Ethical Hacking</h2>
        </div>

        <div className="card">
          <h2>Ingles</h2>
        </div>

      </div>



    </section>
  );
}

export default Aprendizado;