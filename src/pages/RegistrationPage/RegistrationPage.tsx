import { useState } from 'react';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // logika rejestracji tutaj
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="registration-form__heading">Sign Up</h2>
      <div className="registration-form__input-group">
        <label htmlFor="username" className="registration-form__label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="registration-form__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="firstName" className="registration-form__label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          className="registration-form__input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="lastName" className="registration-form__label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          className="registration-form__input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="email" className="registration-form__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="registration-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="password" className="registration-form__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="registration-form__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="registration-form__input-group">
        <label htmlFor="confirmPassword" className="registration-form__label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="registration-form__input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="registration-form__button">
        Sign Up
      </button>
      <div className="registration-form__login">
        <span>Already have an account?</span>
        <a
          href="/team_project_frontend/login"
          className="registration-form__login-link"
        >
          Log in here
        </a>
      </div>
    </form>
  );
};
