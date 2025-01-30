const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: false
}))

app.use(express.json());

// Rutas
app.use('/api', routes);

// Sincronización
sequelize.sync({ alter: true }) //Modifico las tablas según modelos, pero sin alterar los datos.
    .then(async () => {
        console.log('✅ Base de datos sincronizada');

    })
    .catch(err => console.error('❌ Error al sincronizar la base de datos:', err));

app._router.stack.forEach(layer => {
    if (layer.route) {
        console.log(`Ruta registrada: ${layer.route.path}`);
    } else if (layer.name === 'router') {
        layer.handle.stack.forEach(subLayer => {
            if (subLayer.route) {
                console.log(`Ruta registrada: ${subLayer.route.path}`);
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
