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
            const response = await fetch('data/noticias.json');
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
    const budgetForm = document.getElementById('presupuestoForm');
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

        const name    = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const phone   = document.getElementById('phone').value.trim();
        const email   = document.getElementById('email').value.trim();

       // validar nombre - solo letras, max 15
        const nameRegex = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]+$/;
        if (!name) {
            showMessage('Por favor, ingresa tu nombre.', 'error'); return;
        }
        if (!nameRegex.test(name)) {
            showMessage('El nombre solo puede contener letras.', 'error'); return;
        }
        if (name.length > 15) {
            showMessage('El nombre no puede superar los 15 caracteres.', 'error'); return;
        }

        // --- APELLIDOS: solo letras, máximo 40 caracteres ---
        if (!surname) {
            showMessage('Por favor, ingresa tus apellidos.', 'error'); return;
        }
        if (!nameRegex.test(surname)) {
            showMessage('Los apellidos solo pueden contener letras.', 'error'); return;
        }
        if (surname.length > 40) {
            showMessage('Los apellidos no pueden superar los 40 caracteres.', 'error'); return;
        }

        // --- TELÉFONO: solo números, máximo 9 dígitos ---
        const phoneRegex = /^\d+$/;
        if (!phone) {
            showMessage('Por favor, ingresa tu teléfono.', 'error'); return;
        }
        if (!phoneRegex.test(phone)) {
            showMessage('El teléfono solo puede contener números.', 'error'); return;
        }
        if (phone.length > 9) {
            showMessage('El teléfono no puede superar los 9 dígitos.', 'error'); return;
        }

        // --- EMAIL: formato estándar ---
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
         showMessage('Por favor, ingresa tu email.', 'error'); return;
        }
        if (!emailRegex.test(email)) {
            showMessage('Por favor, ingresa un email válido.', 'error'); return;
     }

     // --- TÉRMINOS: obligatorio ---
     const terms = document.getElementById('terms').checked;
     if (!terms) {
            showMessage('Debes aceptar los términos y condiciones.', 'error'); return;
     }

        // Todo correcto — mostrar éxito y resetear
        showMessage('¡Presupuesto solicitado exitosamente! Te contactaremos pronto.', 'success');
        budgetForm.reset();
        calculateTotal();
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

// En main.js — imágenes de galería con URLs de Unsplash (libres de uso)
const galeriaImages = [
  {
    src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    alt: "Reloj de lujo dorado sobre fondo oscuro"
  },
  {
    src: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    alt: "Reloj clásico de caballero plateado"
  },
  {
    src: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800",
    alt: "Reloj deportivo con cronógrafo"
  },
  {
    src: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800",
    alt: "Reloj de dama con brazalete plateado"
  },
  { src: "../img/showcase_2.gif", alt: "Omega Seamaster 007" },
  { src: "../img/showcase_3.gif", alt: "Grand Seiko edición especial" }
];

// Generar slides del Swiper dinámicamente desde el array
function inicializarGaleria() {
    const wrapper = document.querySelector('.swiper-wrapper');
    if (!wrapper) return; // Solo ejecuta si estamos en galeria.html

    // Limpiar el wrapper antes de añadir
    wrapper.innerHTML = '';

    galeriaImages.forEach(imagen => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${imagen.src}" alt="${imagen.alt}">`;
        wrapper.appendChild(slide);
    });
}

// Llamar la función antes de inicializar Swiper
inicializarGaleria();