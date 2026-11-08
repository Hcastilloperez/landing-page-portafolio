import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Process from '@/components/process';
import Portfolio from '@/components/portfolio';
import Products from '@/components/products';
import WhatsAppConsent from '@/components/whatsapp-consent';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-[#f4f0e7] text-[#1a1a18]">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Products />
        <WhatsAppConsent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
