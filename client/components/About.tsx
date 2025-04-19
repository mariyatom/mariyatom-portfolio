import '../styles/about.scss' // Assuming you create a separate CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2>About Me.</h2>
        <p>
          In August 2024, I transitioned from my background in fashion and store
          management into full-stack software engineering. While I loved
          completing my Bachelor of Design at AUT, I found that I needed to
          balance my creativity with an academic outlet. I was really excited to
          discover coding! Full-stack development has given me a fantastic blend
          of design and using my analytical skills. I chose to study at Dev
          Academy Aotearoa because the intensive nature of the course really
          appealed to me. I love the challenge of problem-solving and analyzing
          code, consistently striving to improve and learn from those around me.
        </p>
        <div className="interests">
          <button className="interest-button">Aerials</button>
          <button className="interest-button">Fashion</button>
          <button className="interest-button">Reading</button>
          <button className="interest-button">Nature</button>
          <button className="interest-button">Travel</button>
        </div>
      </div>
      <div className="image-section">
        <img
          src="/images/profile.jpg"
          alt="Your Profile Picture"
          className="profile-image"
        />
      </div>
    </div>
  )
}

export default About
