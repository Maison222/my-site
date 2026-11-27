import { Link } from 'react-router-dom'
import { site, projects } from '../data/content.js'

export default function Home() {
  return (
    <main className="page">
      <section id="about">
        <p className="headline">{site.intro}</p>
      </section>

      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="cards">
          {projects.map((p) => (
            <Link key={p.slug} to={`/project/${p.slug}`} className="card">
              <div className="thumb">
                {p.image ? <img src={p.image} alt={p.title} /> : <span>Image</span>}
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h3>{p.title}</h3>
                  <span className="arrow">↗</span>
                </div>
                <p>{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
