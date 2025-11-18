import JourneyImageCards from "../components/JourneyImageCards";
import JourneyImage1 from "../../public/JourneyImage1.png";
import JourneyImage2 from "../../public/JourneyImage2.png";
import JourneyImage3 from "../../public/JourneyImage3.png";
import JourneyImage4 from "../../public/JourneyImage4.png";
import JourneyImage5 from "../../public/JourneyImage5.png";
import JourneyImage6 from "../../public/JourneyImage6.png";
import Heading from "./Heading";

export default function JourneySection() {
  return (
    <section className="px-[10%] bg-[#F2F7FF] pt-[30px] pb-5">
      <Heading heading1='Our Journey Through' heading2='images' />

      <section >
        <div className="flex gap-[5%] mb-5 justify-center">
          <JourneyImageCards image={JourneyImage1} imageheight="h-100%" />
          <JourneyImageCards image={JourneyImage2} imageheight="h-75%" />
          <JourneyImageCards image={JourneyImage3} imageheight="h-50%" />
        </div>
        <div className="flex gap-[5%] justify-center">
          <JourneyImageCards image={JourneyImage4} imageheight="h-50%" />
          <JourneyImageCards image={JourneyImage5} imageheight="h-75%" />
          <JourneyImageCards image={JourneyImage6} imageheight="h-100%" />
        </div>
      </section>
    </section>
  );
}
