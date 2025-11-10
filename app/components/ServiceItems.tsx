import Image, { StaticImageData } from 'next/image'

export default function ServiceItems({ image, title, description }: { image: StaticImageData, title: string, description: string }) {
    return (
        <div>
            <Image src={image} width='1000' height='400' alt='Service section image' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
