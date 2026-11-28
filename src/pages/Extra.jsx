import { extra } from '../data/content.js'

export default function Extra() {
  return (
    <main className="page">
      <div className="project-head">
        <h1>{extra.title}</h1>
      </div>

      <div className="project-body">
        {extra.text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </main>
  )
}
