const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citas.controller');

// Endpoints
router.get('/', citasController.obtenerCitas);
router.post('/', citasController.crearCita);
router.delete('/:id', citasController.eliminarCita);

module.exports = router;
