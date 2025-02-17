// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

export default function Footer(): React.ReactNode {
  const contacts = [
    {
      label: 'Telegram',
      href: 'https://t.me/waitstop_work',
      icon: 'ic-baseline-telegram',
      className: 'bg-blue-500',
    },
    {
      label: 'Github',
      href: 'https://github.com/waitstop',
      icon: 'mdi:github',
      className: 'bg-gray-800',
    },
  ] as const;
  return (
    <div className="container mx-auto grid grid-cols-2 space-y-3 px-4 py-6 md:space-y-0">
      <div className="col-span-2 flex flex-wrap items-center justify-center gap-3 md:col-span-1">
        {contacts.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex items-center gap-x-2 rounded-md px-4 py-2',
              c.className
            )}
          >
            <Icon icon={c.icon} /> {c.label}
          </a>
        ))}
      </div>
      <p className="col-span-2 self-center text-center opacity-50 md:col-span-1">
        2025 — Aleksandr Kazakov
      </p>
    </div>
  );
}
