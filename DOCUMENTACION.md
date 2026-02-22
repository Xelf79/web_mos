# Documentación — Sitio Web MOS Technology

Última actualización: 21 de febrero de 2026

---

## 1. Estructura del proyecto

```
/
├── index.html              → Página principal
├── 404.html                → Página de error
├── style.css               → Todos los estilos
├── script.js               → Toda la lógica JS
├── robots.txt              → Configuración SEO
│
├── /lib/
│   ├── /css/               → Font Awesome, Swiper, fuentes
│   ├── /fonts/             → Inter y Outfit (.woff2)
│   ├── /js/                → Swiper y EmailJS
│   └── /webfonts/          → Fuentes de iconos FA (.woff2 y .ttf)
│
├── /Imagenes/              → Fotos del sitio (carrusel, equipo, aliados)
├── /Iconos/                → Logos de marcas aliadas (SVG/PNG)
└── /Certificados_Legales/  → Capturas de licencias de imágenes
```

El sitio no depende de nada externo. Todo está en local, incluyendo las 8 variantes de fuente de Font Awesome para que los iconos funcionen sin internet.

---

## 2. Cómo está organizado el sitio

El `index.html` tiene estas secciones en orden:
- **Inicio** (`#inicio`) — Carrusel con 3 diapositivas
- **Nosotros** (`#nosotros`) — Descripción de la empresa y estadísticas
- **Servicios** (`#servicios`) — Las 6 tarjetas de servicios
- **Información** (`#informacion`) — Misión, visión y por qué elegirnos
- **Aliados** (`#marcas`) — Logos de marcas y foto de alianzas
- **Contacto** (`#contacto`) — Formulario, datos y mapa

---

## 3. Comportamiento del carrusel

- Cambia de diapositiva automáticamente cada **7 segundos**.
- La transición dura **350ms** para que se sienta ágil.
- Cuando el usuario hace clic en una flecha, el temporizador se reinicia desde cero para no interrumpirlo.
- En móvil, las flechas están ocultas — se usa deslizar con el dedo.
- El efecto de zoom en las imágenes (Ken Burns) se aplica solo al `div.slide-bg`, no al texto.

### Para cambiar una diapositiva:
Busca el bloque `.swiper-slide` correspondiente en `index.html` y cambia la imagen en el `style` del `div.slide-bg`:
```html
<div class="slide-bg" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('Imagenes/tu-imagen.jpg')">
```

---

## 4. Formulario de contacto (EmailJS)

El formulario usa EmailJS para enviar correos sin servidor. Las credenciales están en `script.js`:

```js
emailjs.init("wQDv6jyhKo7bdnwaG");           // Public Key
emailjs.send('service_onzmfxx', 'template_nwf26qo', templateParams)  // Service + Template
```

Si cambia la cuenta de correo, hay que actualizar esos tres valores desde el panel de EmailJS.

---

## 5. Animaciones

Las animaciones de entrada (al hacer scroll) usan `IntersectionObserver`. Hay tres clases disponibles:
- `.reveal-left` — entra desde la izquierda
- `.reveal-right` — entra desde la derecha
- `.reveal-up` — entra desde abajo

Cuando el elemento entra en pantalla se le agrega `.revealed`. Cuando sale, se la quita, así la animación se repite si el usuario sube y vuelve a bajar.

Las animaciones usan `translate3d` para que las maneje la GPU y no haya tirones.

---

## 6. Notas varias

**Navegación:** Al hacer clic en un enlace del menú, la página baja dejando un margen de 100px (70px en móvil) para que el header no tape el título de cada sección.

**Tarjetas de servicios:** Solo el icono cambia de color al pasar el cursor. No hay movimiento ni sombra para evitar que el usuario piense que son botones.

**Marcas aliadas:** Los logos se muestran a color. Al pasar el cursor sube 3px y el logo crece un 5%. Sin más efectos para no confundir con algo clickeable.

**Instagram:** El enlace `@mostechnologypty` tiene color azul y una línea inferior que aparece al pasar el cursor, para que quede claro que es un link.

**Imágenes:** Todas están guardadas con nombres en español dentro de `/Imagenes/`. Tienen `width`, `height` y `loading="lazy"` para que la página no salte mientras carga.

**Colores principales:**
- Azul: `#00aeef`
- Verde: `#8dc63f`

---

## 7. Licencias de imágenes

Todas las fotos vienen de Unsplash con licencia libre para uso comercial. Las capturas de evidencia están en `/Certificados_Legales/`.

| Imagen | Archivo | Autor |
| :--- | :--- | :--- |
| Carrusel 1 | `inicio-diapositiva-1.jpg` | Dmitry Korkhau |
| Carrusel 2 | `inicio-diapositiva-2.jpg` | İsmail Enes Ayhan |
| Carrusel 3 | `inicio-diapositiva-3.jpg` | Vitaly Gariev |
| Nosotros | `equipo-nosotros.jpg` | Mapbox |
| Aliados | `aliados-tecnologia.jpg` | Akshat Sharma |
