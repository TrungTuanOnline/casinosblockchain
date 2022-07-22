import MetamaskCasinos from "../../../Assets/images/Metamask-Casinos.jpg"
import backgroundImg from "../../../Assets/images/Header.svg"
import giftImg from "../../../Assets/images/gift.png";
import logoImg from "../../../Assets/images/logos/bc-game.png";

import { ISiteRankBlogCardObj, IReadMoreDataObj } from "../../../Interfaces"
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";
import React, { useEffect } from "react";
import { Button, Fab } from "@mui/material"
import { KeyboardArrowRight, NavigateBefore, NavigateNext } from "@mui/icons-material"

import ReadMoreCard from "../../Card/ReadMoreCard";

import ReadMoreImg1 from "../../../Assets/images/ReadMore/1.jpg"
import ReadMoreImg2 from "../../../Assets/images/ReadMore/2.jpg"
import ReadMoreImg3 from "../../../Assets/images/ReadMore/3.jpg"
import ReadMoreImg4 from "../../../Assets/images/ReadMore/4.svg"
import ReadMoreImg5 from "../../../Assets/images/ReadMore/5.jpg"
import ReadMoreImg6 from "../../../Assets/images/ReadMore/6.jpg"
import ReadMoreImg7 from "../../../Assets/images/ReadMore/7.jpg"
import ReadMoreImg8 from "../../../Assets/images/ReadMore/8.jpg"
import ReadMoreImg9 from "../../../Assets/images/ReadMore/9.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


interface IProps {
    siteIndex: number,
    summaryData: ISiteRankBlogCardObj
}



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
        name: "Stake Casino",
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

const ReadMoreData: Array<IReadMoreDataObj> = [
    {
        id: 1,
        image: ReadMoreImg1,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal? Everything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 2,
        image: ReadMoreImg2,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 3,
        image: ReadMoreImg3,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 4,
        image: ReadMoreImg4,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 5,
        image: ReadMoreImg5,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 6,
        image: ReadMoreImg6,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 7,
        image: ReadMoreImg7,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 8,
        image: ReadMoreImg8,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    },
    {
        id: 9,
        image: ReadMoreImg9,
        date: "July 18, 2022",
        title: "Is Crypto Gambling Legal?\nEverything You Need to Know in the US, Canada, UK, and Beyond",
        content: "Crypto gambling is a new and exciting way to bet in 2022. However, there are no specific...",
        link: "/is-crypto-gambling-legal"
    }
]

const MainContent = () => {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("div.container ul a");
        window.onscroll = () => {
            let current: any;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
        }
    }, [])

    return (
        <div className="w-full flex gap-6 justify-center">
            <div className="xl:w-8/12 w-full h-full ">
                <div className="w-full xl:w-fit h-fit xl:h-[435px] rounded-md border-4 border-white">
                    <img alt="MainPageImg" src={MetamaskCasinos} className="w-full max-h-full object-cover " />
                </div>
                <div className="blog pl-24 pt-3 pb-16 w-10/12">
                    <p className="text-[#262847]">Updated: <span className="text-black font-bold text-base">June 30, 2022</span></p>
                    <h1>Best Bitcoin Wallet for Online Gambling -2022 Top Picks</h1>
                    <p>Looking to bet with Bitcoin? You need a secure wallet to keep your crypto. But how do you even choose one? We are here to guide you.</p>
                    <p className="mt-2">In this article, <b>we’ll help you choose the best Bitcoin wallet for online gambling</b> – whether you’re a rookie or a seasoned gambler. Read on to learn about:</p>
                    <ul className="pl-8">
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
                    <section id="quick-picks">
                        <h2>
                            Best Bitcoin Gambling Wallet: Quick Picks
                        </h2>
                        <p >
                            In a time crunch? We won’t keep you waiting. These are the <b>top gamblers’ wallet options</b> for 2022:
                        </p>
                        <p className="mt-2">
                            <b>eBst Overall: </b><a href="https://blockstream.com/" target="_blank" className="text-blue-500" rel="noreferrer">Blockstream</a>
                        </p>
                        <p className="mt-2">
                            <b>Best for Beginners: </b><a href="https://blockstream.com/" target="_blank" rel="noreferrer" className="text-blue-500">Blockstream</a>
                        </p>
                        <p className="mt-2">
                            <b>Best for Privacy: </b><a href="https://electrum.org/#home" target="_blank" rel="noreferrer" className="text-blue-500">Electrum</a>
                        </p>
                        <p className="mt-2">
                            <b>Best for Mobile: </b><a href="https://brd.com" target="_blank" rel="noreferrer" className="text-blue-500">BRD</a>
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
                    </section>
                    <section id="How-to-Choose">
                        <h2 className="mt-8" >How to Choose the Best Gambler's Wallet?</h2>
                        <p>
                            Now that we had a quick look at our favorite BTC wallets for gambling, we can talk about <b>why they made the list</b>. What should you look for when choosing a Bitcoin gambling wallet? How did we make our picks?
                        </p>
                        <p className="my-4">Let’s break it down in more detail:</p>
                        <section id="What is a Bitcoin-Wallet" />
                        <h3 >What is a Bitcoin Wallet?</h3>
                        <h4>First things first - what even is a Bitcoin wallet?</h4>
                        <div className="w-full h-[220px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="uppercase text-xs  md:text-base text-white opacity-50">In the most basic terms</p>
                            <h2 className="text-white text-lg md:text-2xl">
                                A Bitcoin wallet is a digital storage space for your Bitcoin
                            </h2>
                        </div>
                        <p className="mt-2">It’s like your bank account, where you can keep, receive, and send your Bitcoin.</p>
                        <p className="mt-2">But <b>unlike a bank account, a Bitcoin wallet can be decentralized</b> – meaning there is no central authority or middleman controlling your Bitcoin. Even when a central authority (like a Coinbase gambling wallet,) there are fewer restrictions – but also fewer safety measures.</p>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#quick-picks" className="quick-picks hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best BitCoin Gambling Wallet: Quick Picks
                            </li>
                        </a>
                        <a href="#How-to-Choose" className="How-to-Choose hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                How to Choose the Best Wallet?
                            </li>
                        </a>
                        <a href="#What-Is-Bitcoin-Wallet" className="What-Is-Bitcoin-Wallet hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                What is a Bitcoin Wallet?
                            </li>
                        </a>
                        <a href="#what-makes-a-good-wallet" className="what-makes-a-good-wallet hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                What Makes a Good Wallet?
                            </li>
                        </a>
                        <a href="#best-btc-wallets" className="best-btc-wallets hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best Bitcoin Gambling Wallets
                            </li>
                        </a>
                        <a href="#Best-for-Beginners" className="Best-for-Beginners hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Best for Beginners: Blockstream
                            </li>
                        </a>
                        <a href="#Best-for-Beginners" className="Best-for-Beginners hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Best for Privacy: Electrum
                            </li>
                        </a>
                        <a href="#Best-for-Beginners" className="Best-for-Beginners hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Best for Mobile: BRD
                            </li>
                        </a>
                    </ul>
                    <p className="font-bold my-8">Popular Casinos</p>
                    {dummyInfos.length > 0 &&
                        dummyInfos.map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
                            return (
                                <NavBarMiniTable
                                    key={index}
                                    siteIndex={index}
                                    summaryData={summaryInfo}
                                />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}


const NavBarMiniTable = (props: IProps) => {
    const summaryData = props.summaryData;
    return (
        <React.Fragment>
            <a href={summaryData.link} target="_blank" rel="noreferrer">
                <div className="flex flex-row justify-between border border-gray-300 p-3 bg-white shadow-xl hover:bg-gray-200 cursor-pointer">
                    <div className="w-full flex flex-row justify-start gap-x-4" >
                        <div className="flex w-16 items-center justify-center">
                            <img className=" rounded-full" src={logoImg} alt="MainPageImg" />
                        </div>
                        <div className="flex flex-col justify-center gap-y-0.5 w-full">
                            <span className="text-base font-bold">{summaryData.name}</span>
                            <div className='flex'>
                                {summaryData.bonus &&
                                    <Button
                                        className="w-20 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                                        endIcon={<KeyboardArrowRight className="text-black text-xs rounded-full bg-orange-400" />}
                                    >
                                        <img className="h-3" src={giftImg} alt="MainPageImg" />
                                        <span className="text-[10px] text-black">{summaryData.bonus}</span>
                                    </Button>
                                }
                            </div>

                        </div>
                    </div>

                    <div className="w-48 flex items-center justify-center">
                        <div className='block'>
                            <Button
                                className="text-white text-[10px] h-8"
                                variant="contained"
                                size='small'
                                color="primary"
                                href="/"
                                target="_BLANK"
                            >
                                Play
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

const ReadMoreCards = () => {
    return (
        <div className="w-full flex justify-center ">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    prevEl: '.Swiper-prev',
                    nextEl: '.Swiper-next'
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
            >
                {
                    ReadMoreData.map(((item: IReadMoreDataObj, index: number) => (
                        <SwiperSlide key={index}>
                            <ReadMoreCard item={item} index={index} />
                        </SwiperSlide>
                    )))
                }
                <div className="Swiper-prev">
                    <Fab className="bg-[#272822] text-white" aria-label="prev" color="default" size="small">
                        <NavigateBefore />
                    </Fab>
                </div>
                <div className="Swiper-next">
                    <Fab className="bg-[#272822] text-white" aria-label="next" color="default" size="small">
                        <NavigateNext />
                    </Fab>
                </div>
            </Swiper>
        </div >
    )
}


const MainPage1 = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-full h-32 bg-black" />
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center xl:mt-[-5rem]">
                <MainContent />
                <div className="p-10 w-full flex flex-col justify-center">
                    <h1>Latest News</h1>
                    <ReadMoreCards />
                </div>
            </div>
        </div>
    )
}

export default MainPage1;