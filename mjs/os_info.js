const os = require('node:os')

console.log('Información del sistema operativo!')
console.log('Plataforma o nombre del sistema operativo:', os.platform())
console.log('Arquitectura del procesador:', os.arch())
console.log('Versión del os', os.release())

console.log('CPUs:', os.cpus())
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)

console.log('uptime:', os.uptime() / 60 / 60)