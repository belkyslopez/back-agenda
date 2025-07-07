/*const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Mi primer servidor con Node.js!\n');
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});*/


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB local
mongoose.connect('mongodb://localhost:27017/agenda', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('Error al conectar MongoDB:', err));

// Modelo
const Cita = require('./modelo/cita');

// Rutas

// Obtener todas las citas
app.get('/citas', async (req, res) => {
    const citas = await Cita.find();
    res.json(citas);
});

// Crear una cita
app.post('/citas', async (req, res) => {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.json(nuevaCita);
});

// Eliminar una cita
app.delete('/citas/:id', async (req, res) => {
    await Cita.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cita eliminada' });
});

// Levantar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});

