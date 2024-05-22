import React from 'react'
import Header from './components/Header'
import ProfilePublicSection from './components/profile-components/ProfilePublicSection'
import Footer from './components/Footer'

function ProfilePublic() {
  return (
    <div>
        <Header />
        <ProfilePublicSection />
        <Footer />
    </div>
  )
}

export default ProfilePublic