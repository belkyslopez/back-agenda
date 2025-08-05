const Cita = require('../models/cita');
const mongoose = require('mongoose');

// Obtener todas las citas
// exports.obtenerCitas = async (req, res) => {
//     const citas = await Cita.find();
//     res.json(citas);
// };

exports.obtenerCitas = async (req, res) => {
  try {
    const { usuario_ID, fecha, hora } = req.body;
     if (!usuario_ID) {
      return res.status(400).json({ error: 'Falta el ID del usuario' });
    }
    const filtro = {};
    const citas = await Cita.find(filtro)
      .populate('usuario_ID')
      .populate('profesional_ID')
      .populate('servicio_ID');
    res.status(200).json(citas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las citas', detalle: err.message });
  }
};


// Obtener todos las citas por servicio
// exports.getCitasPorServicio = async (req, res) => {
//   try {
//     const { servicioId } = req.params;
//     // Validación: verificar que el ID sea un ObjectId válido
//     if (!mongoose.Types.ObjectId.isValid(servicioId)) {
//       return res.status(400).json({ error: '⚠️ ID del servicio no válido' });
//     }
//     // Buscar citas asociadas a ese servicio
//     const citas = await Cita.find({ servicio: servicioId }).populate('servicio');
//     if (!citas || citas.length === 0) {
//       return res.status(200).json({ msg: 'ℹ️ No se encontraron citas para este servicio',citas });
//     }
//     res.status(200).json(citas);
//   } catch (err) {
//     res.status(500).json({ 
//         error: '❌ Error al obtener citas por servicio', detalle: err.message });
//   }
// };

exports.crearCita = async (req, res) => {
  try {
    const { servicio_ID, profesional_ID, usuario_ID, fecha, hora } = req.body;
    // Validación básica
    // if (!servicio_ID || !profesional_ID || !usuario_ID || !fecha || !hora) {
    //   return res.status(400).json({ error: 'Faltan datos obligatorios para crear la cita' });
    // }
    const nuevaCita = new Cita({ servicio_ID, profesional_ID, usuario_ID, fecha, hora });
    await nuevaCita.save();
    res.status(201).json({ msg: '✅ la Cita fue creada correctamente', Cita: nuevaCita });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la cita', detalle: err.message });
  }
};

// Eliminar una cita
exports.eliminarCita = async (req, res) => {
  await Cita.findByIdAndDelete(req.params.id);
  res.json({ message: 'Cita eliminada' });
};


