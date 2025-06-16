const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
    trim: true // Elimina espacios en blanco al inicio y final
  },
  Presentacion: {
    type: String,
    required: true,
    trim: true // Elimina espacios en blanco al inicio y final
  },
  Laboratorio: {
    type: String,
    required: true
  },
  Precio: {
    type: Number,
    required: true,
    min: 0 // El precio no puede ser negativo
  },
  Stock: {
    type: Number,
    required: true,
    min: 0 // El stock no puede ser negativo
  },
  Categoria: {
    type: String,
    enum: ['Analgésicos', 'Antibióticos', 'Antiinflamatorios', 'Antipireticos','Vitaminas', 'Cuidado Personal', 'Otros'], // Ejemplo de categorías
    required: true
  },
  imageUrl: {
    type: String,
    default: 'no-image.jpg' // Imagen por defecto si no se proporciona
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Productos', productSchema);