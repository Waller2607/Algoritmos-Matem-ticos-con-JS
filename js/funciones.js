import { AlgoritmoDeZeller } from "./clasedezeller.js"

///Algoritmo De Zeller

function congruenciaDeZeller() {

    let FechaIngresada = document.getElementById("birthDate").value

    const FechaInsertada = new AlgoritmoDeZeller(new Date(FechaIngresada));

    if ((FechaInsertada.calculoDeZeller()) === undefined || (FechaIngresada.length < 6 || FechaIngresada.length > 10) || (FechaIngresada.indexOf('/') < -1)) {
        alert("Debe ingresar una fecha en el campo requerido.");
        return false
    }

    else {
        $("#res1").slideToggle('fast');
        $("#res1").html(`<br><h6 style="display: none; margin-top: 1%;"><b>Según el algoritmo de congruencia<br> de Zeller, ese día fue un ${FechaInsertada.calculoDeZeller()}.</b></h6>`);
        $("h6").fadeIn(1300);
    }
}

///Teorema Bayesiano

function teoremaBayesiano() {

    const NubladoMientrasLlueve = (x, y) => ((x / y) * 100).toFixed(2);
    const TeoremaBayesiano1 = (x, y) => (x * y);
    const TeoremaBayesiano2 = (x, y) => (x / y).toFixed(2);

    let Nublado = parseInt(document.getElementById('Nublado').value);
    let Lluvia = parseInt(document.getElementById('Lluvia').value);
    let NubladoyLluvia = parseInt(document.getElementById("NubladoYLluvia").value);

    if ((NubladoyLluvia > Nublado) || (NubladoyLluvia > Lluvia)) {
        alert("Debe ingresar un número válido.");
        return false
    }

    else if ((Number.isNaN(Nublado) == true) || (Number.isNaN(Lluvia) == true)) {
        alert("Debe ingresar números en los campos.");
        return false
    }

    else {
        const ResultadoBayesiano1 = NubladoMientrasLlueve(NubladoyLluvia, Lluvia);
        const ResultadoBayesiano2 = TeoremaBayesiano2(TeoremaBayesiano1(NubladoMientrasLlueve(NubladoyLluvia, Lluvia), Lluvia), Nublado);
        $("#res2").slideToggle('fast');
        $("#res2").html(`<br><h6 style="display: none; margin-top: 1%;"><b>Según el Teorema de Naive-Bayes, las probabilidades de que esté nublado dado a que está lloviendo 
            y de que llueva dado a que está nublado serían de ${ResultadoBayesiano1}"% y ${ResultadoBayesiano2}% respectivamente".</b></h6>`);
        $("h6").fadeIn(1300);
    }
}

/// Algoritmo de distancia entre fechas

function algoritmoDistanciaFechas(paramOpcion) {

    const calculo = ((x, y) => (y - x) / (1000 * 3600 * 24));

    var fecha1 = new Date(document.getElementById('fecha1').value);
    var fecha2 = new Date(document.getElementById('fecha2').value);

    const TotalidadDeLasFechas = [fecha1, fecha2];

    if (paramOpcion == 1) {

        const Resultado = calculo(TotalidadDeLasFechas[0], TotalidadDeLasFechas[1]);

        if (Number.isNaN(Resultado) == true) {
            alert("Debe ingresar fechas en los campos requeridos.")
            return
        }

        else {
            $("#res3").slideToggle("fast");
            $("#res3").html(`<br><h6 style="display: none; margin-top: 1%;"><b>El número total de días entre las fechas es de ${Math.abs(Resultado)}.</b></h6>`);
            $("h6").fadeIn(1300);
        }

    }

    else if (paramOpcion == 2) {

        var fecha3 = new Date(document.getElementById("birthDate").value)

        TotalidadDeLasFechas.push(fecha3)

        const Resultado1 = calculo(TotalidadDeLasFechas[0], TotalidadDeLasFechas[2]);
        const Resultado2 = calculo(TotalidadDeLasFechas[1], TotalidadDeLasFechas[2]);

        if (Number.isNaN(Resultado1) == true || Number.isNaN(Resultado2)) {
            alert("Debe ingresar fechas en los campos requeridos.")
            return
        }

        else {
            $("#res4").slideToggle("fast");
            $("#res4").html(`<br><h6 style="display: none; margin-top: 1%;"><b>La diferencia de días entre la fecha 
            del algoritmo de Zeller y las anteriores es de ${Math.abs(Resultado1)} y ${Math.abs(Resultado2)} respectivamente.</b></h6>`);
            $("h6").fadeIn(1300);
        }

    }

}

export { congruenciaDeZeller, teoremaBayesiano, algoritmoDistanciaFechas }
