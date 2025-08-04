const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;
const dayjs = require('dayjs');
const { v4: uuid } = require('uuid');

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

// Rutas

const citasRoutes = require('./routes/citas.routes');
const serviciosRoutes = require('./routes/servicios.routes');
const categoriasRoutes = require('./routes/categorias.routes');
const horariosRoutes = require('./routes/horarios.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

app.use('/api/citas', citasRoutes);
app.use('/api/servicios', serviciosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/horarios', horariosRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Levantar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});