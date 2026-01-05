# Tourism Promotion Web Page

A React-based web application for promoting tourism in your city, featuring multimedia integration and interactive activity selection.

## Features

- 🎥 **Video Integration**: Hero section with autoplaying promotional video
- 🖼️ **Image Gallery**: Showcase of professionally edited images with editing techniques displayed
- 🎵 **Audio Guide**: Interactive audio player with city guide/narratives (30+ seconds)
- 🎯 **Activity Selection**: Interactive activity cards with selection functionality
- 🛒 **Activity Cart**: Shopping cart-like interface to view and manage selected activities
- 📱 **Responsive Design**: Fully responsive layout for all device sizes

## Project Requirements Met

✅ **Multimedia Integration**
- Video/3D animation in hero section
- Edited images with evidence of editing techniques
- Audio clip (30+ seconds) with interactive player

✅ **User Interaction**
- Activity selection system
- Cart-like interface for selected activities
- Interactive multimedia controls

✅ **Technical Requirements**
- Built with React
- Proper folder structure for multimedia files
- Reusable components
- Clean code practices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your multimedia files to `public/multimedia/`:
   - Place video file(s) in `public/multimedia/video/`
   - Place edited image(s) in `public/multimedia/images/`
   - Place audio file in `public/multimedia/audio/`

   See `public/multimedia/README.md` for detailed requirements.

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/
│   ├── multimedia/          # Multimedia assets
│   │   ├── video/           # Video files
│   │   ├── images/          # Image files
│   │   └── audio/           # Audio files
│   └── index.html
├── src/
│   ├── components/          # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Activities.js
│   │   ├── ActivityCart.js
│   │   ├── ImageGallery.js
│   │   ├── AudioPlayer.js
│   │   └── Footer.js
│   ├── App.js               # Main app component
│   ├── App.css
│   ├── index.js             # Entry point
│   └── index.css
├── package.json
└── README.md
```

## Components

- **Header**: Navigation bar with sticky positioning
- **Hero**: Video background section with overlay text
- **Activities**: Grid of selectable activity cards
- **ActivityCart**: Shopping cart interface for selected activities
- **ImageGallery**: Gallery of edited images with modal view
- **AudioPlayer**: Interactive audio player with progress control
- **Footer**: Footer with contact information

## Multimedia Requirements

### Video
- Format: MP4 (WebM optional)
- Location: `public/multimedia/video/city-tour.mp4`
- Should autoplay, loop, and be muted

### Images
- Format: JPG or PNG
- Location: `public/multimedia/images/`
- Must show evidence of editing (color correction, compositing, filters, text overlay)

### Audio
- Format: MP3
- Location: `public/multimedia/audio/city-audio-guide.mp3`
- Minimum duration: 30 seconds

## Customization

### Changing the City Name
Edit the text in:
- `src/components/Header.js` (logo text)
- `src/components/Hero.js` (hero title and subtitle)

### Adding More Activities
Edit the `activities` array in `src/components/Activities.js`

### Styling
All component styles are in their respective `.css` files. The color scheme uses a purple gradient theme that can be customized.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technologies Used

- React 18.2.0
- CSS3 (Flexbox, Grid, Animations)
- HTML5 (Video, Audio elements)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

