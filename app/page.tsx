import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import JourneySection from "./components/JourneySection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ServiceSection />
      <TestimonialsSection />
      <JourneySection />
    </>
  );
}
