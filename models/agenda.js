const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
  profesional: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true 
  },
  dia_libre: { 
    type: String, 
    required: true,
    enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] 
  },
  dias: { 
    type: [mongoose.Schema.Types.ObjectId], 
    default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Agenda', agendaSchema);