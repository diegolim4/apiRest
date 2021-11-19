const express  = require('express')

const User = require('../models/user')


const router = express.Router() // buscando a classe Router do express

router.post('/register', async (req, res) =>{
    try {
        const user =  await User.create(req.body)

        return res.send({ user })

    }catch (err){
        return res.status(400).send({ error: 'falha ao registrar'})
    }
})

module.exports = app => app.use('/auth', router)