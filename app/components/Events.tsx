import Image from 'next/image'
import { StaticImageData } from 'next/image'

export default function Events({ image, title, description, }: { image: StaticImageData, title: string, description: string }) {
    return (
        <div>
            <Image src={image} width='500' height='300 ' alt='Event image' />

            <div>
                <h3>{title}</h3>
                <p>{description}</p>

                <p>Deposit</p>
                <p>$125 to secure a spot (Non-Refundable)</p>

                <button>Get Tickets </ button>
                <button>share</button>
                <button>&#10084;</button>
            </div>
        </div>
    );
}
