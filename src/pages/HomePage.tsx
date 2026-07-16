import { Hero } from '../components/sections/Hero';
import { Problem } from '../components/sections/Problem';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { OwnersSection, TenantsSection } from '../components/sections/Audiences';
import { Stats } from '../components/sections/Stats';
import { Partners } from '../components/sections/Partners';
import { Investors } from '../components/sections/Investors';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Download } from '../components/sections/Download';
import { AppScreenshots } from '../components/sections/AppScreenshots';
import { PublishCTA } from '../components/sections/PublishCTA';
import { useReveal } from '../hooks/useReveal';
import { Seo } from '../components/ui/Seo';

export function HomePage() {
  useReveal([]);
  return (
    <>
      <Seo 
        title="ImoFlex — L'avenir de l'immobilier africain"
        description="Trouvez un logement, gérez vos biens, payez vos loyers et simplifiez toute votre expérience immobilière avec ImoFlex."
      />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <OwnersSection />
      <TenantsSection />
      <Stats />
      <PublishCTA />
      <Partners />
      <Investors />
      <Testimonials />
      <Download />
      <AppScreenshots />
      <FAQ />
    </>
  );
}
