import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/content.js'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="page">
        <Link to="/" className="go-back">← Back</Link>
        <h1>Project not found</h1>
      </main>
    )
  }

  return (
    <main className="page">
      <Link to="/#projects" className="go-back">← Back</Link>

      <div className="project-head">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>

      {project.image && (
        <div className="project-image">
          <div className="thumb">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      )}

      <div className="project-body">
        {project.description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        {project.link && (
          <a className="accent-link" href={project.link} target="_blank" rel="noreferrer">
            View project →
          </a>
        )}
      </div>
    </main>
  )
}
