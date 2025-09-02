const mongoose = require('mongoose');

const Dias_semanaSchema = new mongoose.Schema({
  fecha: Date,
  hora_inicio: String,
  hora_fin: String
});

module.exports = mongoose.model('Dias_semana', Dias_semanaSchema);