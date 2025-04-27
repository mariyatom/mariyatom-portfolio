const Landing = () => {
  const githubUrl = import.meta.env.VITE_URL_GITHUB
  const linkedInUrl = import.meta.env.VITE_URL_LinkedIn
  const cvUrl = import.meta.env.VITE_URL_CV

  const redirectToSocialPage = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank') // Opens in a new tab
    } else {
      alert('URL is undefined or not available')
    }
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
    </div>
  )
}

export default Landing
