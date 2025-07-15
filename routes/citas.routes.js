const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citas.controller');
const Cita = require('../models/cita');

// Endpoints
router.get('/servicios/:servicioId', citasController.getCitasPorServicio);
router.delete('/:id', citasController.eliminarCita);
router.post('/', async (req, res) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.status(201).json({ message: 'Cita creada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la cita', detalle: error.message });
  }
});

module.exports = router;
