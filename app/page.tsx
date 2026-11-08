import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Work from '@/components/work';
import Services from '@/components/services';
import Homelab from '@/components/homelab';
import About from '@/components/about';
import Process from '@/components/process';
import WhatsAppConsent from '@/components/whatsapp-consent';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-paper text-ink">
        <Hero />
        <Work />
        <Services />
        <Homelab />
        <About />
        <Process />
        <WhatsAppConsent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
