## Repositorio: https://github.com/leonelruz9-commits/Web-JS-HTML-CSS
## Hosting: https://leonelruz9-commits.github.io/Web-JS-HTML-CSS/

# Relojeria MARACAIBO - Sitio Web

## Descripción
Este es un sitio web para una tienda de relojes de lujo llamada "Relojeria MARACAIBO". Incluye páginas dinámicas con galería, calculador de presupuestos, formulario de contacto y noticias cargadas desde JSON.

## Características
- **Página Principal (index.html)**: Showcase, noticias dinámicas, banner y footer.
- **Calculador de Presupuestos (view/presupuesto.html)**: Formulario para calcular presupuesto de relojes con selección de productos, extras, plazos y descuentos automáticos.
- **Galería (view/galeria.html)**: Carrusel interactivo con Swiper mostrando imágenes de relojes.
- **Contacto (view/contacto.html)**: Página de contacto con información.
- **Responsive**: Diseño adaptativo para móviles y tablets.
- **Interactividad**: Menú hamburguesa, scroll reveal, validación de formularios.

## Tecnologías Utilizadas
- **HTML5**: Estructura del sitio.
- **CSS3**: Estilos y diseño responsivo con media queries.
- **JavaScript**: Funcionalidad dinámica, carga de datos JSON, validación de formularios, carrusel Swiper.
- **Swiper.js**: Librería para el carrusel de la galería.
- **ScrollReveal.js**: Animaciones de scroll.
- **JSON**: Datos de noticias y productos.

## Estructura del Proyecto
```
TRABAJO-JS-2/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── main.js             # JavaScript principal
├── data/
│   └── noticias.json       # Datos de noticias
├── img/                    # Imágenes (logos, showcases, etc.)
├── view/
│   ├── contacto.html       # Página de contacto
│   ├── galeria.html        # Galería de relojes
│   └── presupuesto.html    # Calculador de presupuestos
└── readme.txt              # Este archivo
```

## Instalación y Configuración
1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador web moderno.
3. Para desarrollo local, puedes usar un servidor HTTP simple:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - O cualquier servidor web.

## Uso
- **Navegación**: Usa el menú para acceder a diferentes secciones.
- **Presupuesto**: Selecciona producto, extras y plazo para calcular el total con descuentos.
- **Galería**: Navega por las imágenes con flechas, paginación o autoplay.
- **Responsive**: El sitio se adapta automáticamente a diferentes tamaños de pantalla.

## Funcionalidades JavaScript
- **Menú Móvil**: Toggle del menú en pantallas <700px.
- **Scroll Reveal**: Animaciones al hacer scroll.
- **Carga de Noticias**: Datos desde `noticias.json` en index.html.
- **Calculador de Presupuesto**: Cálculo dinámico con descuentos basados en plazo.
- **Validación de Formularios**: Campos requeridos, email y teléfono.
- **Galería Swiper**: Carrusel con navegación y autoplay.

## Notas de Desarrollo
- Las imágenes de la galería están hardcodeadas en `main.js`; reemplaza los `src="#"` con tus rutas de imagen.
- Los datos de noticias se cargan desde `noticias.json`; edita este archivo para cambiar el contenido.
- El formulario de presupuesto no envía datos a un servidor; es solo validación y mensaje de éxito.
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge).

## Autor
Desarrollado como proyecto final de JavaScript.

## Licencia
Este proyecto es de uso educativo.