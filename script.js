document.getElementById('loveButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    message.classList.toggle('message-visible');
    
    // Create floating hearts when button is clicked
    if (message.classList.contains('message-visible')) {
        createHearts();
        this.textContent = '❤️ Click Again! ❤️';
    } else {
        this.textContent = 'Click Me';
    }
});

function createHearts() {
    // Remove existing hearts if any
    document.querySelectorAll('.heart').forEach(heart => heart.remove());
    
    // Create 10 floating hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(heart);
    }
            }
