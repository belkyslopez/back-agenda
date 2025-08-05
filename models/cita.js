const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  fecha: Date,
  hora: String,
  // estado: String,
  // observaciones: String,
  servicio_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  },
  profesional_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
   usuario_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
});

module.exports = mongoose.model('Cita', citaSchema);