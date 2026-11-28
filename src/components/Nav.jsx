import { Link } from 'react-router-dom'
import { site } from '../data/content.js'
import Footer from './Footer.jsx'

export default function Nav() {
  return (
    <aside className="sidebar">
      <div>
        <Link to="/" className="site-name">
          {site.name}
        </Link>
        {site.tagline && <p className="tagline">{site.tagline}</p>}
        <nav className="side-links">
          <Link to="/#about">About</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/extra">Extra</Link>
        </nav>
      </div>

      <div className="sidebar-bottom">
        {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <Footer />
      </div>
    </aside>
  )
}
