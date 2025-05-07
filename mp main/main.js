<button class="get-started-button" onclick="window.location.href='register.html'">Get Started</button>

// Get references to the buttons and content area
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const content = document.getElementById('content'); // Target your content section

// Set initial font size
let fontSize = 16; // Default size for paragraphs

// Function to increase text size
increaseBtn.addEventListener('click', () => {
    fontSize += 2; // Increase font size
    content.style.fontSize = fontSize + 'px'; // Apply new size to content
});

// Function to decrease text size
decreaseBtn.addEventListener('click', () => {
    fontSize -= 2; // Decrease font size
    if (fontSize < 10) {
        fontSize = 10; // Set minimum font size
    }
    content.style.fontSize = fontSize + 'px'; // Apply new size to content
});
