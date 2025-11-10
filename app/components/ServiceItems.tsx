import Image, { StaticImageData } from 'next/image'

export default function ServiceItems({ image, title, description }: { image: StaticImageData, title: string, description: string }) {
    return (
        <div className='mb-15 md:relative'>
            <Image src={image} width='1000' height='400' alt='Service section image' className='w-full h-auto' />

            <div className='mt-5 md:absolute bottom-[4%] md:rounded-xl left-[2%]  md:bg-black md:text-white md:w-[50%] md:p-5'>
                <h3 className='mb-1 font-semibold'>{title}</h3>
                <p className='text-justify text-[0.9rem] md:text-[0.8rem]'>{description}</p>
            </div>
        </div>
    )
}
