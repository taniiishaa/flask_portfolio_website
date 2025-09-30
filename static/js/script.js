// A helpful console log to confirm the script is loading
console.log("Welcome to Tanisha's Portfolio! Script loaded successfully.");

/**
 * Toggles the 'dark-mode' class on the body element
 * and updates the icon for the theme toggle.
 * It also saves the preference to localStorage.
 */
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Check if dark mode is now active
    const isDarkMode = body.classList.contains('dark-mode');

    // Update the icon based on the current mode
    if (isDarkMode) {
        // Change to Sun icon for light mode
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        // Save the preference
        localStorage.setItem('theme', 'dark');
    } else {
        // Change to Moon icon for dark mode
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        // Save the preference
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Applies the saved theme preference on page load
 */
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // If the saved theme is 'dark', apply dark mode
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        // Set the icon to sun
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        // Default or saved 'light' mode
        body.classList.remove('dark-mode');
        // Set the icon to moon
        if (themeIcon) {
             themeIcon.classList.remove('fa-sun');
             themeIcon.classList.add('fa-moon');
        }
    }
}

// Run the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    // The CSS scroll-behavior: smooth handles most of the scrolling. 
    // No extra JS is needed for smooth scrolling, but we keep this event listener
    // as a fallback or for future complex needs.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                // For modern browsers, CSS handles it, but this ensures a smooth jump
                // if not using CSS 'scroll-behavior: smooth'
            }
        });
    });
});