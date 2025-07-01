import Footer from '@/components/layout/website/footer'
import Navbar from '@/components/layout/website/navbar'
import LandingPage from '@/components/pages/website/home/page'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className='' >
        <LandingPage />
      </div>
      <Footer />
    </div>
  )
}

export default Home
