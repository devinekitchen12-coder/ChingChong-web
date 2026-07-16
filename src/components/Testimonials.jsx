import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

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
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setActive(prev => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setActive(prev =>
      prev === 0 ? reviews.length - 1 : prev - 1
    )
  }

  return (
    <section id="reviews" className="testimonials">
      <div className="container">

        <motion.div
          className="section-head"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p className="section-eyebrow" variants={fadeUp}>
            1000+ HAPPY CUSTOMERS AND COUNTING
          </motion.p>

          <motion.h2
            className="section-title"
            variants={fadeUp}
          >
            CUSTOMER <span style={{ color: 'var(--yellow)' }}>LOVE</span>
          </motion.h2>

          <motion.p
            className="section-sub"
            variants={fadeUp}
          >
            Real stories from food lovers across Panchkula, Chandigarh and Mohali.
          </motion.p>
        </motion.div>

        <div className="testimonial-slider">

          <div className="big-quote">❝</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testimonial-single"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: reviews[active].stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="testimonial-text">
                "{reviews[active].text}"
              </p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {reviews[active].initials}
                </div>

                <div className="testimonial-user-info">
                  <strong>{reviews[active].name}</strong>
                  <span>{reviews[active].where}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">

            <button
              className="testimonial-arrow"
              onClick={prevSlide}
              aria-label="Previous Review"
            >
              ←
            </button>

            <div className="testimonial-dots">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <button
              className="testimonial-arrow"
              onClick={nextSlide}
              aria-label="Next Review"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

// import { motion } from 'framer-motion'
// import { fadeUp, staggerContainer, viewportSettings } from '../hooks/useScrollReveal.js'

// const reviews = [
//   {
//     name: 'Riya Sharma',
//     where: 'Sector 5, Panchkula',
//     initials: 'RS',
//     text: 'The Cheese Kurkure Momos are out of this world! Crispy outside, oozing cheese inside. Literally long lasting flavour 🤩',
//     stars: 5
//   },
//   {
//     name: 'Aman Khurana',
//     where: 'Chandigarh',
//     initials: 'AK',
//     text: 'Honey Chilli Cauliflower with that creamy sauce on top — genius combo. Ching Kong has nailed the Indo-Chinese vibe.',
//     stars: 5
//   },
//   {
//     name: 'Pooja Mehta',
//     where: 'Mohali',
//     initials: 'PM',
//     text: 'Paneer Baozi with desi twist hits different. You can taste the passion in every bite. ₹99 is a steal!',
//     stars: 5
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section id="reviews" className="testimonials">
//       <div className="container">
//         <motion.div 
//           className="section-head"
//           variants={staggerContainer(0.1, 0)}
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportSettings}
//         >
//           <motion.p className="section-eyebrow" variants={fadeUp}>What People Say</motion.p>
//           <motion.h2 className="section-title" variants={fadeUp}>
//             STRAIGHT FROM <span style={{ color: 'var(--yellow)' }}>OUR FANS</span>
//           </motion.h2>
//           <motion.p className="section-sub" variants={fadeUp}>Real reviews from happy bellies across Panchkula.</motion.p>
//         </motion.div>

//         <div className="t-grid">
//           {reviews.map((r, i) => (
//             <motion.div 
//               key={r.name} 
//               className="t-card"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
//               whileHover={{ y: -6, transition: { duration: 0.35 } }}
//             >
//               <div className="t-stars">
//                 {Array.from({ length: r.stars }).map((_, starIdx) => (
//                   <motion.span
//                     key={starIdx}
//                     style={{ display: 'inline-block' }}
//                     initial={{ scale: 0, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.4, delay: (i * 0.15) + (starIdx * 0.1), type: 'spring' }}
//                   >
//                     ★
//                   </motion.span>
//                 ))}
//               </div>
//               <p>{r.text}</p>
//               <div className="t-author">
//                 <motion.div 
//                   className="t-avatar"
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: (i * 0.15) + 0.3, type: 'spring', stiffness: 200, damping: 15 }}
//                 >
//                   {r.initials}
//                 </motion.div>
//                 <div>
//                   <strong>{r.name}</strong>
//                   <span>{r.where}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
