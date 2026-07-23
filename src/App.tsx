import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { VisionPage } from './pages/VisionPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { FounderPage } from './pages/FounderPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SalesTermsPage } from './pages/SalesTermsPage';
import { LegalPage } from './pages/LegalPage';
import { DownloadCTA } from './components/ui/DownloadCTA';
import { Section } from './components/ui/Section';
import { useReveal } from './hooks/useReveal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { WhatsAppWidget } from './components/ui/WhatsAppWidget';
import { HelmetProvider } from 'react-helmet-async';

import { Partners } from './components/sections/Partners';
import { Investors } from './components/sections/Investors';
import { Seo } from './components/ui/Seo';

function NotFound() {
  useReveal([]);
  const navigate = useNavigate();
  return (
    <div className="pt-32">
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-6xl font-extrabold text-brand-700">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink-900">Page introuvable</h1>
          <p className="mt-2 text-ink-500">La page que vous cherchez n'existe pas ou a été déplacée.</p>
          <button onClick={() => navigate('/')} className="btn-primary mt-6">
            Retour à l'accueil
          </button>
        </div>
      </Section>
    </div>
  );
}

function PartnersStandalone() {
  useReveal([]);
  return (
    <>
      <Seo 
        title="Partenaires — ImoFlex"
        description="Devenez partenaire ImoFlex et accélérez la transformation du secteur immobilier."
      />
      <Partners />
      <Section>
        <div className="container-px">
          <div className="reveal">
            <DownloadCTA />
          </div>
        </div>
      </Section>
    </>
  );
}

function InvestorsStandalone() {
  useReveal([]);
  return (
    <>
      <Seo 
        title="Investisseurs — ImoFlex"
        description="Investissez dans l'avenir de l'immobilier africain. Découvrez nos métriques et notre vision."
      />
      <Investors />
      <Section>
        <div className="container-px">
          <div className="reveal">
            <DownloadCTA variant="dark" />
          </div>
        </div>
      </Section>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/fondateur" element={<FounderPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/confidentialite" element={<PrivacyPage />} />
            <Route path="/conditions" element={<TermsPage />} />
            <Route path="/cgv" element={<SalesTermsPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/partenaires" element={
              <div className="pt-24">
                <PartnersStandalone />
              </div>
            } />
            <Route path="/investisseurs" element={
              <div className="pt-24">
                <InvestorsStandalone />
              </div>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </HelmetProvider>
  );
}

export default App;
