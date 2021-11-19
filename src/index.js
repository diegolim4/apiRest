const express = require ('express')  
const bodyParser = require('body-parser')


const app = express()   // core da aplicação

app.use(bodyParser.json())  //  Para que ele entenda quando eu enviar uma requisição em json 
app.use(bodyParser.urlencoded({extended: false})) // para entender e decodar quando passar parâmetros via url

require("./controllers/authControll")(app)


// Definindo a rota
const PORT = 4500
app.listen(PORT, ()=>{
    console.log('Rodando em http://localhost:'+ PORT)
})