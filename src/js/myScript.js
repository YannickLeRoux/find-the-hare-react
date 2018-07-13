export function animateSocialIcons() {
    console.log('animated Social');
    const logo = document.querySelector('.header-logo');
    const socialIcons = document.querySelectorAll('.social-icon');

    function spreadIcons() {
    socialIcons.forEach(icon => {
        icon.classList.add('open');
         });
        }

         function closeIcons() {
            socialIcons.forEach(icon => {
                icon.classList.remove('open');
                 });
                }


    logo.addEventListener('mouseover', spreadIcons);
    logo.addEventListener('mouseleave', closeIcons);

}

    // //////////////////////// CANVAS ///////////
export function animateCanvas() {
    console.log('animated CAnvas');
    const canvas = document.querySelector('.backgroundcanvas');
    const ctx = canvas.getContext('2d');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let spriteX = 200;
    let spriteY = 200;

    // let randomX = Math.random() * canvas.width;
    // let randomY = Math.random() * canvas.height;

    const sprite = new Image();
    sprite.src = require('./hare-icon.jpg');

    let alpha = 0.0;
    let change = 0.01;

    // let spriteX = Math.random() * canvas.width;
    // let spriteY = Math.random() * canvas.height;


    function draw() {
    if (alpha <= 0.01) {
        spriteX = Math.random() * canvas.width;
        spriteY = Math.random() * canvas.height;
    }


    alpha += change;

    if (alpha <= 0.0 || alpha >= 0.6) {
        change = -change;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = alpha;
    ctx.drawImage(sprite, spriteX, spriteY, 100, 90);
    }

    setInterval(draw, 25);

}

