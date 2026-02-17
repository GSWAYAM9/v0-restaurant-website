export default function Ambiance() {
  const features = [
    {
      title: 'Private Dining',
      description: 'Intimate spaces designed for your most important moments',
      icon: '✦'
    },
    {
      title: 'Wine Selection',
      description: 'Curated collection of over 500 premium wines from global vineyards',
      icon: '◆'
    },
    {
      title: 'Chef\'s Table',
      description: 'Interactive experience watching our culinary maestros at work',
      icon: '●'
    },
    {
      title: 'Sommelier Service',
      description: 'Expert guidance in selecting the perfect wine pairing',
      icon: '■'
    },
  ]

  return (
    <section id="ambiance" className="py-20 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">Experience</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold mt-4 mb-4">
            Refined Elegance
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Every detail is meticulously crafted to create an unforgettable evening
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="border-l-2 border-secondary pl-6">
              <div className="text-4xl text-secondary mb-4">{feature.icon}</div>
              <h3 className="font-serif text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-background/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 pt-16 border-t border-background/30">
          <blockquote className="text-center">
            <p className="font-serif text-3xl text-secondary mb-4 italic">
              "An exceptional culinary journey that transcends dining into art."
            </p>
            <footer className="text-background/80">
              — <span className="font-medium">James Architectural Digest Critic</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
