import { platform, arch, release, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo!')
console.log('Plataforma o nombre del sistema operativo:', platform())
console.log('Arquitectura del procesador:', arch())
console.log('Versión del os', release())

console.log('CPUs:', cpus())
console.log('Memoria libre:', freemem() / 1024 / 1024)
console.log('Memoria total:', totalmem() / 1024 / 1024)

console.log('uptime:', uptime() / 60 / 60)