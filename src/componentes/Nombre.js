import React from "react";



function Nombre(props){
    const { nombre, ChangeName } = props;

    const ChangeNombre = (e) => {
        ChangeName(e.target.value);
    };

    return(
        <div>
            <h3>¡Bienvenidx! Por favor, ingresa tu nombre:</h3>
            <input
             type="text"
             placeholder="Ingresa tu nombre"
             value={nombre}
             onChange={ChangeNombre}
             />
            <p>Hola, {nombre || 'jugador'}.</p>
        </div>
    );
}
        
        export default Nombre;