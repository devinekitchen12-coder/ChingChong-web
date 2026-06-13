const images = [
  { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80', alt: 'Crispy spring rolls', cls: 'tall' },
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80', alt: 'Honey chilli', cls: '' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80', alt: 'Momos', cls: '' },
  { src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80', alt: 'Schezwan noodles', cls: 'wide' },
  { src: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80', alt: 'Bao buns', cls: '' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', alt: 'Wok cooking', cls: '' },
  { src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80', alt: 'Fried rice', cls: 'tall' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="section-title">
            A FEAST FOR <span className="accent">THE EYES</span>
          </h2>
          <p className="section-sub">Snapshots from our wok — flames, sauces and happy plates.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className={`gallery-item ${img.cls}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
