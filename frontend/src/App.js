import React from 'react';
import './App.css';
import logo from './images/logo.png'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="My Friends Circle Logo" />
        <p>
          Welcome to <code>My Friends Circle Restaurant</code>!
        </p>
        <a
          className="App-link"
          href="http://localhost:5000" // Link to your backend or another URL you want
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Restaurant API
        </a>
      </header>
    </div>
  );
}

export default App;

