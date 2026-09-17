import { Layout } from "@/components/layout/Layout";
import { HeroGallery } from "@/components/home/HeroGallery";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroGallery />
      <BenefitsSection />
      <TestimonialsPreview />
    </Layout>
  );
};

export default Index;
