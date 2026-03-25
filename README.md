# ✨ MyM Decoraciones

Sitio web corporativo desarrollado para **MyM Decoraciones**, especialistas en ambientaciones y estética premium para eventos.  
Una plataforma interactiva y elegante diseñada para exhibir paquetes de decoración, cotizar extras y facilitar el contacto directo y presupuestación a medida.

> **Creamos decoraciones únicas para eventos inolvidables.**

---

## 🌐 Ver Proyecto Online

[![MyM Decoraciones](https://img.shields.io/badge/MyM%20Decoraciones-dba24a?style=for-the-badge)](https://mym-decoraciones.netlify.app/)

---

## 📌 Características Principales

- ✅ **Diseño Premium & Elegante**  
  Estética sofisticada utilizando una paleta de colores cuidadosamente seleccionada (Crema, Menta, Taupe, Oro) y tipografías clásicas (Playfair Display, Montserrat) para transmitir alta calidad.
- ✅ **Catálogo de Paquetes Adaptables**  
  Presentación dinámica de los formatos Soft, Mini, Express, Premium y Gigante, con una tabla comparativa interactiva para simplificar la elección del cliente.

- ✅ **Complementos & Modal Popup**  
  Sección categorizada de extras "Alta Gama" (iluminación, mobiliario, estructuras temáticas) listados con detalle de precios y condiciones mediante un modal animado de forma nativa.

- ✅ **CTAs Contextuales hacia WhatsApp**  
  Botones de contacto inteligentes en cada sección (Footer, Navbar, Detalles, Complementos, Hero) que pre-rellenan un mensaje específico dependiendo del producto que el usuario está consultando, agilizando todo el proceso de ventas.

- ✅ **UX/UI con Animaciones Fluidas**  
  Transiciones suaves en todos los componentes y elementos utilizando _Framer Motion_, brindando una experiencia "boutique" al navegar.

- ✅ **Totalmente Responsive**  
  Arquitectura adaptada al 100% para todo tipo de pantallas. Implementación de un menú lateral inteligente en dispositivos móviles y _horizontal scroll_ en tablas pesadas.

---

## 🧠 Propuesta de Valor

MyM Decoraciones busca que el cliente ya pueda imaginar la calidad de su evento desde la primera impresión en el sitio web, dejando reglas de contratación claras, comparativas de precio fáciles y contacto instantáneo.

### 🎈 Diferenciación Temática

Alternativas de estructuras diseñadas específicamente para Mundo Infantil (fantasía y diversión) vs. Celebraciones Especiales (elegancia, volumen y estética premium).

### 🎁 Transparencia en Valores

Facilidad para conocer el alcance exacto de cada cotización, desde los globos y cilindros incluidos, hasta qué focos de luz corresponden a cada dimensión elegida.

---

## 🛠️ Tecnologías Utilizadas

- **React.js (v18+)**
- **Vite**
- **Framer Motion** _(Animaciones de entrada, escalado por interacción, y ventanas modales animadas UI)_
- **React Router DOM** _(Ruteo dinámico con parámetros por URL `paquete/:id` y página 404 personalizada)_
- **Lucide React** _(Iconografía minimalista SVG)_
- **CSS3 Puro (Vanilla CSS)** _(Arquitectura modular con variables globales estructuradas para el UI Kit)_

---

## 📂 Estructura del Proyecto

```text
/src
├── components
│   ├── Complementos.jsx   # (Catálogo interactivo con Modales)
│   ├── ContactCom.jsx     # (CTA Contacto)
│   ├── Footer.jsx
│   ├── Hero.jsx           # (Portada principal animada)
│   ├── Navbar.jsx         # (Navegación Desktop/Mobile)
│   ├── ScrollToTop.jsx
│   └── Tamaños.jsx        # (Tabla comparativa horizontal)
│
├── data
│   ├── DataCom.js         # (Database de Complementos y Precios)
│   └── DataPaq.js         # (Database de Paquetes de Decoración)
│
├── page
│   ├── Complementos.jsx
│   ├── Contratacion.jsx
│   ├── DetallesPaq.jsx    # (Vista de detalles por ID)
│   ├── Home.jsx
│   ├── NotFound.jsx       # (Error 404 personalizado)
│   └── Paquetes.jsx
│
├── routes
│   └── routes.jsx         # (Definición global de rutas)
│
├── styles
│   ├── Complementos.css
│   ├── ContactCom.css
│   ├── DetallesPaq.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── Navbar.css
│   ├── NotFound.css
│   └── Tamaños.css
│
├── index.css              # (Variables CSS y root setup)
├── App.jsx
└── main.jsx
```

---

## 🚀 Instalación y Uso Local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/LautaroLeall/MyM_Decoraciones.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Iniciar servidor de desarrollo

```bash
npm run dev
```

---
