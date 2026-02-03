//Boton para despliegue de menu cuando pantalla esta a menos de 700px//
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')    
});

//Scroll reveal//
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay : 500});
ScrollReveal().reveal('#news-json', {delay : 550});
ScrollReveal().reveal('.cards-banner-one', {delay : 500});

//Scroll reveal PRESUPUESTO//
ScrollReveal().reveal('.contact-form', {delay : 500});

//Scroll reveal CONTACTO//
ScrollReveal().reveal('#mapa', {delay : 500});
ScrollReveal().reveal('#datos', {delay : 500});


//Seccion de noticias con JSON//
async function mostrarRelojes() {
    const contenedor = document.getElementById('news-json');
    if (contenedor) {
        try {
            const response = await fetch('../data/noticias.json');
            const data = await response.json();
            let html = '';
            data.forEach(item => {
                html += `
                <img src="${item.imagen}" alt="${item.nombre}">
                <h3>${item.marca} ${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p>Precio: ${item.precio}€</p>
                `;
            });
            contenedor.innerHTML = html;
        } catch (error) {
            console.error('Ha fallado cargando el archivo', error);
        }
    }
}

mostrarRelojes();

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const budgetForm = document.getElementById('budgetForm');
    if (budgetForm) {
        // Calculate total on load
        calculateTotal();
        
        // Add event listeners for changes
        document.getElementById('product').addEventListener('change', calculateTotal);
        document.getElementById('plazo').addEventListener('input', calculateTotal);
        document.querySelectorAll('input[name="extras"]').forEach(checkbox => {
            checkbox.addEventListener('change', calculateTotal);
        });
        
        budgetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate contact form
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            
            if (!name) {
                showMessage('Por favor, ingresa tu nombre.', 'error');
                return;
            }
            if (!surname) {
                showMessage('Por favor, ingresa tus apellidos.', 'error');
                return;
            }
            if (!phone) {
                showMessage('Por favor, ingresa tu teléfono.', 'error');
                return;
            }
            if (!email) {
                showMessage('Por favor, ingresa tu email.', 'error');
                return;
            }
            
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(phone)) {
                showMessage('Por favor, ingresa solo números en el teléfono.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Validate budget form
            const terms = document.getElementById('terms').checked;
            if (!terms) {
                showMessage('Debes aceptar los términos y condiciones.', 'error');
                return;
            }
            
            // Simulate form submission (since no backend)
            showMessage('¡Presupuesto solicitado exitosamente! Te contactaremos pronto.', 'success');
            // Optionally reset forms
            // document.getElementById('contactForm').reset();
            // budgetForm.reset();
            // calculateTotal();
        });
    }
});

function calculateTotal() {
    const productSelect = document.getElementById('product');
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productPrice = parseInt(selectedOption.getAttribute('data-price'));
    
    const plazo = parseInt(document.getElementById('plazo').value) || 1;
    
    let extrasTotal = 0;
    document.querySelectorAll('input[name="extras"]:checked').forEach(checkbox => {
        extrasTotal += parseInt(checkbox.getAttribute('data-price'));
    });
    
    let discount = 0;
    if (plazo >= 12) {
        discount = 0.2; // 20% discount
    } else if (plazo >= 6) {
        discount = 0.1; // 10% discount
    }
    
    const subtotal = productPrice + extrasTotal;
    const total = subtotal - (subtotal * discount);
    
    document.getElementById('total').textContent = total.toFixed(2) + '€';
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = type;
    messageDiv.style.color = type === 'success' ? '#4CAF50' : '#f44336';
}

// Gallery loader for galeria.html
if (document.querySelector('.swiper')) {
    function cargarGaleria() {
        const wrapper = document.querySelector('.swiper-wrapper');
        // Static slides with placeholder images
        let slides = `
            <div class="swiper-slide">
                <img src="../img/swiper.png" alt="Imagen 1">
                <h3>Casio</h3>
                <p>Reloj basico</p>
            </div>
            <div class="swiper-slide">
                <img src="../img/swiper_2.png" alt="Imagen 2">
                <h3>Seiko</h3>
                <p>Reloj intermedio</p>
            </div>
            <div class="swiper-slide">
                <img src="../img/swiper_3.png" alt="Imagen 3">
                <h3>Rolex</h3>
                <p>Reloj de lujo</p>
            </div>
        `;
        wrapper.innerHTML = slides;
        
        // Initialize Swiper
        if (typeof Swiper !== 'undefined') {
            try {
                const swiper = new Swiper('.swiper', {
                    direction: 'horizontal',
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                });
            } catch (error) {
                console.error('Error initializing Swiper:', error);
            }
        } else {
            console.error('Swiper library not loaded');
        }
    }
    cargarGaleria();
}

