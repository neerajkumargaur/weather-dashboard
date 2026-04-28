import { blogs, getBlogById } from './blogs.js';
import { fetchWeather } from './weather.js';

const mainContent = document.getElementById('main-content');

export const renderLoader = () => {
    mainContent.innerHTML = '<div class="loader"></div>';
};

export const renderError = (msg) => {
    mainContent.innerHTML = `<div class="error-msg">${msg}</div>`;
};

// --------- VIEW GENERATORS ---------

export const renderHome = async () => {
    renderLoader();
    try {
        const weather = await fetchWeather();
        
        mainContent.innerHTML = `
            <div class="dashboard-grid fade-in">
                <div class="glass-card weather-hero">
                    <h2 class="weather-location">${weather.location}</h2>
                    <div class="temp-huge">${weather.temp}°C</div>
                    <div class="weather-desc">${weather.icon} ${weather.condition}</div>
                </div>
                
                <div class="stats-grid">
                    <div class="glass-card stat-card">
                        <div class="stat-icon">🌡</div>
                        <div class="stat-value">${weather.feelsLike}°C</div>
                        <div class="stat-label">Feels Like</div>
                    </div>
                    <div class="glass-card stat-card">
                        <div class="stat-icon">💧</div>
                        <div class="stat-value">${weather.humidity}%</div>
                        <div class="stat-label">Humidity</div>
                    </div>
                    <div class="glass-card stat-card">
                        <div class="stat-icon">💨</div>
                        <div class="stat-value">${weather.windSpeed} km/h</div>
                        <div class="stat-label">Wind Speed</div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        renderError("Failed to load weather data. Please try again later.");
    }
};

export const renderAbout = () => {
    mainContent.innerHTML = `
        <div class="about-content fade-in">
            <h1>About Aero</h1>
            <p class="lead">Aero is a beautifully designed, premium weather dashboard built to provide you with the most accurate meteorological data in an instant.</p>
            
            <p>Our goal is to transcend traditional, cluttered weather interfaces. We believe that tracking the climate should be a visually stunning experience. By leveraging the power of Open-Meteo's open source weather data, Aero delivers real-time forecasts, comprehensive conditions, and expert meteorological insights via our expansive blog.</p>
            
            <ul class="feature-list">
                <li class="feature-item">
                    <h3>⚡ Real-Time Data</h3>
                    <p style="margin-top:10px; font-size:0.95rem;">Powered by high-resolution global weather models for incredible accuracy.</p>
                </li>
                <li class="feature-item">
                    <h3>🎨 Premium Design</h3>
                    <p style="margin-top:10px; font-size:0.95rem;">Glassmorphism elements, vibrant gradients, and smooth micro-animations.</p>
                </li>
            </ul>
        </div>
    `;
};

export const renderBlogList = () => {
    const cardsHtml = blogs.map(blog => `
        <article class="glass-card blog-card" data-id="${blog.id}">
            <div class="blog-image-wrapper">
                <img src="${blog.image}" alt="${blog.title}" class="blog-image" loading="lazy">
            </div>
            <div class="blog-content">
                <div class="blog-date">${blog.date}</div>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="read-more">Read Article</div>
            </div>
        </article>
    `).join('');

    mainContent.innerHTML = `
        <div class="fade-in">
            <h1>Weather Insights Blog</h1>
            <p class="lead">Dive into 20 expert articles covering atmospheric science, climate trends, and survival tips.</p>
            <div class="blog-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
    
    // Add event listeners to blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = card.getAttribute('data-id');
            renderBlogPost(id);
        });
    });
};

export const renderBlogPost = (id) => {
    const blog = getBlogById(id);
    if (!blog) {
        renderError("Blog post not found.");
        return;
    }

    mainContent.innerHTML = `
        <div class="single-blog fade-in">
            <button class="back-btn" id="back-to-blogs">← Back to Blogs</button>
            <div class="blog-header">
                <div class="blog-date" style="color:var(--clr-primary); font-weight:600;">${blog.date}</div>
                <h1>${blog.title}</h1>
            </div>
            <img src="${blog.image}" alt="${blog.title}" class="blog-hero-img">
            <div class="blog-body-text">${blog.content}</div>
        </div>
    `;

    document.getElementById('back-to-blogs').addEventListener('click', renderBlogList);
};
