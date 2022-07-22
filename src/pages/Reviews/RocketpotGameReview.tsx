import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Box, Fab } from "@mui/material";
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { NavigateBefore, NavigateNext } from "@mui/icons-material"

import TopBar from "../../components/Common/Topbar";
import Footer from "../../components/Common/Footer";
import {siteDatas} from "../../Interfaces/SiteDatas";

// crypto images
import bnbCryptoImg from "../../Assets/images/cryptocurrency/bnb.png";
import bitcoinCryptoImg from "../../Assets/images/cryptocurrency/bitcoin.png";
import bitcoinCashCryptoImg from "../../Assets/images/cryptocurrency/bitcoin-cash.png";
import cardanoCryptoImg from "../../Assets/images/cryptocurrency/cardano.png";
import dogecoinCryptoImg from "../../Assets/images/cryptocurrency/dogecoin.png";
import eosCryptoImg from "../../Assets/images/cryptocurrency/eos.png";
import etherCryptoImg from "../../Assets/images/cryptocurrency/ether.png";
import litecoinCryptoImg from "../../Assets/images/cryptocurrency/litecoin.png";
import neoCryptoImg from "../../Assets/images/cryptocurrency/neo.png";
import rippleCryptoImg from "../../Assets/images/cryptocurrency/ripple.png";
import tetherCryptoImg from "../../Assets/images/cryptocurrency/tether.png";
import tronCryptoImg from "../../Assets/images/cryptocurrency/tron.png";

// game images
import baccaratGameImg from "../../Assets/images/games/baccarat.png";
import blackjackGameImg from "../../Assets/images/games/blackjack.png";
import diceGameImg from "../../Assets/images/games/dice.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";
import kenoGameImg from "../../Assets/images/games/keno.png";
import liveCasinoGameImg from "../../Assets/images/games/live-casino.png";
import lotteryGameImg from "../../Assets/images/games/lottery.png";
import plinkoGameImg from "../../Assets/images/games/plinko.png";
import pokerGameImg from "../../Assets/images/games/poker.png";
import sicBoGameImg from "../../Assets/images/games/sic-bo.png";
import rouletteGameImg from "../../Assets/images/games/roulette.png";
import slotsGameImg from "../../Assets/images/games/slots.png";
import sportsBettingGameImg from "../../Assets/images/games/sports-betting.png";

// review images
import reviewImg1 from "../../Assets/images/reviews/3-rocketpot-game/1-rocketpot-review.png";
import reviewImg2 from "../../Assets/images/reviews/3-rocketpot-game/2-rocketpot-review.png";
import reviewImg3 from "../../Assets/images/reviews/3-rocketpot-game/3-rocketpot-review.png";
import reviewImg4 from "../../Assets/images/reviews/3-rocketpot-game/4-rocketpot-review.png";
import reviewImg5 from "../../Assets/images/reviews/3-rocketpot-game/5-rocketpot-review.png";

// country flag
import { GB, DE, JP, ES } from 'country-flag-icons/react/1x1';

const StyledRating = styled(Rating)({
});

const RatingFilledDiv = () => {
    return (
        <div className="px-1">
            <div className="w-16 h-1 bg-green-400">

            </div>
        </div>
    )
}

const RatingEmptydDiv = () => {
    return (
        <div className="px-1">
            <div className="w-16 h-1 bg-gray-400">

            </div>
        </div>
    )
}

const cryptocurrenciesObj: Array<any> = [
    {
        img: bnbCryptoImg,
        name: "Binance Coin"
    },
    {
        img: bitcoinCryptoImg,
        name: "Bitcoin"
    },
    {
        img: bitcoinCashCryptoImg,
        name: "Bitcoin Cash"
    },
    {
        img: cardanoCryptoImg,
        name: "Cardano"
    },
    {
        img: dogecoinCryptoImg,
        name: "Dogecoin"
    },
    {
        img: eosCryptoImg,
        name: "EOS"
    },
    {
        img: etherCryptoImg,
        name: "Ethereum"
    },
    {
        img: litecoinCryptoImg,
        name: "Litecoin"
    },
    {
        img: neoCryptoImg,
        name: "Neo"
    },
    {
        img: rippleCryptoImg,
        name: "Ripple"
    },
    {
        img: tetherCryptoImg,
        name: "Tether"
    },
    {
        img: tronCryptoImg,
        name: "Tron"
    }
];

const gamesObj: Array<any> = [
    {
        img: baccaratGameImg,
        name: "Baccarat"
    },
    {
        img: blackjackGameImg,
        name: "Blackjack"
    },
    {
        img: diceGameImg,
        name: "Dice"
    },
    {
        img: jackpotGameImg,
        name: "Jackpots"
    },
    {
        img: kenoGameImg,
        name: "Keno"
    },
    {
        img: liveCasinoGameImg,
        name: "Live Casino"
    },
    {
        img: lotteryGameImg,
        name: "Lottery"
    },
    {
        img: plinkoGameImg,
        name: "Plinko"
    },
    {
        img: pokerGameImg,
        name: "Poker"
    },
    {
        img: rouletteGameImg,
        name: "Roulette"
    },
    {
        img: sicBoGameImg,
        name: "Sic Bo"
    },
    {
        img: slotsGameImg,
        name: "Slots"
    },
    {
        img: sportsBettingGameImg,
        name: "Sports Betting"
    }
]

const RocketpotGameReview = () => {
    const siteData = siteDatas[2];

    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);
    const [openFAQ4, setOpenFAQ4] = useState(false);

    useEffect(() => {
        const partSections = document.getElementsByClassName("part-section");
        const rightBarBtns = document.getElementsByClassName("rightbarBtn");
        window.onscroll = () => {
            let current: any;

            for (let i = 0; i < partSections.length; i++) {
                let offset = partSections[i].getBoundingClientRect();
                
                if (offset.top <= 100 && offset.bottom > 100) {
                    current = partSections[i].getAttribute("id");
                }
            }
            for (let i = 0; i < rightBarBtns.length; i++) {
                rightBarBtns[i].classList.remove("text-blue-600");
                rightBarBtns[i].classList.add("text-black");
                if (rightBarBtns[i].classList.contains(current)) {
                    rightBarBtns[i].classList.remove("text-black");
                    rightBarBtns[i].classList.add("text-blue-600");
                }
            }
        }
    }, []);

    return (
        <Box className="bg-gray-100 flex flex-col items-center">
            <TopBar/>
            <div className="w-11/12 flex flex-col py-10 gap-y-5">
                {/* header */}
                <div className="bg-white rounded-xl flex flex-col xl:flex-row justify-between p-5">
                    <div className="flex flex-row justify-start xl:justify-between">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-16 sm:w-20 md:w-24 xl:w-28 rounded-full"
                                src={siteData.logo}
                                alt="logoImg">
                            </img>
                        </div>
                        <div className="flex flex-col justify-between py-2 ml-5">
                            <div className="text-2xl xl:text-3xl font-bold">
                                {siteData.name}
                            </div>
                            <div className="text-2xl xl:text-3xl font-bold">
                                Review
                            </div>
                            <div className="flex flex-col xl:flex-row gap--1 xl:gap-x-5">
                                <div className="flex items-center">
                                    Over Rating
                                </div>
                                <div className="flex flex-row justify-between items-center gap-x-3">
                                    <div className="flex items-center">
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.total)} precision={0.1} className=""/>
                                    </div>
                                    <div className="">
                                        {siteData.overview.rating.total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-end gap-x-5">
                        <div>
                            <Button
                                className="text-blue border border-inherit border-solid h-10 text-xs xl:text-base"
                                href={"https://" + siteData.link}
                                endIcon={<div className="px-2 rounded-full bg-orange-400 text-white  text-xs xl:text-base">{siteData.bonus}</div>}
                            >
                                Claim Bonus
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="text-white h-10  text-xs xl:text-base"
                                variant="contained"
                                color="primary"
                                startIcon={<OpenInNewIcon/>}
                                href={"https://" + siteData.link}
                                target="_BLANK"
                            >
                                VISIT WEBSITE
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-5 relative">
                    <div className="flex flex-col">
                        {/* Overview */}
                        <div id="overview-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10">
                            <div className="flex flex-row gap-x-5">
                                <div className="flex justify-center items-center">
                                    <InfoOutlinedIcon/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        {siteData.name} Overview
                                    </div>
                                    <div className="text-base">
                                        It's all about that crypto!
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col">
                                    <div className="text-base">
                                        {siteData.overview.summary}
                                    </div>
                                    {/* accepted cryptocurrencies */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Accepted Cryptocurrencies
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-5">
                                            { 
                                                cryptocurrenciesObj.map((data: any, index: number) => {
                                                    return (
                                                        <div key={index} className="flex flex-row gap-2 justify-center items-center bg-gray-300 px-3 py-1 rounded-full">
                                                            <div>
                                                                <img 
                                                                    src={data.img} 
                                                                    alt="CoinImg"
                                                                    className="w-5 h-5">
                                                                </img>
                                                            </div>
                                                            <div className="text-base">
                                                                {data.name}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* available games */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Available Games
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            { 
                                                gamesObj.map((data: any, index: number) => {
                                                    return (
                                                        <div key={index} className="flex flex-col gap-2 justify-center items-center w-24 py-1 border">
                                                            <div>
                                                                <img 
                                                                    src={data.img} 
                                                                    alt="CoinImg"
                                                                    className="h-10">
                                                                </img>
                                                            </div>
                                                            <div className="text-center">
                                                                {data.name}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* supported languages */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Supported Languages
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <GB className="h-5 rounded-full" />
                                                <div className="text-base">English</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <DE className="h-5 rounded-full" />
                                                <div className="text-base">Germany</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <JP className="h-5 rounded-full" />
                                                <div className="text-base">Japanese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <ES className="h-5 rounded-full" />
                                                <div className="text-base">Spanish</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* pogs and cons */}
                                    <div className="flex flex-col mt-10">
                                        <div className="text-xl font-bold">
                                            Pros & Cons
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-5">
                                            <div className="flex flex-col xl:flex-row gap-3">
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Easy registration</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Large variety of games</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Sportsbook available</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Emphasys on privacy</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Functional website</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Daily cashbacks</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Long list of game providers</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Crypto purchases available from website</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No fiat payments</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">Withdrawal fees</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">x3 wagering requirement for ALL deposits</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center w-min order-first xl:order-last gap-y-5">
                                    <div className="flex items-center justify-center relative">
                                        <CircularProgress 
                                            size={100} 
                                            thickness={2} 
                                            sx={{color: 'lightgray'}} 
                                            variant="determinate" 
                                            value={100} 
                                            className="absolute"
                                        />
                                        <CircularProgress 
                                            size={100} 
                                            thickness={2} 
                                            sx={Number(siteData.overview.rating.total) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                            variant="determinate" 
                                            value={Number(siteData.overview.rating.total) * 20} 
                                        />
                                        <div className="absolute flex items-center justify-center inset-0 text-3xl">{siteData.overview.rating.total}</div>
                                    </div>
                                    <div className="text-3xl flex items-center justify-center">
                                        Overall Rating
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        { Number(siteData.overview.rating.bonus) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Bonuses
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.bonus}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.bonus)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.lookAndFeel) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Look & Feel
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.lookAndFeel}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.lookAndFeel)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.LicenceAndSafety) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Licencing & Safety
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.LicenceAndSafety}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.LicenceAndSafety)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.gameSelection) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Game Selection
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.gameSelection}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.gameSelection)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.paymentOption) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Payment Options
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.paymentOption}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.paymentOption)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.customerSupport) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Customer Support
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.customerSupport}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.customerSupport)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                        { Number(siteData.overview.rating.customerReview) > 0 &&
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex flex-row items-center justify-between px-1">
                                                    <div className="text-base">
                                                        Customer Reviews
                                                    </div>
                                                    <div className="text-base w-6 flex justify-end">
                                                        {siteData.overview.rating.customerReview}/5
                                                    </div>
                                                </div>
                                                <StyledRating
                                                    readOnly
                                                    name="customized-color"
                                                    defaultValue={Number(siteData.overview.rating.customerReview)}
                                                    precision={0.1}
                                                    icon={<RatingFilledDiv />}
                                                    emptyIcon={<RatingEmptydDiv />}
                                                />
                                            </div>
                                        }
                                    </div>
                                    {/* right overview  2*/}
                                    <div className="flex flex-col border mt-10">
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Website
                                            </div>
                                            <Button
                                                className="text-blue text-base lowercase text-end"
                                                endIcon={<OpenInNewIcon className="w-4"/>}
                                                href={"https://" + siteData.link}
                                                target="_BLANK"
                                            >
                                                {siteData.link}
                                            </Button>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                Established
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.established ? siteData.overview.established : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Licence
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.licence ? siteData.overview.licence : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                Bonus
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.bonus ? siteData.overview.bonus : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Wagering Requirement
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.wageringRequrement ? siteData.overview.wageringRequrement : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-white px-3 py-1">
                                            <div className="text-base">
                                                No Deposit Bonus
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.noDepositFaucet ? siteData.overview.noDepositFaucet : "-"}
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between bg-blue-100 px-3 py-1">
                                            <div className="text-base">
                                                Live Chat
                                            </div>
                                            <div className="text-base text-end">
                                                {siteData.overview.liveChat}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bonus */}
                        <div id="bonus-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <CardGiftcardOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Bonuses
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Take off with a stellar welcome bonus!
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.bonus) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.bonus) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.bonus}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        At Rocketpot, you're entitled to a straightforward Bitcoin bonus that matches your first deposit with up to 1 BTC in bonus money.
                                    </div>
                                    <div>
                                        Here's how it works:
                                    </div>
                                    {/* timeline 1 */}
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Sign up at Rocketpot.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Choose Bitcoin as your selected currency.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Make your deposit and claim the 100% deposit bonus.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">4</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Get up to 1 BTC on top of your deposit.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Is Rocketpot's Bitcoin Welcome Bonus Worth It?
                                    </div>
                                    <div>
                                        Since not all Bitcoin casinos offer welcome bonuses, the mere existence of Rocketpot's offer is an advantage when compared with brands like Roobet that don't have them.
                                    </div>
                                    <div>
                                        But there's no rose without thorns, and there are a few catches with this promotion:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            It's only valid if you pick Bitcoin as your deposit method: while you can use other cryptocurrencies at Rocketpot, they're not eligible for the bonus.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black  mt-[11px]"></div>
                                        <div>
                                            Its 100x wagering requirement (requiring you to play through your bonus a total of 100 times) is considerably higher than similar offers.
                                        </div>
                                    </div>
                                    <div>
                                        Additionally, other Bitcoin welcome bonuses are more generous than Rocketpot's. True Flip, for instance, gives you 30 free spins for simply completing your signup process, with a very palatable wagering requirement of x1.
                                    </div>
                                    <div>
                                        Does that mean you should pick True Flip over Rocketpot exclusively because it gives you a better newcomer deal? We don't think so. Keep reading to find out why.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other Promotions - Rocketpot's Daily Cashback and Loyalty Rewards
                                    </div>
                                    <div>
                                        Rocketpot's daily cashback lets you win back <span className="font-bold">10% of your net losses</span> on a daily basis, as long as you played at least 30$ the previous day.
                                    </div>
                                    <div>
                                        It's perhaps not the most enticing offer, but it's solid and consistent and especially relevant if you play regularly.
                                    </div>
                                    <div>
                                        High rollers will also be pleased with the brand's VIP program, which rewards your loyalty with <span className="font-bold">unlockable chests that give guaranteed mBTC prizes:</span>
                                    </div>
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Every time you place a bet, you <span className="font-bold">collect experience points.</span>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Bets with bonus money only accumulate 1/3 of the experience points.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        When you gather enough experience points, you will <span className="font-bold">level up.</span>
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">4</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        You will unlock a chest with a <span className="font-bold">guaranteed mBTC prize</span> when you reach a new level.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">5</div>
                                                    </TimelineDot>
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        The rewards are random, <span className="font-bold">but the higher the level, the better</span> the potential rewards.
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        There is a fun, gamified component to leveling up: inside each chest, there's a "free spin" to a wheel of fortune. Spinning that wheel is what will unveil your final mBTC prize!
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">10% daily cashback</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fun and engaging VIP rewards</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">High wagering requirements</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Only available in BTC</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Claim Bonus
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Look and Feel */}
                        <div id="lookFeel-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <AdUnitsOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Look & Feel
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Simple Design, Some Navigation Flaws
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.lookAndFeel) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.lookAndFeel) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.lookAndFeel}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        Rocketpot has a clean and streamlined design without particular visual appeal.
                                    </div>
                                    <div>
                                        We don't necessarily find the website unattractive: we just don't think it's special, and that's ok. It doesn't have to be.
                                    </div>
                                    <div>
                                        The issue comes when design affects functionality. And, unfortunately, we have one complaint there:
                                    </div>
                                    <div>
                                        ❌ <span className="font-bold">The casino lobby navigation is somewhat confusing</span>, lacking the option to filter games by provider.
                                    </div>
                                    <div>
                                        Let's take the slots section for example:
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg1}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        You can see the slot thumbnails clearly. However, there is no way to filter by provider to find your favorite games - Arena of Gold by Microgaming appears alongside Aztec Magic by bgaming and Bonanza by Big Time Gaming.
                                    </div>
                                    <div>
                                        Since this isn't just a 'prettiness' issue, but a functionality problem, we took off a point for this section.
                                    </div>
                                    <div>
                                        If there's something that deserves extra praise, however, it is the sign-up process. You have to:
                                    </div>
                                    <div className="text-base">
                                        <Timeline position="right">
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">1</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Click sign up
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">2</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Insert your email
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot>
                                                        <div className="w-8 h-8 rounded-full bg-black text-center pt-1">3</div>
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ py: '24px', px: 2 }}>
                                                    <div>
                                                        Choose a user name and password
                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </div>
                                    <div>
                                        That's it! Rocketpot <span className="font-bold">doesn't request any personal information</span> apart from your email, and you can even use a suggested password and username combination if you wish.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Rocketpot's Mobile Experience
                                    </div>
                                    <div>
                                        Like most Bitcoin casinos these days, Rocketpot is fully optimized for smaller screens and an "on-the-go" experience.
                                    </div>
                                    <div>
                                        Rocketpot might not offer an app, but you don't need one: the mobile version of the website is responsive and easy to use on both iOS and Android devices.
                                    </div>
                                    <div className="w-[320px] xl:w-[500px] flex justify-center">
                                        <Swiper
                                            // slidesPerView={1}
                                            // spaceBetween={10}
                                            // navigation={{
                                            //     prevEl: '.Swiper-prev',
                                            //     nextEl: '.Swiper-next'
                                            // }}
                                            pagination={true}
                                            // breakpoints={{
                                            //     1024: {
                                            //         slidesPerView: 3,
                                            //         spaceBetween: 30,
                                            //     },
                                            //     640: {
                                            //         slidesPerView: 2,
                                            //         spaceBetween: 20,
                                            //     },
                                            // }}
                                            modules={[Pagination]}
                                        >
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-[320px] xl:w-[500px]">
                                                    <img 
                                                        className="w-[300px] xl:w-[480px]"
                                                        src={reviewImg2}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                                
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="flex justify-center items-center w-[320px] xl:w-[500px]">
                                                    <img 
                                                        className="w-[300px] xl:w-[480px]"
                                                        src={reviewImg3}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="flex justify-center items-center w-[320px] xl:w-[500px]">
                                                    <img 
                                                        className="w-[300px] xl:w-[480px]"
                                                        src={reviewImg4}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
                                            {/* <div className="Swiper-prev">
                                                <Fab className="bg-[#272822] text-white border border-red-400 border-solid" aria-label="prev" color="default" size="small">
                                                    <NavigateBefore />
                                                </Fab>
                                            </div>
                                            <div className="Swiper-next">
                                                <Fab className="bg-[#272822] text-white" aria-label="next" color="default" size="small">
                                                    <NavigateNext />
                                                </Fab>
                                            </div> */}
                                        </Swiper>
                                    </div >
















                                    <div>
                                        The bluish-grey and green color scheme that feels familiar, while the mascot is cute and friendly. Game thumbnails have a simple, yet visually pleasing style. The tone of voice is fun, too.
                                    </div>
                                    <div>
                                        Here are some of the best UX features BC.Game has to offfer:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Vibrant players' chat</span> on the right-hand side of the screen (participation is entirely optional, but it can be rewarding).
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Winners' feed and bet backlog</span> on the homepage for total transparency (you can hide your username for privacy).
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Fuss-free social media signup</span> with optional safety features available (more on that below).
                                        </div>
                                    </div>
                                    <div>
                                        In our experience, navigation was intuitive and hassle-free, both on the browser version and BC.Game's mobile app.
                                    </div>
                                    <div>
                                        There are, however, a few grammar mistakes and untranslated areas (in some languages) that could negatively influence your gameplay. This is an area where we'd like to see the brand improve.
                                    </div>
                                    <div>
                                        Additionally, we did experience slow loading times on more demanding games, namely Saviour Sword, but we were browsing with a VPN, which can reduce loading speed.
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg3}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg4}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        <img 
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg5}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Social features</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Mobile app</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Intuitive navigation</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Occasional language issues</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Game Selection */}
                        <div id="gameSelection-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <MobileFriendlyOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Game Selection
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Popular games, live tables, and 100% provably fair originals
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.gameSelection) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.gameSelection) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.gameSelection}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        We can't have a full BC.Game review without looking at the games, right? Well, we're happy to report that the <span className="font-bold">game portfolio is full of exciting opportunities.</span>
                                    </div>
                                    <div>
                                        From provably fair originals to big-name slots and live games, this online casino has it all. Let's break down the main game types:
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        BC Originals
                                    </div>
                                    <div>
                                        BC.Game has a selection of provably fair originals, including their popular roulette game.
                                    </div>
                                    <div>
                                        BC.Game's original games are exclusively provably fair, and include a solid selection of about 20 internally-developed games, including all the crowd-pleasing casino classics:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Slots
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Baccarat
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Dice
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Keno
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Crash
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Roulette
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Blackjack
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Plinko
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Poker
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Hi-Lo
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Wheel of Fortune
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Mainstream Providers
                                    </div>
                                    <div>
                                        The Madame Destiny slot by Pragmatic Play offers a truly enchanting experience.
                                    </div>
                                    <div>
                                        BC.Game also offers a selection of games by <span className="font-bold">popular providers like Pragmatic Play and Yggdrasil.</span>
                                    </div>
                                    <div>
                                        While their portfolio is growing exponentially, it's still nowhere as big as brands like Stake, which offer a larger variety of mainstream games alongside their provably fair titles.
                                    </div>
                                    <div>
                                        That said, BC.Game is still a newish casino, and while <span className="font-bold">we think they can improve their</span> offering, they've already come a long way.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Live Casino Games at BC.Game
                                    </div>
                                    <div>
                                        BC.Game boasts a stellar selection of live games, including your favorites from big-name providers.
                                    </div>
                                    <div>
                                        Who doesn't love a live game? <span className="font-bold">Hosted by live dealers</span> and featuring a range of exciting awards, they get you closer to an in-person experience than ever.
                                    </div>
                                    <div>
                                        BC.Game is continuously improving their live casino games offer. The current selection includes:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Traditional <span className="font-bold">blackjack and roulette tables</span> with real dealers
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The infamous live casino <span className="font-bold">game shows</span> from Evolution Gaming
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Classic <span className="font-bold">tables with a twist.</span> like Lightning Roulette
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Casino <span className="font-bold">poker tables</span>, baccarat, dice, and much more!
                                        </div>
                                    </div>
                                    <div>
                                        In total, there are more than <span className="font-bold">100 different crypto-friendly live tables</span> where you can put your skills to the test!
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        House Edge at BC.Game Originals
                                    </div>
                                    <div>
                                        Arguably one of the biggest perks we noticed during our BC.Game review - the <span className="font-bold">high RTP and low house edge.</span>
                                    </div>
                                    <div>
                                        Let's look at the numbers for some of BC's most popular games:
                                    </div>
                                    <div className="flex flex-col min-w-[320px] xl:min-w-[500px] border rounded-xl">
                                        <div className="flex flex-row text-center bg-violet-800 rounded-t-xl py-3">
                                            <div className="w-1/3 text-white">
                                                Game Type
                                            </div>
                                            <div className="w-1/3 text-white">
                                                RTP
                                            </div>
                                            <div className="w-1/3 text-white">
                                                House Edge
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center bg-gray-300 py-3">
                                            <div className="w-1/3">
                                                Blackjack
                                            </div>
                                            <div className="w-1/3">
                                                99.52%
                                            </div>
                                            <div className="w-1/3">
                                                0.48%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center py-3">
                                            <div className="w-1/3">
                                                Crash
                                            </div>
                                            <div className="w-1/3">
                                                99%
                                            </div>
                                            <div className="w-1/3">
                                                1%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center bg-gray-300 py-3">
                                            <div className="w-1/3">
                                                Dice
                                            </div>
                                            <div className="w-1/3">
                                                99%
                                            </div>
                                            <div className="w-1/3">
                                                1%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center py-3">
                                            <div className="w-1/3">
                                                Keno and Plinko
                                            </div>
                                            <div className="w-1/3">
                                                99%
                                            </div>
                                            <div className="w-1/3">
                                                1%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center bg-gray-300 py-3">
                                            <div className="w-1/3">
                                                Others
                                            </div>
                                            <div className="w-1/3">
                                                99%
                                            </div>
                                            <div className="w-1/3">
                                                1%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center py-3">
                                            <div className="w-1/3">
                                                Roulette
                                            </div>
                                            <div className="w-1/3">
                                                97.3%
                                            </div>
                                            <div className="w-1/3">
                                                2.7%
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-center bg-gray-300 py-3">
                                            <div className="w-1/3">
                                                Slots
                                            </div>
                                            <div className="w-1/3">
                                                97.51-99%
                                            </div>
                                            <div className="w-1/3">
                                                1-2.49%
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        BC.Game offers more value for money than most competitors, with <span className="font-bold">an extremely low 1% house edge</span> (sometimes even lower!) on most of its original games, including popular games like Crash.
                                    </div>
                                    <div>
                                        This is translated into high Return-to-Player percentages, giving you more bang for your buck in the long run.
                                    </div>
                                    <div>
                                        Do note that games from <span className="font-bold">mainstream providers will still have their regular payouts</span> since those are outside of BC.Games' hands.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Do BC.Game Strategies Work?
                                    </div>
                                    <div>
                                        Any seasoned casino player will tell you that there is <span className="font-bold">no such thing as a guaranteed win.</span>
                                    </div>
                                    <div>
                                        However, this doesn't stop people from trying to develop strategies that they think will give them an edge. These might give you the illusion of better odds. Ultimately, <span className="font-bold">the house always has an advantage</span>, and even the best players can have losing streaks.
                                    </div>
                                    <div>
                                        So, instead of focusing on betting strategies, <span className="font-bold">aim to optimize your bankroll management.</span> This will help you keep your losses to a minimum, and improve your winnings over the long term.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Very low house edge</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Provably fair games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">100+ live tables</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Attractive original games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Plenty of known providers</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Licensing & Safety */}
                        <div id="licensing-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <VerifiedOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Licensing & Safety
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Newly-acquired Curaçao license
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.LicenceAndSafety) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.LicenceAndSafety) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.LicenceAndSafety}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        <span className="font-bold">Is BC.Game a legit site?</span> Yes, they are. BC.Game is a legal crypto gambling site that holds a license and offers multiple security features.
                                    </div>
                                    <div>
                                        In previous editions of this casino review, licensing was our biggest issue. For the a long time, BC used to be unlicensed - and that didn't particularly win our trust. But hurrah, the situation has changed!
                                    </div>
                                    <div>
                                        <a href="https://gateway.pinata.cloud/ipfs/QmZbpAZ4c9izhEYKmJ4gqkx2Kq4fs88h3hGF1kcMXPHWRg/license.jpg" target="_blank" className="font-bold text-blue-600">BC.Game now has a gambling license from Curaçao</a>, which definitely boosts our confidence (and gives players peace of mind).
                                    </div>
                                    <div>
                                        But, it's not just about the license. Here are some of the additional safety features that caught our attention:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Players can secure their account with <span className="font-bold">2-factor authentication.</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The casino holds a <a className="text-blue-600" href="https://cryptogambling.org/" target="_blank">Crypto Gambling Foundation seal of approval.</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            iTech Labs has evaluated BC.Game casino's RNG and <a className="text-blue-600" href="https://itechlabs.com/certificates/BCGame/RNG_Certificate_UK_BCGame_ITL2002455_12Oct20.pdf" target="_blank">verified its randomness.</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The casino has easy access to <a className="text-blue-600" href="https://www.begambleaware.org/" target="_blank">BeGambleAware</a>, a foundation that promotes safe and responsible gambling.
                                        </div>
                                    </div>
                                    <div>
                                        Another common question we get is:
                                    </div>
                                    <div className="font-bold">
                                        Is BC.Game fair?
                                    </div>
                                    <div>
                                        The answer is yes.
                                    </div>
                                    <div>
                                        In fact, BC.Game excels in provable fairness, which means the algorithm cannot be rigged. Provably fair games are random by design and the casino couldn't manipulate the outcome even if they tried.
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="text-white font-bold text-2xl">
                                            All BC.Game originals are provably fair - check the results yourself at any time!
                                        </div>
                                    </div>
                                    <div>
                                        BC.Game is licensed, provably fair, and boasts multiple security features. <span className="font-bold">But what about our playtest?</span>
                                    </div>
                                    <div>
                                        We personally and anonymously test all casinos that we review. There is no replacement for first-hand experience - and, we're glad to report <span className="font-bold">it was all smooth sailing</span> with BC.Game. Throughout the entire experience, we didn't find any issues. No problems with the games, none with bonuses, withdrawals were a piece of cake, too.
                                    </div>
                                    <div>
                                        So, all things considered, we think <span className="font-bold">BC.Game is a trusted, secure brand</span>.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Do They Run KYC Checks?
                                    </div>
                                    <div>
                                        A Know-Your-Consumer check is when a company verifies that you are who you say you are. This is usually done by matching your name and address to a government-issued ID.
                                    </div>
                                    <div className="font-bold">
                                        BC.Game doesn't run KYC on registration. Instead, they might ask you for ID if you want to make a withdrawal.
                                    </div>
                                    <div>
                                        In our experience, this happens for larger cash-outs, but random checks are still possible. So if you're looking for an anonymous casino, this is a good option. Just be aware that if you do win big, you might have to verify your identity before you can cash out.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">2-factor authentication</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Crypto Gambling Foundation seal</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">RNG tested and verified</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Gambling license</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No established reputation</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Payment Options */}
                        <div id="payment-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <AccountBalanceWalletOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Payment Options
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Crypto-only. Stellar coin availability, though.
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.paymentOption) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.paymentOption) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.paymentOption}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        BC.Game is a <span className="font-bold">crypto-exclusive casino where you cannot play with fiat money.</span>
                                    </div>
                                    <div>
                                        Instead, you have a comprehensive number of cryptocurrencies available, ranging from established coins like Bitcoin to the most obscure altcoins.
                                    </div>
                                    <div>
                                        The list of available tokens is too lengthy to include here in full, but last time we counted it included <span className="font-bold">66 different coins.</span>
                                    </div>
                                    <div>
                                        Here are just a few of the most common cryptocurrencies that are supported at BC.Game casino:
                                    </div>
                                    <div className="flex flex-wrap gap-x-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Ethereum
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Bitcoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Bitcoin Cash
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Binance
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Litecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Dogecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Tether
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Ripple
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Cardano SHIB
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        The casino also has its own currency, <span className="font-bold">BC Dollars (BCD)</span>, which works as a stablecoin on the site.
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="text-white font-bold text-2xl">
                                            BCD is tied to the value of Tether:
                                            <br/>
                                            BCD = 1 USDT = 1 USD.
                                        </div>
                                    </div>
                                    <div>
                                        This makes it particularly handy when you're cashing out - with BCD you can take your profits and not risk them to volatility.
                                    </div>
                                    <div>
                                        But, BC.Game is also one of the most prominent stablecoin casinos, offering Tether, USDC, Dai, and more.
                                    </div>
                                    <div>
                                        BC.Game is compatible with a range of Bitcoin wallets and other crypto safeguarding services. It comes with its own exchange, which allows you to convert from one coin to another directly on the platform. Do note that, just like any exchange, there is a fee to cover the transaction costs.
                                    </div>
                                    <div>
                                        And, recently, they also became one of the first crypto casinos to offer NFTs:
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        BC.Game Allows You to Deposit NFTs
                                    </div>
                                    <div>
                                        That's right - the NFT craze is clearly here to stay. You can now deposit using one of these NFT collectibles:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            BAYC
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Degenpass
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            CryptoPunks
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            CloneX
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Azuki
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Doodles
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Mfers
                                        </div>
                                    </div><div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            MekaVerse
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://degenverse.com/" target="_blank" className="text-blue-600">Degenpass</a> is particularly noteworthy as it's a <span className="font-bold">virtual entry pass to the Degenverse ecosystem</span> and a range of eligible casinos.
                                    </div>
                                    <div>
                                        As <a href="https://casinosblockchain.io/metaverse-gambling/" target="_blank" className="text-blue-600">Metaverse gambling</a> grows in importance and popularity, so will NFTs. By offering the Degenpass, BC.Game is already one step ahead of the competition and proving they're at the edge of innovation when it comes to the online gambling industry.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Deposit and Withdrawal Times and Fees
                                    </div>
                                    <div>
                                        How much until your money gets to and from the casino? We tested it and here's what we found:
                                    </div>
                                    <div className="flex flex-col min-w-[320px] xl:min-w-[500px] border rounded-xl">
                                        <div className="flex flex-row justify-between bg-gray-300 px-3 py-3 rounded-t-xl">
                                            <div className="w-1/2">
                                                Casino Fees
                                            </div>
                                            <div className="w-1/2">
                                                None
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between px-3 py-3">
                                            <div className="w-1/2">
                                                Transaction Fees
                                            </div>
                                            <div className="w-1/2">
                                                Depends on the currency
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between bg-gray-300 px-3 py-3">
                                            <div className="w-1/2">
                                                Average Withdrawal Time
                                            </div>
                                            <div className="w-1/2">
                                                10 minutes
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between px-3 py-3">
                                            <div className="w-1/2">
                                                Maximum Withdrawal Time
                                            </div>
                                            <div className="w-1/2">
                                                6 hours
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Withdrawals are subject to a transaction fee, which varies per currency.
                                    </div>
                                    <div>
                                        Bitcoin transactions, for instance, have a 0.0006 BTC cost. However, this isn't a casino fee (BC.Game doesn't charge you for sending the money). Instead, it's a standard <span className="font-bold">reward for blockchain participants who verify the transaction</span> - that's why it varies depending on how busy the network is.
                                    </div>
                                    <div>
                                        Although they're not instant, <span className="font-bold">BC.Game transactions are quick</span> - for us, they only took around 10 minutes, but the maximum time is six hours. On exceptional occasions, transaction times may be longer (due to congestion on the Bitcoin network, for instance), but we never experienced that.
                                    </div>
                                    <div>
                                        If you're mindful of your privacy, one very positive aspect is that the casino <span className="font-bold">does not require an invasive Know Your Customer verification check.</span> They can still ask you to confirm your identity, though, especially for larger cash-outs.
                                    </div>
                                    <div>
                                        We always stress the importance of only sharing truthful information - this is because lying to the casino could lead to trouble at withdrawal or even blocked transactions.
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Large variety of cryptos (66+)</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Cryptocurrency exchange</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fast and easy transactions</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">No invasive KYC</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">In-house stablecoin</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No fiat payments</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Customer Support */}
                        <div id="customer-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-10 mt-10">
                            {/* header */}
                            <div className="flex flex-row justify-center xl:justify-between">
                                <div className="flex flex-row gap-x-5">
                                    <div className="flex justify-center items-center">
                                        <MarkChatReadOutlinedIcon/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Customer Support
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Social casino with a very friendly team
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={{color: 'lightgray'}} 
                                        variant="determinate" 
                                        value={100} 
                                        className="absolute"
                                    />
                                    <CircularProgress 
                                        size={56} 
                                        thickness={2} 
                                        sx={Number(siteData.overview.rating.customerSupport) > 3 ? {color: 'green'} : {color: 'goldenrod'}} 
                                        variant="determinate" 
                                        value={Number(siteData.overview.rating.customerSupport) * 20} 
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.customerSupport}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        BC.Game is a multilingual website that is available in sixteen different languages. So, whether you speak English, Mandarin, or French, you can rest assured the casino does speak your language, and so does the player chat.
                                    </div>
                                    <div>
                                        However, the help center and support team are only available in English.
                                    </div>
                                    <div>
                                        You can reach out to BC.Game in multiple ways, though:
                                    </div>
                                    <div className="flex flex-wrap gap-x-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Live Chat
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                FAQ
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Telegram
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Email
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Skype
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        When we contacted the team, we were pleasantly surprised by the speedy response. It only took a few seconds to get a personal response in the live chat. Agents provided comprehensive and helpful information and we couldn't be happier about the ease of access.
                                    </div>
                                    <div>
                                        BC.Game casino also has a strong <span className="font-bold">social media presence</span> through the following platforms:
                                    </div>
                                    <div className="flex flex-wrap gap-x-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://github.com/bc-game-project/bcgame-crash"
                                                    target="_blank"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://medium.com/@BC.Game"
                                                    target="_blank"
                                                >
                                                    Medium
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://twitter.com/BCGameOfficial"
                                                    target="_blank"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.facebook.com/bcgamewin"
                                                    target="_blank"
                                                >
                                                    Facebook
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://discord.com/invite/mQh3M6UDkR"
                                                    target="_blank"
                                                >
                                                    Discord
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://bitcointalk.org/index.php?topic=5088875.0"
                                                    target="_blank"
                                                >
                                                    BitcoinTalk
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col min-w-[300px] border rounded-xl gap-y-5">
                                    <div className="text-xl font-bold bg-gray-200 px-5 py-3 rounded-t-xl">
                                        Summary
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="text-base font-bold text-green-900">
                                            PROGS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">24/7 live chat</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Friendly support team</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Skype and Telegram support</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Social media presence</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Support only in English</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center py-5">
                                        <Button
                                            className="text-white min-w-[250px]"
                                            variant="contained"
                                            color="primary"
                                            href={"https://" + siteData.link}
                                            target="_BLANK"
                                        >
                                            Open Rocketpot
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ */}
                        <div id="faq-section" className="part-section bg-white flex flex-col rounded-xl p-5 gap-y-5 mt-10">
                            {/* header */}
                            <div className="flex flex-row gap-x-5">
                                <div className="flex justify-center items-center">
                                    <ContactSupportOutlinedIcon/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        F.A.Q.
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        All you need to know about BC.Game
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Is BC casino legit?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        Yes, <a href={"https://" + siteData.link} target="" className="text-blue-600">BC.Game</a> is licensed and reputable. They also have provably fair games, which are impossible to be rigged.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. What currencies can I use at BC.Game?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        BC.Game supports a wide range of cryptocurrencies, including Bitcoin, Ethereum, Dogecoin, Ripple, Tether, and more. Unfortunately, you cannot play with fiat money at this casino.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. Does BC.Game offer a deposit welcome bonus?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        Yes, there is a traditional deposit bonus at BC.Game on a regular basis, you can spin a wheel every day and win a random prize, including up to 5 BTC. The best part? You can do that right after sign up, even before your first deposit. There are also limited offers from time to time, where you can indeed unlock a deposit bonus paid in BCD (the casino's own token).
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ4(!openFAQ4) }}
                                >
                                    4. Is BC.Game safe?
                                </div>
                                {openFAQ4 &&
                                    <div className="text-black mt-5">
                                        Along with the Curaçao license, BC.Game offers a few safety reassurances to its players. For instance, this casino is provably fair and holds a Crypto Gambling Foundation seal of approval.
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[300px] bg-white rounded-xl hidden xl:flex flex-col px-1 py-5 h-min shadow-xl fixed xl:sticky top-20 xl:top-10">
                        <Button
                                className="rightbarBtn overview-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<InfoOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#overview-section"
                            >
                                {siteData.name} Overview
                        </Button>
                        <Button
                                className="rightbarBtn bonus-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<CardGiftcardOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#bonus-section"
                            >
                                Bonuses
                        </Button>
                        <Button
                                className="rightbarBtn lookFeel-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<AdUnitsOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#lookFeel-section"
                            >
                                Look & Feel
                        </Button>
                        <Button
                                className="rightbarBtn gameSelection-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<MobileFriendlyOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#gameSelection-section"
                            >
                                Game Selection
                        </Button>
                        <Button
                                className="rightbarBtn licensing-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<VerifiedOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#licensing-section"
                            >
                                Licensing & Safety
                        </Button>
                        <Button
                                className="rightbarBtn payment-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<AccountBalanceWalletOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#payment-section"
                            >
                                Payment Options
                        </Button>
                        <Button
                                className="rightbarBtn customer-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<MarkChatReadOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#customer-section"
                            >
                                Customer Support
                        </Button>
                        <Button
                                className="rightbarBtn faq-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                                startIcon={<ContactSupportOutlinedIcon sx={{fontSize: "25px !important"}}/>}
                                href="#faq-section"
                            >
                                F.A.Q
                        </Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </Box>
    )
}

export default RocketpotGameReview;