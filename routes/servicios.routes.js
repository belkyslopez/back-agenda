const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/servicios.controller');

// Endpoints
router.get('/', serviciosController.obtener);
router.post('/', serviciosController.crear);
router.delete('/:id', serviciosController.eliminar);

module.exports = router;
