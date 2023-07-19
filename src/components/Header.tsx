import {useEffect, useState} from "react";
import {List, XCircle} from "@phosphor-icons/react";
import {AnimatePresence, motion} from "framer-motion";
import {animateScroll as scroll, scroller} from "react-scroll";


const Header = () => {
    const [state, setState] = useState(false)
    useEffect(() => {
        if (state) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "initial"
    }, [state])

    function handleLinkClick(to?: string){
        setState(false);
        if(!to) {
            scroll.scrollToTop()
            return
        }
        scroller.scrollTo(to, {smooth: true, delay: 100, offset: -50})
    }

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
                    <span className={"cursor-pointer"} onClick={()=>handleLinkClick()}>Александр Казаков</span>
                    <div className={"flex flex-col gap-4"}>
                        <span className={"cursor-pointer"} onClick={()=>handleLinkClick()}>Главная</span>
                        <span className={"cursor-pointer"} onClick={()=>handleLinkClick('skills')}>Навыки</span>
                        <span className={"cursor-pointer"} onClick={()=>handleLinkClick('contacts')}>Контакты</span>
                    </div>
                </motion.div>)}
            </AnimatePresence>
            <div className={"hidden md:flex text-pink font-archivo font-bold justify-between py-10"}>
                <span onClick={()=>handleLinkClick()} className={"transition-opacity hover:opacity-50 cursor-pointer"}>Александр Казаков</span>
                <div className={"flex gap-4"}>
                    <span onClick={()=>handleLinkClick()} className={"hover:opacity-50 transition-opacity cursor-pointer"}>Главная</span>
                    <span onClick={()=>handleLinkClick('skills')} className={"hover:opacity-50 transition-opacity cursor-pointer"}>Навыки</span>
                    <span onClick={()=>handleLinkClick('contacts')} className={"hover:opacity-50 transition-opacity cursor-pointer"}>Контакты</span>
                </div>
            </div>
        </>
    )
}

export default Header