import Image, { StaticImageData } from 'next/image'

export default function ServiceItems({ image, title, description }: { image: StaticImageData, title: string, description: string }) {
    return (
        <div className='mb-15 md:relative '>
            <Image src={image} width='1000' height='400' alt='Service section image' className='w-full h-auto' />

            <div className='font-[dmsans] mt-5 md:max-w-[400px] md:absolute bottom-[4%] md:rounded-xl left-[2%] md:text-white md:w-[50%] md:p-5 md:backdrop-blur-md md:bg-[#195C8933] md:border border-[#BABABA]'>
                <h3 className='mb-2 font-medium text-[1.2rem] md:text-[1.1rem] lg:text-[1.5rem]'>{title}</h3>
                <p className='font-light text-[1rem] leading-6 md:text-[0.95rem] lg:text-[1.1rem]'>{description}</p>
            </div>
        </div>
    )
}
