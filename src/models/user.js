const mongoose = require('../databases')

// schema são os campos da tabela do usuários   
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false  // para qndo trazer os usuários do db não trazer a senha 
    },
    createdAt:{ 
        type: Date,
        default: Date.now  // data em que o registro vai ser criado

    },
});

// definir o model:

const User = mongoose.model('User', UserSchema)

module.exports = User

