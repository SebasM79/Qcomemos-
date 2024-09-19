// Simulación de datos del menú
let menuItems = [
    { nombre: "Plato 1", precio: 100 },
    { nombre: "Plato 2", precio: 150 },
    { nombre: "Plato 3", precio: 200 }
];

// Función para obtener el menú
exports.getMenu = (req, res) => {
    res.json(menuItems);
};
