import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
  text-align: center;
  color: #000;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(240, 205, 8);
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin: 10px;
`;


// Marcador del juego
function Marcador ({ marcador }) {
    return (
      <Contenedor>
        <h2>Marcador:</h2>
        <p>Partidas ganadas: {marcador.usuario}</p>
        <p>Partidas ganadas por la computadora: {marcador.computadora}</p>
      </Contenedor>
    );
  }
  
  export default Marcador;