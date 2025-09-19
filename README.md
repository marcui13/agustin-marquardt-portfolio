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
- **📊 Analytics Avanzados**: Google Analytics 4 con tracking completo de audiencia

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Tipografía**: [Inter Font](https://fonts.google.com/specimen/Inter)
- **Iconos**: SVG personalizedos y emojis
- **Analytics**: [Google Analytics 4](https://analytics.google.com/) con tracking avanzado
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
├── scripts/            # Scripts de funcionalidad
│   ├── analytics.js    # Google Analytics y tracking de eventos
│   ├── page-tracking.js # Tracking de navegación SPA
│   └── audience-tracking.js # Analytics avanzados de audiencia
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
git clone https://github.com/marcui13/agustin-marquardt-portfolio

# Navegar al directorio
cd agustin-marquardt-portfolio

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

## 📊 Google Analytics 4 - Tracking Avanzado

Este portfolio incluye una implementación completa de Google Analytics 4 con tracking avanzado para entender mejor a tu audiencia.

### ✨ Características del Analytics

#### 🎯 Tracking Automático
- **Pageviews**: Todas las páginas visitadas
- **Navegación SPA**: Cambios de ruta sin recarga
- **Clics en proyectos**: GitHub y Vercel links
- **Enlaces externos**: Tracking de outbound links
- **Scroll depth**: Profundidad de lectura (25%, 50%, 75%, 90%, 100%)
- **Tiempo en secciones**: Engagement por contenido

#### 👥 Datos de Audiencia
- **Ubicación geográfica**: País, región, ciudad (via IP)
- **Información técnica**: Dispositivo, OS, navegador, resolución
- **Zona horaria**: Para entender horarios de visita
- **Preferencias**: Tema (dark/light), idioma, accesibilidad
- **Comportamiento**: Patrones de interacción, tiempo activo
- **Conectividad**: Tipo de conexión (WiFi, 4G, etc.)

#### 🔧 Configuración

El tracking ya está configurado con el ID: `G-0Z8WEDB2LG`

Para cambiar a tu propio ID:

1. **Reemplaza en `src/layouts/MainLayout.astro`**:
```javascript
// Líneas 27 y 33
gtag/js?id=TU_MEASUREMENT_ID
gtag('config', 'TU_MEASUREMENT_ID'
```

2. **Reemplaza en `src/scripts/analytics.js`**:
```javascript
// Línea 21
gtag('config', 'TU_MEASUREMENT_ID', {
```

#### 📈 Eventos Personalizados Disponibles

```javascript
import {
  trackPageview,
  trackEvent,
  trackProjectClick,
  trackContactClick,
  trackNavigation,
  trackExternalLink,
  trackUserPreference,
  trackTimeOnSection
} from '/src/scripts/analytics.js';

// Ejemplos de uso
trackProjectClick('Mi Proyecto', 'https://github.com/user/repo');
trackContactClick('email');
trackNavigation('about');
trackUserPreference('theme', 'dark');
```

#### 🛡️ Privacidad y GDPR
- **Datos anonimizados**: Sin información personal identificable
- **IP anonimizada**: Solo ubicación aproximada (ciudad)
- **Cumple GDPR**: Configuración por defecto compatible
- **Sin cookies invasivas**: Solo cookies esenciales de GA4

### 📊 Reportes Disponibles en GA4

Una vez configurado, podrás ver:

1. **Audiencia**: Demografía, tecnología, intereses
2. **Adquisición**: Fuentes de tráfico, canales
3. **Engagement**: Páginas populares, tiempo en sitio
4. **Eventos**: Interacciones personalizadas
5. **Conversiones**: Goals y objetivos definidos

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
- Email: amarquardt20@gmail.com
- LinkedIn: [Agustin Marquardt](https://www.linkedin.com/in/agustin-marquardt-0015611b3/)
- GitHub: [marcui13](https://github.com/marcui13)

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!
