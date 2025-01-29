
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

window.addEventListener('scroll', function () {
    if (window.innerWidth >= 1024) { // Apply only on larger screens
        const rightSection = document.querySelector('.right-section');
        const container = document.querySelector('.container');
        const contentWrapper = document.querySelector('.content_wrapper');
        const headerHeight = document.querySelector('header').offsetHeight; // Get header height

        const scrollPosition = window.scrollY; // Current scroll position from the top of the viewport
        const contentWrapperTop = contentWrapper.offsetTop;
        const contentWrapperBottom = contentWrapperTop + contentWrapper.offsetHeight; // Calculate bottom of content wrapper
        const extraSpace = 100; // Add extra space below the content wrapper

        // Check if the top of the content wrapper is at the top of the viewport and not past the bottom
        if (scrollPosition >= contentWrapperTop - headerHeight && scrollPosition < contentWrapperBottom + extraSpace - window.innerHeight) {
            rightSection.style.position = 'fixed';
            rightSection.style.top = `${headerHeight}px`;

            // Set fixed right margin
            const rightMargin = (window.innerWidth - container.offsetWidth) / 2;

            if (window.innerWidth >= 1440) {
                rightSection.style.right = `${rightMargin - 8}px`;
            } else if (window.innerWidth >= 1280) {
                rightSection.style.right = `${rightMargin}px`;
            } else {
                rightSection.style.right = '16px'; // or '1rem'
            }
        } else {
            rightSection.style.position = 'static';
            rightSection.style.right = 'auto';
        }
    } else {
        const rightSection = document.querySelector('.right-section');
        rightSection.style.position = 'static';
        rightSection.style.right = 'auto';
    }
});
