import Link from 'next/link'

export default function EventsSection() {
    return (
        <section>

            <div>
                <h2>Upcoming Events <br /><span className='text-[#026EFF]'>You Cannot Miss! </span></h2>
                <p>See what's coming soon and find the perfect experience  <Link href='/services' className='underline'>See All Services &rarr;</Link></p>
            </div>



        </section>
    )
}
