const express = require('express');
const router = express.Router();
const horasController = require('../controllers/horas.controller');

// Endpoints
router.get('/',horasController.obtenerHoras);
router.post('/',horasController.crearHoras);

module.exports = router;