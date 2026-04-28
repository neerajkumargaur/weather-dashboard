import { renderHome, renderAbout, renderBlogList } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Routing mapped to functions
    const routes = {
        'home': renderHome,
        'about': renderAbout,
        'blog': renderBlogList
    };

    const navigateTo = (targetId) => {
        // Update active class on nav
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            }
        });

        // Render specific view
        if (routes[targetId]) {
            routes[targetId]();
        }
    };

    // Add click events to nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            navigateTo(target);
            
            // Close mobile menu if open
            if(window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        });
    });
    
    // Logo clicks go to home
    document.querySelector('.logo').addEventListener('click', () => {
        navigateTo('home');
    });

    // Mobile menu toggle (simple implementation)
    mobileToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(9, 9, 11, 0.95)';
            navMenu.style.padding = '20px';
            navMenu.style.gap = '15px';
            navMenu.style.borderBottom = '1px solid var(--clr-border)';
        }
    });

    // Initial load
    navigateTo('home');
});
