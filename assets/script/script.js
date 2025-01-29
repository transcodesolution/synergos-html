
document.addEventListener('DOMContentLoaded', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease'; // Added transform transition

    document.getElementById('toggle-menu').addEventListener('click', function () {
        dropdownMenu.classList.toggle('show'); // Toggle the 'show' class

    });

    document.getElementById('close-button').addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            dropdownMenu.classList.remove('show'); // Remove the 'show' class
            dropdownMenu.style.transform = 'translateX(-20px)'; // Move back to the left
        }
    });
});