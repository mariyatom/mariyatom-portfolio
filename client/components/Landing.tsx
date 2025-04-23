const Landing = () => {
  const githubUrl = import.meta.env.URL_GITHUB
  const linkedInUrl = import.meta.env.URL_LinkedIn
  const cvUrl = '/mariyatom-CV.pdf'

  const redirectToSocialPage = (url: string | undefined) => {
    window.open(url, '_blank') // Opens in a new tab
  }
  return (
    <div className="landing-page">
      <section className="hero-section bounce">
        <div className="hero-content">
          <h1>Mariya Tom.</h1>
          <p>
            &lt;Full-Stack Software Developer | Bachelor of Electronics and
            Communication Engineering&gt;
          </p>
          <div className="social-links">
            <button
              className="social-button github"
              onClick={() => redirectToSocialPage(githubUrl)}
              aria-label="Visit my GitHub profile"
            >
              Github
            </button>
            <button
              className="social-button linkedin"
              onClick={() => redirectToSocialPage(linkedInUrl)}
            >
              LinkedIn
            </button>
            <button
              className="social-button cv"
              onClick={() => redirectToSocialPage(cvUrl)}
            >
              CV
            </button>
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
