import Link from 'next/link'
import Events from '../components/Events'
import EventsImage1 from '../../public/EventsImg1.png'
import EventsImage2 from '../../public/EventsImg2.png'

export default function EventsSection() {
    return (
        <section className='bg-[#FCF7FF] py-10  px-[5%] sm:px-[10%] '>

            <div className='flex justify-between '>
                <h2 className='text-[1.3rem] sm:text-[2rem] lg:text-[3rem] font-semibold mb-4 leading'>Upcoming Events <br /><span className='text-[#026EFF] font-[dmserif] italic'>You Cannot Miss! </span></h2>

                <p className='flex flex-col text-[0.8rem] mb-[30px] justify-end md:text-[1rem] gap-2 max-w-[40%]'>See what's coming soon and find the perfect experience.
                    <Link href='#services' className='underline hover:text-[#3636367b]  block'>  See All Services &rarr;</Link>
                </p>
            </div>
            <div className='md:flex sm:gap-10'>
                <Events image={EventsImage1} title='Hawai Honolulu' description='On Beach activities such as Hula and Ukulele lessons, Fitness centre with ocean views, outdoor pool with poolside bar, live music and entertainment, shops and dinning within walking distance, club level benefits: Rooms with club in the name include access to the lounge featuring daily breakfast buffet and evening happy hour with drinks and appetizers.' />

                <Events image={EventsImage2} title='Barbados 2026' description='accommodation at an all-inclusive resort, complete with gourmet dining, unlimited beverages, and seamless roun-trip airport transfers. Enjoy exclusive access to world-class amenities and activities, with every detail carefully arranged for your comfort. As a special bonus, celebrate before your trip with a catered pre-travel party. ' />

            </div>



        </section>
    )
}
