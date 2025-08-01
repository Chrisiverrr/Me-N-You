document.getElementById('loveButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    
    // Optional: Change button text when clicked
    if (!message.classList.contains('hidden')) {
        this.textContent = 'Click Again!';
    } else {
        this.textContent = 'Click Me';
    }
});
