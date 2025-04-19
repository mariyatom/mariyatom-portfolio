import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">{'<Portfolio by Mariya>'}</div>
      <div className="nav-links">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
