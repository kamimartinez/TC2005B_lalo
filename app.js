const file_system = require("fs"); // importar una libreria

file_system.writeFileSync("hola.txt", "Hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340];

for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}
