
import {Player} from "@lottiefiles/react-lottie-player";

const Hero = () => {

    return(
        <div className={"hero py-5"}>
            <div className={"flex flex-col gap-y-5 mx-auto border-b-2 border-pink pb-5"}>
                <h1 className={"font-wix text-pink font-extrabold text-5xl"}>ВПЕРЕД!</h1>
                <p className={"font-archivo text-pink text-lg text-center font-bold"}>
                    Погрузитесь в мир креативного разработчика ReactJS, который оживит ваши проекты своими навыками.
                </p>
            </div>
            <Player
                className={"h-[32rem]"}
                autoplay
                loop
                src={"https://lottie.host/7c497356-2851-4892-a114-6af3c3fcf163/hOsd2FV1ma.json"}
                // TODO: настроить повтор анимации
            />
        </div>
    )
}

export default Hero