const socialLinks: { [key: string]: string } = {
    "VK": 'https://vk.com/3waitstop',
    "GitHub": 'https://github.com/waitstop',
    "Telegram": 'https://t.me/wait_stop',
    "Email": 'mailto:kazakov2003931@yandex.ru'
}

const Contacts = () => {
    return(
        <div className={"text-left"}>
            <h1 className={"text-white font-wix text-4xl pb-5"}>Связь</h1>
            <p className={"text-red font-archivo text-xl"}>Коммуникация - основа эффективных отношений. Не стесняйтесь писать</p>

            <h2 className={"text-white text-2xl font-wix pt-5"}>Соцсети</h2>
            <div className={"flex flex-col"}>
                {Object.keys(socialLinks).map((keyName)=>(
                    <a className={"text-white"} href={socialLinks[keyName]}>{keyName}</a>
                ))}
            </div>
        </div>
    )
}

export default Contacts