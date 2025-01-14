import Timeline from '@/components/ui/timeline';
import { workHistory } from './work-history';

export default function WorkHistorySection(): React.ReactNode {
  return (
    <section className="container mx-auto">
      <Timeline data={workHistory} />
    </section>
  );
}
