const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agenda.controller');

// Endpoints
router.post('/crearAgenda', agendaController.crearAgendaProfesional);
router.get('/obtenerAgenda', agendaController.obtenerAgenda);
router.get('/obtenerAgendaxId/:id', agendaController.obtenerAgendaPorId);
// router.put('/actualizarAgenda/:id', agendaController.actualizarAgenda);
router.put('/actualizarAgendaProfesional/:id', agendaController.actualizarAgendaProfesional);
router.delete('/eliminarAgenda/:id', agendaController.eliminarAgenda);

module.exports = router;    