import { site } from '../data/content.js'

export default function Footer() {
  return (
    <small className="copyright">
      © {new Date().getFullYear()} {site.name}
    </small>
  )
}
