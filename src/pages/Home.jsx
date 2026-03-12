import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import DigitalFuture from "../components/DigitalFuture";
import VoicesFuture from "../components/VoicesFuture";
import DiveFuture from "../components/DiveFuture";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <DigitalFuture />
      <VoicesFuture />
      <DiveFuture />
      <Footer/>
    </>
  );
}