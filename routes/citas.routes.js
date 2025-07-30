const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citas.controller');

// Endpoints
router.get('/servicios/:servicioId', citasController.getCitasPorServicio);
router.delete('/:id', citasController.eliminarCita);
router.post('/', citasController.crearCita);

module.exports = router;
