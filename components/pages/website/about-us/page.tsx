import React from 'react'
import HeroSection from '../common/hero-section'
import EmpowerSection from '../common/empower-section'
import KickerRewardSection from './kicker-rewards'
import PrincipleSection from './principle-section'
import TransparentSection from './transparent-section'
import FounderSection from './founder-section'
import CofounderSection from './co-founder-section'

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        title='The Power Behind The Challenge'
        description="We are a collective of passionate individuals harnessing humanitys power to build a sustainable future. The Trillion Dollar Challenge is our platform for turning bold ambition into solutions for critical environmental issues through collective strength."
        breadcrumbs={
          [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about-us' }
          ]
        }
      />
      <PrincipleSection/>
      <TransparentSection/>
      <FounderSection/>
      <CofounderSection/>
      <KickerRewardSection />
      <EmpowerSection />
    </div>
  )
}

export default AboutUs