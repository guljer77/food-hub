import React from 'react'
import Banner from './Banner/Banner'
import DailyOffer from './Offer/DailyOffer'
import ChefsSection from './ChefsSection/ChefsSection'
import BlogSection from './BlogSection/BlogSection'
import Reservation from './BookTable/Reservation'
import PopularFoods from './PopularFoods/PopularFoods'
import Apps from './Apps/Apps'

function Home() {
  return (
    <div>
      <Banner />
      <DailyOffer />
      <Reservation />
      <PopularFoods />
      <ChefsSection />
      <Apps />
      <BlogSection />
    </div>
  )
}

export default Home