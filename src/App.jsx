import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      flex: 1,
      backgroundColor:"grey",
      alignItems:"center",
    }}>
      {/* <Header />
      <div>
        <section id="hero">
          <div>
            <div>
              <h1> Melhore suas Habilidades </h1>
            </div>
            <div>
              <p>Na <span>Calv</span> trasnformamos o aprendizado em <b> conexões significativas, </b> unindo mentes brilhantes da área de T.I para compatilhar conhecimento e impulsionar o futuro da tecnologia juntos. </p>
            </div>
            <div>
              <h2> Explore nossas <span> carreiras </span></h2>
              <div>
                <p><b>Back</b>-end</p>
                <p> <b>Front</b>-End</p>
                <p><b>Dados</b></p>
              </div>
              <div>
                <h3>Outros <span>benefícios</span></h3>
                <p>.Integração entre alunos x alunos</p>
                <p>.Integração entre alunos x instrutores</p>
                <p>.Contato com as maiores empresas da área</p>
              </div>
              <button>Inscreva-se</button>
              <p>Assine o Premium</p>
            </div>
          </div>
        </section>
      </div>

      <Footer /> */}

    </div>
  )
}

export default App
