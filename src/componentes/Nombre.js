import React from "react";

function Nombre(props){
    const { nombre, ChangeName } = props;

    const ChangeNombre = (e) => {
        ChangeName(e.target.value);
    };

    return(
        <div>
            <h4>¡Bienvenidx {nombre || 'jugador'}!</h4>
            <h5>Por favor, ingresa tu nombre:</h5>
            <input
             type="text"
             placeholder="Ingresa tu nombre"
             value={nombre}
             onChange={ChangeNombre}
             />
             <p>*Campo obligatorio: solo se aceptan letras y espacios.</p>
        </div>
    );
}
        
        export default Nombre;