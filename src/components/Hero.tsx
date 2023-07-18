import Lottie from "lottie-react";
import HeroAnimationData from "../animations/HeroAnimationData.json"

const Hero = () => {
    return(
        <div className={"hero py-5"}>
            <div className={"flex flex-col gap-y-5 mx-auto border-b-2 border-pink pb-5"}>
                <h1 className={"font-wix text-pink font-extrabold text-5xl"}>ВПЕРЕД!</h1>
                <p className={"font-archivo text-pink text-lg text-center font-bold"}>
                    Погрузитесь в мир креативного разработчика ReactJS, который оживит ваши проекты своими навыками.
                </p>
            </div>
            <Lottie
                className={"h-[16rem] md:h-[32rem]"}
                animationData={HeroAnimationData}
            />
        </div>
    )
}

export default Hero