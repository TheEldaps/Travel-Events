import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ServiceSection />
    </>
  );
}
