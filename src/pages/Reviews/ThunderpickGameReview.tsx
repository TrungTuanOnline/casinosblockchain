import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';


import TopBar from "../../components/Common/Topbar";
import Footer from "../../components/Common/Footer";
import { siteDatas } from "../../Interfaces/SiteDatas";

// crypto images
import bitcoinCryptoImg from "../../Assets/images/cryptocurrency/bitcoin.png";
import bitcoinCashCryptoImg from "../../Assets/images/cryptocurrency/bitcoin-cash.png";
import etherCryptoImg from "../../Assets/images/cryptocurrency/ether.png";
import litecoinCryptoImg from "../../Assets/images/cryptocurrency/litecoin.png";
import rippleCryptoImg from "../../Assets/images/cryptocurrency/ripple.png";
import tetherCryptoImg from "../../Assets/images/cryptocurrency/tether.png";

// game images
import baccaratGameImg from "../../Assets/images/games/baccarat.png";
import blackjackGameImg from "../../Assets/images/games/blackjack.png";
import crashGameImg from "../../Assets/images/games/crash.png";
import diceGameImg from "../../Assets/images/games/dice.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";
import kenoGameImg from "../../Assets/images/games/keno.png";
import liveCasinoGameImg from "../../Assets/images/games/live-casino.png";
import lotteryGameImg from "../../Assets/images/games/lottery.png";
import plinkoGameImg from "../../Assets/images/games/plinko.png";
import pokerGameImg from "../../Assets/images/games/poker.png";
import rouletteGameImg from "../../Assets/images/games/roulette.png";
import sicBoGameImg from "../../Assets/images/games/sic-bo.png";
import slotsGameImg from "../../Assets/images/games/slots.png";
import sportsBettingGameImg from "../../Assets/images/games/sports-betting.png";

// review images
import reviewImg1 from "../../Assets/images/reviews/11-thunderpick-game/1-thunderpick-review.png";
import reviewImg2 from "../../Assets/images/reviews/11-thunderpick-game/2-thunderpick-review.png";

// country flag
import { CN, GB, FR, DE, PT, RU, ES } from 'country-flag-icons/react/1x1';

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
        img: bitcoinCryptoImg,
        name: "Bitcoin"
    },
    {
        img: bitcoinCashCryptoImg,
        name: "Bitcoin Cash"
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
        img: rippleCryptoImg,
        name: "Ripple"
    },
    {
        img: tetherCryptoImg,
        name: "Tether"
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
        img: crashGameImg,
        name: "Crash"
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

const ThunderpickGameReview = () => {
    const siteData = siteDatas[10];

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
            <TopBar />
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
                                        <Rating readOnly defaultValue={Number(siteData.overview.rating.total)} precision={0.1} className="" />
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
                                startIcon={<OpenInNewIcon />}
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
                                    <InfoOutlinedIcon />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        {siteData.name} Overview
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
                                                            <div className="text-center">
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
                                                <CN className="h-5 rounded-full" />
                                                <div className="text-base">Chinese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <GB className="h-5 rounded-full" />
                                                <div className="text-base">English</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <FR className="h-5 rounded-full" />
                                                <div className="text-base">French</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <DE className="h-5 rounded-full" />
                                                <div className="text-base">Germany</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PT className="h-5 rounded-full" />
                                                <div className="text-base">Portuguese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <RU className="h-5 rounded-full" />
                                                <div className="text-base">Russian</div>
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
                                                        <div className="w-[230px]">Excellent sports betting (especially eSports)</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Solid casino game selection</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Unique eSports special markets</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Reputable casino</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Fast and cheap payouts</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">Tiny deposit bonus (just 5%)</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No fiat accepted</div>
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
                                            sx={{ color: 'lightgray' }}
                                            variant="determinate"
                                            value={100}
                                            className="absolute"
                                        />
                                        <CircularProgress
                                            size={100}
                                            thickness={2}
                                            sx={Number(siteData.overview.rating.total) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                            variant="determinate"
                                            value={Number(siteData.overview.rating.total) * 20}
                                        />
                                        <div className="absolute flex items-center justify-center inset-0 text-3xl">{siteData.overview.rating.total}</div>
                                    </div>
                                    <div className="text-3xl flex items-center justify-center">
                                        Overall Rating
                                    </div>
                                    <div className="flex flex-col gap-y-5">
                                        {Number(siteData.overview.rating.bonus) > 0 &&
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
                                        {Number(siteData.overview.rating.lookAndFeel) > 0 &&
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
                                        {Number(siteData.overview.rating.LicenceAndSafety) > 0 &&
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
                                        {Number(siteData.overview.rating.gameSelection) > 0 &&
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
                                        {Number(siteData.overview.rating.paymentOption) > 0 &&
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
                                        {Number(siteData.overview.rating.customerSupport) > 0 &&
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
                                        {Number(siteData.overview.rating.customerReview) > 0 &&
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
                                                endIcon={<OpenInNewIcon className="w-4" />}
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
                                        <CardGiftcardOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Bonuses
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Low wagering requirements, modest bonuses
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.bonus) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.bonus) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.bonus}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div className="text-base">
                                        Thunderpick is a crypto-only site, but they still calculate their bonus in fiat.
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="font-bold text-gray-400">
                                            Welcome bonus
                                        </div>
                                        <div className="text-white font-bold text-2xl">
                                            New players get up to 500 EUR on top of their first deposit.
                                        </div>
                                    </div>
                                    <div>
                                        Whether you deposit in Bitcoin, Ethereum or another crypto, you will still receive the equivalent of 500 EUR in the respective currency. And, we have more good news:
                                    </div>
                                    <div>
                                        ? <span className="font-bold">The welcome deposit wagering requirement is just 2x</span>. This is much, much better than other casinos where rollover ranges around 40x or even more.
                                    </div>
                                    <div>
                                        But it wouldn't be an honest Thunderpick review if we didn't give you all the information.
                                    </div>
                                    <div>
                                        ? <span className="font-bold">You only get a 5% deposit match</span>. To get the full 500EUR, you'd have to deposit 10,000 EUR. Most gambling sites match your first deposit by a much higher number - sometimes even over 100%.
                                    </div>
                                    <div>
                                        Ultimately, Thunderpick simply takes a different approach to welcome bonuses. Sure, you get a low wagering requirement (which makes the promotion much more valuable), but the deposit match is significantly lower than what other casinos offer.
                                    </div>
                                    <div>
                                        Is this the optimal way to approach it? We'll let you be the judge.
                                    </div>
                                    <div>
                                        <span className="font-bold">P.S. They do occasionally offer a 100% first-deposit match</span>. This only happens during special promo periods and it comes with a 30x rollover. Keep an eye out for it!
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Other Thunderpick Promotions
                                    </div>
                                    <div>
                                        Welcome bonuses are important and all, but this isn't the only perk Thunderpick offers to its customers.
                                    </div>
                                    <div>
                                        The gambling site frequently runs different promos and gives away freebies. The ones that were active at the time of publication of this Thunderpick review include:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Daily Giveaways</span>: All you have to do is deposit during the day and you'll be entered into a draw for a prize. The size of the prize pool and number of winners depend on the day.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Dream Vacation Rewards</span>: Exactly what it sounds like - a draw to win a trip to an exotic location. This one happens every few months and it's usually for a pretty sweet destination (e.g. Bali, Phuket, Maldives, etc.).
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Cash Drops in Slots</span>: This is a random prize drop that can happen at any time while you're playing Wazdan slots. If you win, the prize will be credited to your account automatically.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Monthly Gift Cards</span>: Avid Thunderpick customers can also win top-up gift cards for their loyalty to the casino. Winners here are selected at random - every month 150-200 users get a Thunderpick Gift Card right into their inbox.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Reload Bonuses</span>: From time to time, Thunderpick will offer a reload bonus (usually during special events). The deposit match and wagering requirements here are similar to the welcome bonus conditions.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Refer a Friend</span>: Invite a friend to join Thunderpick and you'll both receive a free bet. Your friend also gets a nice welcome bonus, so it's a win-win situation!
                                        </div>
                                    </div>
                                    <div>
                                        Since Thunderpick focuses a lot of their attention on the Bitcoin eSports sportsbook, they also offer special rewards for fans of competitive video games. Stay on the lookout for eSports quizzes for a chance to win a Thunderpick Gift Card for your trivia knowledge.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        VIP Club
                                    </div>
                                    <div>
                                        High rollers and loyal customers also have something to look forward to at Thunderpick. The casino offers a VIP Club with different rewards and benefits.
                                    </div>
                                    <div>
                                        Here's what you can expect as a VIP member:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Higher Betting Limits</span>: You can place higher bets on sports and casino games.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Exclusive Promotions</span>: Receive special promotions and offers that are not available to regular players.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Faster Withdrawals and 0% fees</span>: Withdraw your winnings faster than other players. You'll also get 0% fees all of your withdrawals - no matter how many you have in the day.
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            <span className="font-bold">Personal Account Manager</span>: Have a dedicated account manager at your service.
                                        </div>
                                    </div>
                                    <div>
                                        All in all, the VIP Club at Thunderpick is pretty sweet. You get to take advantage of higher betting limits, exclusive bonuses and other perks.
                                        <br/>
                                        The only issue we have is that it's pretty difficult to become a member. You have to deposit a lot of money and play even more to get an invite to the club.
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
                                            <div className="w-[230px]">Up to 500 EUR welcome bonus</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Tiny x2 wagering requirement</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Daily, weekly, and monthly promotions</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Rewarding VIP club</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">eSports-themed quizzes with gifts</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Just 5% deposit match</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Invitation-only VIP club</div>
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
                                        <AdUnitsOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Look & Feel
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            On-trend and easy on the eyes
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.lookAndFeel) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.lookAndFeel) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.lookAndFeel}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        The first (and most obvious) thing you'll notice about Thunderpick's website is the dark background. We have to give it to them - it is a pretty trendy look. We love the dark theme and it's easy on the eyes so no complaints there.
                                    </div>
                                    <div>
                                        The layout is pretty straightforward and easy to navigate. We had no issue finding our favorite games or the sports we wanted to bet on.
                                    </div>
                                    <div className="divHasTempBG2 flex flex-col p-10 rounded-xl w-80 xl:w-[450px]">
                                        <div className="text-white font-bold text-2xl">
                                            The casino also has a very nice browser app that you can download for free.
                                        </div>
                                    </div>
                                    <div>
                                        We're also happy to report that <span className="font-bold">mobile betting is a breeze</span> on Thunderpick. You won't have to download any apps or anything like that. Just type in the site in your mobile browser and you're good to go.
                                    </div>
                                    <div>
                                        So, is it all good with the design? We do have some minor complaints.
                                    </div>
                                    <div>
                                        First of all, <span className="font-bold">you don't see the RTP on casino games</span>. You can, however, sort by RTP (not house edge, mind you) and that helps a little bit. We would still prefer to see the theoretical return on individual games.
                                    </div>
                                    <div>
                                        Secondly, <span className="font-bold">the site is clearly focused on sports betting</span>. While the casino part doesn't feel underdeveloped, it's pretty clear that sports is the primary focus.
                                    </div>
                                    <div>
                                        The overall look and feel is still pretty good, though, and we can't really complain all that much.
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
                                            <div className="w-[230px]">Dark theme (easier on the eyes)</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Straightforward navigation</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Mobile-friendly</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Browser app</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Sportsbook prioritized</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Doesn't display game RTP</div>
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
                                            Open Thunderpick
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
                                        <MobileFriendlyOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Game Selection
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Excellent sportsbook and a large casino game portfolio
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.gameSelection) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.gameSelection) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.gameSelection}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        <img
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg1}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Thunderpick's casino games selection is never lacking. From big-name providers to Thunderpick's own proprietary games, you'll never be bored here.
                                    </div>
                                    <div>
                                        Thunderpick's <span className="font-bold">game selection is excellent</span> - and that is amazing news for a site that doesn't even have the casino as a main priority.
                                    </div>
                                    <div>
                                        Thunderpick has all of your favorite games from some of the <span className="font-bold">best software providers</span> in the industry. You can find slots and live shows from the likes of Pragmatic Play, Play'n GO, BGaming, and more. Since BGaming is a provably fair provider, it's important to point out that the casino also does have provably fair games.
                                    </div>
                                    <div>
                                        Speaking of slots, there is a dizzying amount of them. At the time of publication of this Thunderpick review, the casino had <span className="font-bold">2355 different slot options</span>. That is a lot of options to choose from - you are sure to find your favorite.
                                    </div>
                                    <div>
                                        We were also very happy to see a <span className="font-bold">diverse range of table games</span>. You can find all of the major ones like blackjack, roulette, poker, and baccarat. There are also plenty of niche crypto options like Crash and Plinko.
                                    </div>
                                    <div>
                                        The only letdown? Thunderpick's own, in-house developed games are somewhat limited. This is a shame because the site has the potential to be a top-tier casino if they put in the extra effort.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Sports Betting
                                    </div>
                                    <div>
                                        <img
                                            className="w-[320px] xl:w-[500px]"
                                            src={reviewImg2}
                                            alt="reviewImg">
                                        </img>
                                    </div>
                                    <div>
                                        Thunderpick's sportsbook is robust and exciting - plus it has all your eSports favs, too!
                                    </div>
                                    <div>  
                                        This is truly where Thunderpick shines. The sports betting options are vast, and the betting markets are deep.
                                    </div>
                                    <div>
                                        You can find <span className="font-bold">all of the major sports like football, basketball, baseball, and hockey</span>. Even better, Thunderpick is a major eSports bookie with excellent betting markets for all the top games.
                                    </div>
                                    <div>
                                        You can find the standard markets like money line, point spread, and total. There are also a bunch of <span className="font-bold">specials eSports markets</span>. For example, in Call of Duty betting you can find options like Map Winner, Correct Score and even Total Number of Kills.
                                    </div>
                                    <div>
                                        We were also happy to see that <span className="font-bold">Thunderpick offers live betting</span>. This is a great option for those who want to bet on the action as it's happening.
                                    </div>
                                    <div>
                                        The one downside we found with Thunderpick's sports betting is that they <span className="font-bold">don't offer much in terms of sports-specific promotions</span>. There are occasional special events but nothing on a regular basis.
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
                                            <div className="w-[230px]">Top-notch sportsbook</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Multiple eSports and eSports specials markets</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">All of your favorite casino games</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">All major providers</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">2300+ slots and counting</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No in-house developed games</div>
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
                                            Open Thunderpick
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
                                        <VerifiedOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Licensing & Safety
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Curacao license and no major complaints
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.LicenceAndSafety) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.LicenceAndSafety) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.LicenceAndSafety}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        Thunderpick, much like other crypto casinos and sportsbooks, operates under a <span className="font-bold">Curacao gambling license</span>. Curacao is a very popular jurisdiction for gambling sites, so we're content to see the license.
                                    </div>
                                    <div>
                                        Of course, it would have been even better to see a more well-known licensing body like the UK Gambling Commission or the Malta Gaming Authority, since the Curacao license <span className="font-bold">excludes Thunderpick from operating in some countries</span>.
                                    </div>
                                    <div>
                                        You should also know that Thunderpick <span className="font-bold">may require you to verify your account</span> before you can withdraw any winnings. This is pretty standard for most gambling sites, but it's still worth mentioning.
                                    </div>
                                    <div>
                                        Still, the KYC process is fast and non-invasive, so it's not a big deal.
                                    </div>
                                    <div>
                                        As for safety, we're happy to report that <span className="font-bold">Thunderpick is a very safe and secure site</span>.
                                    </div>
                                    <div>
                                        The casino uses the <span className="font-bold">latest SSL encryption technology</span> to protect your personal and financial information. There haven't been any major complaints or controversies that we dug up during our Thunderpick review research either - this is what we like to see!
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
                                            <div className="w-[230px]">Licensed casino</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">No controversies</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Safe and secure site</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Non-invasive KYC checks</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Restricted regions (due to Curacao license)</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Not anonymous</div>
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
                                            Open Thunderpick
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
                                        <AccountBalanceWalletOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Payment Options
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Crypto-only, but safe and reliable
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.paymentOption) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.paymentOption) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.paymentOption}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        What can you use to deposit and withdraw on Thunderpick? Since this is a <span className="font-bold">crypto-only casino and sportsbook</span>, you are limited to cryptocurrencies and no fiat.
                                    </div>
                                    <div>
                                        The options include:
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Bitcoin (BTC)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Ethereum (ETH)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Litecoin (LTC)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Dogecoin (DOGE)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Tether (USDT)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Ripple (XRP)
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-x-2">
                                        <div className="w-1 h-1 rounded-full bg-black mt-[11px]"></div>
                                        <div>
                                            Bitcoin Cash (BCH)
                                        </div>
                                    </div>
                                    <div>
                                        While we have seen casinos with far more options (<a href="/review/bc.game" target="_blank" rel="noreferrer" className="text-blue-600">BC.Game</a> has 65+ cryptos) we're still happy with what Thunderpick offers. All of the major cryptos are here, so you should have no problem finding one that works for you.
                                    </div>
                                    <div>
                                        The <span className="font-bold">min/max for transactions vary</span> depending on the coin, but one thing is for sure - there are no casino-enforced fees. Withdrawal fees are a major red flag for us at Casinos Blockchain and we were happy to not discover them while doing the Thunderpick review.
                                    </div>
                                    <div>
                                        Keep in mind that your <span className="font-bold">total weekly withdrawal limit is 50,000 EUR</span> and you can't circumvent it by cashing out in different cryptos.
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
                                            <div className="w-[230px]">Decent selection of coins</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">No casino fees on withdrawals</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Generous deposit and withdrawal limits</div>
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
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Some coins missing</div>
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
                                            Open Thunderpick
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
                                        <MarkChatReadOutlinedIcon />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-2xl font-bold">
                                            Customer Support
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Friendly and responsive
                                        </div>
                                    </div>
                                </div>
                                <div className="w-20 flex items-center justify-center relative">
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={{ color: 'lightgray' }}
                                        variant="determinate"
                                        value={100}
                                        className="absolute"
                                    />
                                    <CircularProgress
                                        size={56}
                                        thickness={2}
                                        sx={Number(siteData.overview.rating.customerSupport) > 3 ? { color: 'green' } : { color: 'goldenrod' }}
                                        variant="determinate"
                                        value={Number(siteData.overview.rating.customerSupport) * 20}
                                    />
                                    <div className="absolute flex items-center justify-center inset-0 text-base">{siteData.overview.rating.customerSupport}/5</div>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-20 items-center xl:items-start">
                                <div className="flex flex-col gap-y-5">
                                    <div>
                                        We know, we know. You don't start playing at a casino expecting to have to contact customer support. But it happens, and when it does, you want to know that the casino has your back. This is why testing out the agents' responsiveness and efficiency was a priority when writing our Thunderpick review.
                                    </div>
                                    <div>
                                        Thunderpick offers <span className="font-bold">24/7 live chat support</span>, which is the golden standard in the industry. When we contacted their team (during research for this Thunderpick review), we were happy to discover that they were quick to respond and very helpful. They also offer email support if you prefer that method.
                                    </div>
                                    <div>
                                        The site also has a <span className="font-bold">very detailed FAQ section</span> that's worth checking out before you contact customer support. It covers all the important topics, such as deposits and withdrawals, account management, and more.
                                    </div>
                                    <div>
                                        We would still like to see them <span className="font-bold">interact with the community more</span> on social media, but overall the support is solid.
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
                                            <div className="w-[230px]">24/7 live chat support</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Email support</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Quick and knowledgeable team</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">In-depth knowledge base section</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Not too active on social media</div>
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
                                            Open Thunderpick
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
                                    <ContactSupportOutlinedIcon />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">
                                        F.A.Q.
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        The As to your burning Qs
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Is Thunderpick good?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        Yes, Thunderpick is a solid crypto sportsbook and casino. It's especially good for eSports betting enthusiasts, offering multiple events and specials markets.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. How does Thunderpick work?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        To play at Thunderpick, you first have to deposit cryptocurrency. Take your pick of six available cryptos, including BTC and ETH. Then, you can use the tokens to bet on sports (including plenty of eSports) or try your luck at one of the casino games.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. Does Thunderpick have a sportsbook?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        Yes, Thunderpick is primarily a sports betting site. They have a vast selection of eSports, along with the classics like football and basketball.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ4(!openFAQ4) }}
                                >
                                    4. What cryptocurrencies does Thunderpick accept?
                                </div>
                                {openFAQ4 &&
                                    <div className="text-black mt-5">
                                        Thunderpick lets you deposit and play with Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Dogecoin (DOGE), Tether (USDT), Ripple (XRP), and Bitcoin Cash (BCH)
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[300px] bg-white rounded-xl hidden xl:flex flex-col px-1 py-5 h-min shadow-xl fixed xl:sticky top-20 xl:top-10">
                        <Button
                            className="rightbarBtn overview-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<InfoOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#overview-section"
                        >
                            {siteData.name} Overview
                        </Button>
                        <Button
                            className="rightbarBtn bonus-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<CardGiftcardOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#bonus-section"
                        >
                            Bonuses
                        </Button>
                        <Button
                            className="rightbarBtn lookFeel-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<AdUnitsOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#lookFeel-section"
                        >
                            Look & Feel
                        </Button>
                        <Button
                            className="rightbarBtn gameSelection-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<MobileFriendlyOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#gameSelection-section"
                        >
                            Game Selection
                        </Button>
                        <Button
                            className="rightbarBtn licensing-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<VerifiedOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#licensing-section"
                        >
                            Licensing & Safety
                        </Button>
                        <Button
                            className="rightbarBtn payment-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<AccountBalanceWalletOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#payment-section"
                        >
                            Payment Options
                        </Button>
                        <Button
                            className="rightbarBtn customer-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<MarkChatReadOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#customer-section"
                        >
                            Customer Support
                        </Button>
                        <Button
                            className="rightbarBtn faq-section text-black flex justify-start items-center px-5 py-3 text-base normal-case"
                            startIcon={<ContactSupportOutlinedIcon sx={{ fontSize: "25px !important" }} />}
                            href="#faq-section"
                        >
                            F.A.Q
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </Box>
    )
}

export default ThunderpickGameReview;