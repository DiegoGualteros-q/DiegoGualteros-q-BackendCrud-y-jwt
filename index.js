require('dotenv').config();

const express = require('express');
const conectarDB = require ('./config/db');
const router = require('./routes/Productos');
const autenRouter = require ('./routes/Auten');



const app = express ();//agregar las funciones de express
conectarDB();//Conectar a la base de datos

app.get('/', (req,res)=>{
    res.send ("Hola mundo desde express");
})


const port =3000;

//middleware para leer los datos en formato JSON

app.use(express.json())

app.use ('/api', router); //usar las rutas de los productos
app.use('/api/auten', autenRouter);
app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);

})