import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.scss' // Create this SCSS file

const Footer = () => {
  const githubUrl = import.meta.env.VITE_URL_GITHUB
  const linkedInUrl = import.meta.env.VITE_URL_LinkedIn
  const cvUrl = import.meta.env.VITE_URL_CV
  return (
    <footer className="footer">
      <p className="copyright">&copy; 2024 Portfolio | Mariya Tom</p>

      <div className="social-links">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={cvUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
