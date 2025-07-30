const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  fecha: Date,
  hora: String,
  estado: String,
  observaciones: String,
  servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  },
   usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
    profesional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profesional',
    required: true
  }
});

module.exports = mongoose.model('Cita', citaSchema);