import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
  text-align: center;
  color: #000;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(240, 205, 8);
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
`;

const Partidas = styled.p`
  font-size: large;
`;

// Marcador del juego
function Marcador ({ marcador }) {
    return (
      <Contenedor>
        <h3>Marcador:</h3>
        <Partidas>Partidas ganadas: {marcador.usuario}</Partidas>
        <Partidas>Partidas ganadas por la computadora: {marcador.computadora}</Partidas>
      </Contenedor>
    );
  }
  
  export default Marcador;