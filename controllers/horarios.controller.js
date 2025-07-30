
const Horario = require('../models/horario');

//Obtener todos los horarios disponibles
exports.obtenerHorarios = async (req, res) => {
  try {
    const { fecha } = req.params;
    // Validación: verificar que la fecha sea un ObjectId válido
    if (!Date.parse(fecha)) {
      return res.status(400).json({ error: '⚠️ la fecha no es válida' });
    }
    const horarios = await Horario.find({ fecha });
    if (!horarios || horarios.length === 0) {
      return res.status(200).json({ msg: 'ℹ️ No se encontraron horario para este servicio', horarios });
    }
    res.status(200).json(horarios);
  } catch (err) {
    res.status(500).json({ error: '❌ Error al obtener horarios', detalle: err.message });
  }
};
