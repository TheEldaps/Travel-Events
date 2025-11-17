import JourneyImageCards from "../components/JourneyImageCards";
import JourneyImage1 from "../../public/JourneyImage1.png";
import JourneyImage2 from "../../public/JourneyImage2.png";
import JourneyImage3 from "../../public/JourneyImage3.png";
import JourneyImage4 from "../../public/JourneyImage4.png";
import JourneyImage5 from "../../public/JourneyImage5.png";
import JourneyImage6 from "../../public/JourneyImage6.png";

export default function JourneySection() {
  return (
    <section className="px-[10%] bg-[#F2F7FF] pb-5">
      <h2>
        Our Journey Through <br />
        <span className="text-[#8D8D8D]">images</span>
      </h2>

      <section className="">
        <div className="flex gap-[3%] mb-5">
          <JourneyImageCards image={JourneyImage1} imageheight="h-100%" />
          <JourneyImageCards image={JourneyImage2} imageheight="h-75%" />
          <JourneyImageCards image={JourneyImage3} imageheight="h-50%" />
        </div>
        <div className="flex gap-[3%]">
          <JourneyImageCards image={JourneyImage4} imageheight="h-50%" />
          <JourneyImageCards image={JourneyImage5} imageheight="h-75%" />
          <JourneyImageCards image={JourneyImage6} imageheight="h-100%" />
        </div>
      </section>
    </section>
  );
}
