# 🚀 Agustín Marquardt - Portfolio Personal

Un portfolio moderno y minimalista construido con **Astro** + **TailwindCSS**, diseñado para destacar experiencia en desarrollo móvil e integración de IA.

## ✨ Características

- **🎨 Diseño Minimalista**: Interfaz limpia y moderna con paleta de colores neutra
- **📱 Mobile-First**: Completamente responsivo y optimizado para dispositivos móviles
- **⚡ Rendimiento Optimizado**: Construido con Astro para máxima velocidad
- **🌙 Modo Oscuro**: Soporte completo para tema claro y oscuro
- **🎭 Animaciones Suaves**: Micro-interacciones y animaciones CSS personalizadas
- **♿ Accesible**: Siguiendo las mejores prácticas de accesibilidad web
- **🔍 SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Tipografía**: [Inter Font](https://fonts.google.com/specimen/Inter)
- **Iconos**: SVG personalizedos y emojis
- **Hosting**: Listo para desplegar en Vercel, Netlify o similares

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro    # Navegación principal
│   ├── Footer.astro    # Pie de página
│   ├── ProjectCard.astro  # Tarjeta de proyecto
│   ├── InterestCard.astro # Tarjeta de interés
│   └── Button.astro    # Botón reutilizable
│
├── layouts/            # Layouts de página
│   └── MainLayout.astro # Layout principal
│
├── pages/              # Páginas del sitio
│   ├── index.astro     # Página de inicio
│   ├── about.astro     # Sobre mí
│   ├── projects.astro  # Proyectos
│   ├── interests.astro # Intereses
│   └── contact.astro   # Contacto
│
├── data/               # Datos en JSON
│   ├── projects.json   # Lista de proyectos
│   └── interests.json  # Lista de intereses
│
└── styles/             # Estilos globales
    └── global.css      # CSS personalizado y animaciones
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/agustin-marquardt/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en http://localhost:4321

# Producción
npm run build        # Construir para producción
npm run preview      # Vista previa de la build

# Herramientas
npm run astro        # CLI de Astro
```

## 📝 Personalización

### Agregar Nuevos Proyectos

Edita `src/data/projects.json`:

```json
{
  "name": "Nombre del Proyecto",
  "description": "Descripción detallada del proyecto...",
  "link": "https://github.com/usuario/proyecto",
  "technologies": ["React", "Node.js", "MongoDB"],
  "featured": true
}
```

### Agregar Nuevos Intereses

Edita `src/data/interests.json`:

```json
{
  "name": "Nombre del Interés",
  "description": "Descripción del interés...",
  "icon": "🎯"
}
```

### Personalizar Colores

Modifica `tailwind.config.js` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tu paleta personalizada
      }
    }
  }
}
```

### Modificar Animaciones

Las animaciones se encuentran en `src/styles/global.css`:

- `.fade-in` - Aparición con fade
- `.slide-up` - Deslizamiento hacia arriba
- `.stagger-*` - Retrasos escalonados

## 🎯 Secciones del Portfolio

### 🏠 Inicio
- Presentación personal con foto/avatar
- Descripción del rol principal
- Call-to-actions hacia proyectos y contacto
- Stack tecnológico destacado

### 👨‍💻 Sobre Mí
- Experiencia profesional detallada
- Formación académica
- Proyectos personales
- Intereses y pasatiempos

### 💼 Proyectos
- Proyectos destacados vs. otros proyectos
- Tecnologías utilizadas
- Enlaces a GitHub
- Instrucciones para agregar más proyectos

### ❤️ Intereses
- Inteligencia Artificial
- Finanzas
- Desarrollo Personal
- Cocina
- Secciones expandidas para cada interés

### 📧 Contacto
- Múltiples formas de contacto
- Formulario de contacto (demo)
- FAQ - Preguntas frecuentes
- Links a redes sociales

## 🎨 Características de Diseño

### Responsive Design
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: xs, sm, md, lg, xl, 2xl
- **Navegación**: Menú hamburguesa en móvil

### Animaciones
- **Scroll Animations**: Elementos aparecen al hacer scroll
- **Hover Effects**: Micro-interacciones suaves
- **Staggered Animations**: Animaciones escalonadas
- **Reduced Motion**: Respeta las preferencias de accesibilidad

### Accesibilidad
- **Contraste**: Cumple estándares WCAG
- **Focus States**: Indicadores visuales claros
- **Alt Text**: Descripciones para imágenes
- **Semantic HTML**: Estructura semántica correcta

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

## 📧 Contacto

**Agustín Marquardt**
- Email: agustin.marquardt@email.com
- LinkedIn: [agustin-marquardt](https://linkedin.com/in/agustin-marquardt)
- GitHub: [agustin-marquardt](https://github.com/agustin-marquardt)

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!
