import React from 'react'
import HeroSection from './hero-section'
import TransformSection from './transform-section'
import Challenging from './challenging'
import Together from './together'
import EmpowerSection from '../common/empower-section'
import MonetaryCards from './monetarycards'
import InvestorSection from './investor-section'
import LastTribe from './last-tribe'

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <TransformSection />
            <EmpowerSection />
            <Challenging />
            <MonetaryCards />
            <InvestorSection />
            <LastTribe />
            <Together />
        </div>
    )
}

export default LandingPage