const mongoose = require('mongoose');

const diaSchema = new mongoose.Schema({
  dia: { 
    type: String, 
    required: true,
    enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] 
  },
  hora_inicio: { 
    type: String, 
    required: true,
    match: /^([0-1]\d|2[0-3]):([0-5]\d)$/   // formato HH:mm
  },
  hora_fin: { 
    type: String, 
    required: true,
    match: /^([0-1]\d|2[0-3]):([0-5]\d)$/ 
  },
  tiene_almuerzo: { type: Boolean, default: false },
  almuerzo_inicio: { type: String,  match: /^([0-1]\d|2[0-3]):([0-5]\d)$/   },
  almuerzo_fin: {   type: String,   match: /^([0-1]\d|2[0-3]):([0-5]\d)$/   }
}, { _id: false });

module.exports = mongoose.model('Dia', diaSchema);
