document.addEventListener("DOMContentLoaded", function() {
    const swup = new Swup({
        plugins: [new SwupFadeTheme()],
    });

    swup.on('contentReplaced', function() {
        setTimeout(function() {
            document.querySelector('.transition-fade').style.opacity = '1';
        }, 100);
    });

    swup.on('willReplaceContent', function() {
        document.documentElement.classList.add('is-animating');
        document.querySelector('.transition-fade').style.opacity = '0';
    });

    swup.on('animationOutDone', function() {
        document.documentElement.classList.remove('is-animating');
    });
});
