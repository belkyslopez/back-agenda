
const mongoose = require('mongoose');
const Servicio = require('../models/servicio');

// Obtener todos los servicios por categoría
exports.getServiciosPorCategoria = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    // Validación: verificar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(categoriaId)) {
      return res.status(400).json({ error: '⚠️ ID de categoría no válido' });
    }
    // Buscar servicios asociados a esa categoría
    const servicios = await Servicio.find({ categoria: categoriaId }).populate('categoria');
    if (!servicios || servicios.length === 0) {
      return res.status(200).json({ msg: 'ℹ️ No se encontraron servicios para esta categoría',servicios });
    }
    res.status(200).json(servicios);
  } catch (err) {
    res.status(500).json({ 
        error: '❌ Error al obtener servicios por categoría', detalle: err.message });
  }
};

// Crear un servicio y asociarlo a una categoría
exports.crearServicio = async (req, res) => {
  try {
    const nuevoServicio = new Servicio(req.body);
    await nuevoServicio.save();
    res.status(201).json({ msg: '✅ Servicio creado correctamente', servicio: nuevoServicio });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear servicio', detalle: err.message });
  }
};

// Eliminar un servicio
exports.eliminarServicio = async (req, res) => {
  try {
    await Servicio.findByIdAndDelete(req.params.id);
    res.json({ msg: '🗑️ Servicio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar servicio', detalle: err.message });
  }
};