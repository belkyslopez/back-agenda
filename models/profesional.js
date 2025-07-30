const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  telefono: String,
  correo: String,
  imagen: String,
    agenda: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agenda',
      required: true
    }
});

module.exports = mongoose.model('Profesional', profesionalSchema);