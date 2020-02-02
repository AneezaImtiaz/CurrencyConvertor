const express =  require('express') // frammework for Node-JS
const app = express() // use express utilities

const currencyRoutes = require('./Api/Routes/Currency')

app.use('/currency', currencyRoutes) // apply middleware to requests

module.exports = app