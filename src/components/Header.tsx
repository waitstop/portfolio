

const Header = () => {
    return(
        <div className={"flex flex-col justify-between py-5 text-pink font-archivo font-bold gap-4"}>
            <a href="#home">Александр Казаков</a>
            <div className={"flex flex-col gap-4"}>
                <a href={"#home"}>Главная</a>
                <a href={"#skills"}>Навыки</a>
                <a href={"#contacts"}>Контакты</a>
            </div>
        </div>
    )
}

export default Header