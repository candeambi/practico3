import React, { useState, useEffect } from 'react';
import piedraImg from '../img/piedra.jpg';
import papelImg from '../img/papel.jpg';
import tijeraImg from '../img/tijera.jpg';

function InterfazUsuario({actualizarMarcador, nombre}) {


  const [opcionUsuario, setOpcionUsuario] = useState("");
  const [opcionComputadora, setOpcionComputadora] = useState("");
  const [resultado, setResultado] = useState("");
  const [ronda, setRonda] = useState(1);
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [juegoActivo, setJuegoActivo] = useState(true);
  const [ganadorFinal, setGanadorFinal] = useState('');
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  

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
      setResultado('Gana '+ nombre);
      setRonda(ronda + 1);
      actualizarMarcador('usuario');
      setPuntosUsuario(puntosUsuario + 1);
    }
    else {
      console.log('Gana la computadora');
      setResultado('Gana la computadora');
      setRonda(ronda +1);
      actualizarMarcador('computadora');
      setPuntosComputadora(puntosComputadora + 1);
    };

  }

  //Guardo la opcion seleccionada por el jugador
  const opcionClick = (opcion) => {
    if (juegoActivo) {
      if (opcion === 'Piedra') setOpcionUsuario('Piedra');
      if (opcion === 'Papel') setOpcionUsuario('Papel');
      if (opcion === 'Tijera') setOpcionUsuario('Tijera');
      console.log(`El jugador eligió: ${opcion}`);

      //Realizo la eleccion aleatoria de la computadora
      let opciones = ['Piedra', 'Papel', 'Tijera'];
      let eleccionAleatoria = opciones[Math.floor(Math.random() * 3)];
      if (eleccionAleatoria === 'Piedra') setOpcionComputadora('Piedra');
      if (eleccionAleatoria === 'Papel') setOpcionComputadora('Papel');
      if (eleccionAleatoria === 'Tijera') setOpcionComputadora('Tijera');
      console.log(`La computadora eligió: ${eleccionAleatoria}`);

      //Realizo la funcion que determina el ganador
      determinarGanador(opcion, eleccionAleatoria);
    }
  };

  useEffect(() => {
    if (puntosUsuario >= 3 || puntosComputadora >= 3) {
      setJuegoActivo(false);
      setBotonDesactivado(true);
      if (puntosUsuario >= 3) {
        setGanadorFinal(`¡${nombre} ganaste!`);
      } else {
        setGanadorFinal('Ganó la computadora');
      }
    }
  }, [puntosUsuario, puntosComputadora, nombre]);
  

    return (
      <div className="usuario-interfaz">
        <h2>Elige tu opción:</h2>
        <div className="opciones">
          {/* Aquí van los botones de elección del jugador */}
          <div>
            <p>Quien gane 3 rondas, gana la partida.</p>
          <h2>¡A jugar!</h2>
          <button onClick={() => opcionClick('Piedra')} disabled={botonDesactivado}>
            <img src={piedraImg} alt="piedra" />
            </button>
          <button onClick={() => opcionClick('Papel')} disabled={botonDesactivado}> 
            <img src={papelImg} alt="papel" />
            </button>
          <button onClick={() => opcionClick('Tijera')} disabled={botonDesactivado}>
            <img src={tijeraImg} alt="tijera" />
            </button>
        </div>
        <div>
        <h2>{ganadorFinal}</h2>
        <p>Elegiste: {opcionUsuario}</p>
        <p>La computadora eligió: {opcionComputadora}</p>
        <p>Resultado de la ronda: {resultado}</p>
        <p>Ronda: {ronda}</p>
        </div>
      </div>
      </div>
    );
  }

    export default InterfazUsuario;