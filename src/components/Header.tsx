import {useEffect, useState} from "react";
import {List, XCircle} from "@phosphor-icons/react";
import {AnimatePresence, motion} from "framer-motion";


const Header = () => {
    const [state, setState] = useState(false)
    useEffect(() => {
        if (state) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "initial"
    }, [state])
    return (
        <>
            <AnimatePresence>
                <button
                    className={"text-orange-light text-4xl sticky left-full top-5 z-50 md:hidden"}
                    onClick={() => {
                        setState(prevState => !prevState)
                    }}
                >
                    {state ? <XCircle/> : <List/>}
                </button>
                {state && (<motion.div key={"menu"} className={
                    `
                    md:hidden
                    flex justify-center flex-col gap-4
                    py-5 
                    text-pink 
                    font-archivo 
                    font-bold 
                    z-40
                    fixed 
                    top-0 left-0 
                    w-full h-full 
                    bg-black/50 
                    backdrop-blur-lg`}
                                       initial={{opacity: 0}}
                                       animate={{opacity: 1}}
                                       exit={{opacity: 0}}
                >
                    <a href="#home">Александр Казаков</a>
                    <div className={"flex flex-col gap-4"}>
                        <a href={"#home"}>Главная</a>
                        <a href={"#skills"}>Навыки</a>
                        <a href={"#contacts"}>Контакты</a>
                    </div>
                </motion.div>)}
            </AnimatePresence>
            <div className={"hidden md:flex text-pink font-archivo font-bold justify-between py-10"}>
                <a href="#home">Александр Казаков</a>
                <div className={"flex gap-4"}>
                    <a href={"#home"}>Главная</a>
                    <a href={"#skills"}>Навыки</a>
                    <a href={"#contacts"}>Контакты</a>
                </div>
            </div>
        </>
    )
}

export default Header