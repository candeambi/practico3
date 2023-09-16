import React, { useState } from 'react';
import piedraImg from '../img/piedra.jpg';
import papelImg from '../img/papel.jpg';
import tijeraImg from '../img/tijera.jpg';

function InterfazUsuario() {


  const [opcionUsuario, setOpcionUsuario] = useState(null);
  const [opcionComputadora, setOpcionComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);

  // Declaro la funcion determinarGanador
  function determinarGanador(opcionUsuario, opcionComputadora){
    if (opcionUsuario === opcionComputadora){
      console.log('Empate');
      setResultado('Empate');
    }
    else if (
      (opcionUsuario === 'Piedra' && opcionComputadora === 'Tijera') ||
      (opcionUsuario === 'Papel' && opcionComputadora === 'Piedra') ||
      (opcionUsuario === 'Tijera' && opcionComputadora === 'Papel')
    ){
      console.log('Gana el usuario');
      setResultado('Gana el usuario');
    }
    else if (
      (opcionComputadora === 'Piedra' && opcionUsuario === 'Tijera') ||
      (opcionComputadora === 'Papel' && opcionUsuario === 'Piedra') ||
      (opcionComputadora === 'Tijera' && opcionUsuario === 'Papel')
    ){
      console.log('Gana la computadora');
      setResultado('Gana la computadora');
    };
  }

  //Guardo la opcion seleccionada por el jugador
  const opcionClick = (opcion) => {
  if (opcion === 'Piedra') setOpcionUsuario('Piedra');
  if (opcion === 'Papel') setOpcionUsuario('Papel');
  if (opcion === 'Tijera') setOpcionUsuario('Tijera');
  console.log(`El jugador eligió: ${opcion}`);

  //Realizo la eleccion aleatoria de la computadora
  let opciones = ['Piedra', 'Papel', 'Tijera'];
  let eleccionAleatoria = opciones[Math.floor(Math.random() * 3)];
  if (eleccionAleatoria === 'Piedra') setOpcionComputadora('Piedra');
  if (eleccionAleatoria === 'Papel') setOpcionComputadora('Papel');
  if (eleccionAleatoria === 'Tijeras') setOpcionComputadora('Tijera');
  console.log(`La computadora eligió: ${eleccionAleatoria}`);

  //Realizo la funcion que determina el ganador
  determinarGanador(opcion, eleccionAleatoria);
  };
  



    return (
      <div className="usuario-interfaz">
        <h2>Elige tu opción:</h2>
        <div className="opciones">
          {/* Aquí van los botones de elección del jugador */}
          <div>
          <h2>¡A jugar!</h2>
          <button onClick={() => opcionClick('Piedra')}>
            <img src={piedraImg} alt="piedra" />
            </button>
          <button onClick={() => opcionClick('Papel')}>
            <img src={papelImg} alt="papel" />
            </button>
          <button onClick={() => opcionClick('Tijera')}>
            <img src={tijeraImg} alt="tijera" />
            </button>
        </div>
        <div>
        <p>Elegiste: {opcionUsuario}</p>
        <p>La computadora eligió: {opcionComputadora}</p>
        <p>Resultado de la ronda: {resultado}</p>
        </div>
      </div>
      </div>
    );
  }

    export default InterfazUsuario;