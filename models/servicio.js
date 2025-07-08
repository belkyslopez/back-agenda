const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
});

module.exports = mongoose.model('Servicio', citaSchema);
