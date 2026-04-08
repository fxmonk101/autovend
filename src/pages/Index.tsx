import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import FeaturedMachines from "@/components/FeaturedMachines";
import ROICalculator from "@/components/ROICalculator";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeReviews from "@/components/HomeReviews";
import HomeFAQ from "@/components/HomeFAQ";
import QuizCTABanner from "@/components/QuizCTABanner";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import RecentPurchasePopup from "@/components/RecentPurchasePopup";
import UrgencyBanner from "@/components/UrgencyBanner";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <FeaturedMachines />
      <ROICalculator />
      <HowItWorks />
      <TrustSection />
      <HomeReviews />
      <TestimonialsSection />
      <HomeFAQ />
      <QuizCTABanner />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
      <Footer />
      <RecentPurchasePopup />
    </div>
  );
}
