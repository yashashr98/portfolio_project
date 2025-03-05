import Link from 'next/link';
import '../../../page.css';
import './doc.css';

// This is a sample function to get project data by ID
// In a real app, you would fetch this from an API or database
function getProjectById(id: string) {
  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A minimalist portfolio website built with Next.js and CSS.",
      features: [
        "Responsive design",
        "Server-side rendering",
        "Clean and minimalist UI",
        "Project showcase",
      ],
      technologies: ["Next.js", "React", "CSS", "TypeScript"],
      challenges: "Creating a clean, responsive design that works well on all devices.",
      future: "Adding a blog section and more interactive elements.",
    },
    // Add more projects as needed
  ];
  
  return projects.find(project => project.id === id) || null;
}

export default function ProjectDoc({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    return (
      <div className="doc-container">
        <h1>Project Not Found</h1>
        <Link href="/projects">Back to Projects</Link>
      </div>
    );
  }
  
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
      
      <main className="doc-container">
        <div className="doc-header">
          <h1 className="doc-title">{project.title}</h1>
          <Link href="/projects" className="back-link">Back to Projects</Link>
        </div>
        
        <div className="doc-section">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>
        
        <div className="doc-section">
          <h2>Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="doc-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="doc-section">
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </div>
        
        <div className="doc-section">
          <h2>Future Improvements</h2>
          <p>{project.future}</p>
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