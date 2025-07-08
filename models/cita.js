const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true }
});

module.exports = mongoose.model('Cita', citaSchema);
