import { useState } from 'react'

const modes = ['Reserve Table', 'Order Online', 'Business Query']

export default function Reservation() {
  const [mode, setMode] = useState(modes[0])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    date: '', time: '', guests: '2',
    message: ''
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // Build a WhatsApp message to the restaurant — keeps it dependency-free.
    const lines = [
      `*New ${mode}* — Ching Kong`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      mode === 'Reserve Table' && `Date: ${form.date} ${form.time}`,
      mode === 'Reserve Table' && `Guests: ${form.guests}`,
      form.message && `Message: ${form.message}`
    ].filter(Boolean).join('%0A')

    const wa = `https://wa.me/919915635585?text=${lines}`
    window.open(wa, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="reserve" className="reservation">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Let's Connect</p>
          <h2 className="section-title">
            BOOK • ORDER • <span className="accent">PARTNER</span>
          </h2>
          <p className="section-sub">
            Reserve a table, place a quick order, or reach out for catering, collabs, and franchise queries.
          </p>
        </div>

        <div className="r-grid">
          <aside className="r-side">
            <div>
              <h3>WHY CHING KONG?</h3>
              <p>We don't just cook — we tell stories through our wok. Here's what you get when you choose us.</p>
            </div>
            <ul className="r-list">
              <li><span className="ico">🔥</span> Wok-fired in-house signature sauces</li>
              <li><span className="ico">🥦</span> Fresh, daily-prepped ingredients</li>
              <li><span className="ico">⚡</span> Quick service & hot deliveries</li>
              <li><span className="ico">🎉</span> Group bookings & event catering</li>
              <li><span className="ico">🤝</span> Open for business collaborations</li>
            </ul>
          </aside>

          <form className="r-form" onSubmit={onSubmit}>
            <div className="r-tabs">
              {modes.map((m) => (
                <button
                  type="button"
                  key={m}
                  className={`r-tab ${mode === m ? 'active' : ''}`}
                  onClick={() => setMode(m)}
                >
                  {m}
                </button>
              ))}
            </div>

            <h3>{mode}</h3>
            <p>
              {mode === 'Reserve Table' && 'Pick your slot — we\'ll save the best seat in the house.'}
              {mode === 'Order Online' && 'Tell us what you\'d love — we\'ll confirm on WhatsApp.'}
              {mode === 'Business Query' && 'Catering, events, franchising, collabs — we\'re all ears.'}
            </p>

            <div className="form-row">
              <div className="form-field">
                <label>Full Name</label>
                <input name="name" required value={form.name} onChange={onChange} placeholder="Your name" />
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input name="phone" required type="tel" value={form.phone} onChange={onChange} placeholder="10-digit number" />
              </div>
            </div>

            {mode === 'Business Query' && (
              <div className="form-row">
                <div className="form-field full">
                  <label>Email (optional)</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com" />
                </div>
              </div>
            )}

            {mode === 'Reserve Table' && (
              <div className="form-row">
                <div className="form-field">
                  <label>Date</label>
                  <input name="date" required type="date" value={form.date} onChange={onChange} />
                </div>
                <div className="form-field">
                  <label>Time</label>
                  <input name="time" required type="time" value={form.time} onChange={onChange} />
                </div>
                <div className="form-field full">
                  <label>Guests</label>
                  <select name="guests" value={form.guests} onChange={onChange}>
                    {[1,2,3,4,5,6,7,8,'9+'].map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>
            )}

            <div className="form-row">
              <div className="form-field full">
                <label>
                  {mode === 'Order Online' ? 'Your Order' : mode === 'Business Query' ? 'Tell us more' : 'Special Requests'}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={
                    mode === 'Order Online'
                      ? 'e.g. 2x Cheese Kurkure Momo, 1x Honey Chilli Cauliflower'
                      : mode === 'Business Query'
                      ? 'Tell us about your event, partnership idea, or franchise interest'
                      : 'Birthday, allergies, window seat...'
                  }
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send via WhatsApp →
            </button>

            {sent && (
              <div className="r-success">
                ✓ Opening WhatsApp to confirm with us. Thank you!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
