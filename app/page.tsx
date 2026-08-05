import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Process from '@/components/process';
import Portfolio from '@/components/portfolio';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-[#f2eddf] text-[#17171b]">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
