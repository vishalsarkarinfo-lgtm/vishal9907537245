import React, { useState, Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TopUtilityBar } from './components/TopUtilityBar';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { HeroCarousel } from './components/HeroCarousel';
import { PartnersLogoStrip } from './components/PartnersLogoStrip';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhatMakesUsDifferent } from './components/WhatMakesUsDifferent';
import { CtaBanner } from './components/CtaBanner';
import { WorkingProcess } from './components/WorkingProcess';
import { OffersUpdatesDueDates } from './components/OffersUpdatesDueDates';
import { WhyLpiHighlights } from './components/WhyLpiHighlights';
import { AiComplianceSection } from './components/AiComplianceSection';
import { GlobalBrandsStrip } from './components/GlobalBrandsStrip';
import { WhyChooseUsGrid } from './components/WhyChooseUsGrid';
import { StatsCounter } from './components/StatsCounter';
import { CustomerReviews } from './components/CustomerReviews';
import { MultiStepLeadForm } from './components/MultiStepLeadForm';
import { MobileAppBanner } from './components/MobileAppBanner';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { PageLoadingFallback } from './components/PageLoadingFallback';
import { EmailJSIntegration } from './components/EmailJSIntegration';

// Lazy load dedicated landing pages
const PrivateLimitedLanding = lazy(() => import('./pages/PrivateLimitedLanding').then(m => ({ default: m.PrivateLimitedLanding })));
const LegalDraftingLanding = lazy(() => import('./pages/LegalDraftingLanding').then(m => ({ default: m.LegalDraftingLanding })));
const SoleProprietorshipLanding = lazy(() => import('./pages/SoleProprietorshipLanding').then(m => ({ default: m.SoleProprietorshipLanding })));
const LLPLanding = lazy(() => import('./pages/LLPLanding').then(m => ({ default: m.LLPLanding })));
const OPCLanding = lazy(() => import('./pages/OPCLanding').then(m => ({ default: m.OPCLanding })));
const PartnershipFirmLanding = lazy(() => import('./pages/PartnershipFirmLanding').then(m => ({ default: m.PartnershipFirmLanding })));
const ProducerCompanyLanding = lazy(() => import('./pages/ProducerCompanyLanding').then(m => ({ default: m.ProducerCompanyLanding })));
const Section8CompanyLanding = lazy(() => import('./pages/Section8CompanyLanding').then(m => ({ default: m.Section8CompanyLanding })));
const NgoRegistrationLanding = lazy(() => import('./pages/NgoRegistrationLanding').then(m => ({ default: m.NgoRegistrationLanding })));
const SocietyRegistrationLanding = lazy(() => import('./pages/SocietyRegistrationLanding').then(m => ({ default: m.SocietyRegistrationLanding })));
const DarpanRegistrationLanding = lazy(() => import('./pages/DarpanRegistrationLanding').then(m => ({ default: m.DarpanRegistrationLanding })));
const BusinessWebsiteDevelopmentLanding = lazy(() => import('./pages/BusinessWebsiteDevelopmentLanding').then(m => ({ default: m.BusinessWebsiteDevelopmentLanding })));
const WebsiteDevelopmentLanding = lazy(() => import('./pages/WebsiteDevelopmentLanding').then(m => ({ default: m.WebsiteDevelopmentLanding })));
const AppDevelopmentLanding = lazy(() => import('./pages/AppDevelopmentLanding').then(m => ({ default: m.AppDevelopmentLanding })));
const CRMDevelopmentLanding = lazy(() => import('./pages/CRMDevelopmentLanding').then(m => ({ default: m.CRMDevelopmentLanding })));
const SoftwareDevelopmentLanding = lazy(() => import('./pages/SoftwareDevelopmentLanding').then(m => ({ default: m.SoftwareDevelopmentLanding })));
const DigitalMarketingLanding = lazy(() => import('./pages/DigitalMarketingLanding').then(m => ({ default: m.DigitalMarketingLanding })));
const TrustRegistrationLanding = lazy(() => import('./pages/TrustRegistrationLanding').then(m => ({ default: m.TrustRegistrationLanding })));
const TwelveAEightyGLanding = lazy(() => import('./pages/TwelveAEightyGLanding').then(m => ({ default: m.TwelveAEightyGLanding })));
const CsrOneRegistrationLanding = lazy(() => import('./pages/CsrOneRegistrationLanding').then(m => ({ default: m.CsrOneRegistrationLanding })));
const CorporateTaxLanding = lazy(() => import('./pages/CorporateTaxLanding').then(m => ({ default: m.CorporateTaxLanding })));
const CategoryServiceDetailLanding = lazy(() => import('./pages/CategoryServiceDetailLanding').then(m => ({ default: m.CategoryServiceDetailLanding })));
import { SERVICE_PAGES_MAP } from './pages/services';

const FssaiRegistrationLanding = lazy(() => import('./pages/FssaiRegistrationLanding').then(m => ({ default: m.FssaiRegistrationLanding })));
const FssaiStateLicenseLanding = lazy(() => import('./pages/FssaiStateLicenseLanding').then(m => ({ default: m.FssaiStateLicenseLanding })));
const FssaiCentralLicenseLanding = lazy(() => import('./pages/FssaiCentralLicenseLanding').then(m => ({ default: m.FssaiCentralLicenseLanding })));
const FssaiReturnsLanding = lazy(() => import('./pages/FssaiReturnsLanding').then(m => ({ default: m.FssaiReturnsLanding })));
const FssaiRenewalLanding = lazy(() => import('./pages/FssaiRenewalLanding').then(m => ({ default: m.FssaiRenewalLanding })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage').then(m => ({ default: m.TermsAndConditionsPage })));
const RefundAndCancellationPage = lazy(() => import('./pages/RefundAndCancellationPage').then(m => ({ default: m.RefundAndCancellationPage })));
const ServiceDeliveryPage = lazy(() => import('./pages/ServiceDeliveryPage').then(m => ({ default: m.ServiceDeliveryPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const AllServicesPage = lazy(() => import('./pages/AllServicesPage').then(m => ({ default: m.AllServicesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage').then(m => ({ default: m.BookConsultationPage })));
const MakePaymentPage = lazy(() => import('./pages/MakePaymentPage').then(m => ({ default: m.MakePaymentPage })));

import {
  BrochureModal,
  AppointmentModal,
  ServiceDetailModal,
  BlogArticleModal,
  SuccessModal
} from './components/Modals';
import { ServiceItem, BlogPost, LeadFormData } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { ALL_CATEGORY_SERVICES } from './data/categoryServices';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="w-20 h-20 bg-blue-50 text-[#0B3D91] rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-sm">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Page Not Found</h1>
      <p className="text-slate-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-[#0B3D91] hover:bg-blue-900 text-white font-semibold rounded-xl shadow-md transition-colors"
      >
        Back to Homepage
      </button>
    </div>
  );
}

export function getServiceRoute(serviceName: string): string {
  if (!serviceName) return '/';
  const s = serviceName.toLowerCase().trim();
  
  if (s.includes('private limited') || s === 'pvt ltd' || s.includes('pvt-ltd') || s.includes('incorporation')) return '/private-limited-company';
  if (s.includes('sole proprietorship')) return '/sole-proprietorship';
  if (s.includes('limited liability partnership') || s === 'llp') return '/llp';
  if (s.includes('one person company') || s === 'opc') return '/opc';
  if (s.includes('partnership firm') || s === 'partnership') return '/partnership-firm';
  if (s.includes('producer company')) return '/producer-company';
  if (s.includes('section 8') || s === 'section-8') return '/section-8-company';
  if (s.includes('ngo registration') || s === 'ngo') return '/ngo-registration';
  if (s.includes('society registration') || s === 'society') return '/society-registration';
  if (s.includes('darpan registration') || s === 'darpan') return '/darpan-registration';
  if (s.includes('trust registration') || s === 'trust') return '/trust-registration';
  if (s.includes('12a') || s.includes('80g')) return '/12a-80g-registration';
  if (s.includes('csr 1') || s.includes('csr1')) return '/csr1-registration';
  if (s.includes('corporate tax')) return '/corporate-tax';
  if (s.includes('legal drafting') || s.includes('agreement drafting')) return '/legal-drafting';
  if (s.includes('business website')) return '/business-website-development';
  if (s.includes('website development')) return '/website-development';
  if (s.includes('app development')) return '/app-development';
  if (s.includes('crm development')) return '/crm-development';
  if (s.includes('software development')) return '/software-development';
  if (s.includes('digital marketing')) return '/digital-marketing';

  if (s.includes('fssai central')) return '/fssai-central-license';
  if (s.includes('fssai state')) return '/fssai-state-license';
  if (s.includes('fssai return')) return '/fssai-returns';
  if (s.includes('fssai renewal')) return '/fssai-renewal';
  if (s.includes('fssai') || s.includes('food license')) return '/fssai-registration';

  if (s.includes('trademark')) return '/trademark-registration';
  if (s.includes('gst registration') || s === 'gst') return '/gst-registration';
  if (s.includes('gst return')) return '/gst-return';
  if (s.includes('msme')) return '/msme-registration';
  if (s.includes('iec') || s.includes('import export')) return '/iec-registration';
  if (s.includes('iso 9001')) return '/iso-9001';
  if (s.includes('iso 14001')) return '/iso-14001';
  if (s.includes('iso 45001')) return '/iso-45001';
  if (s.includes('iso 22000')) return '/iso-22000';
  if (s.includes('iso 27001')) return '/iso-27001';
  if (s.includes('iso certificate')) return '/iso-certificate';

  const slug = s.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (SERVICE_PAGES_MAP[slug]) {
    return `/${slug}`;
  }

  const cat = ALL_CATEGORY_SERVICES.find(c => c.name.toLowerCase() === s || c.slug === slug);
  if (cat) {
    return `/${cat.slug}`;
  }

  return `/${slug}`;
}

export function AppInner() {
  const navigate = useNavigate();
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);
  const [formPreselectedService, setFormPreselectedService] = useState('');

  const handleSelectServiceByName = (serviceName: string) => {
    const route = getServiceRoute(serviceName);
    navigate(route);
  };

  const handleApply = (serviceName: string) => {
    setFormPreselectedService(serviceName);
    navigate('/contact');
  };

  const handleLeadSuccess = (lead: LeadFormData) => {
    setSubmittedLead(lead);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      <ScrollToTop />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <TopUtilityBar onOpenBrochure={() => setIsBrochureOpen(true)} />
                <HeaderMegaMenu
                  onSelectService={handleSelectServiceByName}
                  onOpenConsultation={() => {
                    const contactEl = document.getElementById('contact-consultation-section');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
                <main className="flex-grow">
                  <HeroCarousel
                    onSelectService={(serviceName) => {
                      if (serviceName.toLowerCase().includes('private limited')) {
                        handleApply(serviceName);
                      } else {
                        handleSelectServiceByName(serviceName);
                      }
                    }}
                    onOpenConsultation={() => setIsAppointmentOpen(true)}
                  />
                  <PartnersLogoStrip />
                  <ServicesShowcase
                    onSelectService={(srv) => setSelectedService(srv)}
                    onApplyService={(srvName) => handleApply(srvName)}
                  />
                  <WhatMakesUsDifferent onLearnMore={() => setIsAppointmentOpen(true)} />
                  <CtaBanner onOpenAppointment={() => setIsAppointmentOpen(true)} />
                  <WorkingProcess />
                  <OffersUpdatesDueDates
                    onApplyOffer={(code) => handleApply(`Offer: ${code}`)}
                    onOpenConsultation={() => {
                      const contactEl = document.getElementById('contact-consultation-section');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                  <WhyLpiHighlights />
                  <AiComplianceSection />
                  <GlobalBrandsStrip />
                  <WhyChooseUsGrid />
                  <StatsCounter />
                  <CustomerReviews />
                  <MultiStepLeadForm
                    initialService={formPreselectedService}
                    onSuccess={handleLeadSuccess}
                  />
                  <MobileAppBanner />
                  <BlogSection onReadArticle={(article) => setSelectedArticle(article)} />
                </main>
                <Footer onSelectService={handleSelectServiceByName} />
              </>
            }
          />

          {/* Dedicated Landing & Info Pages */}
          <Route
            path="/private-limited-company"
            element={
              <PrivateLimitedLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/pvt-ltd"
            element={
              <PrivateLimitedLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/legal-drafting"
            element={
              <LegalDraftingLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onApply={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/sole-proprietorship"
            element={
              <SoleProprietorshipLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/llp"
            element={
              <LLPLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/limited-liability-partnership"
            element={
              <LLPLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/opc"
            element={
              <OPCLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/one-person-company"
            element={
              <OPCLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/partnership-firm"
            element={
              <PartnershipFirmLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/producer-company"
            element={
              <ProducerCompanyLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/section-8-company"
            element={
              <Section8CompanyLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/ngo-registration"
            element={
              <NgoRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/society-registration"
            element={
              <SocietyRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/darpan-registration"
            element={
              <DarpanRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/trust-registration"
            element={
              <TrustRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/12a-80g-registration"
            element={
              <TwelveAEightyGLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/csr1-registration"
            element={
              <CsrOneRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/corporate-tax"
            element={
              <CorporateTaxLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/business-website-development"
            element={
              <BusinessWebsiteDevelopmentLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/website-development"
            element={
              <WebsiteDevelopmentLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/app-development"
            element={
              <AppDevelopmentLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/crm-development"
            element={
              <CRMDevelopmentLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/software-development"
            element={
              <SoftwareDevelopmentLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/digital-marketing"
            element={
              <DigitalMarketingLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />

          {/* FSSAI Pages */}
          <Route
            path="/fssai-registration"
            element={
              <FssaiRegistrationLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/fssai-state-license"
            element={
              <FssaiStateLicenseLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/fssai-central-license"
            element={
              <FssaiCentralLicenseLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/fssai-returns"
            element={
              <FssaiReturnsLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />
          <Route
            path="/fssai-renewal"
            element={
              <FssaiRenewalLanding
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenAppointment={() => setIsAppointmentOpen(true)}
              />
            }
          />

          {/* General Pages */}
          <Route
            path="/privacy-policy"
            element={
              <PrivacyPolicyPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <TermsAndConditionsPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/refund-and-cancellation"
            element={
              <RefundAndCancellationPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/service-delivery"
            element={
              <ServiceDeliveryPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <AboutUsPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/all-services"
            element={
              <AllServicesPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onSuccess={handleLeadSuccess}
              />
            }
          />
          <Route
            path="/book-consultation"
            element={
              <BookConsultationPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
                onSuccess={handleLeadSuccess}
              />
            }
          />
          <Route
            path="/make-payment"
            element={
              <MakePaymentPage
                onBackToHome={handleBackToHome}
                onSelectService={handleSelectServiceByName}
              />
            }
          />

          {/* Dynamic Service Pages from SERVICE_PAGES_MAP */}
          {Object.entries(SERVICE_PAGES_MAP).map(([slug, Comp]) => (
            <React.Fragment key={slug}>
              <Route
                path={`/${slug}`}
                element={
                  <Comp
                    onBackToHome={handleBackToHome}
                    onSelectService={handleSelectServiceByName}
                    onOpenBrochure={() => setIsBrochureOpen(true)}
                    onOpenAppointment={() => setIsAppointmentOpen(true)}
                  />
                }
              />
            </React.Fragment>
          ))}

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* Interactive Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onApply={handleApply}
      />
      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
      <SuccessModal
        lead={submittedLead}
        onClose={() => setSubmittedLead(null)}
      />

      {/* Floating Action Buttons */}
      <Chatbot />
      <EmailJSIntegration />
    </div>
  );
}

export function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}

export default App;
