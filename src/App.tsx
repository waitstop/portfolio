import HeroSection from '@/components/sections/hero-section';
import CasesSection from '@/components/sections/cases-section';
import WorkHistorySection from '@/components/sections/work-history-section';
import Footer from '@/components/ui/footer';

function App(): JSX.Element {
  return (
    <>
      <main>
        <HeroSection />
        <WorkHistorySection />
        <CasesSection />
      </main>
      <hr />
      <Footer />
    </>
  );
}

export default App;
