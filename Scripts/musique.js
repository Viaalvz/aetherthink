// Vérifie si la musique est en pause ou en lecture (en utilisant localStorage)
window.addEventListener('load', () => {
    const musicPlayer = document.getElementById('backgroundMusic');

    // Si la musique a déjà été lancée dans une autre page, on la redémarre
    if (localStorage.getItem('musicPlaying') === 'true') {
        musicPlayer.play();
    } else {
        musicPlayer.pause();
    }

    // Lors du changement d'état de la musique (lecture ou pause), on le sauvegarde dans localStorage
    musicPlayer.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    musicPlayer.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });
});
