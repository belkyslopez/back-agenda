const Cita = require('../models/cita');
const mongoose = require('mongoose');

// Obtener todas las citas
exports.obtenerCitas = async (req, res) => {
    const citas = await Cita.find();
    res.json(citas);
};

// Obtener todos las citas por servicio
exports.getCitasPorServicio = async (req, res) => {
    console.log(" 📌 entró a getCitasPorServicio");
  try {
    const { servicioId } = req.params;
    // Validación: verificar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(servicioId)) {
      return res.status(400).json({ error: '⚠️ ID del servicio no válido' });
    }
    // Buscar citas asociadas a ese servicio
    const citas = await Cita.find({ servicio: servicioId }).populate('servicio');
    console.log("citas", citas);
    if (!citas || citas.length === 0) {
      return res.status(200).json({ msg: 'ℹ️ No se encontraron citas para este servicio',citas });
    }
    res.status(200).json(citas);
  } catch (err) {
    res.status(500).json({ 
        error: '❌ Error al obtener citas por servicio', detalle: err.message });
  }
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


