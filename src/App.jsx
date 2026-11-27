import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import './App.css'

// Scrolls to #about / #projects, or to the top on a new page.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function NotFound() {
  return (
    <main className="page">
      <h1>Page not found</h1>
      <Link to="/" className="accent-link">Go home</Link>
    </main>
  )
}

export default function App() {
  return (
    <div className="shell">
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ScrollManager />
    </div>
  )
}
