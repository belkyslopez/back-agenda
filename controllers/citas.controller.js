const Cita = require('../models/cita');
const Horas = require('../models/horas');

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

exports.getCitasPorMesYProfesional = async (req, res) => {
  try {
    const { profesionalId, mes, anio } = req.params;
    if (!profesionalId || !mes || !anio) {
      return res.status(400).json({ error: 'Faltan parámetros requeridos' });
    }
    const mesInt = parseInt(mes);
    const anioInt = parseInt(anio);
    // Construimos el rango de fechas para ese mes
    const fechaInicio = new Date(anioInt, mesInt - 1, 1);
    const fechaFin = new Date(anioInt, mesInt, 0, 23, 59, 59); // último día del mes
    const citas = await Cita.find({
      profesional_ID: profesionalId,
      fecha: { $gte: fechaInicio, $lte: fechaFin },
    }).populate('usuario_ID')

    res.json(citas);
  } catch (error) {
    console.error('Error al obtener citas por profesional y mes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.crearCita = async (req, res) => {
  try {
    const { servicio_ID, profesional_ID, usuario_ID, fecha, hora } = req.body;
    // 1. Marcar el horario como no disponible
    await Horas.findOneAndUpdate(
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


