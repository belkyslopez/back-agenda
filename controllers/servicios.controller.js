const Servicio = require('../models/servicio');

// Obtener todas los Servicios
exports.obtener = async (req, res) => {
    const servicios = await Servicio.find();
    res.json(servicios);
};

// Crear un Servicio
exports.crear = async (req, res) => {
    const nuevaServicio = new Servicio(req.body);
    await nuevaServicio.save();
    res.json(nuevaServicio, { message: 'servicio creado' });
};

// Eliminar un Servicio
exports.eliminar = async (req, res) => {
    await Servicio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Servicio eliminado' });
};
