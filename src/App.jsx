import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CareerSection from './components/CareerSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="hero" className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Melhore suas Habilidades</h1>
              <p>
                Na <span>Calv</span> transformamos o aprendizado em <b>conexões significativas,</b> unindo mentes brilhantes da área de T.I para compartilhar conhecimento e impulsionar o futuro da tecnologia juntos.
              </p>
              <h2>Explore nossas <span>carreiras</span></h2>
              <div className="careers">
                <button>Back-end</button>
                <button>Front-End</button>
                <button>Dados</button>
              </div>
              <h3>Outros <span>benefícios</span></h3>
              <ul>
                <li>Integração entre alunos x alunos</li>
                <li>Integração entre alunos x instrutores</li>
                <li>Contato com as maiores empresas da área</li>
              </ul>
              <button className="signup-button">Inscreva-se</button>
              <p>Assine o Premium</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;