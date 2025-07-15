const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  cliente: String,
  telefono: String,
  fecha: Date,
  hora: String,
  servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  }
});

module.exports = mongoose.model('Cita', citaSchema);