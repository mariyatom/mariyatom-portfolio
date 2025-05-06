import { useState } from 'react'
import '../styles/about.scss'

const About = () => {
  const imageMap = {
    Nature: '/assets/mariya.WebP',
    Travel: '/assets/Travel.WebP',
    Coding: '/assets/code.WebP',
    Cooking: '/assets/cook.WebP',
  }

  const [imageSrc, setImageSrc] = useState('/assets/mariya.WebP')

  const handleMouseEnter = (interest: keyof typeof imageMap) => {
    setImageSrc(imageMap[interest])
  }

  const handleMouseLeave = () => {
    setImageSrc('/assets/mariya.WebP')
  }

  return (
    <div className="about-container">
      <h2>About Me.</h2>
      <div className="about-content">
        <div className="text-section">
          <p>
            Hi, I’m Mariya - a full-stack developer who speaks both frontend
            sass and backend logic. I recently graduated from Dev Academy
            Aotearoa (NZQA Level 6).
          </p>
          <p>
            My tech journey started with an Electronics and Communications
            Engineering degree, and since then, I’ve worn many hats from
            building a food ordering system for St. Pierre’s Sushi in New
            Zealand (as part of a remote team in India), using Spring Boot,
            Angular, and MySQL, to modernizing COBOL systems in Japan (yes, that
            dinosaur still roars 🦖).
          </p>
          <p>
            Now in Aotearoa, I’m back in tech with fire for creative
            problem-solving. I’m passionate about building smart, simple digital
            solutions that make life just a bit easier. Let’s build cool stuff
            together!
          </p>

          <div className="interests">
            {Object.keys(imageMap).map((interest) => (
              <button
                key={interest}
                className="interest-button"
                onMouseEnter={() =>
                  handleMouseEnter(interest as keyof typeof imageMap)
                }
                onMouseLeave={handleMouseLeave}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
        <div className="image-section">
          <img
            src={imageSrc}
            alt="Profile Visual"
            className="profile-image"
            data-testid="profile-image"
          />
        </div>
      </div>
    </div>
  )
}

export default About
