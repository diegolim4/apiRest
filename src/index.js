const express = require ('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res)=> {
    res.send('Hello world')
})

const PORT = 1200
app.listen(PORT, ()=>{
    console.log('Rodando em http://localhost:'+ PORT)
})