document.addEventListener('DOMContentLoaded', function() {
    // Login elements
    const loginContainer = document.getElementById('loginContainer');
    const contentContainer = document.getElementById('contentContainer');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    const errorMsg = document.getElementById('errorMsg');
    const CORRECT_PASSWORD = '102123';

    // Login functionality
    loginBtn.addEventListener('click', function() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            // Correct password
            loginContainer.classList.add('hidden');
            contentContainer.classList.remove('hidden');
            initializeApp();
        } else {
            // Wrong password
            errorMsg.textContent = 'Incorrect code. Try again!';
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation
            loginContainer.style.animation = 'shake 0.5s';
            setTimeout(() => {
                loginContainer.style.animation = '';
            }, 500);
        }
    });

    // Allow pressing Enter to submit
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });

    // Only allow numbers in password field
    passwordInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        errorMsg.textContent = '';
    });

    // Initialize the app only after successful login
    function initializeApp() {
        // Your existing app initialization code goes here
        // (the particle system and all the existing functionality)
        
        // Optimized particles using canvas
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const particleCount = Math.floor(window.innerWidth / 20);
        
        // ... rest of your existing JavaScript code ...
    }

    // Add shake animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});
