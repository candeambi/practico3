import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';
import piedraImg from './img/piedra.jpg';
import papelImg from './img/papel.jpg';
import tijeraImg from './img/tijera.jpg';


function App() {

  const [nombre, setNombre] = useState('');

  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  // Controlador de eventos para iniciar el juego
  const [gameStarted, setGameStarted] = useState(false);

  return (
    
    <div className="App">
      <header className="App-header">

      <h1>Piedra, papel o tijera</h1>
      
      <Nombre nombre={nombre} ChangeName={ChangeNameApp}/>

  {/* Botón para iniciar el juego */}
  {!gameStarted ? (
      <button type="submit" id="btnComenzar" onClick={() => setGameStarted(true)}>Comenzar juego</button>
      ) : (
        // Mostrar botones de juego cuando gameStarted es true
        <div>
          <button><img src={piedraImg} alt="piedra" /></button>
          <button><img src={papelImg} alt="papel" /></button>
          <button><img src={tijeraImg} alt="tijera" /></button>
        </div>
      )}
      
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
