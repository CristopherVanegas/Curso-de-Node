const path = require('node:path')

// para obtener la separacion de las rutas segun so
console.log(path.sep)

// unir rutas con path
const filePath = path.join('content', 'pather', 'child.txt')

console.log(filePath)
