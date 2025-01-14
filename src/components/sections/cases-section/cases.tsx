import { HTMLAttributes } from 'react';

export type CaseType = {
  status: 'open' | 'closed' | 'development';
  link?: string;
  title: string;
  images?: string[];
  videos?: { src: string; type: string }[];
  description: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export const cases: CaseType[] = [
  {
    status: 'development',
    title: '"Платформа, на которой все кликается"',
    description: `Новостной сайт о кино — сайт с пользовательским контентом и поддержкой серверного рендеринга на Nuxt3.`,
    videos: [
      { src: '/vid/cases/filmpro_comp.mp4', type: 'video/mp4' },
      { src: '/vid/cases/filmpro_comp.webm', type: 'video/webm' },
    ],
    className: 'col-span-1 md:col-span-6 border-b',
  },
  {
    status: 'open',
    title: 'МВК - кинопрокат',
    link: 'https://mvk.multvkino.ru',
    description: `Современный сайт, разработанный для кинопрокатчиков,
        помогает удобно представлять каталог фильмов с функцией сортировки, 
        демонстрировать анимации для привлечения внимания и быстро получать заявки или обратную связь через встроенную форму.`,
    images: ['/img/cases/mvk_0.jpg'],
    className: 'col-span-1 lg:col-span-4 border-r border-b',
  },
  {
    status: 'closed',
    title: 'Мульт в Кино',
    description: `Веб-приложение для участия в викторине — интерактивная система, 
        разработанная для зрителей кинотеатра.
        Пользователи могут отслеживать свой баланс очков, 
        участвовать в розыгрышах, а также обменивать накопленные очки на призы.`,
    images: [...Array(5).keys()].map((n) => `/img/cases/mult_${n}.png`),
    className: 'col-span-1 lg:col-span-2 border-b',
  },
  {
    status: 'open',
    title: 'CyberSamurai',
    link: 'https://cybersamurai.pro/',
    description: `В рамках этого проекта я разработал корпоративный сайт для компании. 
        Я использовал React, Tailwind чтобы обеспечить высокую производительность и улучшенный пользовательский опыт.`,
    images: ['/img/cases/cyber-samurai.png'],
    className: 'col-span-1 md:col-span-6',
  },
];
