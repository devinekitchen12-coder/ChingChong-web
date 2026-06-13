export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Visit Us</p>
          <h2 className="section-title">
            COME SAY <span className="accent">HELLO</span>
          </h2>
          <p className="section-sub">Drop in, call ahead, or message us — we're always cooking.</p>
        </div>

        <div className="c-grid">
          <div className="c-info">
            <a href="tel:+919915635585" className="c-card">
              <div className="ico">📞</div>
              <div>
                <strong>Call / WhatsApp</strong>
                <span>+91 99156 35585</span>
              </div>
            </a>
            <a href="https://maps.google.com/?q=Panchkula" target="_blank" rel="noreferrer" className="c-card">
              <div className="ico">📍</div>
              <div>
                <strong>Find Us</strong>
                <span>Panchkula, Haryana, India</span>
              </div>
            </a>
            <div className="c-card">
              <div className="ico">🕒</div>
              <div>
                <strong>Open Hours</strong>
                <span>Mon – Sun · 11:00 AM – 11:00 PM</span>
              </div>
            </div>
            <a href="mailto:hello@chingkong.in" className="c-card">
              <div className="ico">✉️</div>
              <div>
                <strong>Email</strong>
                <span>hello@chingkong.in</span>
              </div>
            </a>
          </div>

          <div className="c-map">
            <iframe
              title="Ching Kong Location - Panchkula"
              src="https://www.google.com/maps?q=Panchkula,Haryana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
