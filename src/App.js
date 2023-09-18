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

  const [marcador, setMarcador] = useState({ usuario: 0, computadora: 0 });
  const actualizarMarcador = (ganador) => {
    if (ganador === 'usuario') {
      setMarcador({ ...marcador, usuario: marcador.usuario + 1 });
    } else if (ganador === 'computadora') {
      setMarcador({ ...marcador, computadora: marcador.computadora + 1 });
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
          <InterfazUsuario actualizarMarcador={actualizarMarcador}/>
          <Marcador marcador={marcador} />
        </div>
      )}
       
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}


export default App;
