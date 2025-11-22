import Button from "../components/Button";
import Image from "next/image";
import HeroImage from "../../public/HeroImage.png";

export default function HeroSection() {
  return (
    <section id='home' className="pt-5 px-[5%] sm:px-[10%] mb-[50px]">
      <h1 className="mb-4 lg:mb-10 mx-auto text-[2.5rem] leading px-[4%] sm:text-[3.9rem] md:text-[4.5rem] lg:text-[6rem] text-center font-semibold md:leading-22 lg:leading-28">
        Where Travel, Fun and Easy Planning Comes{" "}
        <br className="inline sm:hidden lg:inline" /> together
      </h1>
      <Button title="Book a Vacation" text="text-[1rem] md:text-[2rem]" />
      <Image
        src={HeroImage}
        width="1000"
        height="500"
        alt="hero section image"
        className="mt-10 rounded-b-2xl block mx-auto w-full h-auto"
      />
      <p className='flex justify-between pt-5 text-[#026EFF]'><span>Vacation/Events</span><span>Made</span><span>Easy</span></p>
    </section>
  );
}

