const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// Endpoints
router.get('/', usuariosController.obtenerUsuarios);

module.exports = router;