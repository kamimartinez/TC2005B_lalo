//consola
console.log("Aqui se pone atencion a Lalo");
console.info("la diferencia es que aparece un icono");
console.warn("aparece un warning en amarillo");
console.error("aparece un error en rojo y contador de errores");
console.assert(1 == "1");
console.assert(1 === "1");

//variables, constantes
var comestible = "espinaca"; // variabale global, sigue existiendo, seguridad importante

let flor = "rosa"; // forma moderna de declarar variables

const precio = 99.99;

let numero = parseInt(prompt("Ingresa un numero"));

if (numero > 0) {
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
}
