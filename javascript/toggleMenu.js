document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.getElementById("nav-list");

    // Function to toggle menu visibility
    function toggleMenu() {
        if (navList) {
            navList.classList.toggle("showing");
        }
    }

    // Function to hide menu
    function hideMenu() {
        if (navList) {
            navList.classList.remove("showing");
        }
    }

    // Toggle menu when menu icon is clicked
    if (menuIcon) {
        menuIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from bubbling up
            toggleMenu();
        });
    }

    // Hide menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navList && !navList.contains(event.target) && !menuIcon.contains(event.target)) {
            hideMenu();
        }
    });

    // Prevent menu from closing when clicking inside the menu
    if (navList) {
        navList.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
});
