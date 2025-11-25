import Image from 'next/image'
import ElipseImage1 from '../../public/Ellipse1.png'
import ElipseImage2 from '../../public/Ellipse2.png'
import ElipseImage3 from '../../public/Ellipse3.png'
import ElipseImage4 from '../../public/Ellipse4.png'

export default function EllipsePictureFrame() {
    return (
        <ul className='relative min-h-10 w-[20%] max-w-[400px] flex items-center justify-end '>
            <li className=' w-[30%] max-w-[50px] absolute right-[60%]'><Image src={ElipseImage1} width='50' height='50' alt='image for elipses frame' className='block h-auto' /></li>
            <li className=' w-[30%] max-w-[50px] absolute right-[40%]'><Image src={ElipseImage2} width='50' height='50' alt='image for elipses frame' className='block h-auto' /></li>
            <li className=' w-[30%] max-w-[50px] absolute right-[20%]'><Image src={ElipseImage3} width='50' height='50' alt='image for elipses frame' className='block h-auto' /></li >
            <li className=' w-[30%] max-w-[50px] absolute right-[0%]'><Image src={ElipseImage4} width='50' height='50' alt='image for elipses frame' className='block h-auto ' /></li >
        </ul>
    )
}
