const express = require ('express')  
const bodyParser = require('body-parser')

const app = express()   // core da aplicação

app.use(bodyParser.json())  //  Para que ele entenda quando eu enviar uma requisição em json 
app.use(bodyParser.urlencoded({extended: false})) // para entender e decodar quando passar parâmetros via url

// rotas
app.get('/', (req, res)=> {
    res.send('Hello world!!!')
})

// Definindo a rota
const PORT = 1200
app.listen(PORT, ()=>{
    console.log('Rodando em http://localhost:'+ PORT)
})