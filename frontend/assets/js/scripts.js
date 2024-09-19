/**
 * Funciones y lógica del frontend
 */
document.addEventListener('DOMContentLoaded', () => {
    // Función para obtener y mostrar el menú
    function fetchMenu() {
        fetch('http://localhost:3000/api/menu') // Ruta ajustada para el backend
            .then(response => response.json())
            .then(data => {
                const menuContainer = document.getElementById('menu-container');
                const menuList = document.getElementById('menu-list');
                menuList.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos

                data.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.nombre} - $${item.precio}`;
                    menuList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error al obtener el menú:', error));
    }

    // Llama a la función para obtener el menú cuando la página cargue
    fetchMenu();

    // Código para el formulario de registro
    document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores ingresados
        var username = document.getElementById('username')?.value;
        var email = document.getElementById('register-email')?.value;
        var password = document.getElementById('register-password')?.value;

        // Validaciones básicas
        if (username && email && password) {
            // Enviar los datos al servidor
            fetch('http://localhost:3000/api/usuarios', { // Ruta ajustada para el backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('message')?.textContent = data.message;
                document.getElementById('message')?.style.color = "green";
            })
            .catch(error => {
                document.getElementById('message')?.textContent = "Error al registrar.";
                document.getElementById('message')?.style.color = "red";
                console.error('Error al enviar los datos:', error);
            });
        } else {
            document.getElementById('message')?.textContent = "Por favor, complete todos los campos.";
            document.getElementById('message')?.style.color = "red";
        }
    });

    // Código para la pantalla de inicio de sesión, registro y botones de navegación
    document.getElementById('sign-in-btn')?.addEventListener('click', function() {
        document.getElementById('login-screen')?.style.display = 'none';
        document.getElementById('home-screen')?.style.display = 'block';
    });

    document.getElementById('create-account-btn')?.addEventListener('click', function() {
        document.getElementById('login-screen')?.style.display = 'none';
        document.getElementById('register-screen')?.style.display = 'block';
    });

    document.getElementById('back-to-login-btn')?.addEventListener('click', function() {
        document.getElementById('register-screen')?.style.display = 'none';
        document.getElementById('login-screen')?.style.display = 'block';
    });

    // Manejo de eventos para la pantalla de inicio
    document.getElementById('favorites-btn')?.addEventListener('click', function() {
        window.location.href = "/favoritos"; // Redirige a la página de favoritos
    });

    document.getElementById('add-place-btn')?.addEventListener('click', function() {
        window.location.href = "/agregar-lugar"; // Redirige a la página para agregar un lugar
    });

    document.getElementById('settings-btn')?.addEventListener('click', function() {
        window.location.href = "/ajustes"; // Redirige a la página de ajustes
    });

    document.getElementById('promotions-btn')?.addEventListener('click', function() {
        window.location.href = "/promociones"; // Redirige a la página de promociones
    });

    // Código para el carrusel
    const carouselImages = document.querySelector('.carousel-images');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showImage(index) {
        const totalImages = carouselImages.children.length;
        if (index >= totalImages) index = 0;
        if (index < 0) index = totalImages - 1;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    // Añade eventos a los indicadores
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => showImage(i));
    });

    // Muestra la primera imagen al cargar
    showImage(0);
});
