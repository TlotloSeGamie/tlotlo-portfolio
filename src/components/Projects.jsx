import {  React, useState } from 'react';
import './Projects.css';
import { FaCode, FaMobileAlt, FaDesktop, FaServer } from 'react-icons/fa'; // Importing icon library


const projectsData = [
  {
    title: 'Memory Game',
    description: 'A web-based memory game to test users’ recall ability.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive gameplay', 'Responsive design'],
    challenges: 'Implementing the game logic and ensuring cross-browser compatibility.',
    link: 'https://github.com/TlotloSeGamie/Memory-Game',
    category: 'JavaScript'
  },
  {
    title: 'Base Apparel Coming Soon Page',
    description: 'A coming soon page for a fashion brand.',
    techStack: ['HTML', 'CSS'],
    features: ['Modern design', 'Email subscription form'],
    challenges: 'Achieving pixel-perfect design and form validation.',
    link: 'https://github.com/TlotloSeGamie/base-apparel-coming-soon',
    category: 'UI challenge'
  },
  {
    title: 'Game Board',
    description: 'A collaborative project to develop a game board application.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Interactive board', 'User authentication'],
    challenges: 'Coordinating tasks and implementing responsive design.',
    link: 'https://github.com/TlotloSeGamie/game-board',
    category: 'JavaScript'
  },
  {
    title: 'Employee App (Full Stack)',
    description: 'A full-stack application to manage employee data, including CRUD operations.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Bootstrap'],
    features: ['User authentication and role-based access', 'Employee management dashboard', 'RESTful APIs for backend operations'],
    challenges: 'Implementing secure authentication and optimizing database queries.',
    link: 'https://github.com/TlotloSeGamie/Employee-app-fullstack.git',
    category: 'JavaScript'
  },
  {
    title: 'Restaurant Reservation System',
    description: 'A web application to book and manage restaurant reservations.',
    techStack: ['React', 'Node.js', 'Express', 'MySQL'],
    features: ['Real-time table availability', 'User notifications for booking confirmation', 'Admin panel for managing reservations'],
    challenges: 'Handling real-time updates for booking availability.',
    link: 'https://github.com/TlotloSeGamie/reserve-restaurant-system.git',
    category: 'ReactNative'
  },
  {
    title: 'Collaborative Trip Planning App',
    description: 'A collaborative frontend application for planning trips with multiple users.',
    techStack: ['React', 'Redux', 'Firebase'],
    features: ['Real-time collaboration for trip planning', 'Integration with maps and locations', 'Chat feature for users'],
    challenges: 'Synchronizing real-time updates across multiple users.',
    link: 'https://github.com/TlotloSeGamie/frontend-trip-plan-app.git',
    category: 'ReactNative'
  },
  {
    title: 'Shopping List App',
    description: 'A web application for creating and managing shopping lists.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Add, edit, and delete items', 'Persistent storage using local storage', 'Mobile-friendly design'],
    challenges: 'Optimizing the UI for better user experience.',
    link: 'https://github.com/TlotloSeGamie/shopping-list-deploy.git',
    category: 'JavaScript'
  },
  {
    title: 'Weather App',
    description: 'A weather application to display real-time weather information.',
    techStack: ['React', 'OpenWeather API', 'Bootstrap'],
    features: ['Search weather by city', 'Display current and 5-day forecast', 'Responsive layout'],
    challenges: 'Integrating API data dynamically.',
    link: 'https://github.com/TlotloSeGamie/weather-app.git',
    category: 'ReactNative'
  },
  {
    title: 'Recipe App',
    description: 'A web app for browsing and saving recipes.',
    techStack: ['React', 'Firebase', 'CSS'],
    features: ['Search for recipes by ingredients or keywords', 'Save favorite recipes to user accounts'],
    challenges: 'Ensuring fast search across a large recipe database.',
    link: 'https://github.com/TlotloSeGamie/recipe-app.git',
    category: 'ReactNative'
  },
  {
    title: 'Gift Card App',
    description: 'A platform to manage and redeem gift cards.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
    features: ['Generate and redeem gift cards', 'Track gift card balances'],
    challenges: 'Securely handling card generation and transactions.',
    link: 'https://github.com/TlotloSeGamie/gift-card-app.git',
    category: 'ReactNative'
  },
  {
    title: 'Hotel App',
    description: 'A hotel booking application for users to book and manage stays.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['Browse available rooms with filters', 'Booking confirmation and payment integration'],
    challenges: 'Implementing secure payment processing.',
    link: 'https://github.com/TlotloSeGamie/hotel-app.git',
    category: 'ReactNative'
  },
  {
    title: 'News App API',
    description: 'A backend API for fetching and displaying news articles.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    features: ['CRUD operations for articles', 'API endpoints for querying news by category or keyword'],
    challenges: 'Structuring scalable API endpoints.',
    link: 'https://github.com/TlotloSeGamie/news-app-api.git',
    category: 'TypeScript'
  },
  {
    title: 'Recording App',
    description: 'A web app to record and manage audio files.',
    techStack: ['React', 'Web Audio API', 'Node.js'],
    features: ['Record, play, and delete audio clips', 'Save recordings to local or cloud storage'],
    challenges: 'Optimizing audio file handling in browsers.',
    link: 'https://github.com/TlotloSeGamie/recording-app.git',
    category: 'ReactNative'
  },
  {
    title: 'Big Steppa Marketplace',
    description: 'A marketplace platform for buying and selling goods.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['User profiles with listings', 'Secure payment integration', 'Chat functionality between buyers and sellers'],
    challenges: 'Handling real-time updates for transactions and messages.',
    link: 'https://github.com/TlotloSeGamie/Big-Steppa-Marketplace.git',
    category: 'ReactNative'
  },
];

const categoryIcons = {
  'UI challenge': <FaDesktop />,
  'JavaScript': <FaCode />,
  'ReactNative': <FaMobileAlt />,
  'TypeScript': <FaServer />,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="category-list">
        {['UI challenge', 'JavaScript', 'ReactNative', 'TypeScript'].map(category => (
          <div
            key={category}
            className={`category-card ${activeCategory === category ? 'active' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            <h3>
              {activeCategory === category && <div className="loader"></div>}
              {categoryIcons[category]}
              {category}
            </h3>
          </div>
        ))}
      </div>

      <div className="project-list">
        {['UI challenge', 'JavaScript', 'ReactNative', 'TypeScript'].map(category => (
          <div
            key={category}
            className={`category-section ${activeCategory === category ? 'show' : 'hide'}`}
          >
            {projectsData.filter(project => project.category === category).map((project, index) => (
              <div key={index} className="project-card">
                <h3>
                  <FaCode />
                  {project.title}
                </h3>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                <p><strong>Key Features:</strong></p>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Challenges:</strong> {project.challenges}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;