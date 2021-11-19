const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true }) // noderest nome do meu banco de dados
mongoose.Promise = global.Promise // Padrão

module.exports = mongoose
