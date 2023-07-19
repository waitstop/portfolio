import {socialLinks} from "./Contacts";
import {EnvelopeSimple, GithubLogo, TelegramLogo} from "@phosphor-icons/react";
import {ReactComponent as VkLogo} from '../img/VK_logo.svg'

const Footer = () => {
  return(
      <div className={"py-5 md:py-10"}>
          <div className={"flex align-middle justify-center gap-5"}>
              <a href={socialLinks.Telegram}>
                  <TelegramLogo className={"fill-yellow text-5xl hover:opacity-50 transition-opacity"}/>
              </a>
              <a href={socialLinks.VK}>
                  <VkLogo className={"fill-yellow text-5xl hover:opacity-50 transition-opacity"}/>
              </a>
              <a href={socialLinks.GitHub}>
                  <GithubLogo className={"fill-yellow text-5xl hover:opacity-50 transition-opacity"}/>
              </a>
              <a href={socialLinks.Email}>
                  <EnvelopeSimple className={"fill-yellow text-5xl hover:opacity-50 transition-opacity"}/>
              </a>
          </div>
          <div className={"font-archivo mt-5 md:mt-10"}>
              <p className={"text-yellow"}>Все права защищены © Александр Казаков</p>
              <p className={"text-yellow/50"}>2023</p>
          </div>
      </div>
  )
}

export default Footer