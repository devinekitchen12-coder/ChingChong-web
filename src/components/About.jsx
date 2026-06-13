export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-badge">Since Day 1</div>
        </div>

        <div className="about-content">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title">
            FROM DREAMS <br/><span className="accent">TO WOKS</span>
          </h2>
          <p className="about-quote">"Cooking is my way of bringing people together."</p>
          <p>
            My journey started with <strong>YouTube</strong> — where I learned creativity,
            storytelling, and the power of connecting with people. From there, I stepped
            into <strong>event management</strong>, working on concerts, festivals, and
            curated trips, picking up leadership, operations, and what truly makes a guest
            smile.
          </p>
          <p>
            Through every project, one passion stayed constant — <strong>food</strong>.
            Ching Kong is the result of years of dreaming, learning, and stirring the wok.
            It's a brand built on passion, hard work, and a promise to create
            <em> memorable experiences through great food</em>.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <div className="icon">🔥</div>
              <strong>Wok-Fired</strong>
              <span>Smoky street style</span>
            </div>
            <div className="pillar">
              <div className="icon">🌶️</div>
              <strong>Own Sauces</strong>
              <span>House-made daily</span>
            </div>
            <div className="pillar">
              <div className="icon">❤️</div>
              <strong>Made With Love</strong>
              <span>From my kitchen to yours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
