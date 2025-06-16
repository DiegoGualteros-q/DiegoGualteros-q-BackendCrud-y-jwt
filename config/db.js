const mongoose = require('mongoose');

const conectarDB = async () =>{
    try{
        const dbUri = process.env.DB_MONGO
        if (!dbUri){
            throw new Error ("No se ha definido la variable de entorno DB_MONGO");

        }
        await mongoose.connect(dbUri,{});
        console.log("Conexion a la base de datos exitosa")

    } catch (error) {
        console.log("Error al conectar a la base de datos:", error.message);
        process.exit(1);//termina el proceso aca para que no se caiga o quede ahi.

    }


}

module.exports = conectarDB;