import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
              Parte de um sistema de software responsável pelo processamento e gerenciamento dos dados, bem como pela lógica de negócios por trás de uma aplicação.
            </p>
          </div>
          <div>
            <h3>
              Front-End
            </h3>
            <p>
              Interface visual e funcional de uma aplicação incluindo o que os usuários veem, ouvem e interagem em um site, aplicativo ou software
            </p>
          </div>
          <div>
            <h3>
              Dados
            </h3>
            <p>
              Conjunto de princípios, padrões e práticas que orientam o design e a organização dos dados em um sistema de informação ou em uma organização
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
        <Link className='button' to={`/register`}>Inscreva-se</Link>
        <p>Assine o Premium</p>
      </section>
    </>
  );
}

export default Home;