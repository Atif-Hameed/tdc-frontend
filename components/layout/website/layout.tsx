import React, { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

interface LayoutProps {
    children: ReactNode;
}

const WebLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className=''>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default WebLayout
