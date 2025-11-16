import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-700">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
