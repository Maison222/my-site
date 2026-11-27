import { lucilla } from '../data/content.js'

export default function Lucilla() {
  return (
    <main className="page">
      <div className="project-head">
        <h1>{lucilla.title}</h1>
      </div>

      {lucilla.image && (
        <img className="profile-photo" src={lucilla.image} alt="Lucilla" />
      )}

      <div className="project-body">
        {lucilla.text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </main>
  )
}
