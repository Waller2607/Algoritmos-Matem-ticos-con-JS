import { congruenciaDeZeller, teoremaBayesiano, algoritmoDistanciaFechas } from "./funciones.js"

///Algoritmo De Zeller

$("#boton1").click(function () {
    congruenciaDeZeller()
});

let input1 = document.getElementById("birthDate");

input1.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        congruenciaDeZeller();
    }
})

///Teorema Bayesiano

$("#boton2").click(function () {
    teoremaBayesiano();
});

let NubladoyLluvia = document.getElementById("NubladoYLluvia")

NubladoyLluvia.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        teoremaBayesiano();
    }
})

/// Algoritmo de distancia entre fechas

$("#boton3").click(function () {
    algoritmoDistanciaFechas(1);
});

let fecha2 = document.getElementById("fecha2");

fecha2.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        algoritmoDistanciaFechas(1)
    }
})

/// Algoritmo de distancia entre fechas + Algoritmo de Zeller

$("#boton4").click(function () {
    algoritmoDistanciaFechas(2)
});

