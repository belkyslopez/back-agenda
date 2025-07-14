const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  descripcion: String,
});

module.exports = mongoose.model('Categoria', categoriaSchema);