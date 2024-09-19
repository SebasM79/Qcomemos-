// Archivo principal del servidor con configuración de Express
/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./backend/routes/authRoutes');
const lugaresRoutes = require('./backend/routes/lugaresRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);

// Conexión a MongoDB
mongoose
	.connect('mongodb://localhost/qcomemos', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Conectado a MongoDB'))
	.catch((err) => console.log(err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Importar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');

// Usar las rutas de autenticación
app.use('/', authRoutes);

// Ruta para obtener el menú (index.html)
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
// Archivo principal del servidor con configuración de Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const lugaresRoutes = require('./routes/lugaresRoutes');

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/places', lugaresRoutes);

// Conexión a MongoDB
mongoose
    .connect('mongodb://localhost/qcomemos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log(err));

// Ruta para servir el archivo index.html
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const lugaresRoutes = require('./routes/lugaresRoutes');

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/places', lugaresRoutes);

// Conexión a MongoDB
mongoose
    .connect('mongodb://localhost/qcomemos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log(err));

// Servir archivos estáticos desde el frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

