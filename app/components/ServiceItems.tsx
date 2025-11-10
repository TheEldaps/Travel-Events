import Image, { StaticImageData } from 'next/image'

export default function ServiceItems({ image, title, description }: { image: StaticImageData, titel: string, description: string }) {
    return (
        <div>
            <Image src={image} />
        </div>
    )
}
