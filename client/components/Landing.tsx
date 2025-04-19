const Landing = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Mariya Tom.</h1>
          <p>
            &lt;Full-Stack Software Developer | Bachelor of Electronics and
            Communication Engineering;
          </p>
          <div className="social-links">
            <button className="social-button github">Github</button>
            <button className="social-button linkedin">LinkedIn</button>
            <button className="social-button cv">CV</button>
          </div>
        </div>
      </section>

      {/* You can add more sections here like About, Projects, Contact */}
      {/* <section id="about" className="section">
        <h2>About</h2>
        <p>Your about content here.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Your projects content here.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Your contact information here.</p>
      </section> */}
    </div>
  )
}

export default Landing
