const Categoria = require('../models/categoria');

// Crear nueva categoría 
exports.crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.status(201).json({ msg: '✅ Categoría creada correctamente' });
  } catch (err) {
    res.status(500).json({ error: '❌ Error al crear categoría', detalle: err.message });
  }
};

// Obtener todas las categorías con servicios
exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: '❌ Error al obtener categorías', detalle: err.message });
  }
};

// Eliminar una categoria
exports.eliminarCategoria = async (req, res) => {
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({ message: 'Categoria eliminada' });
};