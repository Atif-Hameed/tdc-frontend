import WebLayout from '@/components/layout/website/layout'
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <WebLayout>
            {children}
        </WebLayout>
    )
}

export default layout
