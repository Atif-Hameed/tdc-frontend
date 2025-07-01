import React from 'react'
import HeroSection from '../common/hero-section'
import EmpowerSection from '../common/empower-section'
import ContactForm from './contact-form'

const ContactUs = () => {
    return (
        <div>
            <HeroSection
                title='Every Act of Kindness Counts'
                description='We believe every connection empowers our mission. Whether you have a question, an idea, or simply want to contribute to a healthier planet, reaching out is your next act of kindness. Get in touch with us today, and lets make a difference together!'
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact', href: '' }
                ]}
            />
            <ContactForm />
            <EmpowerSection />
        </div>
    )
}

export default ContactUs