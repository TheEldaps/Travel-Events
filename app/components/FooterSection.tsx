import Image from 'next/image'
import InstagramLogo from '../../public/InstagramLogo.png'
import FacebookLogo from '../../public/FacebookLogo.png'

export default function FooterSection() {
    return (
        <section>

            <div>
                <Image src='' width='300' height='300' alt='Website logo' />
                <p className='text-[0.5rem]'>Where travel, fun and easy planning comes together</p>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Maryland, USA</li>
                    <li>(443) 406-8048</li>
                    <li>TMEbyNicky@gmail.com</li>
                </ul>
                <div>
                    <Image src={FacebookLogo} width='200' height='200' alt='facebook logo' />
                    <Image src={InstagramLogo} width='200' height='200' alt='Instagram 
                    logo' />
                </div>
            </div>

        </section>
    )
}
