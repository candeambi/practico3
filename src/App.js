import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';
import InterfazUsuario from './componentes/InterfazUsuario.js';
import Marcador from './componentes/Marcador.js';


function App() {

  //Validación del nombre para comenzar a jugar.
  const [nombre, setNombre] = useState('');
  const [nombreValido, setNombreValido] = useState(false); 

  const ChangeNameApp = (nuevoNombre) => {
    const esNombreValido = /^[A-Z]+$/i.test(nuevoNombre);
    setNombre(nuevoNombre);
    setNombreValido(esNombreValido);
  };

  //Controlador de eventos para iniciar el juego
  const [gameStarted, setGameStarted] = useState(false);

  //Manejo del marcador
  const [marcador, setMarcador] = useState({ usuario: 0, computadora: 0 });
  const actualizarMarcador = (ganador) => {
    if (ganador === 'usuario') {
      setMarcador({ ...marcador, usuario: marcador.usuario + 1 });
    } else if (ganador === 'computadora') {
      setMarcador({ ...marcador, computadora: marcador.computadora + 1 });
    } else {
      setMarcador({ usuario: 0, computadora: 0 });
    }
  };

  return (
    
    <div className="App">
      <header className="App-header">

      <h1>Piedra, papel o tijera</h1>
      
      <Nombre nombre={nombre} ChangeName={ChangeNameApp}/>

  {/* Botón para iniciar el juego */}
  {!gameStarted ? (
      <button type="submit" 
      onClick={() => setGameStarted(true)} disabled={!nombreValido}>Comenzar juego</button>
      ) : (
        // Mostrar botones de juego cuando gameStarted es true
        <div>
          <Marcador marcador={marcador} />
          <InterfazUsuario actualizarMarcador={actualizarMarcador} nombre={nombre} />
        </div>
      )}
      </header>
    </div>
  );
}


export default App;
