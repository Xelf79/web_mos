# Documentación del Proyecto: MOS Technology Web

Esta documentación proporciona una guía detallada sobre la estructura, configuración y mantenimiento del sitio web de **MOS Technology**.

---

## 1. Estructura de Archivos y Carpetas

El proyecto está organizado de manera que sea totalmente independiente (local), evitando dependencias externas para garantizar velocidad y robustez.

- **`/` (Raíz)**
  - `index.html`: Página principal y estructura del sitio.
  - `404.html`: Página de error personalizada para enlaces rotos.
  - `style.css`: Estilos visuales, variables de color, animaciones y diseño responsivo.
  - `script.js`: Lógica de interactividad, carruseles, modales y notificaciones.
  - `robots.txt`: Configuración para buscadores (SEO).
  
- **`/lib/` (Librerías Locales)**
  - `/css/`: Archivos CSS de Font Awesome, Swiper y fuentes locales.
  - `/fonts/`: Archivos de tipografía real (Inter y Outfit).
  - `/js/`: Scripts de Swiper y EmailJS.
  - `/webfonts/`: Archivos de iconos físicos de Font Awesome.

- **`/Imagenes/`**: Fotografías del equipo, carrusel y logos corporativos de MOS.
- **`/Iconos/`**: Logotipos de las marcas aliadas (Dell, HP, Lenovo, etc.) en formato vectorial (SVG) o imagen (PNG).

---

## 2. Características Especiales (UI/UX)

El sitio incluye varias características premium para mejorar la experiencia del usuario:

- **Carrusel "Ken Burns":** Las imágenes del inicio tienen un efecto de zoom suave y lento que les da dinamismo sin afectar la lectura del texto.
- **Notificaciones Toast:** Al enviar el formulario de contacto, aparece una notificación elegante en la parte inferior en lugar de las alertas clásicas del navegador.
- **Modales de Información:** Las secciones de "Privacidad" y "Términos" se abren en ventanas emergentes cristalizadas (`glassmorphism`) sin abandonar la página actual.
- **Menú Móvil Avanzado:** Incluye el logo corporativo, desenfoque de fondo y animaciones en cascada para los enlaces.

---

## 3. Configuración del Formulario (EmailJS)

La web utiliza **EmailJS** para enviar correos directamente desde el navegador.

### Cómo actualizar las credenciales:
Si deseas cambiar la cuenta que recibe los mensajes, abre `script.js` y busca la sección **6. Envío del Formulario**:

1. **Public Key**: `emailjs.init("YOUR_PUBLIC_KEY");`
2. **Service ID**: `emailjs.send('YOUR_SERVICE_ID', ...)`
3. **Template ID**: `emailjs.send(..., 'YOUR_TEMPLATE_ID', ...)`

---

## 4. Mantenimiento y Actualizaciones

### Añadir una nueva Marca Aliada:
1. Sube el logo a la carpeta `/Iconos/`.
2. En `index.html`, busca la sección `<div class="brands-grid">`.
3. Copia y pega un bloque de `<div class="brand-card">`, actualizando la ruta de la imagen:
   ```html
   <div class="brand-card">
       <img src="Iconos/tu-nueva-marca.svg" alt="Nombre Marca" class="brand-logo">
   </div>
   ```

### Cambiar Contenido del Carrusel:
Busca la clase `.hero-swiper` en `index.html`. Cada diapositiva está estructurada así:
```html
<div class="swiper-slide">
    <div class="slide-bg" style="background-image: ..."></div>
    <div class="slide-content">
        <h1>Título</h1>
        <p>Descripción</p>
        <a href="...">Botón</a>
    </div>
</div>
```
**Nota:** Es importante mantener la imagen en el `div.slide-bg` para conservar el efecto de zoom.

### Modificar Términos o Privacidad:
Busca los contenedores con ID `modal-privacy` o `modal-terms` al final de `index.html`. Puedes editar los párrafos directamente dentro del `modal-body`.

---

## 5. Notas Técnicas

- **Paleta de Colores**:
  - `--primary-blue`: #00aeef (Azul MOS)
  - `--primary-green`: #8dc63f (Verde MOS)
- **SEO**: Optimizado con meta-etiquetas de descripción, títulos descriptivos por página y jerarquía semántica H1-H4.
- **Rendimiento Móvil**:
  - Las animaciones de paralaje pesado se desactivan automáticamente en móviles para mayor fluidez.
  - Las flechas del carrusel se ocultan en móviles para priorizar el texto y el gesto táctil (swipe).
- **Compatibilidad**: Diseñado para funcionar en navegadores modernos (Chrome, Safari, Edge, Firefox) con soporte para efectos `backdrop-filter`.

---

## 6. Garantía Legal y Copyright (Seguridad Mensual)

Para garantizar la seguridad jurídica de **MOS Technology**, se han utilizado exclusivamente imágenes con licencia de uso comercial gratuito.

### Registro de Evidencias:
En la carpeta `/Certificados_Legales/` de este proyecto, se encuentran las capturas de pantalla tomadas al momento de la descarga de cada imagen. Estas capturas sirven como prueba de "buena fe" ante cualquier auditoría, mostrando:
1. El botón de **"Download Free"** de la plataforma original.
2. El nombre del **Autor/Fotógrafo**.
3. El estado de la licencia en la fecha de obtención (20 de febrero de 2026).

### Enlaces Directos (Verificación en Línea):
| Recurso | Autor | Enlace Directo (Original) |
| :--- | :--- | :--- |
| **Hero Slide 1** | Dmitry Korkhau | [Ver en Unsplash](https://unsplash.com/es/fotos/ABWk3C1tyMY) |
| **Hero Slide 2** | İsmail Enes Ayhan | [Ver en Unsplash](https://unsplash.com/es/fotos/lVZjvw-u9V8) |
| **Hero Slide 3** | Vitaly Gariev | [Ver en Unsplash](https://unsplash.com/es/fotos/cBVp_OPI320) |
| **Sobre Nosotros** | Mapbox | [Ver en Unsplash](https://unsplash.com/es/fotos/ZT5v0puBjZI) |
| **Aliados/Tecnología** | Akshat Sharma | [Ver en Unsplash](https://unsplash.com/es/fotos/mrTVz_fosMY) |

**Estado Legal:** Todas las imágenes mencionadas son libres de regalías (Royalty-Free) para uso comercial perpetuo e irrevocable.

