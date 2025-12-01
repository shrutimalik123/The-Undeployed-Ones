document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('repo-grid');

    const projects = [
        {
            "title": "Travel Itinerary Planner Agent",
            "description": "A smart travel agent powered by Google's Gemini 2.0 Flash model. Plans detailed, day-by-day travel itineraries based on your destination, dates, interests, and budget, with integrated weather forecasting.",
            "repoUrl": "https://github.com/shrutimalik123/A-Simple-Travel-Itinerary-Planner-Agent",
            "imageUrl": "https://placehold.co/600x400/1e293b/38bdf8?text=Travel+Planner+Agent"
        },
        {
            "title": "Mindful Move",
            "description": "An AI-powered wellness companion that finds the perfect Yoga, Pilates, or Tai Chi class tailored to your current mental and emotional state.",
            "repoUrl": "https://github.com/shrutimalik123/Mindful-Move",
            "imageUrl": "https://placehold.co/600x400/1e293b/38bdf8?text=Mindful+Move"
        },
        {
            "title": "Gut Wise",
            "description": "A comprehensive health tracking application focused on gut health, offering personalized insights and dietary recommendations. (Description inferred)",
            "repoUrl": "https://github.com/shrutimalik123/Gut-Wise",
            "imageUrl": "https://placehold.co/600x400/1e293b/38bdf8?text=Gut+Wise"
        }
    ];

    if (projects.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No projects listed yet.</p>';
        return;
    }

    projects.forEach(project => {
        const card = createCard(project);
        grid.appendChild(card);
    });
});

function createCard(project) {
    const article = document.createElement('article');
    article.className = 'card';

    // Use a default placeholder if no image is provided
    const imageUrl = project.imageUrl || 'https://via.placeholder.com/400x200/1e293b/94a3b8?text=No+Preview';

    article.innerHTML = `
        <div class="card-image-container">
            <img src="${imageUrl}" alt="${project.title}" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-desc">${project.description}</p>
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="card-link">
                View Repository &rarr;
            </a>
        </div>
    `;

    return article;
}
