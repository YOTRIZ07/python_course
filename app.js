// Python Learning App JavaScript - Fixed Version

// Application data
const appData = {
  courseOverview: {
    title: "3-Month Python Mastery Roadmap",
    subtitle: "From Zero to Job-Ready Developer",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    careerStats: {
      averageSalary: "$105,000",
      jobGrowth: "22%",
      companiesHiring: "10,000+",
      timeToJob: "3-6 months"
    }
  },
  phases: [
    {
      name: "Foundation",
      weeks: "1-3",
      description: "Master Python basics and development environment",
      color: "#3B82F6"
    },
    {
      name: "Intermediate",
      weeks: "4-6", 
      description: "Object-oriented programming and professional practices",
      color: "#10B981"
    },
    {
      name: "Specialized Learning",
      weeks: "7-9",
      description: "Choose web development or data science specialization",
      color: "#F59E0B"
    },
    {
      name: "Advanced & Projects",
      weeks: "10-12",
      description: "Capstone projects and career preparation",
      color: "#EF4444"
    }
  ],
  weeklyModules: [
    {
      week: 1,
      title: "Python Foundations & Environment Setup",
      phase: "Foundation",
      topics: ["Python Installation & VS Code Setup", "Variables & Data Types", "Basic Operations", "Virtual Environments"],
      project: "Simple Calculator",
      skills: ["Variables", "Input/Output", "Basic Operations"],
      duration: "20-25 hours",
      difficulty: "Beginner",
      description: "Set up your development environment and master Python's fundamental syntax, data types, and basic operations."
    },
    {
      week: 2,
      title: "Control Flow & Program Logic", 
      phase: "Foundation",
      topics: ["If/Elif/Else Statements", "For and While Loops", "Logical Operators", "Basic Algorithms"],
      project: "Number Guessing Game",
      skills: ["Loops", "Conditionals", "Random Module"],
      duration: "20-25 hours",
      difficulty: "Beginner",
      description: "Learn to control program flow with conditionals and loops, developing algorithmic thinking skills."
    },
    {
      week: 3,
      title: "Data Structures & File Operations",
      phase: "Foundation", 
      topics: ["Lists, Dictionaries, Tuples, Sets", "File I/O Operations", "List Comprehensions", "Data Structure Selection"],
      project: "To-Do List Application",
      skills: ["Lists", "File I/O", "Functions"],
      duration: "25-30 hours",
      difficulty: "Beginner+",
      description: "Master Python's built-in data structures and learn to persist data using file operations."
    },
    {
      week: 4,
      title: "Object-Oriented Programming",
      phase: "Intermediate",
      topics: ["Classes & Objects", "Methods & Attributes", "Inheritance", "Encapsulation"],
      project: "Contact Management System (OOP)",
      skills: ["Classes", "Objects", "Encapsulation"],
      duration: "25-30 hours", 
      difficulty: "Intermediate",
      description: "Learn object-oriented programming principles to build more complex and maintainable applications."
    },
    {
      week: 5,
      title: "Libraries & Package Management",
      phase: "Intermediate",
      topics: ["Module System", "pip & Virtual Environments", "Popular Libraries", "API Integration"],
      project: "Weather App with APIs",
      skills: ["APIs", "JSON", "Error Handling"],
      duration: "25-30 hours",
      difficulty: "Intermediate",
      description: "Expand your toolkit with external libraries and learn to integrate with web APIs."
    },
    {
      week: 6,
      title: "Testing, Debugging & Code Quality",
      phase: "Intermediate", 
      topics: ["Unit Testing with pytest", "Debugging Techniques", "Code Quality Tools", "Documentation"],
      project: "Unit Testing Suite for Previous Projects",
      skills: ["pytest/unittest", "Test-Driven Development"],
      duration: "30-35 hours",
      difficulty: "Intermediate+",
      description: "Learn professional development practices including testing, debugging, and maintaining code quality."
    },
    {
      week: 7,
      title: "Specialization Path Selection",
      phase: "Specialized Learning",
      topics: ["Web Development (Flask/Django)", "Data Science (NumPy/Pandas)", "Framework Selection", "Path Planning"],
      project: "Web Application OR Data Analysis Project", 
      skills: ["Web Frameworks OR Data Science Libraries"],
      duration: "30-35 hours",
      difficulty: "Advanced",
      description: "Choose your specialization and dive deep into either web development or data science."
    },
    {
      week: 8,
      title: "Advanced Framework & Database Integration",
      phase: "Specialized Learning",
      topics: ["Database Operations", "ORM Systems", "Advanced Framework Features", "Data Persistence"],
      project: "Database Integration & CRUD Operations",
      skills: ["SQL", "Database Operations", "Data Persistence"],
      duration: "30-35 hours",
      difficulty: "Advanced",
      description: "Master database integration and build full-featured applications with persistent data storage."
    },
    {
      week: 9,
      title: "Professional Development Tools",
      phase: "Specialized Learning", 
      topics: ["Git Version Control", "Deployment Basics", "Professional Workflows", "Code Collaboration"],
      project: "Advanced Web App with Authentication OR ML Model",
      skills: ["Authentication", "Security OR Machine Learning"],
      duration: "35-40 hours",
      difficulty: "Advanced+",
      description: "Learn professional development tools and workflows used in industry settings."
    },
    {
      week: 10,
      title: "Capstone Project Planning & Advanced Concepts",
      phase: "Advanced & Projects",
      topics: ["Project Architecture", "Advanced Python Features", "Performance Optimization", "Planning"],
      project: "Capstone Project Part 1: Planning & Setup",
      skills: ["Project Planning", "Version Control"],
      duration: "35-40 hours",
      difficulty: "Professional",
      description: "Plan and begin development of a comprehensive capstone project showcasing your skills."
    },
    {
      week: 11,
      title: "AI Integration & Advanced Development",
      phase: "Advanced & Projects",
      topics: ["AI-Assisted Development", "GitHub Copilot", "Advanced Libraries", "Professional Practices"],
      project: "Capstone Project Part 2: Development & AI Integration",
      skills: ["Advanced Python", "AI Tools Integration"],
      duration: "40-45 hours",
      difficulty: "Professional",
      description: "Integrate AI tools into your development workflow and complete advanced capstone features."
    },
    {
      week: 12,
      title: "Portfolio Development & Career Preparation",
      phase: "Advanced & Projects",
      topics: ["Portfolio Website", "Project Documentation", "Interview Preparation", "Career Planning"],
      project: "Portfolio Website & Final Capstone Presentation",
      skills: ["Documentation", "Deployment", "Presentation"],
      duration: "40-45 hours",
      difficulty: "Professional+", 
      description: "Build your professional portfolio and prepare for your Python development career."
    }
  ],
  careerPaths: [
    {
      role: "Python Developer",
      entryLevel: "$70,000",
      senior: "$140,000", 
      description: "Build applications and systems using Python across various industries",
      skills: ["Python", "Web Frameworks", "Databases", "APIs"]
    },
    {
      role: "Data Scientist", 
      entryLevel: "$85,000",
      senior: "$180,000",
      description: "Analyze data and build predictive models using Python's data science ecosystem",
      skills: ["Python", "NumPy", "Pandas", "Machine Learning", "Statistics"]
    },
    {
      role: "Web Developer",
      entryLevel: "$65,000", 
      senior: "$120,000",
      description: "Create web applications and APIs using Python web frameworks",
      skills: ["Django", "Flask", "HTML/CSS", "JavaScript", "Databases"]
    },
    {
      role: "Machine Learning Engineer",
      entryLevel: "$90,000",
      senior: "$175,000",
      description: "Deploy and maintain machine learning systems in production environments", 
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"]
    },
    {
      role: "DevOps Engineer",
      entryLevel: "$75,000",
      senior: "$150,000",
      description: "Automate infrastructure and deployment processes using Python",
      skills: ["Python", "Docker", "Kubernetes", "CI/CD", "Cloud Services"]
    },
    {
      role: "Data Analyst", 
      entryLevel: "$60,000",
      senior: "$110,000",
      description: "Extract insights from data using Python analysis and visualization tools",
      skills: ["Python", "Pandas", "Matplotlib", "SQL", "Excel"]
    }
  ],
  resources: {
    tools: [
      {
        name: "Visual Studio Code",
        category: "IDE", 
        description: "Professional code editor with Python extensions",
        link: "https://code.visualstudio.com/"
      },
      {
        name: "Git",
        category: "Version Control",
        description: "Track changes and collaborate on code projects", 
        link: "https://git-scm.com/"
      },
      {
        name: "GitHub", 
        category: "Code Hosting",
        description: "Host repositories and showcase your portfolio",
        link: "https://github.com/"
      },
      {
        name: "Python.org",
        category: "Documentation",
        description: "Official Python documentation and downloads",
        link: "https://python.org/"
      }
    ],
    libraries: [
      {
        name: "Flask",
        category: "Web Framework",
        description: "Lightweight web framework for building web applications"
      },
      {
        name: "Django", 
        category: "Web Framework",
        description: "Full-featured web framework with batteries included"
      },
      {
        name: "NumPy",
        category: "Data Science",
        description: "Fundamental package for scientific computing with Python"
      },
      {
        name: "Pandas",
        category: "Data Science", 
        description: "Data manipulation and analysis library"
      },
      {
        name: "Requests",
        category: "HTTP Library",
        description: "Simple HTTP library for making API calls"
      },
      {
        name: "pytest",
        category: "Testing",
        description: "Framework for writing simple and scalable test cases"
      }
    ]
  },
  projects: [
    {
      week: 1,
      name: "Simple Calculator", 
      difficulty: "Beginner",
      description: "Command-line calculator with basic arithmetic operations",
      skills: ["Variables", "Input/Output", "Basic Operations", "Functions"],
      features: ["Addition, subtraction, multiplication, division", "Error handling for invalid input", "Continuous operation mode"]
    },
    {
      week: 2,
      name: "Number Guessing Game",
      difficulty: "Beginner", 
      description: "Interactive guessing game with hints and attempt tracking",
      skills: ["Loops", "Conditionals", "Random Module", "User Input"],
      features: ["Random number generation", "Higher/lower hints", "Attempt counter", "Play again option"]
    },
    {
      week: 3,
      name: "To-Do List Application",
      difficulty: "Beginner+",
      description: "Command-line task manager with file persistence",
      skills: ["Lists", "File I/O", "Functions", "Data Persistence"],
      features: ["Add/remove tasks", "Mark tasks complete", "Save to file", "Load previous tasks"]
    },
    {
      week: 4,
      name: "Contact Management System",
      difficulty: "Intermediate",
      description: "Object-oriented contact manager with data validation", 
      skills: ["Classes", "Objects", "Encapsulation", "Data Validation"],
      features: ["Contact class with methods", "Search and filter contacts", "Input validation", "Export contacts"]
    },
    {
      week: 5,
      name: "Weather Application",
      difficulty: "Intermediate",
      description: "Fetch and display weather data from external API",
      skills: ["APIs", "JSON", "Error Handling", "External Libraries"],
      features: ["Real-time weather data", "Multiple location support", "Error handling", "Formatted output"]
    },
    {
      week: 6, 
      name: "Testing Suite Development",
      difficulty: "Intermediate+",
      description: "Comprehensive test suite for all previous projects",
      skills: ["pytest", "Test-Driven Development", "Fixtures", "Mocking"],
      features: ["Unit tests for all functions", "Test fixtures", "Mocked API calls", "Coverage reporting"]
    }
  ]
};

// Application state
let appState = {
  currentSection: 'hero',
  completedWeeks: new Set(),
  completedProjects: new Set(),
  selectedWeek: null,
  currentFilter: 'all'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  generateTimelineWeeks();
  generateProjectCards();
  generateCareerCards();
  generateResourceContent();
  generateDashboardContent();
  setupModalHandlers();
  setupCareerCalculator();
  setupResourceTabs();
  setupProjectFilters();
  updateProgress();
  
  // Show hero section by default
  navigateToSection('hero');
}

// Navigation Management
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const heroButtons = document.querySelectorAll('[data-section]');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      if (section) {
        navigateToSection(section);
        updateActiveNavItem(item);
      }
    });
  });
  
  heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const section = button.dataset.section;
      if (section) {
        navigateToSection(section);
        // Update nav item for non-nav buttons
        const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
        if (navItem) {
          updateActiveNavItem(navItem);
        }
      }
    });
  });
}

function navigateToSection(sectionId) {
  console.log('Navigating to section:', sectionId);
  
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    appState.currentSection = sectionId;
    console.log('Section shown:', sectionId);
  } else {
    console.error('Section not found:', sectionId);
  }
}

function updateActiveNavItem(activeItem) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  if (activeItem && activeItem.classList.contains('nav-item')) {
    activeItem.classList.add('active');
  }
}

// Timeline Generation
function generateTimelineWeeks() {
  const container = document.getElementById('timeline-weeks');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.weeklyModules.forEach(week => {
    const weekElement = document.createElement('div');
    weekElement.className = `week-item ${appState.completedWeeks.has(week.week) ? 'completed' : ''}`;
    weekElement.dataset.week = week.week;
    
    weekElement.innerHTML = `
      <div class="week-number">Week ${week.week}</div>
      <div class="week-title">${week.title}</div>
      <div class="week-phase-badge">${week.phase}</div>
      <div class="week-status"></div>
    `;
    
    weekElement.addEventListener('click', () => openWeekModal(week));
    container.appendChild(weekElement);
  });
}

// Modal Management
function setupModalHandlers() {
  const modal = document.getElementById('week-modal');
  const closeBtn = document.querySelector('.modal-close');
  const overlay = document.querySelector('.modal-overlay');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }
  
  // Mark complete button
  const markCompleteBtn = document.getElementById('mark-complete-btn');
  if (markCompleteBtn) {
    markCompleteBtn.addEventListener('click', () => {
      if (appState.selectedWeek) {
        toggleWeekCompletion(appState.selectedWeek.week);
        updateWeekModalState();
        updateProgress();
        regenerateTimelineWeeks();
      }
    });
  }
  
  // View project button
  const viewProjectBtn = document.getElementById('view-project-btn');
  if (viewProjectBtn) {
    viewProjectBtn.addEventListener('click', () => {
      closeModal();
      navigateToSection('projects');
      const navItem = document.querySelector('[data-section="projects"]');
      updateActiveNavItem(navItem);
    });
  }
}

function openWeekModal(week) {
  appState.selectedWeek = week;
  
  // Populate modal content
  document.getElementById('modal-title').textContent = `Week ${week.week}: ${week.title}`;
  document.getElementById('modal-phase').textContent = week.phase;
  document.getElementById('modal-duration').textContent = week.duration;
  document.getElementById('modal-difficulty').textContent = week.difficulty;
  document.getElementById('modal-description').textContent = week.description;
  
  // Topics
  const topicsList = document.getElementById('modal-topics');
  topicsList.innerHTML = '';
  week.topics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = topic;
    topicsList.appendChild(li);
  });
  
  // Project
  document.getElementById('modal-project').innerHTML = `
    <strong>${week.project}</strong>
  `;
  
  // Skills
  const skillsContainer = document.getElementById('modal-skills');
  skillsContainer.innerHTML = '';
  week.skills.forEach(skill => {
    const skillTag = document.createElement('span');
    skillTag.className = 'skill-tag';
    skillTag.textContent = skill;
    skillsContainer.appendChild(skillTag);
  });
  
  updateWeekModalState();
  document.getElementById('week-modal').classList.remove('hidden');
}

function updateWeekModalState() {
  const completeBtn = document.getElementById('mark-complete-btn');
  const isCompleted = appState.completedWeeks.has(appState.selectedWeek.week);
  
  completeBtn.textContent = isCompleted ? 'Mark Incomplete' : 'Mark Complete';
  completeBtn.className = `btn ${isCompleted ? 'btn--secondary' : 'btn--primary'}`;
}

function closeModal() {
  document.getElementById('week-modal').classList.add('hidden');
  appState.selectedWeek = null;
}

function toggleWeekCompletion(weekNumber) {
  if (appState.completedWeeks.has(weekNumber)) {
    appState.completedWeeks.delete(weekNumber);
  } else {
    appState.completedWeeks.add(weekNumber);
  }
  
  regenerateTimelineWeeks();
}

function regenerateTimelineWeeks() {
  // Update timeline visual
  const weekElement = document.querySelector(`[data-week="${appState.selectedWeek?.week}"]`);
  if (weekElement) {
    weekElement.classList.toggle('completed', appState.completedWeeks.has(appState.selectedWeek.week));
  }
}

// Projects Section
function generateProjectCards() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.difficulty = project.difficulty;
    
    const isCompleted = appState.completedProjects.has(project.week);
    
    projectCard.innerHTML = `
      <div class="project-header">
        <div class="project-meta">
          <span class="project-week">Week ${project.week}</span>
          <span class="project-difficulty ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
        </div>
        <h3 class="project-title">${project.name}</h3>
        <p class="project-description">${project.description}</p>
      </div>
      
      <div class="project-skills">
        <h4>Skills Required</h4>
        <div class="skills-tags">
          ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
      
      <div class="project-actions">
        <button class="btn ${isCompleted ? 'btn--success' : 'btn--primary'}" onclick="toggleProjectCompletion(${project.week})">
          ${isCompleted ? '✓ Completed' : 'Mark Complete'}
        </button>
        <button class="btn btn--outline" onclick="viewProjectDetails(${project.week})">View Details</button>
      </div>
    `;
    
    container.appendChild(projectCard);
  });
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active filter
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      appState.currentFilter = filter;
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (filter === 'all' || card.dataset.difficulty === filter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Global functions for onclick handlers
window.toggleProjectCompletion = function(weekNumber) {
  if (appState.completedProjects.has(weekNumber)) {
    appState.completedProjects.delete(weekNumber);
  } else {
    appState.completedProjects.add(weekNumber);
  }
  
  // Regenerate project cards to update status
  generateProjectCards();
  filterProjects(appState.currentFilter);
  updateProgress();
  regenerateDashboard();
};

window.viewProjectDetails = function(weekNumber) {
  const project = appData.projects.find(p => p.week === weekNumber);
  if (project) {
    alert(`Project: ${project.name}\n\nFeatures:\n• ${project.features.join('\n• ')}`);
  }
};

// Career Section
function generateCareerCards() {
  const container = document.querySelector('.careers-grid');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.careerPaths.forEach(career => {
    const careerCard = document.createElement('div');
    careerCard.className = 'career-card';
    
    careerCard.innerHTML = `
      <div class="career-header">
        <h3 class="career-title">${career.role}</h3>
        <div class="salary-range">
          <div class="salary-item">
            <div class="salary-label">Entry Level</div>
            <div class="salary-value">${career.entryLevel}</div>
          </div>
          <div class="salary-item">
            <div class="salary-label">Senior Level</div>
            <div class="salary-value">${career.senior}</div>
          </div>
        </div>
      </div>
      
      <p class="career-description">${career.description}</p>
      
      <div class="career-skills">
        <h4>Key Skills</h4>
        <div class="skills-tags">
          ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
    
    container.appendChild(careerCard);
  });
}

function setupCareerCalculator() {
  const careerSelect = document.getElementById('career-select');
  const experienceSelect = document.getElementById('experience-select');
  const salaryResult = document.getElementById('salary-result');
  
  if (!careerSelect || !experienceSelect || !salaryResult) return;
  
  // Clear existing options
  careerSelect.innerHTML = '<option value="">Choose a career...</option>';
  
  // Populate career options
  appData.careerPaths.forEach(career => {
    const option = document.createElement('option');
    option.value = career.role;
    option.textContent = career.role;
    careerSelect.appendChild(option);
  });
  
  function updateSalary() {
    const selectedCareer = careerSelect.value;
    const experienceLevel = experienceSelect.value;
    
    if (selectedCareer) {
      const career = appData.careerPaths.find(c => c.role === selectedCareer);
      const salary = experienceLevel === 'entry' ? career.entryLevel : career.senior;
      
      salaryResult.innerHTML = `
        <div class="salary-display">${salary}</div>
        <p style="margin-top: 16px; color: var(--color-text-secondary);">
          ${experienceLevel === 'entry' ? 'Entry Level' : 'Senior Level'} ${career.role} Salary
        </p>
      `;
    } else {
      salaryResult.innerHTML = `
        <div class="salary-display">Select a career path to see salary information</div>
      `;
    }
  }
  
  careerSelect.addEventListener('change', updateSalary);
  experienceSelect.addEventListener('change', updateSalary);
}

// Resources Section
function generateResourceContent() {
  generateToolsGrid();
  generateLibrariesGrid();
}

function generateToolsGrid() {
  const container = document.getElementById('tools-grid');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.resources.tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'resource-card';
    
    toolCard.innerHTML = `
      <div class="resource-header">
        <h3 class="resource-name">${tool.name}</h3>
        <span class="resource-category">${tool.category}</span>
      </div>
      <p class="resource-description">${tool.description}</p>
      <a href="${tool.link}" target="_blank" class="btn btn--outline btn--sm">Visit Website</a>
    `;
    
    container.appendChild(toolCard);
  });
}

function generateLibrariesGrid() {
  const container = document.getElementById('libraries-grid');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.resources.libraries.forEach(library => {
    const libraryCard = document.createElement('div');
    libraryCard.className = 'resource-card';
    
    libraryCard.innerHTML = `
      <div class="resource-header">
        <h3 class="resource-name">${library.name}</h3>
        <span class="resource-category">${library.category}</span>
      </div>
      <p class="resource-description">${library.description}</p>
    `;
    
    container.appendChild(libraryCard);
  });
}

function setupResourceTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Update active tab button
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Show target tab content
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      const targetContent = document.getElementById(`${targetTab}-content`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Dashboard Section
function generateDashboardContent() {
  generateWeeksProgress();
  generateAchievements();
}

function generateWeeksProgress() {
  const container = document.getElementById('weeks-progress');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  appData.weeklyModules.forEach(week => {
    const isCompleted = appState.completedWeeks.has(week.week);
    
    const progressItem = document.createElement('div');
    progressItem.className = `week-progress-item ${isCompleted ? 'completed' : ''}`;
    
    progressItem.innerHTML = `
      <div class="week-progress-info">
        <div class="week-progress-number">${week.week}</div>
        <div>
          <div class="week-progress-title">${week.title}</div>
          <div class="week-progress-phase">${week.phase}</div>
        </div>
      </div>
      <div class="week-progress-status">
        ${isCompleted ? '✓ Complete' : 'In Progress'}
      </div>
    `;
    
    container.appendChild(progressItem);
  });
}

function generateAchievements() {
  const achievements = [
    { name: 'First Steps', icon: '🚀', requirement: 1 },
    { name: 'Foundation', icon: '🏗️', requirement: 3 },
    { name: 'Halfway', icon: '⚡', requirement: 6 },
    { name: 'Advanced', icon: '🎯', requirement: 9 },
    { name: 'Graduate', icon: '🎓', requirement: 12 }
  ];
  
  const container = document.getElementById('achievements-grid');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing content
  
  achievements.forEach(achievement => {
    const completedWeeks = appState.completedWeeks.size;
    const isEarned = completedWeeks >= achievement.requirement;
    
    const badgeElement = document.createElement('div');
    badgeElement.className = `achievement-badge ${isEarned ? 'earned' : ''}`;
    
    badgeElement.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-name">${achievement.name}</div>
    `;
    
    container.appendChild(badgeElement);
  });
}

function regenerateDashboard() {
  generateWeeksProgress();
  generateAchievements();
  updateProgress();
}

function updateProgress() {
  const totalWeeks = appData.weeklyModules.length;
  const completedWeeks = appState.completedWeeks.size;
  const totalProjects = appData.projects.length;
  const completedProjects = appState.completedProjects.size;
  
  const overallProgress = Math.round((completedWeeks / totalWeeks) * 100);
  
  // Update navigation progress
  const navProgress = document.getElementById('overall-progress');
  if (navProgress) {
    navProgress.textContent = `${overallProgress}%`;
  }
  
  // Update dashboard
  const dashboardProgress = document.getElementById('dashboard-progress');
  if (dashboardProgress) {
    dashboardProgress.textContent = `${overallProgress}%`;
  }
  
  const weeksCompletedEl = document.getElementById('weeks-completed');
  if (weeksCompletedEl) {
    weeksCompletedEl.textContent = `${completedWeeks}/${totalWeeks}`;
  }
  
  const projectsCompletedEl = document.getElementById('projects-completed');
  if (projectsCompletedEl) {
    projectsCompletedEl.textContent = `${completedProjects}/${totalProjects}`;
  }
  
  // Calculate total skills
  const allSkills = new Set();
  appData.weeklyModules.forEach(week => {
    if (appState.completedWeeks.has(week.week)) {
      week.skills.forEach(skill => allSkills.add(skill));
    }
  });
  
  const skillsCountEl = document.getElementById('skills-count');
  if (skillsCountEl) {
    skillsCountEl.textContent = allSkills.size;
  }
  
  // Update progress circle
  const progressCircle = document.querySelector('.progress-circle');
  if (progressCircle) {
    progressCircle.style.background = `conic-gradient(var(--color-primary) ${overallProgress * 3.6}deg, var(--color-border) 0deg)`;
  }
}