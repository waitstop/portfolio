export type WorkHistoryType = {
  title: string;
  content: React.ReactNode;
};

export const workHistory: WorkHistoryType[] = [
  {
    title: '2025 — н.в.',
    content: (
      <div className="space-y-2">
        <h3>Frontend-разработчик</h3>
        <a
          className="inline-block"
          href="https://www.cybersamurai.ru/"
          target="_blank"
          rel="noreferrer"
        >
          ВГТРК
        </a>
        <p>
          Разработка frontend-части приложения, интеграция SSR-рендеринга в рамках фреймворка Nuxt3
        </p>
      </div>
    ),
  },
  {
    title: '2023 — 2024',
    content: (
      <div className="space-y-2">
        <h3>Frontend-разработчик</h3>
        <a
          className="inline-block"
          href="https://www.cybersamurai.ru/"
          target="_blank"
          rel="noreferrer"
        >
          CyberSamurai
        </a>
        <p>Разработка SPA/PWA, лендингов, техническая поддержка</p>
      </div>
    ),
  },
  {
    title: '2021 — 2022',
    content: (
      <div className="space-y-2">
        <h3>Внештатный сотрудник отдела IT</h3>
        <p>SMS Engineering</p>
        <p>
          Техническая поддержка магазина Wordpress, создание сайтов-визиток для
          сотрудников на React, создание лендингов, веб-приложений для нужд
          компании.
        </p>
      </div>
    ),
  },
];
