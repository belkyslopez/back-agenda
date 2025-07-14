const Cita = require('../models/cita');

// Obtener todas las citas
exports.obtenerCitas = async (req, res) => {
    const citas = await Cita.find();
    res.json(citas);
};

// Crear una cita
exports.crearCita = async (req, res) => {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.json(nuevaCita);
};

// Eliminar una cita
 exports.eliminarCita = async (req, res) => {
    await Cita.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cita eliminada' });
 };


