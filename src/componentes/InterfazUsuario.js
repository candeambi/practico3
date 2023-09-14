import React from 'react';
import piedraImg from '../img/piedra.jpg';
import papelImg from '../img/papel.jpg';
import tijeraImg from '../img/tijera.jpg';

function InterfazUsuario({ opcionClick }) {
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

        </div>
      </div>
    );
  }
  
  export default InterfazUsuario;