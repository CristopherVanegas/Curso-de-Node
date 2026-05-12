const http = require('node:http')
const { findAvailablePort } = require('./findAvailablePort')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((res, req) => {
    console.log('request event')
    req.end('Respuesta enviada al cliente')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(0, () => {
        console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`)
    })
})