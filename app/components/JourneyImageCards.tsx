import Image from "next/image";
import { StaticImageData } from "next/image";

export default function JourneyImageCards({
  image,
  imageheight,
}: {
  image: StaticImageData;
  imageheight: string;
}) {
  return (
    <div className={`${imageheight}`}>
      <Image
        src={image}
        width="200"
        height="400"
        alt="An Image showing the our journey through memories"
        className="w-full"
      />
    </div>
  );
}
