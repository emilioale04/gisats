# Guía de Paletas de Colores GISATS

## 🎨 Paletas Disponibles

Se han creado **4 paletas de colores** basadas en el color del logo (#7FB601), cada una con su propia personalidad y uso recomendado.

---

## Paleta 1: Verde Natural Original (Actual) 🌿

**Ubicación:** `src/index.css`

### Características
- Verde brillante como protagonista
- Beiges cálidos y naturales
- Colores tierra complementarios
- Perfecta para proyectos de sostenibilidad

### Uso Recomendado
- Proyectos ambientales
- Iniciativas de agricultura sostenible
- Comunicación con público general

### Colores Principales
```css
--primary-green: #7FB601
--secondary-green: #6A9B01
--accent-green: #9FD135
--beige-light: #FAF7F0
--text-dark: #2C3E1F
```

### Preview
Abrir: `public/paleta-preview.html`

---

## Paleta 2: Natural y Académica 🌱

**Ubicación:** `src/paletas/paleta-2-natural-academica.css`

### Características
- Inspirada en sistemas alimentarios sostenibles
- Tonos tierra cálidos (#8B6F47)
- Gris carbón para textos (#2C3E2C)
- Balance entre naturaleza y profesionalismo

### Uso Recomendado
- Instituciones académicas
- Investigación agrícola
- Publicaciones científicas
- Proyectos de sostenibilidad alimentaria

### Colores Principales
```css
--primary-green: #7FB601
--secondary-green: #5A8500
--brown-medium: #8B6F47 (Tierra)
--beige-light: #F5F1E8
--text-dark: #2C3E2C (Gris Carbón)
```

### Preview
Abrir: `public/paleta-2-preview.html`

---

## Paleta 3: Moderna y Sustentable 🌿

**Ubicación:** `src/paletas/paleta-3-moderna-sustentable.css`

### Características
- Fresca y tecnológica
- Verde agua (#4A9B8E) para botones secundarios
- Amarillo suave (#E8C547) para destacados
- Grises modernos (#F8F9FA, #6C757D)
- Negro suave (#212529) para textos

### Uso Recomendado
- Startups AgTech
- Plataformas digitales
- Innovación científica
- Audiencias jóvenes
- Proyectos de tecnología sustentable

### Colores Principales
```css
--primary-green: #7FB601
--accent-green: #4A9B8E (Verde Agua)
--ochre: #E8C547 (Amarillo Suave)
--bg-light: #F8F9FA
--text-dark: #212529
```

### Preview
Abrir: `public/paleta-3-preview.html`

---

## Paleta 4: Institucional y Confiable 🎓

**Ubicación:** `src/paletas/paleta-4-institucional-confiable.css`

### Características
- Sobria y profesional
- Azul profundo (#1E4D7B) para headers
- Verde salvia (#9CAF88) para fondos alternativos
- Crema (#FBF8F3) para fondos generales
- Balance perfecto entre verde GISATS y tonos institucionales

### Uso Recomendado
- Universidades
- Centros de investigación
- Organismos gubernamentales
- Instituciones científicas establecidas
- Comunicación formal y oficial

### Colores Principales
```css
--primary-green: #7FB601
--brown-dark: #1E4D7B (Azul Profundo)
--accent-green: #9CAF88 (Verde Salvia)
--beige-light: #FBF8F3 (Crema)
--text-dark: #3A3A3A
```

### Preview
Abrir: `public/paleta-4-preview.html`

---

## 🔄 Cómo Cambiar de Paleta

### Método 1: Reemplazo Directo (Recomendado)

1. **Hacer backup de la paleta actual:**
   ```bash
   cp src/index.css src/index.css.backup
   ```

2. **Copiar la nueva paleta:**
   ```bash
   # Para Paleta 2
   cp src/paletas/paleta-2-natural-academica.css src/index.css
   
   # Para Paleta 3
   cp src/paletas/paleta-3-moderna-sustentable.css src/index.css
   
   # Para Paleta 4
   cp src/paletas/paleta-4-institucional-confiable.css src/index.css
   ```

3. **Reiniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

### Método 2: Importación en main.jsx

Puedes importar diferentes paletas modificando `src/main.jsx`:

```jsx
// Importar la paleta deseada
import './index.css'  // Paleta Original
// import './paletas/paleta-2-natural-academica.css'
// import './paletas/paleta-3-moderna-sustentable.css'
// import './paletas/paleta-4-institucional-confiable.css'
```

---

## 📋 Comparación de Paletas

| Característica | Paleta 1 | Paleta 2 | Paleta 3 | Paleta 4 |
|---------------|----------|----------|----------|----------|
| **Estilo** | Natural | Académica | Moderna | Institucional |
| **Colores Complementarios** | Beige/Ocre | Tierra | Gris/Amarillo | Azul/Salvia |
| **Texto Principal** | Verde oscuro | Gris carbón | Negro suave | Gris oscuro |
| **Audiencia** | General | Académica | Joven/Tech | Formal |
| **Formalidad** | Media | Alta | Media-Baja | Muy Alta |
| **Vibrancia** | Alta | Media | Alta | Media |

---

## 🎯 Recomendaciones por Contexto

### Para Investigación Académica
- **Primera opción:** Paleta 2 (Natural y Académica)
- **Segunda opción:** Paleta 4 (Institucional)

### Para Plataformas Digitales
- **Primera opción:** Paleta 3 (Moderna y Sustentable)
- **Segunda opción:** Paleta 1 (Verde Natural)

### Para Organismos Oficiales
- **Primera opción:** Paleta 4 (Institucional)
- **Segunda opción:** Paleta 2 (Natural y Académica)

### Para Proyectos Comunitarios
- **Primera opción:** Paleta 1 (Verde Natural)
- **Segunda opción:** Paleta 3 (Moderna)

---

## 🛠️ Estructura de Variables CSS

Todas las paletas mantienen la misma estructura de variables CSS:

```css
:root {
  /* Verdes */
  --primary-green
  --secondary-green
  --accent-green
  --dark-green
  --light-green
  
  /* Neutros */
  --beige-light
  --beige-medium
  --beige-warm
  --beige-dark
  
  /* Complementarios */
  --brown-dark
  --brown-medium
  --ochre
  
  /* Textos */
  --text-dark
  --text-medium
  --text-light
  --text-muted
  
  /* Fondos */
  --bg-white
  --bg-light
  --bg-medium
  --bg-accent
  
  /* Bordes */
  --border-color
  --border-color-dark
}
```

Esta estructura permite cambiar fácilmente entre paletas sin modificar el código HTML o JSX.

---

## 📝 Notas Importantes

1. **Compatibilidad:** Todas las paletas son 100% compatibles con la estructura actual del sitio
2. **Accesibilidad:** Los colores de texto cumplen con WCAG 2.1 AA para contraste
3. **Responsive:** Las paletas funcionan correctamente en todos los dispositivos
4. **Gradientes:** Cada paleta tiene gradientes personalizados que se actualizan automáticamente

---

## 🔍 Testing de Paletas

Para probar cada paleta sin modificar el código:

1. Abrir los archivos HTML de preview en el navegador
2. Comparar visualmente las diferentes opciones
3. Evaluar qué paleta se ajusta mejor a tus necesidades
4. Aplicar el cambio siguiendo las instrucciones de "Cómo Cambiar de Paleta"

---

## 📞 Soporte

Si necesitas personalizar más alguna paleta o crear una nueva variación, todas las variables están documentadas en cada archivo CSS.

**Fecha de creación:** Octubre 2025  
**Versión:** 1.0
