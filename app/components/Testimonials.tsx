import Image from 'next/image'
import { StaticImageData } from 'next/image'

export default function Testimonials({ image, comment, name }: { image: StaticImageData, comment: string, name: string }) {
    return (
        <div className='border rounded-2xl p-4'>
            <Image src={image} width='200' height='300' alt='Image fo the commenter' className='block' />
            <p className='text-center'>{comment}</p>
            <h4 className='text-center font-bold'>– {name}</h4>
        </div>
    )
}
