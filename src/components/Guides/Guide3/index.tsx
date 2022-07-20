import backgroundImg from "../../../Assets/images/Header.svg"
import MetamaskCasinos from "../../../Assets/images/ReadMore/Metamask-Casinos.jpg"

import { ISiteRankBlogCardObj, IReadMoreDataObj } from "../../../Interfaces"
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";
import { Fab } from "@mui/material"
import { Check, NavigateBefore, NavigateNext } from "@mui/icons-material"

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

import BcgameCasino from "../../../Assets/images/Content/bcgamecasino.png"
import StakeCasino from "../../../Assets/images/Content/StakeCasino.webp"
import TrueFlip from "../../../Assets/images/Content/trueflip.png"
import Cloudbet2 from "../../../Assets/images/Content/Cloudbet2.jpg"
import DailyFreeRoll from "../../../Assets/images/Content/Dailyfreeroll.png"
import BizstarzHomePage from "../../../Assets/images/Content/bizstarz-homepage.png"
import kingbillyCasino from "../../../Assets/images/Content/kingbilly-casino1.jpg"
import mBitCasino from "../../../Assets/images/Content/mBit-Casino.jpg"
import EarnBetHomepage from "../../../Assets/images/Content/EarnBet-Homepage.jpg"
import OnlineCasino from "../../../Assets/images/Content/Online-casino.png"
import MetaMaskHomePage from "../../../Assets/images/Content/Metamask-homepage.png"
import SecretPhrase from "../../../Assets/images/Content/secret-recovery-phrase.png"


import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

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
        title: "Is Crypto Gambling Legal?Everythi \r\n ng You Need to Know in the US, Canada, UK, and Beyond",
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
        title: "Is Crypto Gambling Legal? Everything You Need to Know in the US, Canada, UK, and Beyond",
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

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };


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
                    <p className="text-[#262847]">Updated: <span className="text-black font-bold text-base">July 15, 2022</span></p>
                    <h1>MetaMask Casinos: The Ultimate Guide to MetaMask Gambling</h1>
                    <p>Looking to gamble with crypto? You’re in the right place. We looked far and wide for the best MetaMask casinos and finally have our top picks. </p>
                    <p >Read on to learn: :</p>
                    <ul className="pl-8"><li>What are the <strong>top MetaMask casinos </strong>of 2022?&nbsp;</li><li>Who offers <strong>the best bonuses</strong>, giveaways, and rewards?&nbsp;</li><li>Can you <strong>trust crypto casinos?&nbsp;</strong></li><li>Why <strong>crypto bets </strong>aren’t just for blockchain whizzes – and how we pick our favorite casinos?&nbsp;</li></ul>
                    <p>Let’s jump right in:&nbsp;</p>
                    <section id="quick-guide">
                        <h2>Best MetaMask Casinos: Quick Guide	</h2>
                        <p>Excited to get started already? Here’s an <strong>overview of our favorite MetaMask gambling</strong> spots. We personally tried and tested them – this way, we know we’re only giving you the good stuff:</p>
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
                    <section id="supported-currencies">
                        <h2>Best MetaMask Gambling: In-Depth Reviews</h2>
                        <p>Blockchain casinos are on the rise. To make our selection, we scoured the Internet for everyone’s favorite games, we read through happy testimonials and less-than-happy customer complaints, but most importantly:&nbsp;</p>
                        <p><strong>We tested, tested, tested.&nbsp;</strong></p>
                        <p>First-hand experience plus a love for the game – this is how we make our picks. Here is everything you need to know about the best MetaMask casinos of 2022:&nbsp;</p>

                    </section>
                    <section id="bc-game">
                        <h3>BC.Game Casino	</h3>
                        <img src={BcgameCasino} className="w-full h-auto" />
                        <p className="mt-2 text-sm">1% house edge or lower? Count us in!</p>
                        <p><a className="text-blue-600" href="https://casinosblockchain.io/bc-game-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/bc-game-review/" rel="noreferrer noopener">BC.Game Casino</a> is <strong>our favorite crypto casino </strong>out there, not just for MetaMask users but overall.&nbsp;</p>
                        <p>With a <strong>tiny house edge</strong> (as low as 0.48% on blackjack) and <strong>excellent</strong> <strong>Return-to-Player percentages</strong> – 99% and up, it gives you more bang for your buck than most crypto casinos. But that’s not the only thing we love about BC.Game. The crypto-exclusive casino<strong> </strong>comes with tons of perks for blockchain lovers:</p>
                        <ul className="pl-4 list-none">

                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>Daily spin-the-wheel bonus </strong>where you can win up to 1 BTC</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>Engaging promotions </strong>like wager-free games and challenges</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>Twenty provably fair games </strong>developed internally by BC.Game</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>100+ live tables </strong>to prove your skills</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>Smooth user experience </strong>with intuitive design and social features</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>Multi-layer security </strong>and third-party certifications (Crypto Gambling Foundation, iTech Labs)&nbsp;</li>
                            <li> <Check fontSize="small" color="success" className="mr-2 " /><strong>66 different cryptos, </strong>including Ethereum and ERC-20 tokens (BC.Game is one of our favorite <a href="https://casinosblockchain.io/best-ethereum-casinos/" target="_blank" rel="noreferrer noopener">Ethereum casinos</a>)</li>
                        </ul>
                        <p>We are also very impressed with the <strong>social aspect of BC.Game. </strong>Online casinos usually have a chatroom, but BC.Game takes it to the next level. Use the players’ chatroom to interact with other visitors, win rewards, or even ‘make it rain’ if you win big. It’s a fun and unique aspect of the experience.</p>
                        <p>Is there a catch? Unfortunately, there is one.&nbsp;</p>
                        <p>While BC.Game offers <strong>exciting bonuses </strong>like spin-the-wheel and wager-free promos, there is <strong>no traditional welcome bonus</strong>. Are you getting the short end of the stick? We don’t think so. The casino still <strong>gives you plenty of extra games</strong> where you could potentially win more than a depost-match could ever give you. Still, if you prefer a traditional welcome bonus, BC.Game might not be the place for you.&nbsp;</p>
                        <p>Ultimately, BC.Game is <strong>fun, safe, and value-packed </strong>thanks to the low house edge and additional perks. Since it supports <strong>ETH and ERC-20 tokens</strong> like<strong> </strong>Chainlink, BC.Game is also the perfect casino for all MetaMask enthusiasts out there.&nbsp;</p>
                        <div className="mt-4">
                            {dummyInfos.length > 0 &&
                                dummyInfos.map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
                                    if (index === 0) {
                                        return (
                                            <SiteRankBlogTable
                                                key={index}
                                                siteIndex={index}
                                                summaryData={summaryInfo}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>

                    </section>
                    <section id="stake-casino">
                        <h3>Stake Casino</h3>
                        <a href="https://stake.com/registration?c=cb1234" target={"_blank"} rel="noreferrer noopener">
                            <img src={StakeCasino} className="w-full h-auto" />
                        </a>
                        <p className="mt-4"><em>All the games you ever wished for (and more), plus plenty of no-strings-attached bonuses. That’s Stake for you.&nbsp;</em></p>
                        <p>Second on our list, <a href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/stake-bitcoin-casino-review/" rel="noreferrer noopener">Stake Casino</a> stands out with its <strong>vast game selection </strong>and <strong>transparent bonus scheme. </strong>Just like BC.Game, Stake doesn’t offer a welcome bonus. Instead, they opt for <strong>regular rewards and promotions</strong>, all wager-free and available for instant withdrawal.</p>
                        <p>Stake is one of the top <a href="https://casinosblockchain.io/best-ethereum-casinos/" target="_blank" rel="noreferrer noopener">Ethereum casinos that accept MetaMask</a>. Its standout features include:&nbsp;</p>
                        <ul className="pl-4 list-none"><li><Check fontSize="small" color="success" className="mr-2 " /><strong>Top-notch sportsbook </strong>including niche sports like MMA, along with American football, soccer, and more</li><li><Check fontSize="small" color="success" className="mr-2 " /><strong>Provably fair</strong>, low house edge original games</li><li><Check fontSize="small" color="success" className="mr-2 " /><strong>2000+ slot games </strong>from all major providers</li><li><Check fontSize="small" color="success" className="mr-2 " /><strong>Multiple cryptos </strong>to choose from, including Ethereum</li><li><Check fontSize="small" color="success" className="mr-2 " /><strong>Accredited safety </strong>with the Crypto Gambling Foundation seal of approval</li></ul>
                        <p>Right now, Stake Casino is <strong>our favorite for sports betting</strong> for its vast selection and excellent odds. From American football and basketball to Dota 2 and everything in-between, it’s the best sportsbook out there.&nbsp;</p>
                        <p>But, once again, there are <strong>some downsides:</strong></p>
                        <p><strong> ❌ No welcome bonus</strong>&nbsp;</p>
                        <p> <strong>❌ </strong> <strong>Restricted countries</strong> (US, UK, some European countries, and more)</p>
                        <p> <strong>❌ </strong> <strong>Small fee for withdrawals</strong></p>
                        <p>Even with these drawbacks, though, Stake Casino is one of our favorite<strong> MetaMask casinos </strong>of 2022. Will it be yours? We’d love to hear your thoughts. Try it out today and come back to share your review.</p>
                    </section>
                    <section id="true-flip">
                        <h3>True Flip</h3>
                        <img src={TrueFlip} className="w-full h-auto" />
                        <p className="mt-2 text-sm">With 1600+ games, you’ll never run out of new things to play. And did we mention True Flip even has its own token? </p>
                        <p><em>With 1600+ games, you’ll never run out of new things to play. And did we mention True Flip even has its own token?&nbsp;</em></p>
                        <p>Ranking third, <a className="text-blue-600" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/trueflip-casino-review/" rel="noreferrer noopener">True Flip</a> is a <strong>crypto and fiat casino </strong>with an impressive background in blockchain. Not only do they accept a <strong>range of cryptocurrencies </strong>(including MetaMask-friendly ones), but True Flip also created their proprietary token. Not ready for crypto? You can also deposit from your <strong>e-wallet or credit card </strong>in fiat currency.&nbsp;</p>
                        <p>It gets better, too. Unlike our first two picks, True Flip has a <strong>no deposit bonus</strong> and a <strong>generous weekly cashback</strong>. </p>
                        <div className="w-full h-[180px] p-10 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h2 className="text-white text-lg md:text-2xl">
                                Get 10% back in True Flip&#8217;s weekly cashback!
                            </h2>
                        </div>
                        <p className="mt-4">And, there is <strong>plenty to keep you busy </strong>on the website. 1600+ games from a range of providers (and True Flip originals) offer many chances to win big.&nbsp;</p>

                        <p>Any hitch? Just some minor ones. Like other casinos with a Curaçao license, True Flip has <strong>restricted countries </strong>like the USA and UK. This also means you can’t <strong>deposit USD </strong>(since the US is restricted.) Finally, we’d like to see some <strong>provably fair games </strong>&#8211; so far, they’re lacking.&nbsp;</p>

                        <p>Even with these cons, True Flip remains our top recommendation if you’re <strong>looking for a no deposit bonus</strong>. We also think it’s great for <strong>players who get easily bored</strong>. With so many games on the platform, True Flip won’t let you down.&nbsp;</p>

                    </section>
                    <section id="cloudbet">
                        <h3>Cloudbet</h3>
                        <img src={Cloudbet2} className="w-full h-auto" />
                        <p className="mt-2"><em>Almost a decade in the game, Cloudbet remains one of the Internet’s favorite casinos.</em></p>
                        <p>The crypto world is new – and so is crypto gambling. Bitcoin was only invented in 2008. Founded in 2013, <a href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" rel="noreferrer noopener">Cloudbet </a>was one of the crypto casino pioneers. And, they have plenty more to offer:&nbsp;</p>
                        <p>✔️ It accepts <strong>23 different cryptos</strong> and fiat currency<strong>.&nbsp;</strong></p>
                        <p>✔️ You get a 100% match on your first deposit – <strong>up to 5 BTC</strong>.</p>
                        <p>✔️ You get a 100% match on your first deposit – <strong>up to 5 BTC</strong>.</p>
                        <p>✔️ They have <strong>thousands of casino games </strong>from all major provider.</p>
                        <p>✔️ Sports enthusiast? Cloudbet also offers a <strong>standout sportsbook </strong>product.</p>
                        <p>But, there are some downsides:</p>
                        <p><strong>❌&nbsp;KYC check for withdrawals</strong>, meaning Cloudbet isn’t anonymous.</p>
                        <p><strong>❌&nbsp;Restricted in certain countries</strong>, including the US, UK, and the Netherlands.</p>
                        <p>All in all, Cloudbet is still a <strong>reputable and high-quality online casino, </strong>and that applies to MetaMask users and all other gamblers alike.&nbsp;</p>
                    </section>
                    <section id="rocketpot" >
                        <h3>Rocketpot</h3>
                        <img src={DailyFreeRoll} className="w-full h-auto" />
                        <p className="mt-2"><em>Play the day away! With a 10% daily cashback, Rocketpot gives you double value for your money.</em></p>
                        <p>Next on the top-ten list, <a className="text-blue-600" href="https://casinosblockchain.io/rocketpot-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/rocketpot-review/" rel="noreferrer noopener">Rocketpot </a>is a <strong>newcomer on the crypto casino scene</strong>, but they’re definitely making a splash. With <strong>10% daily cashback </strong>on your net losses and <strong>3000+ games</strong>, they’re becoming a crypto gambling powerhouse. Oh, and let’s not forget the <strong>300+ different table games</strong> either.&nbsp;</p>
                        <div className="w-full h-[250px] p-10 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm text-white">Rocketpot is a crypto-only space</p>
                            <h2 className="text-white text-lg md:text-xl">
                                This casino doesn’t accept accept fiat currency at all. But, they do work with all major coins, including ETH and ERC-20 tokens you can transfer from your MetaMask account.
                            </h2>
                        </div>
                        <p className="mt-4">The fine print? While Rocketpot <strong>matches your initial deposit </strong>for up to 1BTC, the bonus is only available in BTC. If you’re a die-hard altcoin enthusiast, this simply won’t work for you. Fingers crossed that Rocketpot fixes the issue soon.&nbsp;</p>
                        <p>Other than that, we’re happy to report that Rocketpot is already a <strong>fan-favorite among crypto casino aficionados, </strong>and they’re growing by the minute. We’re excited to see where the project goes and how it grows!</p>
                    </section>
                    <section id="bitstarz">
                        <h3>BitStarz</h3>
                        <img src={BizstarzHomePage} className="w-full h-auto" />
                        <p className="mt-4"><em>Award-winning casino BizStarz offers exciting play and generous bonuses. Who wouldn’t be a fan?&nbsp;</em></p>
                        <p><a href="https://casinosblockchain.io/bitstarz-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/bitstarz-review/" rel="noreferrer noopener">BitStarz </a>is, pun intended, almost star. With multiple online gambling awards under its belt, the company is one of the Internet’s <strong>largest crypto casinos</strong>. With <strong>sleek, user-friendly design </strong>and a <strong>head-spinning selection </strong>of games, it’s no wonder they’re a top pick on so many casino reviews. On top of that, you get <strong>generous welcome bonus </strong>(double your deposit up to 1BTC) and <strong>cheeky promo games </strong>like Slot Wars and Table Wars.&nbsp;</p>
                        <p>Unlike other casinos in our selection, BitStarz gives <strong>equal attention to crypto and fiat. </strong>They don’t, however, have many MetaMask tokens. Right now, they accept: </p>
                        <ul className="flex flex-wrap list-none justify-start mb-2 gap-4">
                            <li>✔️ <strong>Bitcoin</strong></li>
                            <li>✔️ <strong>Bitcoin Cash</strong></li>
                            <li>✔️ <strong>Ethereum</strong></li>
                            <li>✔️ <strong>Degecoin</strong></li>
                            <li>✔️ <strong>Tether</strong></li>
                            <li>✔️ <strong>Litecoin</strong></li>
                        </ul>
                        <p>You can store most of these on MetaMask, but we still want more options, e.g., Chainlink.&nbsp;</p>
                        <p>But you might be thinking: </p>
                        <p><strong>Why <em>almost </em>a star?</strong></p>
                        <p>Unfortunately, users have reported <strong>withdrawal difficulties </strong>with BitStarz. </p>
                        <p>Like other providers, this casino too has <strong>restricted countries</strong>. If you reside in one of them, you’re expected to self-exclude – a.k.a. not play the game. However, BitStarz will let you register, deposit, and play without checking. </p>
                        <div className="w-full h-[150px] p-10 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h3 className="text-white text-lg md:text-xl">
                                Come withdrawal time BitStarz a history of refusing payouts due to player location.
                            </h3>
                        </div>
                        <p className="mt-4">To add insult to injury, users have complained that <strong>customer support was unhelpful</strong>, sometimes downright rude when dealing with this issue.</p>
                        <p>So should you risk it with BitStarz? Thankfully, you don’t have to. </p>
                        <p>Since the casino offers a <strong>no deposit bonus </strong>(you get to play <em>without </em>spending your own money), you can have your proverbial cake and eat it, too. We suggest taking advantage of this promotion to try out the casino before committing your crypto. This way, you get a feel for the gameplay, but you’re not risking any money. It’s a win-win!</p>
                        <h3>King Billy Casino</h3>
                        <img src={kingbillyCasino} className="w-full h-auto" />
                        <p className="mt-4"><em>Don’t let the medieval theme fool you – this is a blockchain-enthusiastic casino. Long live the king!</em></p>
                        <p><a href="https://casinosblockchain.io/king-billy-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/king-billy-casino-review/" rel="noreferrer noopener">King Billy</a> has been on our radar for a while now. It consistently <strong>ranks high on our selections</strong>, wins <strong>industry-leading awards</strong>, and <strong>grows in players </strong>by the minute.&nbsp;</p>
                        <p>What is their secret?&nbsp;</p>
                        <p>For starters, King Billy gives you <strong>up to 5 BTC </strong>in welcome bonuses alone!&nbsp;</p>
                        <p>The platform also has a <strong>unique take on the online betting scene. </strong>Instead of looking super-futuristic, they have a medieval theme complete with crowns, scrolls, and quills.&nbsp;</p>
                        <p>We enjoy the fresh approach and <strong>love the games</strong> even more. You’ll find <strong>all the classics</strong> like NetEnt’s Dead Or Alive alongside <strong>new and exciting slots</strong>, jackpots, and a wide range of table games.&nbsp;</p>
                        <p>The <strong>downside for MetaMask users</strong>? King Billy <strong>emphasizes Bitcoin </strong>and only offers a couple of other cryptos. Granted, these include Ethereum, but other altcoins are sadly missing.&nbsp;</p>
                        <h3>mBit</h3>
                        <img src={mBitCasino} className="w-full h-auto" />
                        <p className="mt-4"><em>Backed by a major mother company, mBit is well-loved for its lavish bonuses and iron-clad safety. Did we mention the excellent VIP program, too? </em></p>
                        <p>Another <strong>big player in the (new) crypto game. </strong>Not only does <a className="text-blue-600" href="https://casinosblockchain.io/mbit-bitcoin-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/mbit-bitcoin-casino-review/" rel="noreferrer noopener">mBit </a>have seven years of experience, but their mother company owns <strong>35 other online casinos. </strong>We love new and exciting companies; however, we know <strong>experience means security. </strong>Whether you’re gambling in BTC or ETH, mBit has your back.&nbsp;</p>
                        <p>But let’s talk about the exciting stuff, too.&nbsp;</p>
                        <p>It all starts with the <strong>generous welcome bonus</strong>:</p>
                        <div className="w-full h-[150px] p-10 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h3 className="text-white text-lg md:text-xl">
                                When you first get on the platform, mBit offers up to 5 BTC + 300 free spins in rewards.
                            </h3>
                        </div>
                        <p className="mt-4">Even better, these are <strong>also available in other cryptocurrencies. </strong>Most MetaMask users, for example, will be playing with Ethereum. No worries – you’ll still get the same terrific bonus.&nbsp;</p>
                        <p>mBit also has one of the <strong>best VIP programs </strong>we’ve seen in an online casino. From VIP-only rewards to your own virtual butler service, this MetaMask casino sure knows how to reward its loyal customers.&nbsp;</p>
                        <p>So, is there a flipside? One of mBit’s major drawbacks is the <strong>lack of provably fair games. </strong>While their background is solid, we still want to see for ourselves – can we trust mBit? So, until they introduce provably fair options, this <strong>otherwise stellar casino</strong> stays at No. 8 on our list.&nbsp;</p>
                        <h3>EarnBet</h3>
                        <img src={EarnBetHomepage} className="w-full h-auto" />
                        <p className="mt-4"><em>The world’s first decentralized casino – here’s what that means for players like you:  </em></p>
                        <p>Blockchain technology is exciting because it allows us to <strong>decentralize virtually everything</strong>. Why not casinos? <a className="text-blue-600" href="https://casinosblockchain.io/earnbet-review/" target="_blank" rel="noreferrer noopener">EarnBet </a>is here to fill that gap.&nbsp;</p>
                        <p>Founded in 2016, EarnBet takes <strong>casino Dapps to the next level. </strong>This is a <strong>complete online casino </strong>with all your favorite games and even a welcome bonus.&nbsp;</p>
                        <p>The twist? You also <strong>earn BET tokens </strong>as you bet – and <strong>BET holders get the casino’s profit. </strong>It’s almost hard to get your head around it. The house always wins, but with EarnBet, you <strong>get a share of the casino’s money.
                        </strong>Talk about a breakthrough!</p>
                        <p>Aside from this revolutionary approach, EarnBet also offers an <strong>impressively low house edge</strong>. In this MetaMask casino, your Return-to-Player percentage can be <strong>as high as 99.5% </strong>– we love these numbers. On top, all games are <strong>100% provably fair, </strong>so you know you’re not being tricked.</p>
                        <p>But, there is a tradeoff. Major <strong>game producers are missing, </strong>and original games don’t shine with production value. There are also <strong>no slots </strong>on EarnBet, which is a significant drawback.&nbsp;</p>
                        <p>Ultimately, EarnBet has improvements to make, but it’s still an exciting project. Let’s see where decentralization takes them!</p>
                        <h3>BaoCasino</h3>
                        <img src={OnlineCasino} className="w-full h-auto" />
                        <p className="mt-2 text-sm">2000+ exciting games, no-fee withdrawals, and plenty of bonuses – Bao delivers over and over again. </p>
                        <p><em>2000+ exciting games, no-fee withdrawals, and plenty of bonuses – Bao delivers over and over again.&nbsp;</em></p>
                        <p>When it comes to <strong>game variety</strong>, <a href="https://casinosblockchain.io/bao-casino-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/bao-casino-review/" rel="noreferrer noopener">Bao Casino</a> doesn’t skimp. The Cyprus-based site boasts <strong>over 2000 titles </strong>from big-name developers and up-and-coming producers alike. Bao Casino boasts a <strong>huge slots collection, big-win jackpots, </strong>and a range of <strong>live casino games </strong>to enjoy.&nbsp;</p>
                        <p>But, there is a catch. Bao’s portfolio may be impressive, but <strong>crypto gambling is limited </strong>to certain brands. If you want more options, you’d still go back to fiat.&nbsp;</p>
                        <p>So should you gamble crypto? We vote yes and here’s why:&nbsp;</p>
                        <div className="w-full h-[150px] p-16 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-white text-sm">Bao Casino</p>
                            <h3 className="text-white md:text-2xl my-0">
                                No-fee withdrawals!
                            </h3>
                        </div>
                        <p>Most online casinos charge you for taking out your money. It’s a small fee, but a fee nonetheless. Not Bao Casino. Here, all crypto withdrawals are <strong>free and instant </strong>– and there is no maximum withdrawal either. You <strong>only pay for fiat withdrawals </strong>which is where the 7.5% withdrawal fee applies.</p>
                    </section>
                    <section id="how-we-ranked">
                        <h2>How We Ranked the Best MetaMask Casinos	</h2>
                        <p>Now that we covered our top picks, you might be wondering:&nbsp;</p>
                        <p><strong>Why </strong><strong><em>these </em></strong><strong>casinos?&nbsp;</strong></p>
                        <p>As the crypto betting world grows, new casinos seem to pop up every day. It’s a competitive landscape, so we want to be completely transparent about our process.&nbsp;</p>
                        <p><strong>Here is how we analyzed &amp; ranked the best MetaMask casinos:&nbsp;</strong></p>
                        <ol className="is-style-dotted-list"><li>We <strong>read through reviews </strong>from avid players like you. We made a list of casinos that people are loving – and noted the complaints they had, too.&nbsp;</li><li>We <strong>signed up for the casino</strong>, creating multiple accounts. Why? Because we want to test every aspect of gameplay and because we know opinions can be subjective.&nbsp;</li><li>We <strong>deposited real money</strong> using MetaMask. We only included casinos where the experience was fast and smooth.&nbsp;</li><li>We <strong>played the games </strong>– wins, losses, they all teach you a lesson. We were looking for large portfolios, exciting new games, and multiple game providers, as well as a lower house edge.&nbsp;</li><li>We <strong>evaluated our wins</strong>, including any bonuses and promos.&nbsp;</li><li>We <strong>withdrew our money</strong> and rated the process. Was it easy? Fast? Any fees?&nbsp;</li><li>We <strong>contacted customer service </strong>to make sure they’re responsive and friendly. You don’t want a company that disappears at the first issue.&nbsp;</li></ol>
                        <p>Finally, we compiled all that information into a <strong>concise, to-the-point review </strong>and ranked our favorite casinos. We’d never recommend a platform that we ourselves wouldn’t use – that’s why getting into the top 10 MetaMask casinos was so competitive.&nbsp;</p>
                    </section>
                    <section id="is-metamask-safe">
                        <h2>Is MetaMask Safe for Gambling?	</h2>
                        <p>Short answer: yes, it is.&nbsp;</p>
                        <p>MetaMask is a reliable cryptocurrency wallet, and it’s casino-friendly. Let’s break it down:&nbsp;</p>
                        <h3>Are You <em>Allowed </em>to Use MetaMask for Gambling?</h3>
                        <p>Some crypto wallets will restrict what you can pay for. Not MetaMask.&nbsp;</p>
                        <div className="w-full h-[150px] p-16 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h3 className="text-white md:text-xl my-0">
                                The MetaMask terms of use don’t restrict gambling or any other activities.
                            </h3>
                        </div>
                        <p className="mt-4">As long as you don’t break local laws (e.g., by visiting an online casino if you’re underage), you are good to go.&nbsp;MetaMask is also a popular gambling wallet at <a className="text-blue-600" href="https://casinosblockchain.io/metaverse-gambling/" target="_blank" rel="noreferrer noopener">Metaverse casinos</a>. </p>
                        <h3>Is MetaMask a Secure Wallet?</h3>
                        <p>MetaMask is free and user-friendly. But will it protect your precious crypto?&nbsp;</p>
                        <p>For the most part, yes.&nbsp;</p>
                        <p>With MetaMask, your <strong>private key stays private. </strong>The team behind the wallet doesn’t have access to this unique code – meaning they can’t access your assets either. Remember, “not your keys, not your coins”. MetaMask gets a big green check for this one.&nbsp;</p>
                        <p>But can your wallet still be compromised?&nbsp;</p>
                        <p>Yes, and here is the most common way that would happen:&nbsp;</p>
                        <div className="w-full h-[150px] p-16 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h3 className="text-white md:text-xl my-0">
                                You can lose your money if you share your private key or Seed Phrase.
                            </h3>
                        </div>
                        <p className="mt-4">MetaMask doesn’t know your key. So, if you ever lose your password, they give you a secret recovery phrase or a seed phrase. It’s a 12-word sequence to help you recover the wallet if you ever forget your password.&nbsp;</p>
                        <p>To protect yourself:</p>
                        <p><strong>Write it down and keep it safe.</strong></p>
                        <p>Anyone that has your secret phrase can access your wallet and steal your crypto. Don’t let that happen. Avoid sharing your seed phrase or private key with anyone – and keep both in a safe location (ideally, several safe locations.)</p>
                    </section>
                    <section id="getting-started">
                        <h2>Getting Started at MetaMask Casinos</h2>
                        <p>MetaMask is safe, and it’s one of your best options if you want to <a className="text-blue-600" href="https://casinosblockchain.io/is-crypto-gambling-legal/" target="_blank" rel="noreferrer noopener">gamble with crypto legally</a>, without breaking laws or service <em>Terms and conditions</em>. Plus, it’s also one of the <strong>easiest wallets to use. </strong>Let’s go through the steps of setting it up together:&nbsp;</p>
                        <h3>Install the App or Extension</h3>
                        <img src={MetaMaskHomePage} className="w-full h-auto" />
                        <p className="mt-4"><em>Follow the download link from the official MetaMask.io page to avoid scammers.</em></p>
                        <p>MetaMask is both a mobile app and Chrome extension. </p>
                        <p><strong>To install it:&nbsp;</strong></p>
                        <ul className="is-style-dotted-list"><li>Go to <em>Metamask.io</em>.</li><li>Click <em>Download now</em>.</li><li>Choose either <em>Chrome, iOS, or Android.&nbsp;</em></li><li>Click <em>Install MetaMask for Chrome/iPhone/Android </em>to begin the setup.</li></ul>
                        <p>Now, let’s talk about getting your new wallet up and running:</p>
                        <h3>On Desktop</h3>
                        <p>The <em>Install MetaMask for Chrome </em>button will send you to the Chrome web store. Click <em>Add to Chrome </em>to begin the download.&nbsp;</p>
                        <p>Once the extension installs, you can either log into an old wallet (with your seed phrase) or start a new one. </p>
                        <p>For this tutorial, we’re starting a new one:</p>
                        <p>✔️ First, <strong>set up a secure password</strong>. You have to use at least eight characters.&nbsp;</p>
                        <p>✔️ Watch the seed phrase explainer video.&nbsp;You will <strong>see your seed phrase</strong> – click to unlock:</p>
                        <img src={SecretPhrase} className="w-full h-auto" />
                        <p >✔️ <strong>Write down your seed phrase.&nbsp;</strong>Confirm you have it by ordering the words correctly.&nbsp;We recommend you keep your secret recovery phrase in multiple locations, too. This way, if one notebook/device gets destroyed, your wallet is still safe.</p>
                        <p>Oh, and the good news is you’re all set – your new MetaMask wallet is ready to go.&nbsp;</p>
                        <h3>On Mobile</h3>
                        <p>Using MetaMask on your Android or iPhone device <strong>isn’t that different from desktop</strong>. After installation, you get three options:</p>
                        <ul className="is-style-checked-list"><li>Create a new wallet</li><li>Import using seed phrase&nbsp;</li><li>Sync with MetaMask extension</li></ul>
                        <p>To create your wallet, you follow the <strong>same steps as on desktop</strong>. Start with a secure password. Then, unlock and write down your seed phrase. Confirm the phrase, and you’re good to go.&nbsp;</p>
                        <h3>Making Casino Deposits With MetaMask</h3>
                        <p>Your MetaMask wallet can hold <strong>any ERC-20 token</strong> – Ethereum, Chainlink, <a className="text-blue-600" href="https://casinosblockchain.io/tether-casinos/" target="_blank" rel="noreferrer noopener">Tether</a>, and more. To make a casino deposit, first copy your casino’s address. You’ll see this when you first sign up.&nbsp;</p>
                        <div className="w-full h-[150px] p-16 flex justify-center  flex-col bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <h3 className="text-white md:text-xl my-0">
                                Go to MetaMask &gt; Send. Paste the address, then confirm the transaction. All done!.
                            </h3>
                        </div>
                        <p className="mt-4">The deposit might take a few minutes (or even an hour) to appear on your account. This depends on how busy the network is and, for some coins, the gas fee you pay. But, worry not. Your crypto is well on its way to your casino account. Ready to play!</p>
                    </section>
                    <section id="final-thoughts">
                        <h2>Final Thought</h2>
                        <p className="mt-4">MetaMask is the world’s leading <strong>Ethereum and ERC-20 wallet</strong>. Easy-to-use, secure, and accessible – we get why you love it. And, now you can also <strong>play your favorite casino games </strong>without leaving the cryptosphere.&nbsp;</p>
                        <p>Our MetaMask casino picks offer <strong>everything from sports betting to slots</strong>, plus lucrative bonuses and VIP programs. What is your favorite crypto casino? Let us know in the comments below:&nbsp;</p>
                    </section>
                    <section id="FAQ">
                        <h2>Frequently Asked Questions</h2>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Can I Trust MetaMask?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">MetaMask has multilayered security features that keep your money safe. It’s also one of the world’s most popular crypto wallets, trusted by millions. However, practicing digital safety is essential - keep your seed phrase secret, learn how to avoid phishing scams, and avoid leaving large amounts of money on MetaMask.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is It Safe to Leave Coins in MetaMask?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Leaving small amounts of crypto on MetaMask is perfectly fine. For larger sums, invest in a cold wallet, which is far more secure.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is MetaMask a Cold or Hot Wallet?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    MetaMask is a hot wallet since it’s connected to the Internet. Hot wallets have multiple safety features, but they’re still less secure than a cold wallet. Any money that you won’t be spending soon is safer in cold storage.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What Can I Buy With Metamask?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">Yes,
                                    You can use MetaMask to shop in a vast range of locations. From tech gadgets to clothes and (of course) MetaMask casinos, the wallet has tons of use cases, and they’re growing by the minute.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-2xl shadow-orange-400 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#quick-guide" className="quick-guide hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Quick Guide
                            </li>
                        </a>
                        <a href="#supported-currencies" className="supported-currencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                In-Depth Reviews
                            </li>
                        </a>
                        <a href="#bc-game" className="bc-game hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BC.Game Casino
                            </li>
                        </a>
                        <a href="#stake-casino" className="stake-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Stake Casino
                            </li>
                        </a>
                        <a href="#true-flip" className="true-flip hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                True Flip
                            </li>
                        </a>
                        <a href="#cloudbet" className="cloudbet hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cloudbet
                            </li>
                        </a>
                        <a href="#rocketpot" className="rocketpot hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Rocketpot
                            </li>
                        </a>
                        <a href="#bitstarz" className="bitstarz hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BitStarz
                            </li>
                        </a>
                        <a href="#how-we-ranked" className="how-we-ranked hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                How We Ranked the Best MetaMask Casinos
                            </li>
                        </a>
                        <a href="#is-metamask-safe" className="is-metamask-safe hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Is MetaMask Safe for Gambling
                            </li>
                        </a>
                        <a href="#getting-started" className="getting-started hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Getting Started at MetaMask Casinos
                            </li>
                        </a>
                        <a href="#final-thoughts" className="final-thoughts hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Final Thoughts
                            </li>
                        </a>
                        <a href="#FAQ" className="FAQ hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Frequently Asked Questions
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
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


const MainPage3 = () => {
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

export default MainPage3;