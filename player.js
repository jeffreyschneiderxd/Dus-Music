document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const albumArt = document.getElementById('album-art');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');

    // Load song data from localStorage
    const song = JSON.parse(localStorage.getItem('currentSong'));
    const songList = JSON.parse(localStorage.getItem('songList'));
    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    // Set initial song data
    if (song) {
        audioPlayer.src = song.source;
        albumArt.src = song.cover;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
    }

    // Play/Pause functionality
    playBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause text-2xl"></i>';
            document.querySelector('main').classList.add('playing');
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play text-2xl"></i>';
            document.querySelector('main').classList.remove('playing');
        }
    });

    // Update progress bar
    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Update time displays
        currentTimeEl.textContent = formatTime(currentTime);
        if (duration) {
            durationEl.textContent = formatTime(duration);
        }
    });

    // Click on progress bar to seek
    const progressContainer = document.querySelector('.h-1.bg-gray-700');
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        
        audioPlayer.currentTime = (clickX / width) * duration;
    });

    // Song ended - play next
    audioPlayer.addEventListener('ended', () => {
        playNextSong();
    });

    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Play next song
    function playNextSong() {
        currentIndex = (currentIndex + 1) % songList.length;
        updateSong(currentIndex);
    }

    // Play previous song
    function playPrevSong() {
        currentIndex = (currentIndex - 1 + songList.length) % songList.length;
        updateSong(currentIndex);
    }

    // Update song with new index
    function updateSong(index) {
        const newSong = songList[index];
        audioPlayer.src = newSong.source;
        albumArt.src = newSong.cover;
        songTitle.textContent = newSong.title;
        songArtist.textContent = newSong.artist;
        currentIndex = index;
        
        localStorage.setItem('currentSong', JSON.stringify(newSong));
        localStorage.setItem('currentIndex', index);
        
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause text-2xl"></i>';
        document.querySelector('main').classList.add('playing');
    }

    // Auto-play on page load
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause text-2xl"></i>';
    document.querySelector('main').classList.add('playing');
});
