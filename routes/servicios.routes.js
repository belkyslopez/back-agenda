const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicios.controller');
const Servicio = require('../models/servicio');

// Endpoints
router.get('/categoria/:categoriaId', serviciosController.getServiciosPorCategoria);

router.post('/', serviciosController.crearServicio);

router.delete('/:id', serviciosController.eliminarServicio);

module.exports = router;
