import React, {useState} from 'react';



const opciones = ['piedra','papel','tijera'];

function numeroAleatorioHasta(num) { 
    return Math.floor(Math.random() * num);
}

function obtenerJugadaComputadora() {
    return opciones[numeroAleatorioHasta(3)];
}

