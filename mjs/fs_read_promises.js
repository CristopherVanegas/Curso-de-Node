const fs = require("node:fs/promises");

fs.readFile("./mjs/archivo.txt", "utf-8").then(
  (text) => {
    console.log(text);
  }
);

console.log("Esto se ejecuta antes de leer el archivo"); // esto se ejecuta antes de leer el archivo porque readFile es asíncrono


fs.readFile("./mjs/archivo2.txt", "utf-8").then(
  (text2) => {
    console.log(text2);
  }
);
