import React from 'react'

const FlightSearch = () => {
    return (
        <>

            <section className='h-40'>
                <div className='border-slate-300 border-2 mx-96 bg-white absolute inset-x-0 top-[33rem] rounded-md'>
                    <div>
                        <ul className='flex space-x-32  justify-center items-center basis-1/4 '>
                            <li className='cursor-pointer py-5  hover:text-red-600 hover:font-bold '>Search Flights</li>
                            <li className='cursor-pointer  py-5 px-2 hover:text-red-600 hover:font-bold '>Manage Booking/Check in</li>
                            <li className='cursor-pointer py-5 px-2 hover:text-red-600 hover:font-bold'>What's on flight</li>
                            <li className='cursor-pointer  py-5 px-2 hover:text-red-600 hover:font-bold'>Flight status</li>
                        </ul>

                    </div>
                    <div className='flex flex-row justify-center text-blue-600 font-bold hover:border-blue-600 border-2 py-2 mx-6 my-4'><p className='flex justify-center items-center cursor-pointer'>
                        <svg className='mx-2 ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>  Visit our COVID-19 hub for current destinations, travel advice and more.</p> <button className='ml-72 border-[1px] p-2 hover:border-blue-500'>Goto COVID-19 hub</button></div>
                    <div className='flex flex-row  px-8 py-4   '> <button className='hover:bg-slate-200 outline outline-1 rounded-sm outline-slate-500 px-4 py-1'>Flight</button> <button className='rounded-sm py-1 hover:bg-slate-200  px-4 outline outline-1 outline-slate-500'>Flight + Hotel</button> </div>
                    <div className='flex justify-end px-2 py-2 underline text-red-600'><p>Advanced search: multi-city, promo codes, partner airlines </p></div>
                    
                    <div className='flex flex-row space-x-4 p-4'>
                    
                    <div>  <input class="shadow appearance-none border rounded w-[25rem] py-4 px-4 text-gray-700 leading-tight "  type="text" placeholder="Departure airport" /></div>
                    <div>  <input class="shadow appearance-none border rounded w-[25rem] py-4 px-4 text-gray-700 leading-tight "  type="text" placeholder="Arrival airport" /></div>
                    <button className='bg-red-600 text-white px-24 rounded-md'>Continue</button>
                    </div>
                </div>





                {/*================================================================================================================================ */}

                <div className='my-72 mx-96 flex flex-row justify-center items-center rounded-md '>
                    <button className='bg-white hover:font-bold underline  py-12 px-10   border-t-2 border-b-2 border-l-2 border-r-2 text-xs'>Hotels</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Car Rentals</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Book a Holiday</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Tours</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Chauffer-Drive</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Meet & Greet</button>
                    <button className='bg-white hover:font-bold underline py-12 px-10   border-t-2 border-b-2 border-r-2 text-xs'>Airport Transfers</button>
                </div>

            </section>
            <section className='bg-white px-20 py-20 '>

                <div className='flex flex-col justify-center items-center '>
                    <div className='text-center my-4'>
                        <h1 className='font-black my-2 text-3xl '>Plan your travel with confidence </h1>
                        <p>Find help with your bookings and travel plans, and see what to expect along your journey.</p>
                    </div>

                    <div className='grid grid-cols-3 gap-4   '>

                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300    rounded-full w-40' src="https://c.ekstatic.net/ecl/people/safety/crew-welcoming-customer-on-flight-wearing-mask-w300x300.jpg?h=cLSjTqI1Fa21WuMayw_PZA" alt="" /> Travel safety during COVID-19</button></div>
                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300  rounded-full w-40' src="https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/meydan-bridge-during-sunset-w300x300.jpg?h=4y32C0QeASPsegP-VOShhg" alt="" />Travel requirements for Dubai</button></div>
                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300  rounded-full w-40' src="https://c.ekstatic.net/ecl/destinations/europe/united-kingdom/london-bridge-at-night-w300x300.jpg?h=H8Q0P5JSM1c69xolcZ5CbA" alt="" />Travel requirements by destination </button></div>
                    </div>

                </div>



            </section>

            <section>

                <div>
                    <img className='relative brightness-75' src="https://c.ekstatic.net/ecl/aircraft-interior/premium-economy/emirates-premium-economy-seat-w1920x480.jpg?h=_WrZVzOa_-M3hhiFNdXD7g" alt="" />
                    <div className='absolute text-white top-[100rem] left-[30rem] grid justify-items-center'>
                        <p>PREMIUM ECONOMY</p>
                        <h1 className='font-black text-5xl'>Raise your comfort to Premium Economy</h1>
                        <p>Fly in premium economy on our A380 flights to selected destinations</p>
                        <button className='bg-white text-black font-thin px-2 py-2  my-32 outline outline-slate-800 outline-1 rounded-sm'>Learn more</button>
                    </div>

                </div>
            </section>

            <section>
                <h1 className='text-center my-10 text-xl'>Featured destinations from Oman</h1>
                <div className='grid grid-cols-2 gap-4 mx-96 my-10'>



                    <div class=" border border-gray-200 hover:outline outline-1 rounded-md outline-gray-400 ">
                        <img class="rounded-t-lg" src="https://c.ekstatic.net/shared/images/destination/v1/airports/LON/810x270.jpg" alt="" />
                        <div class="p-5 grid justify-items-center">
                            <p className='text-slate-700'>United Kingdom</p>
                            <h1 className='font-bold text-2xl'>London</h1>
                            <p class="mb-3 ">Discover for yourself</p>
                        </div>
                    </div>

                    <div class=" border border-gray-200 hover:outline outline-1 rounded-md outline-gray-400 ">
                        <img class="rounded-t-lg" src="https://c.ekstatic.net/shared/images/destination/v1/airports/MLE/810x270.jpg" alt="" />
                        <div class="p-5 grid justify-items-center">
                            <p className='text-slate-700'>Maldives</p>
                            <h1 className='font-bold text-2xl'>Male</h1>
                            <p class="mb-3 ">Discover for yourself</p>
                        </div>
                    </div>
                    <div class=" border border-gray-200 hover:outline outline-1 rounded-md outline-gray-400 ">
                        <img class="rounded-t-lg" src="https://c.ekstatic.net/shared/images/destination/v1/airports/KHI/810x270.jpg" alt="" />
                        <div class="p-5 grid justify-items-center">
                            <p className='text-slate-700'>Pakisthan</p>
                            <h1 className='font-bold text-2xl'>Karachi</h1>
                            <p class="mb-3 ">Discover for yourself</p>
                        </div>
                    </div>
                    <div class=" border border-gray-200 hover:outline outline-1 rounded-md outline-gray-400 ">
                        <img class="rounded-t-lg" src="https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/810x270.jpg" alt="" />
                        <div class="p-5 grid justify-items-center">
                            <p className='text-slate-700'> United Arab Emirates</p>
                            <h1 className='font-bold text-2xl'>Dubai</h1>
                            <p class="mb-3 ">Discover for yourself</p>
                        </div>

                    </div>



                </div>
                <div className='grid justify-items-center'>
                    <button className='bg-white text-black font-thin px-5 py-2  my-5 outline outline-slate-800 outline-1 rounded-sm right-1'>More Destinations</button>
                </div>
            </section>
            <section>

                <div>
                    <img className='relative brightness-75' src="https://c.ekstatic.net/ecl/people/family/happy-family-shopping-at-the-mall-1920x480.jpg?h=eO3sVnr9EQLgW34As0Pn5A" alt="" />
                    <div className='absolute text-white top-[185rem] left-[35rem] grid justify-items-center'>
                        <p>SUMMER OFFER</p>
                        <h1 className='font-black text-5xl'>Summer offers with Emirates Pass</h1>
                        <p>Fly in premium economy on our A380 flights to selected destinations</p>
                        <button className='bg-white text-black font-thin px-2 py-2  my-32 outline outline-slate-800 outline-1 rounded-sm'>Learn more</button>
                    </div>

                </div>
            </section>

            <section className='bg-white px-20 py-20 '>

                <div className='flex flex-col justify-center items-center '>
                    <div className='text-center my-4'>
                        <h1 className='font-black my-2 text-3xl '>About us </h1>
                        <p>Get to know Emirates better through our history, brands, values, people and initiatives.</p>
                    </div>

                    <div className='grid grid-cols-4 gap-4   '>

                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300    rounded-full w-40' src="https://c.ekstatic.net/ecl/airport/airfield/dubai-airport-view-at-night-w300x300.jpg?h=Wg2fQCFtn9RC9_S6c-kLKg" alt="" /> About Us</button></div>
                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300  rounded-full w-40' src="https://c.ekstatic.net/ecl/emirates-staff/ground-staff/emirates-group-staff-group-photo-m300x300.jpg?h=uwsAa20y9RhQZSteKnIqmw" alt="" />Our People</button></div>
                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300  rounded-full w-40' src="https://c.ekstatic.net/ecl/destinations/africa/south-africa/sunlight-baths-the-blyde-river-canyon-w300x300.jpg?h=Dy3u7WDNZeGj8figwrr98w" alt="" />Our Planet</button></div>
                        <div><button className='grid justify-items-center underline text-sm font-semibold  ' ><img className='scale-75 hover:scale-100 ease-in duration-300  rounded-full w-40' src="https://c.ekstatic.net/ecl/about-us/family-planting-tree-w300x300.jpg?h=ar8-hQpf-unRHqmjJ_gsRA" alt="" />Our Communities</button></div>

                    </div>

                </div>



            </section>






        </>
    )
}

export default FlightSearch