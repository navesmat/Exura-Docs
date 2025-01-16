document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-items li');
    const sections = document.querySelectorAll('section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked item
            item.classList.add('active');
            
            // Show corresponding section
            const sectionId = item.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Initialize version selector
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const versionSelect = document.getElementById('version-select');
    if (versionSelect) {
        for (let option of versionSelect.options) {
            if (option.value === filename) {
                option.selected = true;
                break;
            }
        }
    }
});
