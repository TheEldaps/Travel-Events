import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.png'
import InstagramLogo from '../../public/InstagramLogo.png'
import FacebookLogo from '../../public/FacebookLogo.png'

export default function FooterSection() {
    return (
        <section className='bg-[#151515] text-white px-[10%] py-[40px]'>
            <section className='flex justify-between mb-10'>
                <div className='w-[20%] '>
                    <Image src={Logo} width='300' height='300' alt='Website logo' className=' border border-black' />
                    <p className='text-[0.5rem]  text-center '>Where travel, fun and easy planning comes together</p>
                </div>
                <div className=''>
                    <h3 className='font-bold'>Contact</h3>
                    <ul>
                        <li>Maryland, USA</li>
                        <li>(443) 406-8048</li>
                        <li>TMEbyNicky@gmail.com</li>
                    </ul>
                    <div className='flex gap-5'>
                        <Link href='www.facebook.com'><Image src={FacebookLogo} width='200' height='200' alt='facebook logo' className='w-[30px] h-auto' /></Link>
                        <Link href='www.instagram.com'><Image src={InstagramLogo} width='200' height='200' alt='Instagram 
                    logo' className='w-[30px] h-auto' /></Link>
                    </div>
                </div>
            </section>
            <section className='border-t border-white'>
                <p className='text-center text-[0.8rem]'>Copyright Traveleventsmadeeaasy. All Rights Reserved</p>
            </section>
        </section>
    )
}
