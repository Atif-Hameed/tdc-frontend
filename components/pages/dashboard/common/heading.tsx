import React from 'react'

const Heading = ({ className, children }: any) => {
    return (
        <h2 className={`md:text-3xl sm:text-2xl text-xl font-semibold text-dark ${className}`}>{children}</h2>
    )
}

export default Heading
