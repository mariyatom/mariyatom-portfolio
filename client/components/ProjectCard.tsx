import { useState } from 'react'
import '../styles/projectCard.scss'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  text: string
  description: string
  color: string
  icon: string
  codeLink: string
  deployed: string
  images: string[]
  tech: string[]
}

const ProjectCard = ({
  title,
  text,
  description,
  color,
  icon,
  codeLink,
  deployed,
  images,
  tech,
}: ProjectCardProps) => {
  const [startIndex, setStartIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const visibleImages = 3 // Show 3 images initially

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, images.length - visibleImages))
  }

  const openModal = (index: number) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalPrev = () => {
    setModalIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleModalNext = () => {
    setModalIndex((prev) => Math.min(prev + 1, images.length - 1))
  }

  const visibleSlice = images.slice(startIndex, startIndex + visibleImages)

  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <div className="project-text" style={{ color: color }}>
        <h4>
          {text}{' '}
          {deployed !== '' && (
            <>
              |{' '}
              <a
                href={deployed}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'green' }}
              >
                Try it out
              </a>
            </>
          )}
          {icon !== '' && <span style={{ marginLeft: '8px' }}>{icon}</span>}
        </h4>
      </div>

      {images.length > 0 && (
        <div className="carousel-container">
          <div className="carousel-images-wrapper">
            {startIndex > 0 && (
              <button className="carousel-arrow left" onClick={handlePrev}>
                &#8249;
              </button>
            )}
            <div className="carousel-images">
              {visibleSlice.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${startIndex + index + 1} of ${title}`}
                  className="carousel-image small" // Add 'small' class for initial display
                  onClick={() => openModal(startIndex + index)}
                />
              ))}
            </div>
            {startIndex + visibleImages < images.length && (
              <button className="carousel-arrow right" onClick={handleNext}>
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}

      {tech.length > 0 && (
        <div className="tech-stack">
          <h3>Tech Stack:</h3>
          <div className="tech-tags">
            {tech.map((item, index) => (
              <span key={index} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {description !== '' && (
        <div>
          {/* <h3>About</h3> */}
          <p className="project-description">{description}</p>
        </div>
      )}

      <div className="code-links">
        {codeLink && (
          <div className="code-link">
            <h3>&lt;Code/&gt;</h3>{' '}
            <div>
              {' '}
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <h4>
                  <u>
                    View Code
                    <FaGithub size={30} style={{ color: 'green' }} />
                  </u>
                </h4>
              </a>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-carousel-wrapper">
            {modalIndex > 0 && (
              <button className="modal-arrow left" onClick={handleModalPrev}>
                &#8249;
              </button>
            )}
            <img
              src={images[modalIndex]}
              alt={`Full view ${modalIndex + 1} of ${title}`}
              className="modal-image"
            />
            {modalIndex < images.length - 1 && (
              <button className="modal-arrow right" onClick={handleModalNext}>
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
