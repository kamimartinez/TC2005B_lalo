// PROBLEMA 1
let numero = parseInt(prompt("Ingresa un numero"));

if (!isNaN(numero)) {
  document.write("<table>");
  document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

  for (let i = 1; i <= numero; i++) {
    document.write(
      `<tr> <td>${i}</td> <td>${i ** 2}</td> <td>${i ** 3}</td> </tr>`,
    );
  }
  document.write("</table>");
}

// PROBLEMA 2
let min = 1;
let max = 100;
let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

let tB = Date.now();
let suma = parseInt(prompt("Cual es la suma de " + num1 + "+" + num2 + "?"));
let tF = Date.now();
let tt = (tF - tB) / 1000;

document.write("<br />");

document.write(
  "El usuario se tardo " + tt + " segundos en contestar la pregunta de suma.",
);
if (suma === num1 + num2) {
  document.write("<h1> Respuesta correcta </h1>");
} else {
  document.write("<h1> Respuesta incorrecta </h1>");
}

// PROBLEMA 3

const a = [-3, -2, -1, 0, 1, 2, 3];
let neg = 0;
let pos = 0;
let ceros = 0;

function contador(a) {
  document.write("<table>");
  for (let i = 0; i < a.length; i++) {
    document.write("<td>" + a[i] + "</td>");
  }
  document.write("</table>");
  for (let i = 0; i <= a.length; i++) {
    if (a[i] == 0) ceros++;
    if (a[i] < 0) neg++;
    if (a[i] > 0) pos++;
  }
  document.write("La cantidad de numeros negativas son " + neg + "<br />");
  document.write("La cantidad de numeros ceros son " + ceros + "<br />");
  document.write("La cantidad de numeros positivos son " + pos + "<br />");
}

contador(a);
document.write("<br />");

// PROBLEMA 4

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
document.write("PROMEDIO MATRIZ");
function promedio(matrix) {
  const promedios = [];
  document.write("<table>");
  for (let i = 0; i < matrix.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < matrix[i].length; j++) {
      document.write("<td>" + matrix[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  document.write("<br />");

  for (let i = 0; i < matrix.length; i++) {
    let fila = matrix[i];
    let sfila = 0;
    for (let j = 0; j < fila.length; j++) {
      sfila += fila[j];
    }
    promedios.push(sfila / fila.length);
  }
  document.write("<table>");
  for (let i = 0; i < promedios.length; i++) {
    document.write("<tr><td>" + promedios[i] + "</td></tr>");
  }
  document.write("</table>");
}

promedio(matrix);
document.write("<br />");

// PROBLEMA 5

let num = 123456789;

function inverso(num) {
  let inv = 0;
  while (num > 0) {
    let digito = num % 10;
    inv = inv * 10 + digito;
    num = Math.floor(num / 10);
  }

  return inv;
}

document.write("El inverso de " + num + " es " + inverso(num));
