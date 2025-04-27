import { useState } from 'react'
import '../styles/about.scss'

const About = () => {
  const imageMap = {
    Nature: '/assets/mariya.WebP',
    Travel: '/assets/Travel.WebP',
    Coding: '/assets/code.WebP',
    Cooking: '/assets/cook.WebP',
    food: '/assets/food.WebP',
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
      <div className="text-section">
        <h2>About Me.</h2>
        <p>
          Hi, I’m Mariya - a full-stack developer who speaks both frontend sass
          and backend logic. I recently graduated from Dev Academy Aotearoa
          (Level 6), where I dove headfirst into React, databases, and lots of
          late-night debugging snacks 🍫.
        </p>
        <p>
          My tech journey started with an Electronics and Communications
          Engineering degree, and since then, I’ve worn many hats from building
          a food ordering system for St. Pierre’s Sushi in New Zealand (as part
          of a remote team in India), using Spring Boot, Angular, and MySQL, to
          modernizing COBOL systems in Japan (yes, that dinosaur still roars
          🦖).
        </p>
        <p>
          Now in Aotearoa, I’m back in tech with a toddler on one hip and a fire
          for creative problem-solving in the other hand. I love collaborating
          with tech people, brainstorming weird ideas into real things, and
          turning bugs into features (well… mostly).
        </p>
        <p>
          I’m passionate about building smart, simple digital solutions that
          make life just a bit easier. Let’s build cool stuff together -
          preferably with good coffee and better commit messages ☕✨.
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
        <img src={imageSrc} alt="Profile Visual" className="profile-image" />
      </div>
    </div>
  )
}

export default About
