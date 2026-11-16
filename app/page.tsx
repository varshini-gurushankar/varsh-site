import About from "@/components/Sketch/About";
import Currently from "@/components/Sketch/Currently";
import Hero from "@/components/Sketch/Hero";
import Journey from "@/components/Sketch/Journey";
import SiteFooter from "@/components/Sketch/SiteFooter";
import SiteNav from "@/components/Sketch/SiteNav";
import { SoundProvider } from "@/components/Sketch/SoundContext";

export default function Page() {
  return (
    <SoundProvider>
      <main id="top">
        <SiteNav />
        <Hero />
        <Journey />
        <About />
        <Currently />
        <SiteFooter />
      </main>
    </SoundProvider>
  );
}
