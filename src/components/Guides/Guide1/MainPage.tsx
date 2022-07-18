import MetamaskCasinos from "../../../Assets/images/Metamask-Casinos.jpg"
import backgroundImg from "../../../Assets/images/Header.svg"

import { ISiteRankBlogCardObj } from "../../../Interfaces"
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";

const MainContent = () => {
    const dummyInfos: Array<ISiteRankBlogCardObj> = [
        {
            rank: 1,
            name: "BC.Game Casino",
            link: "https://bc.game",
            bonus: "5B",
            features: ["Low House Edge", "Original Bonuses", "test3"]
        },
        {
            rank: 2,
            name: "second",
            link: "https://stake.com/registration",
            bonus: "$5,000",
            features: ["Weekly Giveaways", "Stellar Sportsbook"]
        },
        {
            rank: 3,
            name: "third",
            link: "https://www.cloudbet.com/en/landing/100-free-spins/casinosblockchain/?af_token=aa938b8c991e47071094b255abd00cfd",
            bonus: "5B",
            features: ["Great Rewards", "Nice Payment Limits", "test4"]
        }
    ];
    return (
        <div className="xl:w-8/12 w-full h-full ">
            <div className="w-full xl:w-fit h-fit xl:h-[435px] rounded-md border-4 border-white">
                <img src={MetamaskCasinos} className="w-full max-h-full object-cover " />
            </div>
            <div className="blog pl-24 pt-3 pb-16 w-10/12">
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
                    <b>eBst Overall: </b><a href="https://blockstream.com/" target="_blank" className="text-blue-500">Blockstream</a>
                </p>
                <p className="mt-2">
                    <b>Best for Beginners: </b><a href="https://blockstream.com/" target="_blank" className="text-blue-500">Blockstream</a>
                </p>
                <p className="mt-2">
                    <b>Best for Privacy: </b><a href="https://electrum.org/#home" target="_blank" className="text-blue-500">Electrum</a>
                </p>
                <p className="mt-2">
                    <b>Best for Mobile: </b><a href="https://brd.com" target="_blank" className="text-blue-500">BRD</a>
                </p>
                <p className="mt-2">
                    All of these wallets are safe, user-friendly, and allow betting. And where do you go with your Bitcoin gambling wallet? Here are our favorite crypto casinos to spend your BTC:
                </p>
                <div className="mt-4">
                    {dummyInfos.length > 0 &&
                        dummyInfos.map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
                            return (
                                <SiteRankBlogTable
                                    key={index}
                                    siteIndex={index}
                                    summaryData={summaryInfo}
                                />
                            )
                        })
                    }
                </div>
                <h2 className="mt-8">How to Choose the Best Gambler's Wallet?</h2>
                <p>
                    Now that we had a quick look at our favorite BTC wallets for gambling, we can talk about <b>why they made the list</b>. What should you look for when choosing a Bitcoin gambling wallet? How did we make our picks?
                </p>
                <p className="my-4">Let’s break it down in more detail:</p>
                <h3>What is a Bitcoin Wallet?</h3>
                <h4>First things first - what even is a Bitcoin wallet?</h4>
                <div className="w-full h-[220px] pt-[48px] px-[56px] pb-[64px] bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                    <p className="uppercase text-sm text-white opacity-50">In the most basic terms</p>
                    <h2 className="text-white">
                        A Bitcoin wallet is a digital storage space for your Bitcoin
                    </h2>
                </div>
                <p>It’s like your bank account, where you can keep, receive, and send your Bitcoin.</p>
                <p className="mt-2">But <b>unlike a bank account, a Bitcoin wallet can be decentralized</b> – meaning there is no central authority or middleman controlling your Bitcoin. Even when a central authority (like a Coinbase gambling wallet,) there are fewer restrictions – but also fewer safety measures.</p>
            </div>
        </div>
    )
}

const RightNavBar = () => {
    return (
        <div className="w-[22%] h-fit xl:block hidden bg-white rounded-md sticky top-5">
            <div className="text-sm h-fit w-full p-2 ">
                <ul className="list-none w-full">
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                            Best BitCoin Gambling Wallet: Quick Picks
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                            How to Choose the Best Wallet?
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                            What is a Bitcoin Wallet?
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                            What Makes a Good Wallet?
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                            Best Bitcoin Gambling Wallets
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                            Best for Beginners: Blockstream
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                            Best for Privacy: Electrum
                        </li>
                    </a>
                    <a className="active:text-[#3e47e0] text-[#80869e] hover:text-[#3e47e0] no-underline cursor-pointer">
                        <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                            Best for Mobile: BRD
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

const MainPage = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-full h-32 bg-black" />
            <div className=" flex h-full w-full xl:w-11/12 gap-6 justify-center xl:mt-[-5rem]">
                <MainContent />
                <RightNavBar />
            </div>
        </div>
    )
}

export default MainPage;