import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Box, Fab } from "@mui/material";
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

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
import dogecoinCryptoImg from "../../Assets/images/cryptocurrency/dogecoin.png";
import eosCryptoImg from "../../Assets/images/cryptocurrency/eos.png";
import etherCryptoImg from "../../Assets/images/cryptocurrency/ether.png";
import litecoinCryptoImg from "../../Assets/images/cryptocurrency/litecoin.png";
import rippleCryptoImg from "../../Assets/images/cryptocurrency/ripple.png";
import tronCryptoImg from "../../Assets/images/cryptocurrency/tron.png";

// game images
import diceGameImg from "../../Assets/images/games/dice.png";
import jackpotGameImg from "../../Assets/images/games/jackpot.png";


// review images
import reviewImg1 from "../../Assets/images/reviews/15-primedice-game/1-primedice-review.png";
import reviewImg2 from "../../Assets/images/reviews/15-primedice-game/2-primedice-review.png";
import reviewImg3 from "../../Assets/images/reviews/15-primedice-game/3-primedice-review.png";

// country flag
import {  CN, GB, FR, DE, ID, JP, KR, PT, PL, RU, ES, PH, TR, VN } from 'country-flag-icons/react/1x1';

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
        img: rippleCryptoImg,
        name: "Ripple"
    },
    {
        img: tronCryptoImg,
        name: "Tron"
    }
];

const gamesObj: Array<any> = [
    {
        img: diceGameImg,
        name: "Dice"
    },
    {
        img: jackpotGameImg,
        name: "Jackpots"
    }
]

const PrimediceGameReview = () => {
    const siteData = siteDatas[14];

    const [openFAQ1, setOpenFAQ1] = useState(false);
    const [openFAQ2, setOpenFAQ2] = useState(false);
    const [openFAQ3, setOpenFAQ3] = useState(false);

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
                                    <div className="text-base">
                                        The number one Bitcoin dice casino
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
                                                <ID className="h-5 rounded-full" />
                                                <div className="text-base">Indonesian</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <JP className="h-5 rounded-full" />
                                                <div className="text-base">Japanese</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <KR className="h-5 rounded-full" />
                                                <div className="text-base">Korean</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PL className="h-5 rounded-full" />
                                                <div className="text-base">Polish</div>
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
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <PH className="h-5 rounded-full" />
                                                <div className="text-base">Tagalog</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <TR className="h-5 rounded-full" />
                                                <div className="text-base">Turkish</div>
                                            </div>
                                            <div className="flex flex-row gap-x-2 px-3 py-1 bg-gray-300 rounded-full justify-center items-center">
                                                <VN className="h-5 rounded-full" />
                                                <div className="text-base">Vietnamese</div>
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
                                                        <div className="w-[230px]">Arguably the best Bitcoin dice game</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Anonymous and transparent</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">100% provably fair</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Strong community feel</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Rewarding VIP club</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                                        <div className="w-[230px]">Great for beginners</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No games other than dice</div>
                                                    </div>
                                                    <div className="flex flex-row items-start gap-x-3">
                                                        <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                                        <div className="w-[230px]">No welcome bonus</div>
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
                                            The VIP Club compensates for the lack of a welcome offer
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
                                    <div>
                                        Unfortunately, Primedice doesn't have any welcome bonuses.
                                    </div>
                                    <div>
                                        This dice-based casino is so popular, it doesn't feel the need to offer one. Instead, it focuses on delivering a great player experience from the start.
                                    </div>
                                    <div>
                                        That's not to say you can't get rewarded for playing at Primedice. Here are a few promotions that you can expect to find, mostly through its VIP Club:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Rakeback</span>: A personalized cashback, depending on your playing style.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Specialty Challenges</span>: Unique challenges that you won't find elsewhere.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Dedicated Bonuses</span>: Exclusive offers for VIP players.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Gifts and Rewards</span>: Besides virtual rewards and more traditional casino bonuses, you might also win physical gifts.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            <span className="font-bold">Jackpot</span>: 100 BTC jackpot, which can be won by any player (regardless of VIP level).
                                        </div>
                                    </div>
                                    <div>
                                        As you can see, most of the offers are highly personalized, which is definitely a positive as far as we're concerned.
                                    </div>
                                    <div>
                                        Another interesting aspect of the VIP Club is that <span className="font-bold">your engagement in the player community also counts towards your loyalty level</span>. It's not just about how much you bet, but also how much you give back in terms of helping other players in forums or chat.
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
                                            <div className="w-[230px]">Personalized offers</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">High BTC jackpot</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Rewarding VIP Club</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No welcome offers</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No advertised regular promotions on the website</div>
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
                                            No visual clutter, but all the tools you need
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
                                        Getting started at Primedice is pretty straightforward: just select your username, make a deposit, and you are ready to go.
                                    </div>
                                    <div>
                                        The website has a <span className="font-bold">very simple interface</span> that the majority of players will already be familiar with, especially if they ever played at their partner casino, <a href="/review/stake.com" target="_blank" rel="noreferrer" className="text-blue-600">Stake</a>.
                                    </div>
                                    <div>
                                        There are no promotional banners, distracting artwork, nor any sort of visual clutter.
                                    </div>
                                    <div>
                                        Besides its top menu, where you can choose the bet you want to place and roll the dice, you have:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Your very own live stat board, which helps you keep track of your betting history.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            A winner's feed at the bottom, where all rounds are displayed. Don't worry: you can hide your username if you rather stay anonymous.
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            The current BTC = USD exchange rate, for full transparency.
                                        </div>
                                    </div>
                                    <div>
                                        Another interesting feature is an active and helpful community chat on the left-hand side of the screen.
                                    </div>
                                    <div>
                                        The website is also fully optimized for mobile use.
                                    </div>
                                    <div className="w-[350px] xl:w-[600px] flex justify-center">
                                        <Swiper
                                            slidesPerView={1}
                                            navigation={{
                                                prevEl: '.Swiper-prev',
                                                nextEl: '.Swiper-next'
                                            }}
                                            pagination={true}
                                            modules={[Navigation, Pagination]}
                                        >
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img
                                                        className=""
                                                        src={reviewImg1}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>

                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img
                                                        className=""
                                                        src={reviewImg2}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="flex justify-center items-center w-full px-16 py-10">
                                                    <img
                                                        className=""
                                                        src={reviewImg3}
                                                        alt="reviewImg">
                                                    </img>
                                                </div>
                                            </SwiperSlide>
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
                                            <div className="w-[230px]">Streamlined layout with no visual clutter</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Helpful tools such as the live stat board</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Seamless navigation on mobile and desktop</div>
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
                                            Open Primedice
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
                                            One (dice) game to rule them all
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
                                    <div className="text-base">
                                        Primedice doesn't offer any slot machines, roulettes, blackjack games, nor most other casino games or sports betting markets.
                                    </div>
                                    <div>
                                        As the name implies, Primedice focuses instead on a single, Hi-Lo dice game.
                                    </div>
                                    <div>
                                        This is, of course, a huge drawback if you're looking for a more well-rounded casino and the main reason why we haven't rated Primedice higher.
                                    </div>
                                    <div>
                                        However, this is arguably the best Bitcoin dice game. Its reputation is impeccable given how long it’s been around.
                                    </div>
                                    <div>
                                        More than 2 million BTC have been wagered on the platform and at any given time there are a lot of players testing their skill and luck on the platform. 
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            Why is it so succesful? Because it has a very low house edge, at only 1%.
                                        </div>
                                    </div>
                                    <div>
                                        Compare that to other traditional casino alternatives which feature edges up to 15% and you can understand why blockchain-based games, in general, are becoming such a popular option.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Primedice Strategy
                                    </div>
                                    <div>
                                        Dice is one of the simplest games to ever grace a casino and it’s precisely in its simplicity that lies its charm. For beginners, it’s a very <span className="font-bold">easy game to understand</span>, and more experienced players can always come back to it for a more casual option.
                                    </div>
                                    <div>
                                        All rounds at Primedice are provably fair and there is also a record of all your previous bets. You can check it at any time and monitor your performance with the help of a live stats panel.
                                    </div>
                                    <div>
                                        Like most of its kind, Primedice offers <span className="font-bold">both manual and automated betting</span>. The latter offers you the chance to stop when you reach a certain amount in losses or winnings, which you can set yourself.
                                    </div>
                                    <div>
                                        While the first option is, technically, safer, if you are wondering how to make money on Primedice, it’s probably with the latter.
                                    </div>
                                    <div>
                                        For seasoned gamblers, there is also a more <span className="font-bold">advanced automation tool</span>, which allows you to develop your own automation rules and use one of the available betting strategies:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Martingale
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Delayed Martingale
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                Paroli
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                D'Alembert
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Unfortunately, nobody knows how to predict Primedice numbers, so it's all up to Lady Luck in the end.
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Hint: try to find your own Primedice strategy. All players have their own limits, and it’s something you must discover for yourself. Find a way to have fun whether you win or lose, and only play if you're enjoying your experience.
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
                                            <div className="w-[230px]">The best dice game in the industry</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Full transparency</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Very low house edge at only 1%</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Their only game is dice</div>
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
                                            Open Primedice
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
                                            Reputable, mostly anonymous and licensed casino
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
                                        Primedice has been around the block since 2013, making it one of the first serious casino platforms to operate with cryptocurrencies like Bitcoin. This has given it a buttoned-down reputation among the gambling community.
                                    </div>
                                    <div>
                                        The casino also has a <a href="https://cryptogambling.org/" target="_blank" rel="noreferrer" className="font-bold text-blue-600">Crypto Gambling Foundation seal</a>. This is a seal of approval from an impartial organization that assures you the casino is indeed trustworthy.
                                    </div>
                                    <div>
                                        The fact that it operates with blockchain technology brings some serious advantages when compared to more traditional alternatives.
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Increased fairness
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Anonymity
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Faster withdrawals
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{ color: "green" }} />
                                        <div>
                                            Lower fees
                                        </div>
                                    </div>
                                    <div>
                                        Plus, thanks to some simple cryptography the player can rest assured that each roll is completely honest and random. This is often referred to as provably fair.
                                    </div>
                                    <div>
                                        Another extra layer of safety and trust is that it operates with a <a href="https://validator.curacao-egaming.com/validate?domain=primedice.com&seal_id=fa6dc0e3c3915b8bd10224ccdfedef992da06271d716edd6e975cf240a674be9d1c57866a56bda6cd923712a4f3085e3&stamp=86db96877c493c50e16f9c937630feea" target="_blank" rel="noreferrer" className="text-blue-600">Curacao Gambling License</a>. Unfortunately, this means that players from a few locations cannot open an account, most notably in the United States and the United Kingdom.
                                    </div>
                                    <div>
                                        While there is a KYC process, it's not required for all players and it's only requested in special cases. For most players, everything is done anonymously.
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
                                            <div className="w-[230px]">Mostly anonymous</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Trusted Curaçao license</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">One of the oldest, most reputable Bitcoin gambling sites</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">100% provably fair</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Crypto Gambling Foundation seal</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">KYC might be required in some cases</div>
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
                                            Open Primedice
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
                                            All the most popular cryptos, but no fiat currencies
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
                                        Regarding payouts and withdrawals, Primedice is a gentle player:
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            The maximum payout per bet is 5 BTC (other coins have different but similar amounts)
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            There is no maximum withdrawal amount
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-x-2">
                                        <CheckOutlinedIcon style={{color: "green"}}/>
                                        <div>
                                            All Bitcoin withdrawals have a 0.0002 BTC fee – which is quite inexpensive
                                        </div>
                                    </div>
                                    <div>
                                        Once you have withdrawn your winnings from Primedice, you can convert them back to fiat money at your favorite exchange. Because the whole process is done with cryptocurrencies, it is fast, secure, and seamless.
                                    </div>
                                    <div className="text-xl font-bold mt-5">
                                        Available Cryptocurrencies at Primedice
                                    </div>
                                    <div>
                                        Although it started as a Bitcoin betting website, Primedice now lets you play and win with several different cryptocurrencies.
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Ethereum
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Bitcoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Bitcoin Cash
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Litecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Dogecoin
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Tether
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Ripple
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                Tron
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{ color: "green" }} />
                                            <div>
                                                EOS
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        You can exchange many different alt-coins and buy the cryptos right on the website, using its third-party provider, <a href="https://www.moonpay.io/" target="_blank" rel="noreferrer" className="text-blue-600">MoonPay</a>.
                                    </div>
                                    <div>
                                        There is, however, no option to play with fiat currency. This is, after all, a blockchain casino, first and foremost.
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
                                            <div className="w-[230px]">8 different cryptocurrencies are available</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Option to buy cryptos directly on the website</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Fast and secure payments</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">You can exchange alt-coins for the available cryptos</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-3 px-5">
                                        <div className="font-bold text-red-900">
                                            CONS
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">Small withdrawal fee applies</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-red-300 w-[20px] h-[20px] rounded-full text-red-900 flex justify-center items-center mt-0.5">-</div>
                                            <div className="w-[230px]">No fiat currencies available</div>
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
                                            Open Primedice
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
                                            Multi-channel approach and round-the-clock support
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
                                        Customer service works great at Primedice. Support is available on a 24/7 basis via chat and email. In our experience, chat support was always very friendly.
                                    </div>
                                    <div>
                                        Unfortunately, there is no FAQ or Help Center. You can, instead, find useful information on Primedice's forum and blog.
                                    </div>
                                    <div>
                                        There is also a community chat, which is very helpful since the community is always eager to lend other users a hand.
                                    </div>
                                    <div>
                                        You can also reach out to Primedice on many different social platforms:
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.facebook.com/officialprimedice"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Facebook
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.instagram.com/officialprimedice/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Instagram
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://twitter.com/primedice"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://bitcointalk.org/index.php?topic=208986.0"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Bitcointalk
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-x-2 rounded-full bg-green-200 pl-2 pr-3">
                                            <CheckOutlinedIcon style={{color: "green"}}/>
                                            <div>
                                                <a 
                                                    href="https://www.reddit.com/r/Primedice"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Reddit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Primedice is very active on all these channels, which helped create an engaged and very active player community.
                                    </div>
                                    <div>
                                        The support team even asks for feedback on a regular basis and often puts customer's suggestions into practice.
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
                                            <div className="w-[230px]">24/7 live chat and email support</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Very active social media channels</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Customer support team asks for and acts on feedback</div>
                                        </div>
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="bg-green-300 w-[20px] h-[20px] rounded-full text-green-900 flex justify-center items-center mt-0.5">+</div>
                                            <div className="w-[230px]">Forums, Reddit and Bitcointalk provide additional support</div>
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
                                            Open Primedice
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
                                        What you need to know before you get started
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ1(!openFAQ1) }}
                                >
                                    1. Is Primedice legit?
                                </div>
                                {openFAQ1 &&
                                    <div className="text-black mt-5">
                                        Yes, definitely! Established in 2013, <a href={"https://" + siteData.link} target="_blank" rel="noreferrer" className="text-blue-600">Primedice</a> is one of the oldest and most respectable cryptocurrency casinos. It holds a Curaçao license and it's 100% provably fair, which means that every single game round is verified.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ2(!openFAQ2) }}
                                >
                                    2. What's the best Primedice strategy?
                                </div>
                                {openFAQ2 &&
                                    <div className="text-black mt-5">
                                        Even though <a href={"https://" + siteData.link} target="_blank" rel="noreferrer" className="text-blue-600">Primedice</a> is a very straightforward game, and it's easy to learn how to play, there are many different approaches to playing it. You can roll the dice manually, or use automated betting on a stop-loss or stop-profit method. If you're a seasoned player, you can also bet using the Martingale, Paroli, or D'Alember methods. Neither of these approaches is necessarily right nor wrong, and all have their risks and advantages. Our best Primedice hack: try it out and find your own limits, and always make sure you're having fun.
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col border-b border-gray-400 px-2 py-2">
                                <div
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => { setOpenFAQ3(!openFAQ3) }}
                                >
                                    3. What games can I play at Primedice?
                                </div>
                                {openFAQ3 &&
                                    <div className="text-black mt-5">
                                        You can only play <a href={"https://" + siteData.link} target="_blank" rel="noreferrer" className="text-blue-600">Primedice's</a> own 100% provably fair dice game. However, this simple Hi-Lo dice game is a strong contender for the best Bitcoin gambling options out there, and certainly one of the most popular.
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

export default PrimediceGameReview;