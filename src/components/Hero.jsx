export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="hero-tag">
            <span className="dot"></span> Now serving in Panchkula
          </span>
          <h1>
            <span className="word-red">CHING</span> KONG
            <span className="word-script">our wok talks</span>
          </h1>
          <p>
            Bold Indo-Chinese street food, fired up in our own signature sauces.
            Crispy, saucy, smoky — every bite is a story from the wok.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">Explore Menu →</a>
            <a href="#reserve" className="btn btn-ghost">Reserve a Table</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Made in own sauces</span>
            </div>
            <div className="hero-stat">
              <strong>4.8★</strong>
              <span>Loved by foodies</span>
            </div>
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Wok-fired dishes</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-chip chip-1">
            <span className="emoji">🌶️</span> Schezwan Special
          </div>
          <div className="hero-disc">
            <img src="/logo.png" alt="Ching Kong logo" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.svg' }} />
          </div>
          <div className="hero-chip chip-2">
            <span className="emoji">🥟</span> Fresh Momos Daily
          </div>
        </div>
      </div>
    </section>
  )
}
