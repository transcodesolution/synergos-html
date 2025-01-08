
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease'; // Added transform transition
        dropdownMenu.style.opacity = '0'; // Initially hidden
        dropdownMenu.style.visibility = 'hidden'; // Initially hidden
        dropdownMenu.style.transform = 'translateX(-20px)'; // Initially shifted to the left

        document.getElementById('toggle-menu').addEventListener('click', function() {
            dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
            
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.style.opacity = '1'; // Show the dropdown
                dropdownMenu.style.visibility = 'visible'; // Make it visible
                dropdownMenu.style.transform = 'translateX(0)'; // Move to original position
            } else {
                dropdownMenu.style.opacity = '0'; // Hide the dropdown
                dropdownMenu.style.visibility = 'hidden'; // Make it hidden
                dropdownMenu.style.transform = 'translateX(-20px)'; // Move back to the left
            }
        });
    
        document.getElementById('close-button').addEventListener('click', function() {
            dropdownMenu.style.opacity = '0'; 
            dropdownMenu.style.visibility = 'hidden'; // Make it hidden
            dropdownMenu.style.transform = 'translateX(-20px)'; // Move back to the left
            dropdownMenu.classList.remove('show'); 
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024) {
                dropdownMenu.classList.remove('show'); // Remove the 'show' class
                dropdownMenu.style.opacity = '0'; // Hide the dropdown
                dropdownMenu.style.visibility = 'hidden'; // Make it hidden
                dropdownMenu.style.transform = 'translateX(-20px)'; // Move back to the left
            }
        });
    });