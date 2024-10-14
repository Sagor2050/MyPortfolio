document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded");

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const nav = document.querySelector('.nav');

    // Check if dark mode preference is saved in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Save dark mode preference to local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Toggle navigation for mobile view
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.id = 'menu-toggle';
    menuButton.style.marginLeft = 'auto';
    menuButton.style.padding = '5px 10px';
    menuButton.style.cursor = 'pointer';
    document.querySelector('.sidebar').insertBefore(menuButton, nav);

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

function openPDF() {
    window.open('Sagor Sutra Dhor.pdf', '_blank');
}

function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
