$(window).on("load", function () {
    "use strict";
    $(".cargando").fadeOut(2500);
    $("#engranaje").fadeOut(500);
 });
 

$(".tituloeimagen").prepend(`<h1 class="titulo"><b>Algoritmos Matemáticos con</b></h1>`);

$("h1").css("width", "40%");
$(".titulo").css({
    "display": "none",
    "font-size": "50px",
    "-webkit-text-stroke": "2.8px #064A86",
    "color": "white",
    "text-align": "center",
    "margin-left": "25%",
});

$("h1").fadeOut("slow", function () {
    $("h1").fadeIn(3800);
});

$("#logoJS").fadeOut("slow", function () {
    $("#logoJS").fadeIn(3800);
});

$(".ingresarfecha").fadeIn(3000);



