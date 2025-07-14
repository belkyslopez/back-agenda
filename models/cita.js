const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    fecha: Date,
    hora: String,
    servicio: {
    nombre: String,
    categoria: String
  }
});

module.exports = mongoose.model('Cita', citaSchema);
