import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';


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
          <button>Piedra</button>
          <button>Papel</button>
          <button>Tijera</button>
        </div>
      )}
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
        </p>
      </header>
    </div>
  );
}

export default App;
