const mongoose = require('mongoose');

const HorarioSchema = new mongoose.Schema({
  fecha: String,
  hora_inicio: String,
  hora_fin: String,
  disponible: Boolean,
  profesional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profesional',
    required: true
  },
});

module.exports = mongoose.model('Horario', HorarioSchema);