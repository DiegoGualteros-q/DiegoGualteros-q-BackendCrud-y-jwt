const Usuario = require ('../models/Usuario');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');


exports.registeruser = async(req , res)=>{

   const {Nombre, Email, Contraseña} = req.body

   try{
    let usuario = await Usuario.findOne({Email});
    if(usuario){
        return res.status(400).json({message:'El usuario ya existe'});

    }

    usuario = new Usuario ({Nombre, Email, Contraseña});
    const salt = await bcrypt.genSalt(10);
    usuario.Contraseña= await bcrypt.hash(Contraseña, salt)
    
    await usuario.save();

    const payload = {usuario : {id: usuario.id}}

    const token =  jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn :"1h"
        
    });
    
    res.json ({token});

}catch(error){
    console.log(error);
    res.status(500).send('Error en el servidor');

   }
}


exports.autenticaruser = async (req,res)=>{
    const {Email, Contraseña} =req.body;

    try{

        const usuario = await Usuario.findOne({Email});
        if(!usuario){
            return res.status(400).json({message:'El usuario no existe'});

        }

        const esMatch = await bcrypt.compare(Contraseña, user.Contraseña);
        if(!esMatch){
            return res.status(400).json({message:'Contraseña incorrecta'});

        }

        const payload = {usuario:{id:usuario.id}}
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:"1h"
        })

        res.json({token})
    }catch(error){
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}