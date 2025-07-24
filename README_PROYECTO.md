# Cóceres Propiedades - Sitio Web

Sitio web de la inmobiliaria Cóceres Propiedades desarrollado con Astro y Tailwind CSS.

## 🚀 Tecnologías

- **Astro** v5.12.3 - Framework web moderno
- **Tailwind CSS** v3.4.17 - Framework CSS utility-first  
- **TypeScript** v5.6.3 - Tipado estático

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro     # Navegación principal
│   │   ├── Hero.astro       # Sección principal con slider
│   │   ├── Search.astro     # Formulario de búsqueda
│   │   ├── About.astro      # Información de la empresa
│   │   ├── FeaturedProperties.astro  # Propiedades destacadas
│   │   ├── Services.astro   # Servicios ofrecidos
│   │   ├── Testimonials.astro # Testimonios de clientes
│   │   ├── Contact.astro    # Información de contacto
│   │   └── Footer.astro     # Pie de página
│   ├── layouts/
│   │   └── Layout.astro     # Layout base del sitio
│   ├── pages/               # Páginas del sitio
│   │   ├── index.astro      # Página principal
│   │   ├── nosotros.astro   # Página "Nosotros"
│   │   └── contacto.astro   # Página de contacto
│   └── assets/              # Imágenes y recursos
├── public/                  # Archivos estáticos
├── package.json
├── astro.config.mjs        # Configuración de Astro
└── tailwind.config.mjs     # Configuración de Tailwind
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles
```bash
npm run dev         # Servidor de desarrollo
npm run build       # Construir para producción
npm run preview     # Vista previa de la versión de producción
npm run astro       # Comandos de Astro CLI
```

## 🎨 Características

### Página Principal
- **Header sticky** con navegación y logo
- **Formulario de búsqueda** con filtros por tipo de operación e inmueble
- **Hero section** con slider de imágenes
- **Sección About** con información de la empresa
- **Propiedades destacadas** con grid responsive
- **Servicios** ofrecidos por la inmobiliaria
- **Testimonios** de clientes
- **Información de contacto**

### Funcionalidades
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Formulario de búsqueda funcional
- ✅ Navegación sticky
- ✅ Slider de imágenes en hero
- ✅ Optimización de imágenes con Astro
- ✅ SEO friendly

## 🎯 Páginas

### `/` - Página Principal
Muestra todos los componentes principales del sitio

### `/nosotros` - Sobre la Empresa  
Información detallada sobre Cóceres Propiedades y su equipo

### `/contacto` - Contacto
Formulario de contacto e información de ubicación

## 🚧 Próximas Mejoras

- [ ] Integración con base de datos de propiedades
- [ ] Sistema de filtros avanzados
- [ ] Panel de administración
- [ ] Optimización SEO avanzada
- [ ] Integración con redes sociales
- [ ] Sistema de favoritos
- [ ] Chat en línea

## 📞 Contacto

**Cóceres Propiedades**
- Teléfono: [Número de teléfono]
- Email: [Email de contacto]
- Dirección: [Dirección física]

---

Desarrollado con ❤️ para Cóceres Propiedades
