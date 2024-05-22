import React from 'react'

import Header from './components/Header'
import HeroSection from './components/homepage-components/HeroSection'
import LandingTabSection from './components/homepage-components/LandingTabSection'
import WhoWeAreSection from './components/homepage-components/WhoWeAreSection'
import SlidingTagsSection from './components/homepage-components/SlidingTagsSection'
import StartNowSection from './components/homepage-components/StartNowSection'
import Footer from './components/Footer'

function Homepage() {
  return (
    <div>
        <Header />
        <HeroSection />
        <LandingTabSection />
        <WhoWeAreSection />
        <SlidingTagsSection />
        <StartNowSection />
        <Footer />
    </div>
  )
}

export default Homepage