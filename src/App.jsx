import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Melhore suas Habilidades</h1>
            <p>Na <span className='text-blue'>Calv</span> transformamos o aprendizado em <b>conexões significativas,</b> unindo pessoas com os maiores talentos para impulsionar o futuro da tecnologia juntos.</p>
          </div>
        </section>
        <section className="careers">
          <h2>Explore nossas <span className='text-blue'>carreiras</span></h2>
          <div className='content'>
            <div>
              <h3>
                Back-end
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus at, esse beatae
              </p>
            </div>
            <div>
              <h3>
                Front-End
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus at, esse beatae
              </p>
            </div>
            <div>
              <h3>
                Dados
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus at, esse beatae
              </p>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>Outros <span className='text-gray'>benefícios</span></h2>
          <ul>
            <li>Integração entre alunos x alunos</li>
            <li>Integração entre alunos x instrutores</li>
            <li>Contato com as maiores empresas da área</li>
          </ul>
          <button>Inscreva-se</button>
          <p>Assine o Premium</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;