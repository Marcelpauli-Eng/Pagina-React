# 🏛️ Llinars del Vallès - Landing Page de Turisme

Una landing page moderna i interactiva desenvolupada amb React per promocionar el turisme a **Llinars del Vallès**. La pàgina integra elements multimèdia avançats (vídeo, imatges, àudio i models 3D) amb una experiència d'usuari fluida i disseny contemporani.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.160.1-000000?logo=three.js)

---

## 📋 Taula de Continguts

- [Característiques Principals](#-característiques-principals)
- [Seccions de la Pàgina](#-seccions-de-la-pàgina)
- [Multimèdia Integrada](#-multimèdia-integrada)
- [Tecnologies Utilitzades](#-tecnologies-utilitzades)
- [Instal·lació i Execució](#-instal·lació-i-execució)
- [Estructura del Projecte](#-estructura-del-projecte)
- [Components React](#-components-react)
- [Personalització](#-personalització)
- [Requisits Multimèdia](#-requisits-multimèdia)

---

## ✨ Característiques Principals

### 🎨 Disseny Modern
- **Landing page minimalista** inspirada en dissenys contemporanis
- **Tipografia gran** amb efectes visuals avançats
- **Animacions suaus** activades al scroll (fade-in, slide-up, slide-left/right)
- **Efectes parallax** i animacions escalonades
- **Tema amb accent verd** per destacar elements importants
- **Glassmorphism** i efectes de profunditat
- **Disseny responsive** per a tots els dispositius

### 🎯 Interactivitat
- **Selecció d'activitats** amb sistema de llista personalitzada
- **Model 3D interactiu** de La Torrassa del Moro (rotació amb el ratolí)
- **Galeria d'imatges** amb modal i efectes hover avançats
- **Reproductor d'àudio** amb controls complets
- **Animacions JavaScript** activades al scroll

### 📱 Experiència d'Usuari
- **Navegació fluida** sense barra de navegació tradicional
- **Seccions ben definides** amb transicions suaus
- **Feedback visual** immediat en les interaccions
- **Optimització de rendiment** amb lazy loading i memoització

---

## 🎬 Seccions de la Pàgina

### 1. **Header**
- Header minimalista sense barra de navegació tradicional
- Disseny net i modern

### 2. **Hero Section**
- Vídeo de fons en reproducció automàtica
- Overlay amb text promocional
- Efectes parallax i transicions suaus

### 3. **About (Sobre Llinars)**
- Informació sobre el poble
- Disseny amb gradients i efectes visuals
- Animacions al scroll

### 4. **Galeria d'Imatges**
- **6 imatges professionals** de Llinars del Vallès:
  - La Torrassa del Moro
  - Dolmen de Llinars
  - Església de Llinars
  - Castellnou de Llinars
  - Auditori
  - Muntanyes del Vallès
- **Layout masonry** amb diferents mides
- **Modal a pantalla completa** per veure les imatges
- **Efectes hover** amb glow i shine
- **Disseny minimalista** sense descripcions

### 5. **Reproductor d'Àudio**
- Guia d'àudio de Llinars del Vallès
- Controls de reproducció (play/pause, volum, progrés)
- Disseny integrat amb el tema de la pàgina

### 6. **Model 3D Interactiu**
- **Model 3D de La Torrassa del Moro**
- **Fons de muntanyes** generat programàticament
- **Rotació interactiva** amb el ratolí (OrbitControls)
- **Botó d'auto-rotació** per activar/desactivar
- **Il·luminació realista** amb Environment presets
- Construït amb Three.js i React Three Fiber

### 7. **Activitats**
- **5 activitats turístiques** disponibles:
  1. **Recollida de Bolets** - Participa en la recollida de rovellons i altres bolets
  2. **Senderisme al Montseny** - Explora els senders del Montseny
  3. **Visita a la Torrassa del Moro** - Descobreix la torre de defensa
  4. **Visita al Castellnou** - Explora el castell renaixentista
  5. **Gastronomia Local** - Degusta la cuina tradicional catalana
- **Sistema de selecció** amb indicador visual (checkmark verd)
- **Targetes amb imatges** de fons professionals
- **Categories** (Història, Natura, Gastronomia)
- **Durada** de cada activitat

### 8. **Llista d'Activitats Seleccionades**
- **Llista personalitzada** de les activitats seleccionades
- **Eliminació individual** amb botó 'x'
- **Missatge d'estat buit** quan no hi ha activitats
- **Sincronització** amb la secció d'activitats

### 9. **Footer**
- Informació de contacte
- Enllaços rellevants
- Disseny consistent amb el tema

---

## 🎥 Multimèdia Integrada

### 📹 Vídeo
- **Ubicació**: `public/multimedia/video/llinars-tour.mp4`
- **Format**: MP4 (WebM opcional)
- **Característiques**: Reproducció automàtica, en bucle, sense so
- **Ús**: Fons del Hero section

### 🖼️ Imatges
- **Ubicació**: `public/multimedia/images/`
- **Format**: JPG o PNG
- **Imatges de la galeria**:
  - `torrassa.jpg`
  - `dolmen.jpg`
  - `iglesia.jpg`
  - `castellnou.jpg`
  - `auditori.jpg`
  - `muntanyes.jpg`
- **Imatges d'activitats**:
  - `recollida-bolets.jpg`
  - `senderisme-montseny.jpg`
  - `torrassa-activitat.jpg`
  - `castellnou-activitat.jpg`
  - `gastronomia.jpg`

### 🎵 Àudio
- **Ubicació**: `public/multimedia/audio/llinars-audio-guide.m4a`
- **Format**: M4A (compatible amb MP3)
- **Durada**: 30+ segons
- **Funcionalitat**: Reproductor interactiu amb controls

### 🎮 Models 3D
- **Ubicació**: `public/multimedia/models/` (opcional per a models GLB/GLTF personalitzats)
- **Model actual**: Generat programàticament (La Torrassa del Moro)
- **Format suportat**: GLB, GLTF
- **Tecnologia**: Three.js amb React Three Fiber

---

## 🛠️ Tecnologies Utilitzades

### Frontend
- **React 18.2.0** - Biblioteca JavaScript per a interfícies d'usuari
- **React DOM 18.2.0** - Renderització de React al DOM
- **React Scripts 5.0.1** - Eines de desenvolupament (Create React App)

### 3D i Gràfics
- **Three.js 0.160.1** - Biblioteca JavaScript per a gràfics 3D
- **@react-three/fiber 8.18.0** - Renderitzador React per a Three.js
- **@react-three/drei 9.122.0** - Helpers i components útils per a React Three Fiber

### Estils
- **CSS3** amb característiques avançades:
  - Flexbox i Grid Layout
  - Animacions i transicions
  - Gradients lineals i radials
  - Backdrop-filter (glassmorphism)
  - Variables CSS per a temes
  - Media queries per a responsive design

### JavaScript
- **Intersection Observer API** - Per a animacions al scroll
- **Hooks de React** (useState, useEffect, useRef, useCallback)
- **Event handlers** per a interaccions

---

## 🚀 Instal·lació i Execució

### Prerequisits
- **Node.js** (v14 o superior)
- **npm** o **yarn**

### Pas 1: Instal·lar Dependències

```bash
npm install
```

Si hi ha problemes amb les dependències de Three.js, utilitza:

```bash
npm install --legacy-peer-deps
```

### Pas 2: Afegir Fitxers Multimèdia

Col·loca els teus fitxers multimèdia a les carpetes corresponents:

```
public/
└── multimedia/
    ├── video/
    │   └── llinars-tour.mp4
    ├── images/
    │   ├── torrassa.jpg
    │   ├── dolmen.jpg
    │   ├── iglesia.jpg
    │   ├── castellnou.jpg
    │   ├── auditori.jpg
    │   ├── muntanyes.jpg
    │   ├── recollida-bolets.jpg
    │   ├── senderisme-montseny.jpg
    │   ├── torrassa-activitat.jpg
    │   ├── castellnou-activitat.jpg
    │   └── gastronomia.jpg
    └── audio/
        └── llinars-audio-guide.m4a
```

**Nota**: Si alguna imatge no està disponible, s'utilitzarà una imatge de respald de Unsplash.

### Pas 3: Executar el Servidor de Desenvolupament

```bash
npm start
```

La pàgina s'obrirà automàticament a [http://localhost:3000](http://localhost:3000)

### Pas 4: Construir per a Producció

```bash
npm run build
```

Això crearà una versió optimitzada a la carpeta `build/`.

---

## 📁 Estructura del Projecte

```
Pagina React/
├── public/
│   ├── multimedia/
│   │   ├── audio/
│   │   │   ├── llinars-audio-guide.m4a
│   │   │   └── README.md
│   │   ├── images/
│   │   │   ├── torrassa.jpg
│   │   │   ├── dolmen.jpg
│   │   │   ├── iglesia.jpg
│   │   │   ├── castellnou.jpg
│   │   │   ├── auditori.jpg
│   │   │   ├── muntanyes.jpg
│   │   │   ├── recollida-bolets.jpg
│   │   │   ├── senderisme-montseny.jpg
│   │   │   ├── torrassa-activitat.jpg
│   │   │   ├── castellnou-activitat.jpg
│   │   │   ├── gastronomia.jpg
│   │   │   └── README.md
│   │   ├── models/
│   │   │   └── README.md
│   │   ├── video/
│   │   │   └── llinars-tour.mp4
│   │   └── README.md
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.js / About.css
│   │   ├── Activities.js / Activities.css
│   │   ├── ActivityCart.js / ActivityCart.css
│   │   ├── ActivityList.js / ActivityList.css
│   │   ├── AudioPlayer.js / AudioPlayer.css
│   │   ├── Footer.js / Footer.css
│   │   ├── Header.js / Header.css
│   │   ├── Hero.js / Hero.css
│   │   ├── ImageGallery.js / ImageGallery.css
│   │   └── Model3D.js / Model3D.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

---

## 🧩 Components React

### **App.js**
- Component principal que gestiona l'estat global
- Gestiona la llista d'activitats seleccionades
- Configura les animacions al scroll amb Intersection Observer

### **Header.js**
- Header minimalista sense navegació tradicional
- Disseny net i modern

### **Hero.js**
- Secció hero amb vídeo de fons
- Overlay amb text promocional
- Efectes parallax

### **About.js**
- Informació sobre Llinars del Vallès
- Disseny amb gradients i efectes visuals

### **ImageGallery.js**
- Galeria de 6 imatges amb layout masonry
- Modal a pantalla completa
- Efectes hover avançats (glow, shine)
- Disseny minimalista

### **AudioPlayer.js**
- Reproductor d'àudio interactiu
- Controls de reproducció, volum i progrés
- Disseny integrat amb el tema

### **Model3D.js**
- Model 3D interactiu de La Torrassa del Moro
- Fons de muntanyes generat programàticament
- Controls d'orbita per a rotació
- Botó d'auto-rotació
- Construït amb React Three Fiber

### **Activities.js**
- Grid de 5 activitats turístiques
- Sistema de selecció amb indicador visual
- Targetes amb imatges de fons
- Categories i durada

### **ActivityList.js**
- Llista d'activitats seleccionades
- Eliminació individual
- Missatge d'estat buit
- Sincronització amb Activities

### **Footer.js**
- Informació de contacte
- Enllaços rellevants

---

## 🎨 Personalització

### Afegir Més Activitats

Edita l'array `activities` a `src/components/Activities.js`:

```javascript
const activities = [
  {
    id: 6,
    name: 'Nova Activitat',
    description: 'Descripció de la nova activitat',
    duration: '2 hores',
    image: '/multimedia/images/nova-activitat.jpg',
    category: 'Categoria'
  }
];
```

### Afegir Més Imatges a la Galeria

Edita l'array `images` a `src/components/ImageGallery.js`:

```javascript
const images = [
  {
    id: 7,
    title: 'Nova Imatge',
    url: '/multimedia/images/nova-imatge.jpg',
    fallback: 'https://images.unsplash.com/...'
  }
];
```

### Personalitzar Colors

Modifica les variables CSS a `src/index.css`:

```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
  --background-gradient: your-gradient;
}
```

### Afegir un Model 3D Personalitzat

1. Col·loca el fitxer GLB/GLTF a `public/multimedia/models/`
2. Edita `src/components/Model3D.js` per carregar el model:

```javascript
const model = useGLTF('/multimedia/models/teu-model.glb');
```

---

## 📋 Requisits Multimèdia

### Vídeo
- **Format**: MP4 (recomanat H.264)
- **Resolució**: Mínim 1920x1080
- **Durada**: Recomanat 30-60 segons
- **Ubicació**: `public/multimedia/video/llinars-tour.mp4`

### Imatges
- **Format**: JPG o PNG
- **Resolució**: 
  - Galeria: Mínim 1200px d'ample
  - Activitats: Mínim 800px d'ample
- **Tamañ**: Optimitzat per a web (< 500KB recomanat)
- **Ubicació**: `public/multimedia/images/`

### Àudio
- **Format**: M4A o MP3
- **Durada**: Mínim 30 segons
- **Qualitat**: 128kbps o superior
- **Ubicació**: `public/multimedia/audio/llinars-audio-guide.m4a`

### Models 3D
- **Format**: GLB o GLTF
- **Tamañ**: Optimitzat per a web (< 5MB recomanat)
- **Ubicació**: `public/multimedia/models/`

---

## 🌐 Compatibilitat de Navegadors

- ✅ Chrome (última versió)
- ✅ Firefox (última versió)
- ✅ Safari (última versió)
- ✅ Edge (última versió)

---

## 📝 Notes de Desenvolupament

- El projecte utilitza **Create React App** sense eject
- Les animacions utilitzen **Intersection Observer API** per a millor rendiment
- Els components utilitzen **React Hooks** per a la gestió d'estat
- El model 3D està generat programàticament, però es pot substituir per un model GLB/GLTF personalitzat
- Les imatges tenen fallbacks d'Unsplash si no estan disponibles localment

---

## 📄 Llicència

Aquest projecte està creat per a propòsits educatius.

---

## 👨‍💻 Autor

Desenvolupat per a la promoció turística de **Llinars del Vallès**.

---

**Disfruta explorant Llinars del Vallès! 🏔️✨**
