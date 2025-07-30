const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  rol: 'cliente' | 'profesional' |'admin',  
  password: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);