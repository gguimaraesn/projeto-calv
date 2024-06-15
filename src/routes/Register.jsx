import React from 'react';
import './Register.css';

function Register() {
  return (
    <section className="register-page">
      <div className="form-section">
        <div className="login-container">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Senha" required />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>

          <div className="login-form-instructors">
            <h2>Login (Instrutores)</h2>
            <form>
              <div className="form-group">
                <label htmlFor="instructor-email">Email</label>
                <input type="email" id="instructor-email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="instructor-password">Senha</label>
                <input type="password" id="instructor-password" name="password" placeholder="Senha" required />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>

        <div className="register-container">
          <div className="register-form">
            <h2>Cadastre-se</h2>
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