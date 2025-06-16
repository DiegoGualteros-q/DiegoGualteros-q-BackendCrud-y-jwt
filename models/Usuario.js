const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema ({
    Nombre:{
        type: String,
        required: true,
    },

    Email:{
        type: String,
        required: true,
        unique:true,
    },
    
    Contraseña:{
        type: String,
        required: true,
       
    }

    


})

module.exports = mongoose.model('Usuario', UserSchema);