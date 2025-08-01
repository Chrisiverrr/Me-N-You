document.addEventListener('DOMContentLoaded', function() {
    // Optimized particles using canvas
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 20);
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
    
    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.fill();
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Elements
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
            createHearts(10); // Reduced number for performance
            this.textContent = '❤️ My Heart Beats for You ❤️';
        } else {
            this.textContent = 'Touch My Heart';
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
        createKissEffects(3); // Reduced number for performance
    });
    
    document.getElementById('flowerBtn').addEventListener('click', function() {
        createFlowers(7); // Reduced number for performance
    });
    
    // Optimized effect functions
    function createHearts(count) {
        const container = document.body;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            fragment.appendChild(heart);
            
            // Auto-remove after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    container.removeChild(heart);
                }
            }, 4000);
        }
        
        container.appendChild(fragment);
    }
    
    function createHugEffect() {
        const hug = document.createElement('div');
        hug.className = 'hug-effect';
        document.body.appendChild(hug);
        
        // Trigger reflow
        void hug.offsetWidth;
        
        hug.style.opacity = '0.8';
        
        setTimeout(() => {
            hug.style.opacity = '0';
            setTimeout(() => {
                if (hug.parentNode) {
                    document.body.removeChild(hug);
                }
            }, 500);
        }, 800);
    }
    
    function createKissEffects(count) {
        const fragment = document.createDocumentFragment();
        const flowers = ['💋'];
        
        for (let i = 0; i < count; i++) {
            const kiss = document.createElement('div');
            kiss.className = 'kiss-effect';
            kiss.textContent = flowers[0];
            kiss.style.left = (Math.random() * 80 + 10) + 'vw';
            kiss.style.top = (Math.random() * 50 + 25) + 'vh';
            fragment.appendChild(kiss);
            
            setTimeout(() => {
                if (kiss.parentNode) {
                    document.body.removeChild(kiss);
                }
            }, 2000);
        }
        
        document.body.appendChild(fragment);
    }
    
    function createFlowers(count) {
        const fragment = document.createDocumentFragment();
        const flowers = ['🌹', '🌸', '🌺', '🌻', '🌼'];
        
        for (let i = 0; i < count; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.fontSize = (Math.random() * 15 + 15) + 'px';
            flower.style.animationDuration = (Math.random() * 2 + 2) + 's';
            fragment.appendChild(flower);
            
            setTimeout(() => {
                if (flower.parentNode) {
                    document.body.removeChild(flower);
                }
            }, 3000);
        }
        
        document.body.appendChild(fragment);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
