// Load songs from music.json and populate the song list
document.addEventListener('DOMContentLoaded', function() {
    fetch('music.json')
        .then(response => response.json())
        .then(data => {
            const songList = document.getElementById('song-list');
            
            data.forEach((song, index) => {
                const songElement = document.createElement('div');
                songElement.className = 'flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer';
                songElement.innerHTML = `
                    <div class="flex-shrink-0 mr-4 relative">
                        <img src="${song.cover}" alt="${song.title}" class="w-12 h-12 rounded-md">
                        <div class="absolute inset-0 flex items-center justify-center play-icon hidden">
                            <i class="fas fa-play text-white text-xs"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-medium">${song.title}</h3>
                        <p class="text-gray-400 text-sm">${song.artist}</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <i class="fas fa-heart text-gray-400 hover:text-purple-500"></i>
                        <i class="fas fa-ellipsis-h text-gray-400"></i>
                    </div>
                `;
                
                // Add click event to navigate to player page with song data
                songElement.addEventListener('click', () => {
                    localStorage.setItem('currentSong', JSON.stringify(song));
                    localStorage.setItem('songList', JSON.stringify(data));
                    localStorage.setItem('currentIndex', index);
                    window.location.href = 'player.html';
                });
                
                songList.appendChild(songElement);
            });
        })
        .catch(error => console.error('Error loading music data:', error));

    // Now playing bar click event
    const nowPlayingBar = document.querySelector('.now-playing-bar');
    nowPlayingBar.addEventListener('click', () => {
        window.location.href = 'player.html';
    });
});
