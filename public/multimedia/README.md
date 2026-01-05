# Multimedia Files

This folder contains all multimedia assets for the tourism promotion website.

## Folder Structure

```
multimedia/
├── video/          # Video files (MP4, WebM)
├── images/         # Image files (JPG, PNG)
└── audio/          # Audio files (MP3, WAV)
```

## Required Files

### Video Files (`video/`)
- **city-tour.mp4** - Main promotional video or city tour (required)
- **city-tour.webm** - WebM version (optional, for better browser compatibility)

**Requirements:**
- At least one video or 3D animation
- Can be a promotional video, street tour, or 3D animation
- Recommended format: MP4 (H.264 codec)
- Recommended resolution: 1920x1080 or higher
- Keep file size optimized for web (under 50MB recommended)

### Image Files (`images/`)
- **city-skyline-edited.jpg** - Main edited image showcasing editing techniques
- **historic-district.jpg** - Additional edited image (optional)
- **cityscape-panorama.jpg** - Additional edited image (optional)
- **activity-*.jpg** - Activity images (6 files for different activities)

**Requirements:**
- At least one edited image showing evidence of editing:
  - Color correction
  - Compositing
  - Filters
  - Text overlay
  - Other editing techniques
- Recommended format: JPG or PNG
- Recommended resolution: 1920x1080 or higher
- Keep file size optimized for web (under 2MB per image recommended)

### Audio Files (`audio/`)
- **city-audio-guide.mp3** - Audio guide or background music (required)

**Requirements:**
- At least 30 seconds duration
- Can be:
  - Background music
  - Ambient city sounds
  - Narrated guide
  - Local tale
  - Any audio relevant to tourism theme
- Recommended format: MP3 (128-192 kbps)
- Keep file size optimized for web (under 5MB recommended)

## Adding Your Files

1. Place your video file(s) in the `video/` folder
2. Place your edited image(s) in the `images/` folder
3. Place your audio file in the `audio/` folder
4. Ensure file names match exactly as specified above
5. The application will automatically load these files

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Include descriptive names
- Keep file extensions (.mp4, .jpg, .mp3, etc.)

## Optimization Tips

- **Videos**: Use tools like HandBrake or FFmpeg to compress videos
- **Images**: Use tools like ImageOptim, TinyPNG, or Squoosh to optimize images
- **Audio**: Use Audacity or similar tools to compress audio files

## Testing

After adding your multimedia files:
1. Run `npm start` to start the development server
2. Check that all media files load correctly
3. Verify video autoplays and loops
4. Test audio player functionality
5. Ensure images display properly

