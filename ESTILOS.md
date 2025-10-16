# 🎨 Guía de Estilos Centralizados - GISATS

Este documento explica cómo modificar fácilmente los estilos de tu sitio web GISATS.

## 📍 Ubicación de Variables CSS

**Archivo principal:** `src/index.css`

Todas las variables de estilo están centralizadas en la sección `:root` de este archivo. Solo necesitas modificar este archivo para cambiar los estilos en todo el sitio.

---

## 🎨 COLORES - Sección Principal para Personalizar

### Verdes (Colores primarios del sitio)

```css
--primary-green: #3d6b1f;      /* Verde principal - botones, enlaces, acentos */
--secondary-green: #557a2e;    /* Verde secundario - hover states */
--accent-green: #7d9f4c;       /* Verde claro - elementos decorativos */
--dark-green: #2d5016;         /* Verde oscuro - textos especiales */
```

**Dónde se usan:**
- `--primary-green`: Botones principales, enlaces, bordes de acento, iconos
- `--secondary-green`: Estado hover de botones y enlaces
- `--accent-green`: Elementos decorativos secundarios
- `--dark-green`: Textos especiales, fondos oscuros

### Beige/Crema (Fondos suaves)

```css
--beige-light: #faf8f3;        /* Beige muy claro - fondos de sección */
--beige-medium: #f0ebe3;       /* Beige medio - tarjetas */
--beige-dark: #d4c5a9;         /* Beige oscuro - bordes, badges */
```

**Dónde se usan:**
- `--beige-light`: Fondos alternos de secciones, fondos de banner
- `--beige-medium`: Interior de tarjetas, fondos de formularios
- `--beige-dark`: Badges, elementos de separación

### Cafés (Acentos cálidos)

```css
--brown-dark: #5a3d2a;         /* Café oscuro - textos alternativos */
--brown-medium: #7a5940;       /* Café medio - badges especiales */
--brown-light: #a68a6d;        /* Café claro - elementos sutiles */
```

**Dónde se usan:**
- `--brown-medium`: Badges de proyectos completados, elementos especiales
- Footer (si se cambia a café)

### Textos (Jerarquía de grises)

```css
--text-dark: #333333;          /* Texto principal - títulos, contenido importante */
--text-light: #666666;         /* Texto secundario - párrafos, descripciones */
--text-muted: #999999;         /* Texto suave - metadatos, fechas */
```

### Fondos

```css
--bg-white: #ffffff;           /* Fondo blanco puro */
--bg-light: #faf8f3;          /* Fondo claro (beige muy suave) */
--bg-medium: #f8f8f8;         /* Fondo gris muy claro */
```

### Bordes

```css
--border-color: #e0e0e0;       /* Bordes principales - sutiles */
--border-color-dark: #cccccc;  /* Bordes más visibles */
```

---

## 📏 ESPACIADO Y TAMAÑOS

### Contenedor Principal

```css
--max-width: 1200px;           /* Ancho máximo del contenido */
```

### Espaciado (Márgenes y Padding)

```css
--spacing-xs: 0.5rem;          /* Extra pequeño - 8px */
--spacing-sm: 1rem;            /* Pequeño - 16px */
--spacing-md: 1.5rem;          /* Mediano - 24px */
--spacing-lg: 2rem;            /* Grande - 32px */
--spacing-xl: 3rem;            /* Extra grande - 48px */
--spacing-xxl: 4rem;           /* Extra extra grande - 64px */
```

### Padding de Secciones

```css
--section-padding-vertical: 3rem;      /* Padding arriba/abajo de secciones */
--section-padding-horizontal: 2rem;    /* Padding izquierda/derecha */
```

---

## 📝 TIPOGRAFÍA

### Tamaños de Fuente

```css
--font-size-xs: 0.8rem;        /* Extra pequeño - 12.8px */
--font-size-sm: 0.9rem;        /* Pequeño - 14.4px */
--font-size-base: 0.95rem;     /* Base - 15.2px */
--font-size-md: 1rem;          /* Mediano - 16px */
--font-size-lg: 1.15rem;       /* Grande - 18.4px */
--font-size-xl: 1.25rem;       /* Extra grande - 20px */
```

### Tamaños de Títulos

```css
--h1-size: 2.25rem;            /* Título principal - 36px */
--h2-size: 2rem;               /* Subtítulo - 32px */
--h3-size: 1.5rem;             /* Encabezado 3 - 24px */
--h4-size: 1.25rem;            /* Encabezado 4 - 20px */
--h5-size: 1.15rem;            /* Encabezado 5 - 18.4px */
```

### Pesos de Fuente

```css
--font-weight-normal: 400;     /* Normal */
--font-weight-medium: 500;     /* Medio */
--font-weight-semibold: 600;   /* Semi-negrita */
--font-weight-bold: 700;       /* Negrita */
```

### Altura de Línea

```css
--line-height-tight: 1.3;      /* Compacto - para títulos */
--line-height-normal: 1.6;     /* Normal - para párrafos */
--line-height-relaxed: 1.7;    /* Relajado - para lectura extendida */
```

---

## 🎯 BORDES Y SOMBRAS

### Radio de Bordes

```css
--border-radius-sm: 3px;       /* Pequeño - elementos sutiles */
--border-radius-md: 5px;       /* Mediano - botones */
--border-radius-lg: 10px;      /* Grande - tarjetas */
```

### Sombras

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);   /* Sombra sutil */
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);   /* Sombra media */
--shadow-lg: 0 3px 10px rgba(0, 0, 0, 0.1);   /* Sombra grande */
```

---

## ⚡ TRANSICIONES

```css
--transition-fast: 0.2s ease;     /* Transición rápida */
--transition-normal: 0.3s ease;   /* Transición normal */
```

---

## 🔧 EJEMPLOS DE MODIFICACIÓN

### Ejemplo 1: Cambiar a un esquema de colores azul

```css
/* En src/index.css, reemplaza: */
--primary-green: #2c5f8d;      /* Azul principal */
--secondary-green: #3d7ab8;    /* Azul secundario */
--accent-green: #5a9dd6;       /* Azul claro */
--dark-green: #1a3f5c;         /* Azul oscuro */
```

### Ejemplo 2: Hacer el diseño más espacioso

```css
/* En src/index.css, aumenta los espaciados: */
--section-padding-vertical: 4rem;     /* Era 3rem */
--section-padding-horizontal: 3rem;   /* Era 2rem */
--spacing-lg: 2.5rem;                 /* Era 2rem */
```

### Ejemplo 3: Aumentar el tamaño de fuentes

```css
/* En src/index.css: */
--h1-size: 2.75rem;           /* Era 2.25rem */
--h2-size: 2.25rem;           /* Era 2rem */
--font-size-base: 1rem;       /* Era 0.95rem */
```

### Ejemplo 4: Esquinas más redondeadas (estilo moderno)

```css
/* En src/index.css: */
--border-radius-sm: 8px;      /* Era 3px */
--border-radius-md: 12px;     /* Era 5px */
--border-radius-lg: 16px;     /* Era 10px */
```

---

## 📋 CLASES UTILITARIAS DISPONIBLES

Puedes usar estas clases directamente en tus componentes JSX:

```jsx
<div className="container">        {/* Contenedor centrado con max-width */}
<div className="section">          {/* Sección con padding estándar */}
<div className="text-center">      {/* Texto centrado */}

{/* Márgenes superiores */}
<div className="mt-sm">            {/* margin-top: 1rem */}
<div className="mt-md">            {/* margin-top: 1.5rem */}
<div className="mt-lg">            {/* margin-top: 2rem */}
<div className="mt-xl">            {/* margin-top: 3rem */}

{/* Márgenes inferiores */}
<div className="mb-sm">            {/* margin-bottom: 1rem */}
<div className="mb-md">            {/* margin-bottom: 1.5rem */}
<div className="mb-lg">            {/* margin-bottom: 2rem */}
<div className="mb-xl">            {/* margin-bottom: 3rem */}
```

---

## 🚀 Cómo Aplicar Cambios

1. **Abre** `src/index.css`
2. **Modifica** las variables CSS en la sección `:root`
3. **Guarda** el archivo
4. Los cambios se aplicarán automáticamente en todo el sitio

**No necesitas modificar ningún otro archivo CSS** - todas las páginas y componentes usan estas variables centralizadas.

---

## 💡 Consejos

- **Mantén la consistencia:** Usa las variables en lugar de valores directos
- **Prueba un color a la vez:** Cambia una variable, guarda y verifica el resultado
- **Usa herramientas de color:** Sitios como [Coolors.co](https://coolors.co) para crear paletas
- **Conserva el contraste:** Asegúrate de que los textos sean legibles sobre los fondos

---

## 📞 Soporte

Si necesitas ayuda para personalizar los estilos, consulta:
- [Documentación de CSS Variables](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)
- [Guía de colores accesibles](https://webaim.org/resources/contrastchecker/)
