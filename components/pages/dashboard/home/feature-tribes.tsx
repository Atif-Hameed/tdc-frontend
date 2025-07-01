import { FeaturedTribes } from '@/data'
import React from 'react'
import { FeatureTribeCard } from '../common/featured-card'
import Heading from '../common/heading'

const FeatureTribes = () => {
    return (
        <div className=" sm:py-8 py-4">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold "></h2>
            <Heading className="mb-4" >Featured Tribes</Heading>
            <div className="flex gap-4 overflow-x-auto no-scrollbar px-2 ">
                {FeaturedTribes.map((tribe, idx) => (
                    <FeatureTribeCard key={idx} {...tribe} />
                ))}
            </div>
        </div>
    )
}

export default FeatureTribes
