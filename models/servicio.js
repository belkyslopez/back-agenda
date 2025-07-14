const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  duracion: Number,
  precio: Number,
  imagen: String,
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  }
});

module.exports = mongoose.model('Servicio', servicioSchema);
