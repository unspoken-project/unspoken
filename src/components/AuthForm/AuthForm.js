import React from 'react';

export default function AuthForm({
  username,
  setUsername,
  errorMessage,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Username: </label>
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <input type="submit" />
      </form>
    </div>
  );
}
