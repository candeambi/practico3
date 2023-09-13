import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';
import InterfazUsuario from './componentes/InterfazUsuario.js';
import Marcador from './componentes/Marcador.js';


function App() {

  const [nombre, setNombre] = useState('');

  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  //Controlador de eventos para iniciar el juego
  const [gameStarted, setGameStarted] = useState(false);

  const opciones = ['Piedra', 'Papel', 'Tijera'];
  const [opcionUsuario, setOpcionUsuario] = useState(null);
  const [opcionComputadora, setOpcionComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const rondaMaxima = 5;
  const [ronda, setRonda] = useState(1);
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);

  const obtenerOpcionClick = (opcion) => {
    // Aquí puedes manejar la elección del jugador
    if (ronda <= rondaMaxima){
    console.log(`El jugador eligió: ${opcion}`);
    setOpcionUsuario(opcion);
    const eleccionAleatoria = opciones[Math.floor(Math.random() * 3)];
    setOpcionComputadora(eleccionAleatoria);
    setResultado(obtenerResultado(opcionUsuario, opcionComputadora));

    if (resultado === 'Usuario'){
      setPuntosUsuario(puntosUsuario + 1);
    } else if (resultado === 'Computadora') {
      setPuntosComputadora(puntosComputadora + 1);
    }
    }

    if (ronda >= rondaMaxima){
      console.log('final');
    }
  };


    const obtenerResultado = (opcionUsuario, opcionComputadora) =>{
      if (opcionUsuario === opcionComputadora){
        console.log("empate");
        return 'Empate';
      } else if (
      (opcionComputadora === "Piedra" && opcionUsuario === "Tijeras") ||
      (opcionComputadora === "Papel" && opcionUsuario === "Piedra") ||
      (opcionComputadora === "Tijeras" && opcionUsuario === "Papel")
      ){
          console.log("computadora");
          setRonda(ronda +1);
          return 'Computadora';
      } else if (
      (opcionUsuario === "Piedra" && opcionComputadora === "Tijeras") ||
      (opcionUsuario === "Papel" && opcionComputadora === "Piedra") ||
      (opcionUsuario === "Tijeras" && opcionComputadora === "Papel")
      ){
          console.log("usuario");
          setRonda(ronda +1);
          return 'Usuario';
      }
      };
  

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
          <p>Elegiste: {opcionUsuario}</p>
          <p>La computadora eligió: {opcionComputadora}</p>
          <p>Reultado de la ronda: {resultado}</p>
          <Marcador />
        </div>
      )}
       
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
