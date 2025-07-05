# Dus-Music - Professional Music Player App

## Overview

Dus-Music is a sleek, modern music player application designed for mobile devices. It features a clean UI with smooth animations, playlist management, and audio playback controls. The app is built using HTML, Tailwind CSS, and JavaScript.

## Features

- 🎵 Beautiful, responsive user interface
- 🎧 Audio playback with progress control
- 📱 Mobile-friendly design
- 🔄 Smooth animations and transitions
- 📂 Playlist management
- 🔍 Search functionality (placeholder)
- ❤️ Favorite tracks
- 🔄 Shuffle and repeat modes

## File Structure

```
Dus-Music/
├── index.html          # Main app screen
├── player.html         # Player screen
├── style.css           # Custom styles
├── main.js             # Main JavaScript for home screen
├── player.js           # Player-specific JavaScript
└── music.json          # Music data
```

## Installation

No installation required! Simply open `index.html` in your web browser to use the app.

## Usage

1. Open `index.html` in your preferred web browser
2. Browse through the featured playlists and songs
3. Click on any song to open the player screen
4. Use the player controls to:
   - Play/pause songs
   - Skip to next/previous tracks
   - Adjust playback position
   - View song details

## Customization

To add your own music:

1. Edit `music.json` to include your songs in this format:
```json
{
  "title": "Song Title",
  "artist": "Artist Name",
  "cover": "URL_TO_COVER_IMAGE",
  "source": "URL_TO_AUDIO_FILE"
}
```

2. Update the image and audio URLs in the JSON file

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome icons

## Browser Support

The app works best on modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Known Issues

- Some audio files may not load due to CORS restrictions when running locally
- Playback may be interrupted when switching between songs

## Future Improvements

- [ ] Add a search functionality
- [ ] Implement user accounts
- [ ] Add offline caching
- [ ] Create playlists
- [ ] Add equalizer settings

## Screenshots

![Home Screen](https://timeit.site/songs/Tum%20Hi%20Ho.jpg)
*Home screen with featured content*

![Player Screen](https://timeit.site/songs/Tum%20Hi%20Aana.jpg)
*Music player screen*

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please open an issue on GitHub.
