# Quick Start Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Your Multimedia Files

Before running the app, you need to add your multimedia files:

1. **Video** (`public/multimedia/video/city-tour.mp4`)
   - A promotional video or city tour
   - MP4 format recommended
   - Will autoplay in the hero section

2. **Edited Image** (`public/multimedia/images/city-skyline-edited.jpg`)
   - Must show evidence of editing (color correction, filters, text overlay, etc.)
   - JPG or PNG format
   - Will be displayed in the gallery section

3. **Audio** (`public/multimedia/audio/city-audio-guide.mp3`)
   - Minimum 30 seconds duration
   - Can be background music, narration, or ambient sounds
   - MP3 format recommended
   - Will be played in the audio player section

## Step 3: Run the Application

```bash
npm start
```

The app will open at http://localhost:3000

## Features to Test

1. ✅ **Video**: Should autoplay and loop in the hero section
2. ✅ **Activities**: Click activity cards to select/deselect them
3. ✅ **Cart**: Selected activities appear in the cart with total price
4. ✅ **Gallery**: Click images to view in modal with editing details
5. ✅ **Audio**: Use the audio player to play/pause and seek through the audio

## Project Requirements Checklist

- ✅ Video or 3D animation integrated
- ✅ Edited image with evidence of editing
- ✅ Audio clip (30+ seconds)
- ✅ Activity selection functionality
- ✅ Cart-like interface for selected activities
- ✅ React-based application
- ✅ Proper folder structure for multimedia
- ✅ Reusable components
- ✅ Clean code practices

## Customization

- Edit city name in `src/components/Header.js` and `src/components/Hero.js`
- Modify activities in `src/components/Activities.js`
- Adjust colors in component CSS files (search for `#667eea` and `#764ba2`)

