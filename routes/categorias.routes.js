const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

// Endpoints

router.post('/', categoriasController.crearCategoria);
router.get('/', categoriasController.obtenerCategorias);
router.delete('/:id', categoriasController.eliminarCategoria);


module.exports = router;