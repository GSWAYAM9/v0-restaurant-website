'use client'

import { useState } from 'react'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('appetizers')

  const menuItems = {
    appetizers: [
      { name: 'Foie Gras Terrine', description: 'With brioche and fig compote', price: '$48' },
      { name: 'Burrata & Heirloom Tomato', description: 'Basil oil, aged balsamic', price: '$32' },
      { name: 'Dungeness Crab Bisque', description: 'Truffle oil, chive oil', price: '$28' },
      { name: 'Oyster Selection', description: 'Three varieties, mignonette', price: '$42' },
    ],
    mains: [
      { name: 'Pan-Seared Halibut', description: 'Champagne beurre blanc, seasonal vegetables', price: '$68' },
      { name: 'Wagyu Beef Tenderloin', description: 'Black truffle jus, potato purée', price: '$82' },
      { name: 'Dover Sole Meunière', description: 'Brown butter, lemon, capers', price: '$72' },
      { name: 'Duck Breast Rôti', description: 'Cherry gastrique, polenta cake', price: '$65' },
    ],
    desserts: [
      { name: 'Chocolate Soufflé', description: 'Vanilla bean ice cream, gold leaf', price: '$18' },
      { name: 'Crème Brûlée', description: 'Madagascar vanilla, seasonal berries', price: '$16' },
      { name: 'Panna Cotta', description: 'Passion fruit coulis, micro mint', price: '$15' },
      { name: 'Grand Marnier Tart', description: 'Candied orange, whisky cream', price: '$17' },
    ],
  }

  const tabs = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
  ]

  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">Our Cuisine</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4">
            Exquisite Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our chef curates a seasonal menu showcasing the finest ingredients from around the world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-8 mb-12 border-b border-border pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeTab as keyof typeof menuItems].map((item, i) => (
            <div key={i} className="border-b border-border pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-xl text-foreground font-semibold">{item.name}</h3>
                <span className="text-secondary font-medium ml-4">{item.price}</span>
              </div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
