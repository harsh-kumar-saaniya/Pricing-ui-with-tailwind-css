import React from 'react'
import CheckMarkIcons from './Icons/checkMarkIcons';

export default function Pricing() {
    return (
        <div className='flex justify-center mx-auto max-w-fit shadow-lg -mt-32 flex-wrap rounded-lg ' >
            <div className='bg-purple-100 text-center p-8'>
                <p className='mt-1 text-3xl font-bold'>Premium Pro</p>
                <p className='mt-1 text-6xl font-bold'>$329</p>
                <p className='mt-1 text-lg font-medium'>billed just once</p>
                <button className="bg-violet-800 text-white font-bold mt-8 py-3 px-24 rounded-lg">
                    Get Started
                </button>
            </div>
            <div className=' p-8 font-medium text-lg shadow-lg bg-white'>
                <p>
                    Access these features when you get this pricing package for your business
                </p>
                <div className='mt-8'>
                    <div className='flex items-center space-between mt-3 space-x-5 font-medium'>
                        <CheckMarkIcons/>
                        <p>International calling and messaging API</p>
                    </div>
                    <div className='flex mt-3 items-center space-x-5 font-medium'>
                        <CheckMarkIcons />
                        <p>Additional phone numbers</p>
                    </div>
                    <div className='flex mt-3 items-center space-x-5 font-medium'>
                        <CheckMarkIcons />
                        <p>Automated messages via Zapier</p>
                    </div>
                    <div className='flex mt-3 items-center space-x-5 font-medium'>
                        <CheckMarkIcons />
                        <p>24/7 support and consulting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
