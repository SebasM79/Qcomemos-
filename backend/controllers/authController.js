// Controlador de login/registro de usuarios
exports.registrarUsuario = (req, res) => {
    const { username, email, password } = req.body;
    
    // Aquí puedes agregar la lógica para guardar el usuario en la base de datos
    console.log(`Usuario registrado: ${username}, ${email}`);
    res.json({ mensaje: 'Usuario registrado exitosamente' });
};
