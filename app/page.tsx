import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Athena from '@/components/athena';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="bg-[#05050a] text-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Athena />
      <Contact />
      <Footer />
    </main>
  )
}
