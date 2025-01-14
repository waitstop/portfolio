import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
};
export default function CaseCard({
  children,
  className,
}: Props): React.ReactNode {
  return <div className={cn('p-4', className)}>{children}</div>;
}
