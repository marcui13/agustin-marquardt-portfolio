# 🚀 Agustín Marquardt - Portfolio Personal

Un portfolio moderno y minimalista construido con **Astro** + **TailwindCSS**, diseñado para destacar experiencia en desarrollo móvil e integración de IA.

## ✨ Características

- **🎨 Diseño Minimalista**: Interfaz limpia y moderna con paleta de colores neutra
- **🌐 Bilingüe**: Soporte completo para español e inglés con navegación intuitiva
- **📱 Mobile-First**: Completamente responsivo y optimizado para dispositivos móviles
- **⚡ Rendimiento Optimizado**: Construido con Astro para máxima velocidad
- **🌙 Modo Oscuro**: Soporte completo para tema claro y oscuro
- **🎭 Animaciones Suaves**: Micro-interacciones y animaciones CSS personalizadas
- **♿ Accesible**: Siguiendo las mejores prácticas de accesibilidad web
- **🔍 SEO Optimizado**: Meta tags y estructura semántica
- **🔄 i18n Integrado**: Sistema de traducción centralizado y extensible

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
│   ├── Header.astro    # Navegación principal con switcher de idioma
│   ├── Footer.astro    # Pie de página
│   ├── ProjectCard.astro  # Tarjeta de proyecto
│   ├── InterestCard.astro # Tarjeta de interés
│   ├── Button.astro    # Botón reutilizable
│   └── LanguageSwitcher.astro # Cambio de idioma
│
├── layouts/            # Layouts de página
│   └── MainLayout.astro # Layout principal
│
├── pages/              # Páginas del sitio
│   ├── index.astro     # Página de inicio (inglés)
│   ├── about.astro     # Sobre mí (inglés)
│   ├── projects.astro  # Proyectos (inglés)
│   ├── interests.astro # Intereses (inglés)
│   ├── contact.astro   # Contacto (inglés)
│   └── es/             # Páginas en español
│       ├── index.astro     # Inicio (español)
│       ├── about.astro     # Sobre mí (español)
│       ├── projects.astro  # Proyectos (español)
│       ├── interests.astro # Intereses (español)
│       └── contact.astro   # Contacto (español)
│
├── i18n/               # Sistema de traducción
│   ├── ui.ts           # Traducciones centralizadas
│   └── utils.ts        # Utilidades de i18n
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

### 🌐 Sistema de Traducciones

El portfolio incluye soporte bilingüe (español/inglés) con las siguientes características:

- **Idioma por defecto**: Inglés (`/`)
- **Idioma secundario**: Español (`/es/`)
- **Cambio dinámico**: Switch de idioma en el header
- **URLs localizadas**: Rutas diferentes según el idioma

#### Agregar nuevas traducciones

Edita `src/i18n/ui.ts`:

```typescript
export const ui = {
  es: {
    'key': 'Texto en español'
  },
  en: {
    'key': 'Text in English'
  }
} as const;
```

#### Usar traducciones en componentes

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('page.title')}</h1>
```

### 💼 Agregar Nuevos Proyectos

Edita `src/data/projects.json`:

```json
{
  "name": "Project Name",
  "description": "Detailed project description...",
  "link": "https://github.com/user/project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "featured": true
}
```

### ❤️ Agregar Nuevos Intereses

Edita `src/data/interests.json`:

```json
{
  "name": "Interest Name",
  "description": "Interest description...",
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
