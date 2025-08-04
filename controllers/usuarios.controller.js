const Usuario = require('../models/usuario');

//Obtener todos los usuarios disponibles
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    if (!usuarios || usuarios.length === 0) {
      return res.status(200).json({ msg: 'ℹ️ No se encontró el usuario', usuarios });
    }
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: '❌ Error al obtener usuarios', detalle: err.message });
  }
};