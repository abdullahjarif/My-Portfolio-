// Main JavaScript functionality
class Portfolio {
    constructor() {
        this.activeSection = 'home';
        this.isLoading = true;
        this.loadingProgress = 0;
        this.currentFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.setupLoading();
        this.setupNavigation();
        this.setupScrollObserver();
        this.setupHeroTyping();
        this.setupContactForm();
        this.setupProjectFilters();
        this.populateContent();
    }
    
    // Loading Screen
    setupLoading() {
        const loadingStages = [
            { progress: 20, text: 'Loading assets...' },
            { progress: 40, text: 'Preparing portfolio...' },
            { progress: 60, text: 'Setting up animations...' },
            { progress: 80, text: 'Finalizing content...' },
            { progress: 100, text: 'Ready!' }
        ];
        
        const progressFill = document.getElementById('progress-fill');
        const loadingText = document.getElementById('loading-text');
        const loadingPercentage = document.getElementById('loading-percentage');
        
        const updateProgress = () => {
            this.loadingProgress = Math.min(this.loadingProgress + Math.random() * 8 + 2, 100);
            
            progressFill.style.width = `${this.loadingProgress}%`;
            loadingPercentage.textContent = `${Math.floor(this.loadingProgress)}%`;
            
            // Update loading text based on progress
            const currentStage = loadingStages.find(stage => 
                this.loadingProgress >= stage.progress - 20 && 
                this.loadingProgress < stage.progress + 20
            );
            
            if (currentStage) {
                loadingText.textContent = currentStage.text;
            }
            
            if (this.loadingProgress >= 100) {
                loadingText.textContent = 'Complete!';
                setTimeout(() => this.hideLoading(), 500);
                return;
            }
            
            setTimeout(updateProgress, 120);
        };
        
        // Start loading after a brief delay
        setTimeout(updateProgress, 100);
    }
    
    hideLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        loadingScreen.classList.add('hidden');
        mainContent.style.opacity = '0';
        mainContent.style.display = 'block';
        
        // Fade in main content
        setTimeout(() => {
            mainContent.style.transition = 'opacity 0.5s ease-out';
            mainContent.style.opacity = '1';
            this.isLoading = false;
            this.animateSkillBars();
        }, 100);
    }
    
    // Navigation
    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                
                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Hero button actions
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.scrollToSection(action);
            });
        });
    }
    
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    setupScrollObserver() {
        const observerOptions = {
            threshold: 0.6,
            rootMargin: '-10% 0px -10% 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.activeSection = entry.target.id;
                    this.updateActiveNavLink();
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }
    
    updateActiveNavLink() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === this.activeSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Hero Typing Animation
    setupHeroTyping() {
        const typingText = document.getElementById('typing-text');
        const typingSubtitle = document.getElementById('typing-subtitle');
        const fullText = "Hi, I'm Abdullah Jarif";
        const subtitle = "Full Stack Developer & Problem Solver";
        
        let i = 0;
        const typeText = () => {
            if (i < fullText.length) {
                typingText.textContent = fullText.slice(0, i + 1);
                i++;
                setTimeout(typeText, 100);
            } else {
                // Start subtitle typing
                let j = 0;
                const typeSubtitle = () => {
                    if (j < subtitle.length) {
                        typingSubtitle.textContent = subtitle.slice(0, j + 1);
                        j++;
                        setTimeout(typeSubtitle, 50);
                    }
                };
                setTimeout(typeSubtitle, 500);
            }
        };
        
        // Start typing after loading is complete
        setTimeout(() => {
            if (!this.isLoading) {
                typeText();
            } else {
                // Wait for loading to complete
                const checkLoading = () => {
                    if (!this.isLoading) {
                        typeText();
                    } else {
                        setTimeout(checkLoading, 100);
                    }
                };
                checkLoading();
            }
        }, 1000);
    }
    
    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = `
                <div class="loading-spinner-btn"></div>
                <span>Sending...</span>
            `;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = `
                    <i class="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                `;
                
                // Show success message
                formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
                formStatus.className = 'form-status success show';
                
                // Reset form
                form.reset();
                
                // Hide status after 3 seconds
                setTimeout(() => {
                    formStatus.classList.remove('show');
                }, 3000);
            }, 1500);
        });
    }
    
    // Project Filters
    setupProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active filter
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentFilter = btn.getAttribute('data-filter');
                this.filterProjects();
            });
        });
    }
    
    filterProjects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (this.currentFilter === 'all' || category === this.currentFilter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
    
    // Populate Content
    populateContent() {
        this.populateAbout();
        this.populateSkills();
        this.populateEducation();
        this.populatePublications();
        this.populateProjects();
    }
    
    populateAbout() {
        const description = document.getElementById('about-description');
        const highlights = document.getElementById('about-highlights');
        
        description.textContent = portfolioData.about.description;
        
        highlights.innerHTML = portfolioData.about.highlights.map(highlight => `
            <div class="highlight-card">
                <div class="highlight-icon">${highlight.icon}</div>
                <h4 class="highlight-title">${highlight.title}</h4>
                <p class="highlight-description">${highlight.description}</p>
            </div>
        `).join('');
    }
    
    populateSkills() {
        const container = document.getElementById('skills-container');
        
        container.innerHTML = portfolioData.skills.map(category => `
            <div class="skills-category glass">
                <h3>${category.category}</h3>
                <div class="skills-list">
                    ${category.items.map(skill => `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-level="${skill.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
    
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
            }, index * 100);
        });
    }
    
    populateEducation() {
        const timeline = document.getElementById('education-timeline');
        
        timeline.innerHTML = `
            <div class="timeline-line"></div>
            ${portfolioData.education.map(item => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="education-card">
                        <div class="education-header">
                            <h3 class="education-degree">${item.degree}</h3>
                            <span class="education-year">${item.year}</span>
                        </div>
                        <p class="education-institution">${item.institution}</p>
                        <p class="education-description">${item.description}</p>
                        ${item.gpa ? `<p class="education-gpa">GPA: ${item.gpa}</p>` : ''}
                    </div>
                </div>
            `).join('')}
        `;
    }
    
    populatePublications() {
        const grid = document.getElementById('publications-grid');
        
        grid.innerHTML = portfolioData.publications.map(pub => `
            <div class="publication-card">
                <div class="publication-header">
                    <h3 class="publication-title">${pub.title}</h3>
                    ${pub.link ? `<a href="${pub.link}" class="publication-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                    </a>` : ''}
                </div>
                <p class="publication-journal">${pub.journal}</p>
                <div class="publication-meta">
                    <i class="fas fa-calendar"></i>
                    <span>${pub.year}</span>
                </div>
                <p class="publication-abstract">${pub.abstract}</p>
                ${pub.citations ? `<div class="publication-citations">Citations: ${pub.citations}</div>` : ''}
            </div>
        `).join('');
    }
    
    populateProjects() {
        const grid = document.getElementById('projects-grid');
        
        grid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    ${project.icon}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link demo-link" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                                Demo
                            </a>
                        ` : ''}
                        ${project.github ? `
                            <a href="${project.github}" class="project-link github-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                Code
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollTo = (element) => {
        const targetPosition = element.offsetTop - 64; // Account for navbar height
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
    };
    
    // Override smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });
}
