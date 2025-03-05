import Image from 'next/image';
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>I am Yashas</h1>
          <nav>
            <Link href="/projects">Projects</Link>
            <Link href="/techblogs">TechBlogs</Link>
            <Link href="/personalplayground">PersonalPlayground</Link>
          </nav>
        </div>
      </header>
      
      <main className="main-container">
        <div className="content-wrapper">
          <div className="image-container">
            <Image
              src="/profile-pic.png"
              alt="Profile Picture"
              width={200}
              height={200}
              className="profile-image"
            />
          </div>
          
          <div className="bio-container">
            <p className="bio-text">
              I am a software engineer with experience in full-stack web development using React, React Native, and Node.js. Over the past two years, I have worked as a data engineer, and I am currently based in Bangalore. Lately, I've been exploring DevOps and Large Language Models (LLMs), continuously expanding my skill set.
            </p>
          </div>
        </div>
        
        <div className="bottom-container">
          <div className="social-container">
            <p className="social-text">
              I am active over X (previously Twitter) hit me up over there if you want to connect:
              <a href="https://x.com/hr_yashas70661" target="_blank" rel="noopener noreferrer" className="social-link">@hr_yashas70661</a>
            </p>
            
            <div className="location-container">
              <div className="location-text">
                I am based out of Bengaluru, India
              </div>
              <div className="map-image-container">
                <Image
                  src="/map-bengaluru.png"
                  alt="Bengaluru Map"
                  width={300}
                  height={200}
                  className="map-image"
                />
              </div>
            </div>
          </div>
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