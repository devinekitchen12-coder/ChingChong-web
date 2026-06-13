import { useState } from 'react'
import { menuData } from '../data/menu.js'

const categories = Object.keys(menuData)

export default function Menu() {
  const [active, setActive] = useState(categories[0])

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Our Menu</p>
          <h2 className="section-title">
            STRAIGHT FROM <span className="accent">THE WOK</span>
          </h2>
          <p className="section-sub">
            Every dish is fired with our own house sauces. Pick a category and dig in.
          </p>
        </div>

        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {menuData[active].map((item) => (
            <article key={item.name} className="menu-card">
              <div className="menu-card-head">
                <h3>{item.name}</h3>
                <div className="menu-price">₹{item.price}</div>
              </div>
              <p>{item.desc}</p>
              <div className="menu-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className={`tag ${tag.toLowerCase()}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
