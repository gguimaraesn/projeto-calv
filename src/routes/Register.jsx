import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [cred, setCred] = useState({ email: '', password: '' });
  const [instructorCred, setInstructorCred] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCred({ ...cred, [name]: value });
  };

  const handleInstructorInputChange = (event) => {
    const { name, value } = event.target;
    setInstructorCred({ ...instructorCred, [name]: value });
  };

  const addlogin = async (event) => {
    event.preventDefault();
    console.log('Login button clicked');
    const response = await fetch("http://localhost:8080/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(cred)
    });

    const data = await response.json();
    console.log('Response from backend:', data);

    if (data.token) {
      alert("Login com sucesso");
      navigate('/aprendizado');
    } else {
      alert("Falha no login");
    }
  };

  const addInstructorLogin = async (event) => {
    event.preventDefault();
    console.log('Instructor login button clicked');
    const response = await fetch("http://localhost:8080/instructor-login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(instructorCred)
    });

    const data = await response.json();
    console.log('Response from backend:', data);

    if (data.token) {
      alert("Login de instrutor com sucesso");
      navigate('/aprendizado');
    } else {
      alert("Falha no login de instrutor");
    }
  };

  return (
    <section className="register-page">
      <div className="form-section">
        <div className="login-container">
          <div className="login-form">
            <ul>
              <li>Login</li>
            </ul>
            <form onSubmit={addlogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={cred.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  required
                  value={cred.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>

          <div className="login-form-instructors">
            <ul>
              <li>Login (Instrutores)</li>
            </ul>
            <form onSubmit={addInstructorLogin}>
              <div className="form-group">
                <label htmlFor="instructor-email">Email</label>
                <input
                  type="email"
                  id="instructor-email"
                  name="email"
                  placeholder="Email"
                  required
                  value={instructorCred.email}
                  onChange={handleInstructorInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="instructor-password">Senha</label>
                <input
                  type="password"
                  id="instructor-password"
                  name="password"
                  placeholder="Senha"
                  required
                  value={instructorCred.password}
                  onChange={handleInstructorInputChange}
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>

        <div className="register-container">
          <div className="register-form">
            <ul>
              <li>Cadastre-se</li>
            </ul>
            <form>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input type="email" id="register-email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Senha</label>
                <input type="password" id="register-password" name="password" placeholder="Senha" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirmar senha</label>
                <input type="password" id="register-confirm-password" name="confirm-password" placeholder="Confirmar senha" required />
              </div>
              <div className="form-group">
                <label htmlFor="register-full-name">Nome completo</label>
                <input type="text" id="register-full-name" name="full-name" placeholder="Nome completo" required />
              </div>
              <button type="submit">Registrar</button>
            </form>
            <p>
              Ao se inscrever, você concorda com nossos <a href="#">Termos de Uso</a> e com a <a href="#">Política de Privacidade</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <h2>Melhore suas habilidades</h2>
        <button className="courses-button">Conheça nossos cursos</button>
      </div>
    </section>
  );
}

export default Register;