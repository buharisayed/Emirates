import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='bg-[#FEF8D5]'>
                    <p className='text-left px-[20rem] py-2 underline decoration-0 cursor-pointer text-xs'><span className='text-red-600 font-bold'>Important:</span> Suspended partner airline flights to cities in Russia, Ukraine and Belarus </p>
                </div>
               
                <div className='flex flex-row font-bold bg-[#333333] text-white relative '>
                <div className='bg-red-600 px-2 py-12 flex  z-50 absolute  ml-60 '><h1>Emirates</h1></div>
                
                    <div className='basis-2/3  '>
                    
                        <ul className='flex space-x-4  justify-center items-center '>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2 '>Book</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2 '>Manage</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2 '>Experience</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2'>Where We Fly</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2'>Loyalty</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2'>Help</li>
                        </ul>
                    </div>
                    <div className='basis-1/3'>
                        <ul className='flex space-x-4 justify-center items-center'>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2'>OM</li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2 '><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></li>
                            <li className='cursor-pointer hover:bg-[#1B1E20] py-5 px-2'>LOG IN</li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar