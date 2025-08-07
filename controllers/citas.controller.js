const Cita = require('../models/cita');
const Horario = require('../models/horario');

//Obtener todas las citas x usuario
exports.obtenerCitasxUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Falta el ID del usuario' });
    }
    const citas = await Cita.find({ usuario_ID: id })
      .populate('usuario_ID')
      .populate('profesional_ID')
      .populate('servicio_ID');
    res.status(200).json(citas);
  } catch (err) {
    res.status(500).json({ error: '❌ Error al obtener categorías', detalle: err.message });
  }
};

// exports.obtenerCitas = async (req, res) => {
//   try {
//     const { usuario_ID, fecha, hora } = req.body;
//      if (!usuario_ID) {
//       return res.status(400).json({ error: 'Falta el ID del usuario' });
//     }
//     const filtro = {};
//     const citas = await Cita.find(filtro)
//       .populate('usuario_ID')
//       .populate('profesional_ID')
//       .populate('servicio_ID');
//     res.status(200).json(citas);
//   } catch (err) {
//     res.status(500).json({ error: 'Error al obtener las citas', detalle: err.message });
//   }
// };


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
    // 1. Marcar el horario como no disponible
    await Horario.findOneAndUpdate(
      { fecha, hora_inicio: hora },
      { disponible: false }
    );
    // 2. Crear la cita
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


