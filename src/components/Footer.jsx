import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
    <div className='bg-[#333333] h-96 text-white px-96 py-10'>
                <div className='grid grid-cols-4 gap-4'>
                <div>
                        <div><span  className='font-bold text-2xl'>About us</span></div>
                        <div className='my-4'> 
                            <ul>
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Media Centre</li>
                                <li>Our planet</li>
                                <li>Our people</li>
                                <li>Our communities</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><span  className='font-bold text-2xl'>Help</span></div>
                        <div className='my-4'> 
                            <ul>
                                <li>Help and Contact</li>
                                <li>Travel Updates</li>
                                <li>Special assistance</li>
                                <li>Frequently asked questions</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><span  className='font-bold text-2xl'>Book</span></div>
                        <div className='my-4'> 
                            <ul>
                                <li>About Us</li>
                                <li>Help Center</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div><span  className='font-bold text-2xl'>Manage</span></div>
                        <div className='my-4'> 
                            <ul>
                                <li>Check in</li>
                                <li>Manage your booking</li>
                                <li>Flight status</li>
                                <li>Search for flights</li>
                            </ul>
                        </div>
                    </div>
                   
                    

                </div>


            </div>
    </footer>
    
    </>
  )
}

export default Footer