import '../styles/Footer.scss' // Create this SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">&copy; 2024 Portfolio by Mariya Tom</p>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a href="/cv/your-cv.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>
    </footer>
  )
}

export default Footer
