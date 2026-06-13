const reviews = [
  {
    name: 'Riya Sharma',
    where: 'Sector 5, Panchkula',
    initials: 'RS',
    text: 'The Cheese Kurkure Momos are out of this world! Crispy outside, oozing cheese inside. Literally long lasting flavour 🤩',
    stars: 5
  },
  {
    name: 'Aman Khurana',
    where: 'Chandigarh',
    initials: 'AK',
    text: 'Honey Chilli Cauliflower with that creamy sauce on top — genius combo. Ching Kong has nailed the Indo-Chinese vibe.',
    stars: 5
  },
  {
    name: 'Pooja Mehta',
    where: 'Mohali',
    initials: 'PM',
    text: 'Paneer Baozi with desi twist hits different. You can taste the passion in every bite. ₹99 is a steal!',
    stars: 5
  }
]

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">What People Say</p>
          <h2 className="section-title">
            STRAIGHT FROM <span style={{ color: 'var(--yellow)' }}>OUR FANS</span>
          </h2>
          <p className="section-sub">Real reviews from happy bellies across Panchkula.</p>
        </div>

        <div className="t-grid">
          {reviews.map((r) => (
            <div key={r.name} className="t-card">
              <div className="t-stars">{'★'.repeat(r.stars)}</div>
              <p>{r.text}</p>
              <div className="t-author">
                <div className="t-avatar">{r.initials}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.where}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
