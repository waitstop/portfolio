import {socialLinks} from "./Contacts";
import {TelegramLogo, GithubLogo, EnvelopeSimple} from "@phosphor-icons/react";
import {ReactComponent as VkLogo} from '../img/VK_logo.svg'

const Faq = () => {
  return(
      <div>
          <h1 className={"font-archivo text-orange font-extrabold text-2xl text-left mb-5"}>Частно задаваемые вопросы</h1>
          <div className={"flex flex-col text-left font-archivo"}>
              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl font-bold pb-2.5"}>Только React?</h2>
                  <p className={"text-orange-light"}>Помимо ReactJS, я также готов изучить и работать с другими фреймворками и технологиями, чтобы достичь лучших результатов и удовлетворить потребности проекта.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl font-bold pb-2.5"}>Какие проекты?</h2>
                  <p className={"text-orange-light"}>От мобильных приложений до грандиозных веб-платформ - мир кода познан во всех его аспектах.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl font-bold pb-2.5"}>Работа в команде?</h2>
                  <p className={"text-orange-light"}>Конечно! Командная работа развивает навыки и содействует достижению ослепительных результатов.</p>
              </div>

              <div className={"mb-10"}>
                  <h2 className={"text-orange text-xl font-bold pb-2.5"}>Как связаться с вами?</h2>
                  <p className={"text-orange-light"}>Самый быстрый путь - написать мне в <a href={socialLinks.Telegram} className={"underline"}>Telegram</a>. Либо связаться через другие социальные сети.</p>
              </div>
          </div>

          <div className={"flex align-middle justify-center gap-5"}>
              <a href={socialLinks.Telegram}>
                  <TelegramLogo className={"fill-yellow text-5xl"}/>
              </a>
              <a href={socialLinks.VK}>
                  <VkLogo className={"fill-yellow text-5xl"}/>
              </a>
              <a href={socialLinks.GitHub}>
                  <GithubLogo className={"fill-yellow text-5xl"}/>
              </a>
              <a href={socialLinks.Email}>
                  <EnvelopeSimple className={"fill-yellow text-5xl"}/>
              </a>

          </div>
      </div>
  )
}

export default Faq