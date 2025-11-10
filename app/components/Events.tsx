import Image from 'next/image'
import { StaticImageData } from 'next/image'
import ShareIcon from '../../public/Share.png'
import HeartIcon from '../../public/Heart.png'


export default function Events({ image, title, description, }: { image: StaticImageData, title: string, description: string }) {
    return (
        <div className='p-[5%] bg-white mb-[50px] shadow-xl rounded-md'>

            <Image src={image} width='500' height='300 ' alt='Event image' className='w-full min-h-[150px]' />

            <div>
                <section className='mb-5'>
                    <h3 className='mt-2.5 font-bold font-[dmSans]'>{title}</h3>
                    <p className='text-[0.6rem] font-[Nunito] text-justify'>{description}</p>
                </section>
                <section>
                    <p className='font-[Nunito] text-[0.7rem]'>Deposit</p>
                    <p className='font-[Nunito] text-[0.9rem] font-bold mb-2.5'>$125 to secure a spot (Non-Refundable)</p>
                </section>
                <div className='flex gap-9'>
                    <button className='text-[0.6rem] px-2.5 py-[5px] border cursor-pointer hover:bg-[#e4e4e455] hover:text-[#000000b0] rounded-sm shadow-md'> Get Tickets </ button>
                    <div>
                        <button className='border rounded-full p-1 mr-2.5 hover:cursor-pointer hover:bg-[#2222224f] height-[50px]'>
                            <Image src={ShareIcon} width='5' height='5' alt='heart icon' className='w-3 h-3' /> </button>
                        <button className='border rounded-full p-1 height-[50px] hover:cursor-pointer hover:bg-[#2222224f]'>
                            <Image src={HeartIcon} width='5' height='5' alt='heart icon' className='w-3 h-3' /> </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
