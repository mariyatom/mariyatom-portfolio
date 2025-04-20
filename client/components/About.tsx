import '../styles/about.scss' // Assuming you create a separate CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2>About Me.</h2>
        <p>
          Hi, I’m Mariya — a full-stack developer skilled in both front-end and
          back-end technologies. I recently completed my React training at Dev
          Academy Aotearoa (Level 6). My tech journey began after earning my
          Electronics and Communications Engineering degree. I built a food
          ordering system using Spring Boot, Angular, and MySQL. I also worked
          in Japan modernizing COBOL systems and improving task automation. Now
          in New Zealand, I’m excited to return to tech and build impactful
          digital solutions.
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
          src="/client/public/assets/mariya.WebP"
          alt="Your Profile Picture"
          className="profile-image"
        />
      </div>
    </div>
  )
}

export default About
