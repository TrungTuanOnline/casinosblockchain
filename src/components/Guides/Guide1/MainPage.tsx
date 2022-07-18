import MetamaskCasinos from "../../../Assets/images/Metamask-Casinos.jpg"

const MainContent = () => {
    return (
        <div className="xl:w-8/12 w-full h-full ">
            <div className="w-full xl:w-fit h-fit xl:h-[435px] rounded-md border-4 border-white">
                <img src={MetamaskCasinos} className="w-full max-h-full object-cover " />
            </div>
            <div className="blog pl-24 pt-3 w-10/12">
                <p className="text-[#262847]">Updated: <span className="text-black font-bold text-base">June 30, 2022</span></p>
                <h1>Best Bitcoin Wallet for Online Gambling -2022 Top Picks</h1>
                <p>Looking to bet with Bitcoin? You need a secure wallet to keep your crypto. But how do you even choose one? We are here to guide you.</p>
                <p className="mt-2">In this article, <b>we’ll help you choose the best Bitcoin wallet for online gambling</b> – whether you’re a rookie or a seasoned gambler. Read on to learn about:</p>
                <ul>
                    <li>
                        What <b>types of Bitcoin wallets</b> are there?
                    </li>
                    <li>
                        The <b>features</b> to look for in a BTC wallet
                    </li>
                    <li>
                        How to <b>get started</b> with a Bitcoin wallet?
                    </li>
                    <li>
                        Our top <b>picks of 2022</b> (including advanced and beginner-friendly options)
                    </li>
                </ul>
                <p className="mt-2">
                    let's jump right in:
                </p>
                <h2 >
                    Best Bitcoin Gambling Wallet: Quick Picks
                </h2>
                <p >
                    In a time crunch? We won’t keep you waiting. These are the <b>top gamblers’ wallet options</b> for 2022:
                </p>
                <p className="mt-2">
                    <b>Best Overall: </b>
                </p>
            </div>
        </div>
    )
}

const RightNavBar = () => {
    return (
        <div className="w-3/12 h-[300px] xl:block hidden">

        </div>
    )
}

const MainPage = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-full h-32 bg-black" />
            <div className=" flex h-full w-full xl:w-11/12 justify-center mt-[-5rem]">
                <MainContent />
                <RightNavBar />
            </div>
        </div>
    )
}

export default MainPage;