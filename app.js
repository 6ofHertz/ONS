class ProjectManager {
    constructor() {
        this.projects = [];
        this.cardContainer = document.getElementById('cardContainer');
        this.init();
    }

    async init() {
        await this.loadProjects();
        this.renderProjects();
    }

    async loadProjects() {
        try {
            const response = await fetch('./data/projects.json');
            this.projects = await response.json();
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    renderProjects() {
        this.cardContainer.innerHTML = this.projects
            .map(project => `
                <div class="project-card card-entrance">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `).join('');
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new ProjectManager();
});
