import React from 'react';
import './AuthForm.css';

export default function AuthForm({
  username,
  setUsername,
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  type,
}) {
  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        {type === 'signup' && (
          <div>
            <label>Username: </label>
            <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        )}
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" className="submit-btn" />
      </form>
    </>
  );
}
