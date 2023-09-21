import React from "react";
import styled from 'styled-components';

const Contenedor = styled.div `
    justify-content: center;
    color: #000;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: rgb(240, 205, 8);
    padding:10px;
    border-radius: 5px;
`;

const Input = styled.input `
    border-radius: 5px;
    text-align: center;
    font-size: medium;
    cursor: pointer;
`;

const Aviso = styled.p`
    font-size: small;
`;

//Obtención del nombre a través del input
function Nombre(props){
    const { nombre, ChangeName } = props;

    const ChangeNombre = (e) => {
        ChangeName(e.target.value);
    };

    return(
        <Contenedor>
            <h2>¡Bienvenidx {nombre || 'jugador'}!</h2>
            <h4>Por favor, ingresa tu nombre:</h4>
            <Input
             type="text"
             placeholder="Ingresa tu nombre"
             value={nombre}
             onChange={ChangeNombre}
             />
             <Aviso>*Campo obligatorio:</Aviso>
             <Aviso>Solo se aceptan letras y espacios.</Aviso>
        </Contenedor>
    );
}
        
        export default Nombre;