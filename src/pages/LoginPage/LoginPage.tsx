import { useState } from 'react';
import './LoginPage.scss';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // logika logowania tutaj
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-form__heading">Log In</h2>
      <div className="login-form__input-group">
        <label htmlFor="email" className="login-form__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="login-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="login-form__input-group">
        <label htmlFor="password" className="login-form__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="login-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="login-form__button">
        Log In
      </button>
      <div className="login-form__register">
        <span>Dont have an account? </span>
        <a
          href="/team_project_frontend/register"
          className="login-form__register-link"
        >
          Sign up here
        </a>
      </div>
    </form>
  );
};
