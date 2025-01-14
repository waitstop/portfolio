import { Badge, BadgeProps } from '@/components/ui/badge';

type StatusType = 'open' | 'closed' | 'development';

type Props = {
  status: StatusType;
} & React.HTMLAttributes<HTMLElement>;

const config: Record<
  StatusType,
  { text: string; variant: BadgeProps['variant'] }
> = {
  open: { text: 'Открыт', variant: 'default' },
  closed: { text: 'Закрыт', variant: 'inactive' },
  development: { text: 'В разработке', variant: 'warn' },
};

export default function StatusBadge({
  status,
  ...props
}: Props): React.ReactNode {
  const { text, variant } = config[status];

  return (
    <Badge {...props} variant={variant}>
      {text}
    </Badge>
  );
}
