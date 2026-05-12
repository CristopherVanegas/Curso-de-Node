// fs o filesystem es lo mismo

const fs = require('node:fs') // a partir de node 16 se recomienda poner node: para indicar que es un módulo nativo de node

const stats = fs.statSync('./mjs/archivo.txt') // devuelve un objeto con información sobre el archivo

console.log(
    stats.isFile(), // true si es un archivo
    stats.isDirectory(), // true si es un directorio
    stats.isSymbolicLink(), // true si es un enlace simbólico
    stats.size, // tamaño del archivo en bytes
    stats.birthtime, // fecha de creación del archivo
)
