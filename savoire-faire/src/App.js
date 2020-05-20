import React from 'react';
import logo from './SV.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer">
          Sign in here if you already have an account.
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up to Begin
        </a>
      </header>
    </div>
  );
}

export default App;
