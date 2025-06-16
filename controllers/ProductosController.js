const Productos = require ('../models/Productos');


//Create a new product

exports.crearProductos = async (req,res)=>{
try{

    let data_Productos = new Productos(req.body);
    await data_Productos.save();
    res.send(data_Productos);

} catch (error){
    console.log(error);
    res.status(500).send({message:'Error al crear el producto'});
}
}

//obtener productos

exports.obtenerProductos = async(req,res)=>{
try{
    const data_Productos = await Productos.find();
    res.json (data_Productos);


}catch(error){
    console.log(error);
    res.status(500).send({message: 'Error al obtener las productos'});

}

}

//Traer producto por id

exports.obtenerProductosporId = async (req , res) =>{
    try{
        const data_Productos = await Productos.findById (req.params.id)
        if(!data_Productos){
            res.status (404).json({message:'Producto no encontrado'});

        }

        res.json (data_Productos);
    }catch(error) {
        console.log(error);
        res.status(500).send({message:'Errror al obtener el producto'});
    }

}

 
// Actualizar producto con el metodo de destructuracion de objeto

exports.EditarProductos = async (req,res)=>{
try{

    const {Nombre,Presentacion,Laboratorio,
    Precio,Stock,Categoria,imageUrl,createdAt} = req.body;
    let data_Productos =await Productos.findById (req.params.id);
    
    if(!data_Productos){
        return res.status(404).json({message:'Producto no encontrado'});
    }

        //actualizar los datos
        data_Productos= await Productos.findByIdAndUpdate (

            {_id:req.params.id},
            {Nombre,Presentacion,Laboratorio,
            Precio,Stock,Categoria,imageUrl,createdAt},
            {new :true},//devuelve el objeto actualizado

        );
        res.json(data_Productos);

    }catch(error){
        console.log(error);
        res.status(500).send({message:'Error al actualizar el producto'});
    }

}


// Delete producto

exports.EliminarProducto = async (req,res)=>{

    try{

        const data_Productos = await Productos.findById(req.params.id);
        if(!data_Productos){
            return res.status (404).json({message:'Producto no encontrado'});


        }
        await Productos.findByIdAndDelete(req.params.id);
        res.json({message:'Producto eliminado correctamente'});
        
    }catch(error){
        console.log(error);
        res.status(500).send({message:'Error al eliminar la nota'});

    }



}