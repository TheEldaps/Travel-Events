import Button from "../components/Button";
import Image from "next/image";
import HeroImage from "../../public/HeroImage.png";

export default function HeroSection() {
  return (
    <section className="pt-5 px-[5%]">
      <h1 className="mb-4 text-[2.5rem] px-[4%] sm:text-[3.9rem] md:text-[4.5rem] lg:text-[5rem]  text-center font-semibold ">
        Where Travel, Fun and Easy Planning Comes{" "}
        <br className="hidden lg:inline" /> together
      </h1>
      <Button title="Book a Vacation" text="1rem" />
      <Image
        src={HeroImage}
        width="1000"
        height="500"
        alt="hero section image"
        className="mt-5 rounded-b-2xl block mx-auto w-[85%] h-auto"
      />
      <p className='flex justify-between pt-[20px] text-[#026EFF]'><span>Vacation/Events</span><span>Made</span><span>Easy</span></p>
    </section>
  );
}

