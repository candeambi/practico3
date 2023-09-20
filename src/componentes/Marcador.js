import React from 'react';

// Marcador del juego
function Marcador ({ marcador }) {
    return (
      <div>
        <h2>Marcador:</h2>
        <p>Partidas ganadas: {marcador.usuario}</p>
        <p>Partidas ganadas por la computadora: {marcador.computadora}</p>
      </div>
    );
  }
  
  export default Marcador;