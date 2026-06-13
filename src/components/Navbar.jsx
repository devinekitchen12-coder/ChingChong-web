import { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" onClick={close}>
          <img src="/logo.png" alt="Ching Kong" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
          CHING<span>KONG</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#home" onClick={close}>Home</a></li>
          <li><a href="#about" onClick={close}>Our Story</a></li>
          <li><a href="#menu" onClick={close}>Menu</a></li>
          <li><a href="#gallery" onClick={close}>Gallery</a></li>
          <li><a href="#reviews" onClick={close}>Reviews</a></li>
          <li><a href="#contact" onClick={close}>Contact</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#reserve" className="btn btn-primary">Order Now</a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}
