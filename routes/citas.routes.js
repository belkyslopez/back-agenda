const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citas.controller');

// Endpoints
router.get('/usuario/:id', citasController.obtenerCitasxUsuario);
router.delete('/:id', citasController.eliminarCita);
router.post('/', citasController.crearCita);

module.exports = router;
