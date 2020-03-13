window.addEventListener('keydown', key => {
    const audio = document.querySelector('audio[data-key="' + key.keyCode + '"]');
    const key_to_animate = document.querySelector('div[data-key="' + key.keyCode + '"]');

    // Animating the keys
    key_to_animate.classList.add('playing');
    // Removing the animation _after_ it's done playing
    document.querySelector('div[data-key="' + key.keyCode + '"]').addEventListener('transitionend', function() {
        key_to_animate.classList.remove('playing');
    })

    audio.currentTime = 0;
    audio.play();
});
