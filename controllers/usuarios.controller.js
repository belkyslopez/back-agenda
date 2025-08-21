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

  exports.obtenerUsuarioPorRut = async (req, res) => {
    try {
      const { rut } = req.body;              // /api/usuarios/:rut
      const usuario = await Usuario.findOne({ rut });

      if (!usuario) {
        return res.status(200).json({ usuarioEncontrado : null });
      }
      res.status(200).json( { usuarioEncontrado : usuario } );
    } catch (err) {
      res.status(500).json({ error: '❌ Error al obtener el usuario', detalle: err.message });
    }
  };

  // Crear Usuario
  exports.crearUsuario = async (req, res) => {
    try {
      const nuevoUsuario = new Usuario(req.body);
      await nuevoUsuario.save();
      res.status(201).json({ nuevoUsuario});
    } catch (err) {
      res.status(500).json({ error: '❌ Error al crear Usuario', detalle: err.message });
    }
  };