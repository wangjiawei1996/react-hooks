import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import useMousePosition from './hooks/useMousePosition'
// import MouseTracker from './components/MouseTracker'
import DogShow from './components/DogShow'
function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{position.x}</h1>
        <DogShow />
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
