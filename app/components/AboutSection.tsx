import Image from 'next/image'
import AboutImg1 from '../../public/AboutImg1.png'
import AboutImg2 from '../../public/AboutImg2.png'
import Items from '../components/Items'

export default function AboutSection() {
  return (
    <section id='who-we-are' className='sm:flex px-[5%] sm:px-[10%] pt-20 gap-4 mb-20'>
      <section className='sm:max-w-[50%]'>
        <h2 className='font-bold text-[2rem] mb-5'>About Us</h2>
        <p className='mb-4 text-justify'>Travel & Events Made Easy by Nicky is a full-service travel and event planning company specializing in unforgettable group vacations, seamless destination experiences, and beautifully coordinated events. Founded and led by Nickia Fulton, a passionate travel expert and event coordinator, the company focuses on creating stress-free, personalized experiences that bring people together through travel, celebration, and connection. With 15+ years of travel and event planning experience 20 + group trips and 100+ special events including weddings, anniversaries, We are Known for blending luxury, fun, affordability, and connection in every experience</p>
      </section>

      <section className=' flex sm:flex-col mx-auto lg:flex-row gap-3 sm:w-[50%] max-w-[400px] lg:max-w-[430px] px-[5%] sm:py-[4%]'>
        <div className='flex grow relative max-w-[200px] min-w-[170px]  sm:w-[50%] sm:items-center'>
          <Image src={AboutImg1} width='312' height='453' alt='About section Image 1' className='rounded-2xl w-full h-auto max-w-[200px] sm:w' />
          <Image src={AboutImg2} width='150' height='189' alt='About section Image 1' className='rounded-2xl absolute top-1/4 right-[-28%] w-[45%] max-w-[90px] h-auto' />
        </div>

        <ul className='flex flex-col justify-between grow py-3 gap-2'>
          <div className=' grow flex flex-col  justify-evenly sm:flex-row sm:gap-4 lg:flex-col'>
            <Items title='500+' description='Happy Travellers' />
            <Items title='15+' description='Years of Experience' />
          </div>
          <h3 className='text-[1.5rem] font-[] text-[#646464] font-bold text-end'>Creating Memories</h3>
        </ul>
      </section>

    </section>
  )
}
