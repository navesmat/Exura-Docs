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

function scrollToGlossaryTerm(termId) {
    // Switch to glossary tab
    const glossaryTab = document.querySelector('[data-section="glossary"]');
    const glossarySection = document.getElementById('glossary');
    
    // Remove active class from all tabs and sections
    document.querySelectorAll('.nav-items li').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    
    // Activate glossary tab and section
    glossaryTab.classList.add('active');
    glossarySection.classList.add('active');

    // Small delay to ensure section is visible before scrolling
    setTimeout(() => {
        const termElement = document.getElementById(termId);
        if (termElement) {
            termElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            termElement.classList.add('highlight');
            setTimeout(() => termElement.classList.remove('highlight'), 2000);
        }
    }, 100);
}

// Add smooth highlight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes highlightTerm {
        0% { background-color: #dbeafe80; }
        100% { background-color: transparent; }
    }
    .highlight {
        animation: highlightTerm 2s ease;
    }
`;
document.head.appendChild(style);
