import Link from 'next/link';
import './projects.css';

// Sample project data - you can replace this with your actual data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A minimalist portfolio website built with Next.js and CSS.",
    githubUrl: "https://github.com/yashashr98/portfolio_project",
    liveUrl: "https://yashashr.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with React and Node.js.",
    githubUrl: "https://github.com/yashashr98/ecommerce-project",
    liveUrl: "https://ecommerce-demo.yashashr.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that uses OpenWeatherMap API.",
    githubUrl: "https://github.com/yashashr98/weather-app",
    liveUrl: "https://weather.yashashr.com",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A task management application with drag-and-drop functionality.",
    githubUrl: "https://github.com/yashashr98/task-manager",
    liveUrl: "https://tasks.yashashr.com",
  },
];

export default function Projects() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>I am Yashas</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/techblogs">TechBlogs</Link>
            <Link href="/personalplayground">PersonalPlayground</Link>
          </nav>
        </div>
      </header>
      
      <main className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-buttons">
                <Link href={`/projects/${project.id}/doc`} className="project-button doc-button">
                  Documentation
                </Link>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-button github-button"
                >
                  GitHub
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-button live-button"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2023 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}