import React from 'react'

const Hero = () => {
    return (
        <>
            <div >
                <img className='relative brightness-75' src="https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/museum-of-the-future-hp-w1920x480-1.jpg?h=y6j9GVXAAmoQgZZ7KePIYQ" alt="" />
                <div className='absolute text-white  top-56 left-96'>
                    <p className='font-bold text-3xl italic '>  Fly to Dubai and enjoy <br/>
                   <span className='font-semibold text-7xl space-y-4'>FREE TICKETS</span><br/>
                    to the Museum of the Future
                </p>
                <button className='bg-red-600 w-32 h-12 ml-72'>Learn more</button>
                </div>
            </div>

        </>
    )
}

export default Hero