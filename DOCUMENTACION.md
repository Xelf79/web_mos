# Documentación del Proyecto: MOS Technology Web

Esta documentación proporciona una guía detallada sobre la estructura, configuración y mantenimiento del sitio web de **MOS Technology**.

---

## 1. Estructura de Archivos y Carpetas

El proyecto está organizado de manera que sea totalmente independiente (local), evitando dependencias externas para garantizar velocidad y robustez.

- **`/` (Raíz)**
  - `index.html`: Página principal y estructura del sitio.
  - `404.html`: Página de error personalizada para enlaces rotos.
  - `style.css`: Estilos visuales, variables de color y diseño responsivo.
  - `script.js`: Lógica de interactividad, carruseles y envío de formularios.
  - `robots.txt`: Configuración para buscadores (SEO).
  
- **`/lib/` (Librerías Locales)**
  - `/css/`: Archivos CSS de Font Awesome, Swiper y fuentes locales.
  - `/fonts/`: Archivos de tipografía real (Inter y Outfit).
  - `/js/`: Scripts de Swiper y EmailJS.
  - `/webfonts/`: Archivos de iconos físicos de Font Awesome.

- **`/Imagenes/`**: Fotografías del equipo, carrusel y logos corporativos de MOS.
- **`/Iconos/`**: Logotipos de las marcas aliadas (Dell, HP, Lenovo, etc.) en formato vectorial (SVG).

---

## 2. Configuración del Formulario (EmailJS)

La web utiliza **EmailJS** para enviar correos directamente desde el navegador sin necesidad de un servidor backend profesional.

### Cómo actualizar las credenciales:
Si deseas cambiar la cuenta que recibe los mensajes, abre `script.js` y busca la sección **6. Envío del Formulario**:

1. **Public Key**: `emailjs.init("wQDv6jyhKo7bdnwaG");`
2. **Service ID**: `emailjs.send('service_onzmfxx', ...)`
3. **Template ID**: `emailjs.send(..., 'template_nwf26qo', ...)`

Puedes obtener estos IDs creando una cuenta gratuita en [emailjs.com](https://www.emailjs.com/).

---

## 3. Mantenimiento y Actualizaciones

### Añadir una nueva Marca Aliada:
1. Sube el logo a la carpeta `/Iconos/`.
2. En `index.html`, busca la sección `<div class="brands-grid">`.
3. Copia y pega un bloque de `<div class="brand-card">`, actualizando la ruta de la imagen:
   ```html
   <div class="brand-card">
       <img src="Iconos/tu-nueva-marca.svg" alt="Nombre Marca" class="brand-logo">
   </div>
   ```

### Cambiar Textos del Carrusel (Inicio):
Busca la clase `.hero-swiper` en `index.html`. Cada `<div class="swiper-slide">` representa una diapositiva. Puedes cambiar los títulos `<h1>` y párrafos `<p>` fácilmente.

---

## 4. Recomendaciones de Hosting

Para subir la web a internet:
1. Comprime todos los archivos mencionados en el punto 1 en un archivo **.zip**.
2. Súbelos a tu proveedor de hosting.
3. **Importante**: Asegúrate de que el archivo `index.html` esté en la carpeta raíz (principal) de tu servidor.

---

## 5. Notas Técnicas
- **Diseño**: Basado en colores institucionales (Azul MOS #00aeef y Verde MOS #8dc63f).
- **SEO**: Se han incluido meta-etiquetas descriptivas, jerarquía de encabezados (H1, H2) y atributos `alt` en las imágenes.
- **Responsividad**: La web es "Mobile First", adaptándose perfectamente a tablets y celulares.
