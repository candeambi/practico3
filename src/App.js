import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';
import Juego from './componentes/Juego.js';
import InterfazUsuario from './componentes/InterfazUsuario.js';


function App() {

  const [nombre, setNombre] = useState('');

  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  //Controlador de eventos para iniciar el juego
  const [gameStarted, setGameStarted] = useState(false);

  const obtenerOpcionClick = (opcion) => {
    // Aquí puedes manejar la elección del jugador
    console.log(`El jugador eligió: ${opcion}`);
    // Luego, puedes generar aleatoriamente la elección del oponente y determinar el resultado del juego
  };

  // Controlador de eventos para iniciar el juego
  // const [playerChoice, setPlayerChoice] = useState(null);

  //const handlePlayerChoice = (choice, opponentChoice) => {
    // Maneja la elección del jugador aquí
    //setPlayerChoice(choice);



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
          <InterfazUsuario opcionClick={obtenerOpcionClick}/>
        </div>
      )}
       
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
