const express = require('express');
const router = express.Router();
const horariosController = require('../controllers/horarios.controller');

// Endpoints
router.get('/:fecha', horariosController.obtenerHorarios);
router.get('/disponibles/:fecha/:profesionalId', horariosController.obtenerHorariosDisponibles);

module.exports = router;