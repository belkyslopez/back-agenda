const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    servicio: { type: String, required: true },
    cliente: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true }
});

module.exports = mongoose.model('Cita', citaSchema);
