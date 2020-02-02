const http =  require('http')
const app = require('./app')

const port = process.env.PORT || 3000 // Node-JS port

const server = http.createServer(app) //creating server

server.listen(port) // server start listening