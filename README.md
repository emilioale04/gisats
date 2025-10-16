# 🌱 GISATS - Gestión Integrada de Sistemas Alimentarios, Transiciones y Sustentabilidad

Sitio web prototipo para el grupo de investigación GISATS, desarrollado con React y Vite.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Personalización de Estilos](#personalización-de-estilos)
- [Páginas Disponibles](#páginas-disponibles)

## ✨ Características

- ✅ Diseño responsive y minimalista estilo WordPress
- ✅ Paleta de colores verdes, beige y cafés
- ✅ 6 páginas completamente funcionales
- ✅ Estilos centralizados con CSS Variables
- ✅ Navegación con React Router
- ✅ Componentes reutilizables (Header, Footer)
- ✅ Fácil personalización de colores y estilos

## 🛠️ Tecnologías

- **React** 19.1.1
- **React Router DOM** 6.x
- **Vite** 7.1.7
- **CSS3** con Variables CSS

## 📦 Instalación

1. **Navega a la carpeta del proyecto:**

```bash
cd gisats
```

2. **Instala las dependencias:**

```bash
npm install
```

## 🚀 Uso

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para Producción

Genera los archivos optimizados para producción:

```bash
npm run build
```

### Preview de Producción

Previsualiza el build de producción:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
gisats/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Research.jsx
│   │   ├── Research.css
│   │   ├── Publications.jsx
│   │   ├── Publications.css
│   │   ├── News.jsx
│   │   ├── News.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx           # Componente principal con rutas
│   ├── App.css           # Estilos del componente App
│   ├── index.css         # ⭐ ESTILOS GLOBALES Y VARIABLES CSS
│   └── main.jsx          # Punto de entrada
├── ESTILOS.md            # 📖 Guía completa de personalización
├── README.md             # Este archivo
├── package.json
└── vite.config.js
```

## 🎨 Personalización de Estilos

### 🔑 Lo Más Importante

**Todos los estilos están centralizados en: `src/index.css`**

### Cambiar Colores

Abre `src/index.css` y modifica las variables en la sección `:root`:

```css
:root {
  /* Colores principales */
  --primary-green: #3d6b1f;      /* ← Cambia este color */
  --secondary-green: #557a2e;
  --beige-light: #faf8f3;
  --text-dark: #333333;
  /* ... más variables ... */
}
```

### Variables Disponibles

#### Colores:
- `--primary-green`, `--secondary-green`, `--accent-green`, `--dark-green`
- `--beige-light`, `--beige-medium`, `--beige-dark`
- `--brown-dark`, `--brown-medium`, `--brown-light`
- `--text-dark`, `--text-light`, `--text-muted`
- `--bg-white`, `--bg-light`, `--bg-medium`
- `--border-color`, `--border-color-dark`

#### Espaciado:
- `--spacing-xs` a `--spacing-xxl`
- `--section-padding-vertical`, `--section-padding-horizontal`

#### Tipografía:
- `--font-size-xs` a `--font-size-xl`
- `--h1-size` a `--h5-size`
- `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`

#### Efectos:
- `--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- `--transition-fast`, `--transition-normal`

**📖 Para una guía completa, consulta: [`ESTILOS.md`](./ESTILOS.md)**

## 📄 Páginas Disponibles

### 1. **Inicio** (`/`)
- Hero section con descripción del grupo
- Estadísticas clave
- Últimas noticias destacadas
- Instituciones aliadas

### 2. **Nosotros** (`/nosotros`)
- Misión y Visión
- Objetivos del grupo
- Historia
- Miembros del equipo con biografías
- Colaboradores

### 3. **Investigación** (`/investigacion`)
- Líneas de investigación
- Proyectos activos con detalles
- Proyectos completados (desplegable)

### 4. **Publicaciones** (`/publicaciones`)
- Lista de publicaciones científicas
- Filtros por año y tipo
- Resúmenes expandibles
- Enlaces a DOI

### 5. **Noticias** (`/noticias`)
- Archivo completo de noticias
- Filtro por categoría
- Paginación
- Tarjetas con resumen

### 6. **Contacto** (`/contacto`)
- Formulario de contacto
- Información de ubicación
- Horarios de atención
- Enlaces a redes sociales
- Mapa (placeholder)

## 🔄 Rutas

```
/                  → Página de Inicio
/nosotros          → Acerca del grupo
/investigacion     → Investigación y proyectos
/publicaciones     → Publicaciones científicas
/noticias          → Noticias y eventos
/contacto          → Formulario de contacto
```

## 📝 Próximos Pasos

### Datos Reales
- Reemplazar contenido genérico con información real del grupo
- Agregar imágenes reales de los miembros del equipo
- Actualizar logos de instituciones aliadas

### Funcionalidad
- Implementar backend para el formulario de contacto
- Conectar con base de datos para publicaciones
- Sistema de gestión de noticias (CMS)

### Mejoras
- Agregar modo oscuro
- Implementar búsqueda de publicaciones
- Agregar galería de imágenes
- Integrar Google Maps para ubicación

## 🤝 Contribuir

Este es un prototipo. Para hacer cambios:

1. Modifica los archivos en `src/`
2. Los cambios se verán reflejados automáticamente en desarrollo
3. Ejecuta `npm run build` para generar la versión de producción

## 📞 Soporte

Para preguntas sobre personalización, consulta:
- [`ESTILOS.md`](./ESTILOS.md) - Guía completa de estilos
- Documentación de [React](https://react.dev)
- Documentación de [Vite](https://vitejs.dev)

---

**Desarrollado con ❤️ para promover sistemas alimentarios sustentables**
