'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Menu from '@/components/menu'
import Ambiance from '@/components/ambiance'
import Reservation from '@/components/reservation'
import Footer from '@/components/footer'

export default function Home() {
  const [showReservation, setShowReservation] = useState(false)

  return (
    <>
      <Header onReserveClick={() => setShowReservation(!showReservation)} />
      <Hero onReserveClick={() => setShowReservation(!showReservation)} />
      <Menu />
      <Ambiance />
      <Reservation 
        isOpen={showReservation} 
        onClose={() => setShowReservation(false)} 
      />
      <Footer />
    </>
  )
}
