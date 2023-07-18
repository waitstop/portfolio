import {useEffect, useState} from "react";
import {List, XCircle} from "@phosphor-icons/react";


const Header = () => {
    const [state, setState] = useState(false)
    useEffect(()=>{
        if (state) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "initial"
    }, [state])
    return(
        <>
            <button
                className={"text-orange-light text-4xl absolute right-5 top-5 z-50"}
                onClick={()=>{setState(prevState => !prevState)}}
            >
                {state ? <XCircle/>:<List/>}
            </button>
            <div className={
                `
                    flex justify-center flex-col gap-4
                    py-5 
                    text-pink 
                    font-archivo 
                    font-bold 
                    ${state?"":"hidden"}
                    z-40
                    fixed 
                    top-0 left-0 
                    w-full h-full 
                    bg-black/50 
                    backdrop-blur-lg
                `
            }>
                <a href="#home">Александр Казаков</a>
                <div className={"flex flex-col gap-4"}>
                    <a href={"#home"}>Главная</a>
                    <a href={"#skills"}>Навыки</a>
                    <a href={"#contacts"}>Контакты</a>
                </div>
            </div>
        </>
    )
}

export default Header