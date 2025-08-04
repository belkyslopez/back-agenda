const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String, 
  correo: String,
  telefono: String,
  password: String,
  rol: {
    type: String,
    enum: ['admin', 'cliente', 'profesional'],
    required: true
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);