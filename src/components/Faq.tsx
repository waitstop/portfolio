import {socialLinks} from "./Contacts";

const Faq = () => {
  return(
      <div>
          <h1 className={"font-archivo text-orange font-extrabold text-2xl text-left mb-5 md:mb-16 lg:text-3xl"}>Частно задаваемые вопросы</h1>
          <div className={"flex flex-col text-left font-archivo md:grid grid-cols-2 md:gap-2 lg:gap-10"}>
              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl lg:text-2xl font-bold pb-2.5"}>Только React?</h2>
                  <p className={"text-orange-light lg:text-lg"}>Помимо ReactJS, я также готов изучить и работать с другими фреймворками и технологиями, чтобы достичь лучших результатов и удовлетворить потребности проекта.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl lg:text-2xl font-bold pb-2.5"}>Какие проекты?</h2>
                  <p className={"text-orange-light lg:text-lg"}>От мобильных приложений до грандиозных веб-платформ - мир кода познан во всех его аспектах.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl lg:text-2xl font-bold pb-2.5"}>Работа в команде?</h2>
                  <p className={"text-orange-light lg:text-lg"}>Конечно! Командная работа развивает навыки и содействует достижению ослепительных результатов.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl lg:text-2xl font-bold pb-2.5"}>Как связаться с вами?</h2>
                  <p className={"text-orange-light lg:text-lg"}>Самый быстрый путь - написать мне в <a href={socialLinks.Telegram} className={"underline"}>Telegram</a>. Либо связаться через другие социальные сети.</p>
              </div>
          </div>
      </div>
  )
}

export default Faq