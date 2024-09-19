// Ruta para autenticación (login, registro, logout, etc)
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar usuarios, que llama al controlador
router.post('/api/usuarios', authController.registrarUsuario);

module.exports = router;
