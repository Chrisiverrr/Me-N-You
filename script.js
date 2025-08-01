document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 30, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });

    const loveButton = document.getElementById('loveButton');
    const message = document.getElementById('message');
    const heartbeatSound = document.getElementById('heartbeatSound');
    const hugSound = document.getElementById('hugSound');
    const kissSound = document.getElementById('kissSound');

    // Main button click
    loveButton.addEventListener('click', function() {
        message.classList.toggle('hidden');
        message.classList.toggle('message-visible');
        
        if (message.classList.contains('message-visible')) {
            heartbeatSound.currentTime = 0;
            heartbeatSound.play();
            createHearts(15);
            this.textContent = '❤️ My Heart Beats for You ❤️';
            animateHeartPulse();
        } else {
            this.textContent = 'Touch My Heart';
            stopHeartPulse();
        }
    });

    // Response buttons
    document.getElementById('hugBtn').addEventListener('click', function() {
        hugSound.currentTime = 0;
        hugSound.play();
        createHugEffect();
    });

    document.getElementById('kissBtn').addEventListener('click', function() {
        kissSound.currentTime = 0;
        kissSound.play();
        createKissEffects(5);
    });

    document.getElementById('flowerBtn').addEventListener('click', function() {
        createFlowers(10);
    });

    // Effect functions
    function createHearts(count) {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.animationDelay = Math.random() + 's';
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }
    }

    function animateHeartPulse() {
        const heart = document.querySelector('.heart-shape');
        heart.style.animation = 'pulse 0.8s infinite';
    }

    function stopHeartPulse() {
        const heart = document.querySelector('.heart-shape');
        heart.style.animation = 'pulse 2s infinite';
    }

    function createHugEffect() {
        const hug = document.createElement('div');
        hug.classList.add('hug-effect');
        document.body.appendChild(hug);
        
        // Animate
        setTimeout(() => {
            hug.style.opacity = '0.8';
            hug.style.transition = 'opacity 0.5s';
        }, 10);
        
        setTimeout(() => {
            hug.style.opacity = '0';
        }, 1000);
        
        // Remove after animation
        setTimeout(() => {
            hug.remove();
        }, 1500);
    }

    function createKissEffects(count) {
        for (let i = 0; i < count; i++) {
            const kiss = document.createElement('div');
            kiss.classList.add('kiss-effect');
            kiss.innerHTML = '💋';
            kiss.style.left = (Math.random() * 80 + 10) + 'vw';
            kiss.style.top = (Math.random() * 50 + 25) + 'vh';
            document.body.appendChild(kiss);
            
            // Remove after animation
            setTimeout(() => {
                kiss.remove();
            }, 3000);
        }
    }

    function createFlowers(count) {
        const flowers = ['🌹', '🌸', '🌺', '🌻', '🌼'];
        
        for (let i = 0; i < count; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.fontSize = (Math.random() * 20 + 20) + 'px';
            flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
            flower.style.animationDelay = Math.random() + 's';
            document.body.appendChild(flower);
            
            // Remove after animation
            setTimeout(() => {
                flower.remove();
            }, 5000);
        }
    }
});
