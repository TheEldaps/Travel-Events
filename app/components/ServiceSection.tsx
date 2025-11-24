
import EllipsePictureFrame from './EllipsePictureFrame'
import ServiceItems from './ServiceItems'
import ServiceImage1 from '../../public/ServiceImage1.png'
import ServiceImage2 from '../../public/ServiceImage2.png'
import ServiceImage3 from '../../public/ServiceImage3.png'
import ServiceImage4 from '../../public/ServiceImage4.png'

export default function ServiceSection() {
    return (
        <section id='services' className=' px-[5%] sm:px-[10%] pt-10 lg:pt-20 '>
            <div className='flex justify-between gap-[5%]  mb-[30px]'>
                <div className='max-w-[50%] lg:max-w-[70%] grow '>
                    <h2 className='text-[2rem] lg:text-[3rem] font-semibold'>Our <span className='text-[#026EFF] font-[dmserif] font-normal italic'>Services</span></h2>
                    <p className='font-[dmsans] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] text-[#7B7B7B] '>Where will your next adventure take you? Check out these top destinations loved by travelers around the world.</p>
                </div>
                <div className='w-[28%] max-w-[200px]'>
                    <EllipsePictureFrame />
                </div>
            </div>

            <section>
                <ServiceItems image={ServiceImage1} title='Group Travel Planning' description="From destination weddings to girls' getaways and family reunions, we specialize in coordinating all aspects of group travel. We handle logistics, accommodations, excursions, and communication so you can focus on the fun" />

                <ServiceItems image={ServiceImage2} title='All-Inclusive Vacation Packages' description='Curated travel experiences with luxury accommodations, meals, and entertainment included—making travel effortless and enjoyable from start to finish.' />

                <ServiceItems image={ServiceImage3} title='Event Planning & Coordination' description='Full-service planning for social, corporate, or private events, including milestone celebrations, dinners, and themed parties. We take your vision and bring it to life with creativity and precision' />

                <ServiceItems image={ServiceImage4} title="Couples' Experiences" description='A dream destination for adventure lovers. Whether you want to ski down snowy peaks, hike scenic trails, or take in breathtaking views, the Swiss Alps offer a magical experience year-round.' />

            </section>
        </section>
    )
}
