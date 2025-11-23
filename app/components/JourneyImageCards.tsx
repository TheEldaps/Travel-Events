import Image from "next/image";
import { StaticImageData } from "next/image";

export default function JourneyImageCards({
  image,

}: {
  image: StaticImageData;

}) {
  return (
    <div>
      <Image
        src={image}
        width="200"
        height="400"
        alt="An Image showing the our journey through memories"
        className='w-[25vw]'
      />
    </div>
  );
}
