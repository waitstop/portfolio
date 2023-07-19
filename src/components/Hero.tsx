import Lottie from "lottie-react";
import HeroAnimationData from "../animations/HeroAnimationData.json"

const Hero = () => {
    return(
        <div className={"hero py-5"}>
            <div className={"flex flex-col gap-y-5 mx-auto border-b-2 border-pink pb-5 lg:flex-row lg:gap-x-10 lg:justify-between"}>
                <h1 className={"font-wix text-pink font-extrabold text-5xl lg:text-8xl"}>ВПЕРЕД!</h1>
                <p className={"font-archivo text-pink text-lg text-center font-bold lg:text-2xl lg:text-left"}>
                    Погрузитесь в мир креативного разработчика ReactJS, который оживит ваши проекты своими навыками.
                </p>
            </div>
            <Lottie
                className={"h-[16rem] md:h-[32rem] lg:h-[38rem] lg:my-14"}
                animationData={HeroAnimationData}
            />
        </div>
    )
}

export default Hero