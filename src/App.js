import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">HD</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="glitch" data-text="Hemant Deshwal">Hemant Deshwal</h1>
          <h2>DevOps Engineer</h2>
          <p className="tagline">Building scalable infrastructure with Kubernetes, AWS & Terraform</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            DevOps Engineer specializing in cloud infrastructure automation and container orchestration.
            Experienced in building CI/CD pipelines, managing Kubernetes clusters, and implementing
            infrastructure as code with Terraform across AWS.
          </p>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">☸️</div>
              <h3>Container Orchestration</h3>
              <p>Kubernetes, Docker, Helm</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>Cloud Platforms</h3>
              <p>AWS</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🏗️</div>
              <h3>Infrastructure as Code</h3>
              <p>Terraform</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔄</div>
              <h3>CI/CD</h3>
              <p>Jenkins</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Programming</h3>
              <p>Python, Bash, YAML</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Kubernetes Multi-Cluster Deployment</h3>
                <span className="project-tag">Kubernetes</span>
              </div>
              <p>Deployed and managed multi-cluster Kubernetes architecture with automated failover and load balancing.</p>
              <div className="project-tech">K8s • Helm • Ingress • cert-manager</div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>AWS Infrastructure Automation</h3>
                <span className="project-tag">Terraform</span>
              </div>
              <p>Built reusable Terraform modules for provisioning VPC, EC2, EKS, and RDS with cross-account access.</p>
              <div className="project-tech">Terraform • AWS • IAM • VPC</div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>CI/CD Pipeline Automation</h3>
                <span className="project-tag">DevOps</span>
              </div>
              <p>Implemented end-to-end CI/CD pipeline with automated testing, Docker builds, and Kubernetes deployments.</p>
              <div className="project-tech">GitHub Actions • Docker • K8s</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Hemant Deshwal | DevOps Engineer</p>
          <div className="social-links">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
