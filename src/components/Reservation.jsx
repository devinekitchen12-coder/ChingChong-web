
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

const modes = ['Order Online', 'Business Query']

const BUSINESS_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScEJmgmxEqIDw07W9GxxnOqmVFLwiH2lnYOHbasKKx269PYww/viewform";

export default function Reservation() {
  const [mode, setMode] = useState('Order Online')
  const [sent, setSent] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleBusinessQuery = () => {
    window.open(
      BUSINESS_FORM_URL,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `*New ${mode}* — Ching Kong`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.message && `Order: ${form.message}`
    ]
      .filter(Boolean)
      .join('%0A')

    const wa = `https://wa.me/919915635585?text=${lines}`

    window.open(wa, '_blank')

    setSent(true)

    setTimeout(() => {
      setSent(false)
    }, 6000)
  }

  return (
    <section id="reserve" className="reservation">
      <div className="container">

        <motion.div
          className="section-head"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p
            className="section-eyebrow"
            variants={fadeUp}
          >
            Let's Connect
          </motion.p>

          <motion.h2
            className="section-title"
            variants={fadeUp}
          >
            ORDER • <span className="accent">PARTNER</span>
          </motion.h2>

          <motion.p
            className="section-sub"
            variants={fadeUp}
          >
            Place a quick order or reach out for catering,
            collabs, franchise opportunities and business
            partnerships.
          </motion.p>
        </motion.div>

        <div className="r-grid">

          <motion.aside
            className="r-side"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div>
              <h3>WHY CHING KONG?</h3>

              <p>
                We don't just cook — we tell stories through our
                wok. Here's what you get when you choose us.
              </p>
            </div>

            <motion.ul
              className="r-list"
              variants={staggerContainer(0.15, 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.li variants={fadeUp}>
                <span className="ico">🔥</span>
                Wok-fired in-house signature sauces
              </motion.li>

              <motion.li variants={fadeUp}>
                <span className="ico">🥦</span>
                Fresh, daily-prepped ingredients
              </motion.li>

              <motion.li variants={fadeUp}>
                <span className="ico">⚡</span>
                Quick service & hot deliveries
              </motion.li>

              <motion.li variants={fadeUp}>
                <span className="ico">🎉</span>
                Group bookings & event catering
              </motion.li>

              <motion.li variants={fadeUp}>
                <span className="ico">🤝</span>
                Open for business collaborations
              </motion.li>
            </motion.ul>
          </motion.aside>

          <motion.form
            className="r-form"
            onSubmit={onSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >

            <div className="r-tabs">
              {modes.map((m) => (
                <button
                  type="button"
                  key={m}
                  className={`r-tab ${mode === m ? 'active' : ''}`}
                  onClick={() => setMode(m)}
                  style={{ position: 'relative' }}
                >
                  {mode === m && (
                    <motion.div
                      layoutId="activeResTab"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'var(--black)',
                        borderRadius: '999px',
                        zIndex: -1
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}

                  <span
                    style={{
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {m}
                  </span>
                </button>
              ))}
            </div>

            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{mode}</h3>

              <p>
                {mode === 'Order Online' &&
                  'Tell us what you’d love — we’ll confirm on WhatsApp.'}

                {mode === 'Business Query' &&
                  'Catering, events, franchising, collabs — we’re all ears.'}
              </p>
            </motion.div>

            <div className="form-row">
              <div className="form-field">
                <label>Full Name</label>

                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                />
              </div>

              <div className="form-field">
                <label>Phone</label>

                <input
                  name="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="10-digit number"
                />
              </div>
            </div>

            {mode === 'Business Query' && (
              <div className="form-row">
                <div className="form-field full">
                  <label>Email (optional)</label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
            )}

            <div className="form-row">
              <div className="form-field full">
                <label>
                  {mode === 'Order Online'
                    ? 'Your Order'
                    : 'Tell us more'}
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={
                    mode === 'Order Online'
                      ? 'e.g. 2x Cheese Kurkure Momo, 1x Honey Chilli Cauliflower'
                      : 'Tell us about your event, partnership idea, or franchise interest'
                  }
                />
              </div>
            </div>

            {mode === 'Business Query' ? (
              <button
                type="button"
                onClick={handleBusinessQuery}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                Open Business Form →
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                Send via WhatsApp →
              </button>
            )}

            <AnimatePresence>
              {sent && (
                <motion.div
                  className="r-success"
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  transition={{
                    duration: 0.3
                  }}
                >
                  ✓ Opening WhatsApp to confirm with us. Thank you!
                </motion.div>
              )}
            </AnimatePresence>

          </motion.form>

        </div>
      </div>
    </section>
  )
}

