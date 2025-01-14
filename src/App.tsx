import HeroSection from '@/components/sections/hero-section';
import CasesSection from './components/sections/cases-section';
import WorkHistorySection from './components/sections/work-history-section';

function App(): JSX.Element {
  return (
    <main>
      <HeroSection />
      <CasesSection />
      <WorkHistorySection />
    </main>
  );
}

export default App;
