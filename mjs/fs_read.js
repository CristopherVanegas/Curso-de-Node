const fs = require("node:fs");

// const text = fs.readFileSync("./mjs/archivo.txt", "utf-8"); // devuelve el contenido del archivo como un strings
// console.log(text);

fs.readFile("./mjs/archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("Esto se ejecuta antes de leer el archivo"); // esto se ejecuta antes de leer el archivo porque readFile es asíncrono

// const text2 = fs.readFileSync("./mjs/archivo2.txt", "utf-8"); // devuelve el contenido del archivo como un strings
// console.log(text2);

fs.readFile("./mjs/archivo2.txt", "utf-8", (err, text2) => {
  console.log(text2);
});
