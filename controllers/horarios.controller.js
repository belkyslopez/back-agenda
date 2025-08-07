
const Horario = require('../models/horario');
const Cita = require('../models/cita');

//Obtener todos los horarios disponibles
exports.obtenerHorarios = async (req, res) => {
  try {
    const { fecha } = req.params;
    // Validación: verificar que la fecha sea un ObjectId válido
    if (!Date.parse(fecha)) {
      return res.status(400).json({ error: '⚠️ la fecha no es válida' });
    }
    const horarios = await Horario.find({ fecha , disponible: true});
    if (!horarios || horarios.length === 0) {
      return res.status(200).json({ msg: 'ℹ️ No se encontraron horario para este servicio', horarios });
    }
    res.status(200).json(horarios);
  } catch (err) {
    res.status(500).json({ error: '❌ Error al obtener horarios', detalle: err.message });
  }
};

// Obtener horarios disponibles para un profesional en una fecha
exports.obtenerHorariosDisponibles = async (req, res) => {
  try {
    const { fecha, profesionalId } = req.params;
    if (!fecha || !profesionalId) {
      return res.status(400).json({ error: 'Faltan parámetros requeridos' });
    }
    // Obtener todas las horas posibles del profesional para ese día
    const horarios = await Horario.find({ fecha, profesional_ID: profesionalId , disponible: true});
    // Obtener citas agendadas en esa fecha para ese profesional
    const citas = await Cita.find({ fecha, profesional_ID: profesionalId });
    const horasOcupadas = citas.map(c => c.hora);
    // Filtrar horarios para dejar solo los no ocupados
    const horariosDisponibles = horarios.filter(
      h => !horasOcupadas.includes(h.hora_inicio)
    );
    res.json(horariosDisponibles);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener horarios disponibles', detalle: err.message });
  }
};

