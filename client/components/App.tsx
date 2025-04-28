import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Landing from './Landing'
import Footer from './Footer'

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
