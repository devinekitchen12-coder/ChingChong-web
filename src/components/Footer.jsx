export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
              CHING<span>KONG</span>
            </div>
            <p>
              Indo-Chinese street food, fired in our own signature sauces.
              From dreams to woks — built with passion in Panchkula.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">📸</a>
              <a href="https://wa.me/919915635585" aria-label="WhatsApp" target="_blank" rel="noreferrer">💬</a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
              <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">▶</a>
            </div>
          </div>

          <div>
            <h4>EXPLORE</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4>ACTIONS</h4>
            <ul>
              <li><a href="#reserve">Reserve Table</a></li>
              <li><a href="#reserve">Order Online</a></li>
              <li><a href="#reserve">Business Queries</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4>VISIT US</h4>
            <ul>
              <li>📍 Panchkula, Haryana</li>
              <li>📞 +91 99156 35585</li>
              <li>🕒 11:00 AM – 11:00 PM</li>
              <li>✉️ hello@chingkong.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Ching Kong • Our Wok Talks. All rights reserved.</span>
          <span>Made with <span className="heart">❤</span> in Panchkula</span>
        </div>
      </div>
    </footer>
  )
}
