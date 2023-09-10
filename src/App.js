import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Nombre from './componentes/Nombre.js';

function App() {

  const [nombre, setNombre] = useState('');

  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  return (
    
    <div className="App">
      <header className="App-header">

      <h1>Piedra, papel o tijera</h1>
      
      <Nombre nombre={nombre} ChangeName={ChangeNameApp}/>

      <button type="submit" id="btnComenzar">Comenzar juego</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
        </p>
      </header>
    </div>
  );
}

export default App;
