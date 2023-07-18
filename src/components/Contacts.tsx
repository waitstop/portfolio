import {ReactComponent as StarSvg} from "../img/star.svg";

export const socialLinks: { [key: string]: string } = {
    "VK": 'https://vk.com/3waitstop',
    "GitHub": 'https://github.com/waitstop',
    "Telegram": 'https://t.me/waitstop_work',
    "Email": 'mailto:kazakov2003931@yandex.ru'
}

const Contacts = () => {
    return(
        <div className={"text-left pb-10 relative"}>
            <h1 className={"text-white font-wix text-4xl pb-5"}>Связь</h1>
            <p className={"text-red font-archivo text-xl"}>Коммуникация - основа эффективных отношений. Не стесняйтесь писать.</p>

            <h2 className={"text-white text-2xl font-wix py-5"}>Соцсети</h2>
            <div className={"flex flex-col gap-2"}>
                {Object.keys(socialLinks).map((keyName, i)=>(
                    <a key={i} className={'text-red font-archivo font-bold border-b-red/25 pb-2 ' + (Object.keys(socialLinks).length - 1 !== i && 'border-b-2')} href={socialLinks[keyName]}>{keyName}</a>
                ))}
            </div>
            <StarSvg className={"w-1/2 stroke-white/25 absolute top-0 translate-y-[-50%] right-0"}/>
        </div>
    )
}

export default Contacts