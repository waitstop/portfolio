// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import FlipWords from '@/components/ui/flip-words';

export default function HeroSection(): React.ReactNode {
  const words: string[] = [
    'превращающий сложное в понятное.',
    'который двигает ваш бизнес вперед.',
    'соединяющий технологии и эстетику.',
    'на который можно положиться.',
    'который просто работает.',
    'достойный вашего проекта.',
  ];
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-y-3 overflow-hidden p-4"
      style={{
        background: `
          linear-gradient(0deg, hsl(var(--background)), transparent 5%),
          radial-gradient(circle, hsl(var(--primary) / 40%), hsl(var(--background)))
        `,
      }}
    >
      <h1 className="static z-50 mb-2 text-base font-medium opacity-50 md:text-2xl">
        Привет, я Александр!
      </h1>
      <div className="relative z-50 h-44 text-center text-2xl font-bold text-foreground/90 md:h-48 md:text-4xl">
        Я создаю{' '}
        <span className="rounded-sm bg-gradient-to-bl from-accent to-primary font-mono font-normal text-accent-foreground">
          {'<код/>'}
        </span>
        ,
        <br />
        <FlipWords className="text-center" words={words} duration={3000} />
      </div>
      <Icon
        icon="mdi-arrow-down"
        className="animate-bounce opacity-50 md:size-12"
      />
    </section>
  );
}
