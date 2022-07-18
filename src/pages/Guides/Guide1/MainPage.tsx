import MetamaskCasinos from "../../../Assets/images/Metamask-Casinos.jpg"

const MainContent = () => {
    return (
        <div className="w-full h-full">
            <div className="w-[calc(100%-300px)] h-full" style={{ backgroundImage: `url(${MetamaskCasinos})` }} />
        </div>
    )
}

const RightNavBar = () => {
    return (
        <div>

        </div>
    )
}

const MainPage = () => {
    return (
        <div className="h-full w-full">
            <div className="w-full h-32 bg-black" />
            <div className="px-4 flex h-full">
                <MainContent />
                <RightNavBar />
            </div>
        </div>
    )
}

export default MainPage;