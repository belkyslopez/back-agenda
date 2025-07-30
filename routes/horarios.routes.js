const express = require('express');
const router = express.Router();
const horariosController = require('../controllers/horarios.controller');

// Endpoints
router.get('/:fecha', horariosController.obtenerHorarios);

module.exports = router;