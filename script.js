document.addEventListener('DOMContentLoaded', () => {
    const mainMessageElement = document.getElementById('main-message');
    const signatureElement = document.getElementById('signature');

    // Mensaje personalizado para Óskar
    const message = `Mi amado Óskar,
En este día, y en cada uno, quiero que sepas
que mi amor por ti es infinito.
Eres el novio más increíble del universo,
mi confidente, mi alegría, mi hogar.
Confío en ti ciegamente y siempre, siempre,
estaré aquí para ti, en cada paso y en cada sueño.
Gracias por ser tú.`;

    // Efecto de máquina de escribir
    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            mainMessageElement.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 70); // Velocidad de escritura
        } else {
            // Cuando termina el typing, inicia la animación de la firma
            signatureElement.style.animation = 'fadeIn 2s ease-in 0.5s forwards';
        }
    }

    // Iniciar el efecto de máquina de escribir después de un pequeño retraso
    setTimeout(typeWriter, 1000); // Empieza 1 segundo después de cargar la página

    // --- Carrusel de Imágenes ---
    const imagePaths = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto7.jpg',
        'foto8.jpg'
        // Agrega más fotos aquí si tienes. ¡Asegúrate de que los nombres coincidan!
    ];

    const carouselContainer = document.querySelector('.background-carousel');
    let currentImageIndex = 0;

    function createAndLoadImage(src, index) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Óskar y yo ${index + 1}`;
        carouselContainer.appendChild(img);
        return img;
    }

    // Precarga todas las imágenes
    const images = imagePaths.map((path, index) => createAndLoadImage(path, index));

    function showNextImage() {
        // Desactiva la imagen actual
        if (images[currentImageIndex]) {
            images[currentImageIndex].classList.remove('active');
        }

        // Avanza al siguiente índice, o vuelve al principio
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Activa la nueva imagen
        images[currentImageIndex].classList.add('active');
    }

    // Muestra la primera imagen al inicio
    if (images.length > 0) {
        images[0].classList.add('active');
        setInterval(showNextImage, 6000); // Cambia de imagen cada 6 segundos
    }

    // --- Estrellas de fondo ---
    const numStars = 100; // Cantidad de estrellas fijas
    const numShootingStars = 5; // Cantidad de estrellas fugaces

    function createStars() {
        for (let j = 0; j < numStars; j++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = star.style.height = `${Math.random() * 3 + 1}px`; /* Tamaño entre 1 y 4px */
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para el parpadeo
            document.body.appendChild(star);
        }

        for (let j = 0; j < numShootingStars; j++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            shootingStar.style.left = `${Math.random() * 100}vw`;
            shootingStar.style.top = `${Math.random() * 50}vh`; // Aparecen más arriba
            shootingStar.style.animationDelay = `${Math.random() * 15}s`; // Retraso aleatorio para el disparo
            document.body.appendChild(shootingStar);
        }
    }

    createStars();
});
