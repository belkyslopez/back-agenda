const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// Endpoints
router.get('/', usuariosController.obtenerUsuarios);
router.post('/buscar', usuariosController.obtenerUsuarioPorRut);
router.post('/', usuariosController.crearUsuario);

module.exports = router;