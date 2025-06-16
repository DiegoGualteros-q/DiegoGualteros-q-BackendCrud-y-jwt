const express = require('express');

const router = express.Router();

const ProductosController = require ('../controllers/ProductosController');

//Rutas para los productos

router.post('/Productos', ProductosController.crearProductos );
router.get('/Productos', ProductosController.obtenerProductos);
router.get('/Productos/:id', ProductosController.obtenerProductosporId);
router.put('/Productos/:id', ProductosController.EditarProductos);
router.delete('/Productos/:id', ProductosController.EliminarProducto);

module.exports = router;
