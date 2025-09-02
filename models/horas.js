const mongoose = require('mongoose');

const HorasSchema = new mongoose.Schema({
  horario_trabajo: {
    inicio: { type: String, required: true },
    fin: { type: String, required: true }
  },
  tiempo_libre: {
    inicio: { type: String, required: true },
    fin: { type: String, required: true }
  }

});

module.exports = mongoose.model('Horas', HorasSchema);