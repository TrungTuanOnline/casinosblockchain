import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import BcGame from "../../../Assets/images/Content/bcgame.png"


import backgroundImg from "../../../Assets/images/Header.svg"
import UclRounded from "../../../Assets/images/Content/Ucl-Rounded.png"
import mBitCasino2 from "../../../Assets/images/Content/mBit-Casino2.jpg"
import mBitCasino from "../../../Assets/images/Content/mBit-Casino.jpg"
import BitstarzHome from "../../../Assets/images/Content/bitstarz-home.png"
import FortuneJackHomepage from "../../../Assets/images/Content/fortune-jack-homepage.png"
import HippoPopStake from "../../../Assets/images/Content/hippo-pop-stake-casino.png"
import DogecoinPoker from "../../../Assets/images/Content/dogecoin-poker.png"

import { ISiteRankBlogCardObj } from "../../../Interfaces";

import { siteDatas } from "../../../Interfaces/SiteDatas";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";

const dummyInfos: Array<ISiteRankBlogCardObj> = [siteDatas[15], siteDatas[16]];

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
            <div className="xl:w-8/12 w-full h-full bg-white rounded-md shadow-sm shadow-gray-400 mb-10">
                <div className="blog pl-24 pt-3 pb-16 w-10/12">
                    <p><strong>Dogecoin casinos are on the rise! </strong>Between colorful slots and exciting poker games, you name it –  DOGE casinos have it. Read on to learn about the best Dogecoin casinos of 2022!</p>
                    <section id="what-is-it">
                        <div className="h2">
                            What is Dogecoin?
                        </div>
                        <p>Before we dig deeper into the <a className="text-blue-700" rel="noreferrer noopener" href="https://dogecoin.com/" target="_blank">Dogecoin</a> casino world, let’s have a look at the coin’s fascinating origin story.</p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Dogecoin&nbsp;was initially created as a joke by Jackson Palmer, based on the famous Doge meme. </strong></li>
                            <li>Much to its creator’s surprise, it became a real cryptocurrency,&nbsp;<a rel="noreferrer noopener" target="_blank" href="https://coinmarketcap.com/currencies/dogecoin/">trading alongside other, more serious coins</a>.</li>
                            <li>Its role in trying to take a Jamaican bobsleigh team to the Olympics raised mainstream curiosity over Dogecoin.</li>
                            <li>Celebrities and influencers on social media have helped maintain interest in Dogecoin.</li>
                        </ul>
                        <div className="w-full h-[240px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">Much Dogecoin. Such wow.</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                With backing from the likes of Elon Musk, Dogecoin is thriving against all odds!
                            </div>
                        </div>
                        <p className="mt-6">Dogecoin is also gaining traction in the gambling industry, with many <a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">Bitcoin casinos</a> adding DOGE as an altcoin alternative.</p>
                    </section>
                    <section id="best-casinos">
                        <div className="h2"> Best Dogecoin Casinos</div>
                        <p>Selecting a Dogecoin casino can seem daunting at first. After all, you want to make sure you’re playing at a trustworthy casino.</p>
                        <p>There are a few things you should always consider when looking for a new Dogecoin gambling website:</p>
                        <ol className="is-style-dotted-list">
                            <li>Is it safe?</li>
                            <li>Does it have your favorite games?</li>
                            <li>Are there any interesting promotions, including a good welcome bonus?</li>
                        </ol>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">Our casino reviews</a> try to answer those questions as thoroughly as possible.</p>
                        <p>With Dogecoin, however, we’ve looked at another factor. We call it <strong>the fun factor</strong>. After all, Dogecoin doesn’t take itself seriously, so neither should your choice of website.</p>
                        <p>That’s why <a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a>, with its awesome social features tops our <strong>list of best Dogecoin casinos</strong>:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[8]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <p className="mt-10">What makes <em>these </em>casinos our top DOGE pics? Let’s break it down:</p>
                        <div className="h3"><strong>BC.Game </strong></div>
                        <img src={BcGame} className="w-full h-auto" alt="bc-game" />
                        <p className="mt-4">Innovative and DOGE-friendly,<strong> </strong>BC.Game ranks first in our selection. Standout features include: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Low house edge</strong></li>
                            <li><strong>20 BC.Game originals</strong>, all provably fair</li>
                            <li><strong>100+ live tables</strong></li>
                            <li><strong>Fully DOGE-compatible </strong></li>
                            <li><strong>Social casino </strong>with rewards for participating in the community</li>
                        </ul>
                        <p className="mt-8">The only downside? BC.Game <strong>doesn’t offer a welcome bonus. Instead, you get free spins</strong> for a chance to win up to 1 BTC – far more than a regular deposit bonus, but there are no guarantees you’ll win . </p>
                        <p>Still, even with the bonus hitch, BC.Game remains our favorite DOGE casino: </p>
                        <p>? <strong>Dogecoin Compatibility: 5/5 </strong></p>
                        <p>BC.Game offers a wide range of games + unique social perks and it’s all available to Dogecoin players.  </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3"><strong>Stake Casino</strong></div>
                        <img src={UclRounded} className="w-full h-auto" alt="UclRounded" />
                        <p className="mt-4">Sports enthusiast? </p>
                        <p><a className="text-blue-400" href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake </a>is our <strong>top pick for Dogecoin sports betting </strong>and ranks second for DOGE casinos. Stake’s best perks include: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Robust sportsbook </strong>with all your favorite tournaments</li>
                            <li><strong>Provably fair games </strong>with low house edge</li>
                            <li><strong>Third-party games</strong>, including a range of popular providers</li>
                        </ul>
                        <p>Just like BC.Game, Stake doesn’t have a traditional welcome bonus. Instead, they have reward programs and a weekly giveaway for $5000. That, along with the sleek look and low house edge games more than make up for the lack.</p>
                        <p><strong>?</strong> <strong>Dogecoin Compatibility: 4.5/5 </strong> </p>
                        <p>Stake is fully DOGE-compatible. Both the casino product and sportsbook accept the altcoin along with other cryptos.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>
                        <div className="h3"><strong>mBit</strong></div>
                        <img src={mBitCasino2} className="w-full h-auto" alt="mBitCasino2" />
                        <p>Last on the top three list, mBit stands out with a <strong>huge welcome bonus </strong>of 110% and a range of fun games. Its main advantages include: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Fully DOGE-compatible </strong></li>
                            <li><strong>Large welcome bonus </strong>(110% up to the equivalent of 5 BTC)</li>
                            <li><strong>User-friendly </strong>on computer and mobile</li>
                        </ul>
                        <p>However, <a className="text-blue-700" href="https://casinosblockchain.io/mbit-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">mBit </a>lacks some <strong>key providers like NetEnt, Yggdrasil, or Quickspin</strong>. Cult classics are missing from mBit’s portfolio and so are provably fair games. Though the casino is licensed and trustworthy, we always recommend provably fair gambling if available. </p>
                        <p>? <strong>Dogecoin Compatibility: 4.5/5</strong></p>
                        <p>mBit offers plenty of DOGE-friendly fun and a generous bonus. We wish they had provably fair games, though. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={8}
                                siteIndex={8}
                                summaryData={siteDatas[8]}
                            />
                        </div>
                    </section>
                    <section id="dogecoin-dapps">
                        <div className="h3">Dogecoin Casino Dapps</div>
                        <p>We have bad news when it comes to Dogecoin Dapps.</p>
                        <p>As far as we could find, no casino Dapps were accepting Dogecoin.</p>
                        <p>However, both casino Dapps and Dogecoin have passionate users, and we might not have to wait long before they’re inevitably combined. We’ll keep you posted!</p>
                    </section>
                    <section id="bonuses">
                        <div className="h2">
                            Dogecoin Bonuses
                        </div>
                        <p>Dogecoin casino bonuses work <strong>like any other cryptocurrency</strong>. Usually, these are welcome promos (though there are some no deposit ones) for getting started in the casino. And we have to give it to DOGE casino bonuses – the large numbers look extremely enticing!</p>
                        <p>But don’t get too excited: because of the currency’s own low value, <strong>Dogecoin bonuses often give you less value for money </strong>than Bitcoin or Ethereum bonuses.</p>
                        <p>For instance, BitStarz’s fantastic <a className="text-blue-700" href="https://casinosblockchain.io/go/bitstarz/" target="_blank" rel="noreferrer noopener">100% up to 1,000,000 DOGE</a> first deposit bonus is a thing of beauty. However, its counterpart of up to 1 Bitcoin is worth considerably more.</p>
                        <p>You can also get free spin offers at Dogecoin casinos, some of which <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-no-deposit-bonuses/" target="_blank" rel="noreferrer noopener">without even making your first deposit</a>! </p>
                        <p>We selected the following three as the very best <strong>Dogecoin gambling bonuses</strong>:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[8], siteDatas[6], siteDatas[13]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <p className="mt-4">What makes these the best bonuses? </p>
                        <div className="h3"><strong>mBit Casino</strong></div>
                        <img src={mBitCasino} className="w-full h-auto" alt="mBitCasino" />
                        <p className="mt-4">
                            mBit gives you a 110% bonus on your initial deposit. Up to the equivalent of 5 BTC, too!
                        </p>
                        <p>At <strong>mBit Casino </strong>you get a <strong>110% gift </strong>on your original deposit. Many online casinos will match your first deposit – but mBit goes above and beyond. </p>
                        <p>The best part? </p>
                        <p>You’re not getting short-changed for using DOGE. The maximum bonus is the <strong>equivalent of 5 BTC</strong>, no matter the currency. At the time of writing, this means you can get almost $40,000 worth of Dogecoin – and this will likely go up. </p>
                        <div className="h3"><strong>BitStarz</strong></div>
                        <img src={BitstarzHome} className="w-full h-auto" alt="BitstarzHome" />
                        <p className="mt-4">Enjoy a generous welcome bonus + no deposit free spins at BitStarz!</p>
                        <p><strong>No deposit spins </strong>are few and far between in crypto casinos, but we’re happy to say BitStarz offers them. </p>
                        <p>As a new user, you get <strong>20 free spins</strong>, no strings attached. These aren’t play-for-fun spins either, you can <strong>win real prizes </strong>with them. </p>
                        <p>The catch? </p>
                        <p>You don’t need an initial deposit to get the free spins. However, you must <strong>deposit and play </strong>with your real money to withdraw any free spin earnings.</p>
                        <div className="h3"><strong>FortuneJack</strong></div>
                        <img src={FortuneJackHomepage} className='w-full h-auto' alt="FortuneJackHomepage" />
                        <p className="mt-4">Free spins for days – and with no limits on earnings, too!</p>
                        <p>Once again, a <strong>no deposit spin</strong> bonus! FortuneJack gives you <strong>up to 50 free spins </strong>and doesn’t limit your earnings on them, either. You’ll have to play real money to withdraw the prize – but this is still one of the most generous no deposit bonuses we’ve seen!</p>
                    </section>
                    <section id="pros-and-cons">
                        <div className="h2">
                            Pros and Cons of Dogecoin Casinos
                        </div>
                        <p>Sure, Dogecoin might have <em>some </em>merit to it, plus Elon Musk’s blessing. But it’s still a meme coin.&nbsp;</p>
                        <p><strong>Why would you use DOGE to gamble?</strong> Let’s look at the pros and cons of Dogecoin casinos.&nbsp;</p>
                        <p>Some of the <strong>main perks</strong> of playing with DOGE include:&nbsp;</p>
                        <p>✔️ <strong>Low cost </strong>– Dogecoin has grown in the past few years, but it still stays under $1. This means you can play with smaller amounts – and use this to control your losses.&nbsp;</p>
                        <p>✔️ <strong>Small deposits are possible </strong>– Every casino has a minimum deposit. The catch? They vary across cryptos. So, while you can’t deposit $10 worth of Bitcoin (it’s under the minimum for most casinos), you can do it with DOGE.</p>
                        <p>✔️ <strong>Popularity </strong>– Dogecoin is one of the top cryptos in the world. You can buy it at virtually every exchange and play with it in many online casinos.&nbsp;</p>
                        <p>✔️ <strong>Volatility </strong>– DOGE’s price takes dramatic swings up and down. When you’re gambling with DOGE, in a way, you’re also betting on the price movements. If the coin suddenly starts trading up, your earnings automatically grow, too.&nbsp;</p>
                        <p>✔️ <strong>Privacy </strong>– This is an inherent perk of many cryptocurrencies. With DOGE, you can <a className="text-blue-700" href="https://casinosblockchain.io/anonymous-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">play anonymously</a>, keeping prying eyes away from your gambling.&nbsp;</p>
                        <p>But, the cute ol’ puppy isn’t without <strong>downsides</strong>:&nbsp;</p>
                        <p>❌ <strong>Volatility </strong>– That’s right, volatility can come back to haunt you. Major price movements can eat up your profits, so keep an eye on the markets.&nbsp;</p>
                        <p>❌ <strong>Volatility </strong>– That’s right, volatility can come back to haunt you. Major price movements can eat up your profits, so keep an eye on the markets.&nbsp;</p>
                        <p>❌ <strong>Easy to lose track </strong>– DOGE numbers are high, often in the millions. That’s why gambling with Dogecoin can feel like using play money. When a single DOGE is worth pennies, it’s easy to lose track and gamble much more than you originally intended?&nbsp;</p>
                        <p>❌ <strong>Not all casinos </strong>– While major crypto casinos accept Dogecoin, it’s still not as mainstream as BTC. Your preferred game hub might simply not offer the coin.&nbsp;</p>
                        <p>Ultimately, despite the cons, we think DOGE is a worthy coin to gamble with. But, if you’re looking for more stability, why not try a stablecoin like <a className="text-blue-700" href="https://casinosblockchain.io/tether-casinos/" target="_blank" rel="noreferrer noopener">Tether </a>instead?</p>

                    </section>
                    <section id="casino-games">
                        <div className="h2">
                            Casino Games You Can Play With Dogecoin
                        </div>
                        <p className="mt-3">Did you know you could play just about any casino game with Dogecoin?</p>
                        <p>That’s right: whether you’re looking for Dogecoin roulette, <a className="text-blue-700" href="https://casinosblockchain.io/slots-bitcoin-casino/" target="_blank" rel="noreferrer noopener">slots</a>, poker, or the best Dogecoin live tables around, you’ve got plenty of choices!</p>
                        <p><a href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">Provably fair</a> games are on the table, too. Granted, there aren’t many DOGE-friendly Dapps. However, plenty of ‘non-blockchain’ casinos offer provable fairness – our favorite is&nbsp;<a className="text-blue-700" rel="noreferrer noopener" target="_blank" href="https://casinosblockchain.io/stake-bitcoin-casino-review/">Stake casino</a>, which also has a stellar sports betting section.</p>
                        <div className="h3">Dogecoin Slots</div>
                        <img src={HippoPopStake} className="w-full h-auto" alt="HippoPopStake" />
                        <p className="mt-4"><em>HippoPop </em>is one of our top DOGE slots, available at Stake Casino and more</p>
                        <p>Dogecoin slots are everywhere! From the humblest newcomers to popular brands such as <a className="text-blue-700" href="https://casinosblockchain.io/netent-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">NetEnt</a>, Dogecoin casinos do their best to offer a varied number of choices.</p>
                        <p>While you have plenty of options at just about any Dogecoin gambling site, there is one that stands out from the rest.</p>
                        <p>With <strong>thousands of slot machines</strong>, including all the top studios available, plus a lower than usual house edge on them, Stake is our recommendation for your Dogecoin slot needs:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[1], siteDatas[0], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3">Dogecoin Poker</div>
                        <img src={DogecoinPoker} className="w-full h-auto" alt="dogecoin-poker.png" />

                    </section>

                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-md shadow-slate-600 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#what-is-it" className="what-is-it hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                What is Dogecoin?
                            </li>
                        </a>
                        <a href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best Dogecoin Casinos
                            </li>
                        </a>
                        <a href="#dogecoin-dapps" className="dogecoin-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Dogecoin Dapps
                            </li>
                        </a>
                        <a href="#bonuses" className="bonuses hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bonuses
                            </li>
                        </a>
                        <a href="#pros-and-cons" className="pros-and-cons hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Pros and Cons
                            </li>
                        </a>
                        <a href="#casino-games" className="casino-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casino Games
                            </li>
                        </a>
                        <a href="#transactions" className="transactions hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Transactions
                            </li>
                        </a>
                        <a href="#doge-vs-btc" className="doge-vs-btc hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Dogecoin Vs Bitcoin
                            </li>
                        </a>
                        <a href="#legal-aspects" className="legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Safety & Legality
                            </li>
                        </a>
                        <a href="#legal-aspects" className="legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
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

        </div >
    )
}

const Content = () => {
    return (
        <div className="h-full w-full flex flex-col items-center bg-[#F8F9FC]">
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center ">
                <MainContent />
                {/* <div className="p-10 w-full flex flex-col justify-center">
                    <div className="h1">Latest News</div>
                    <ReadMoreCards />
                </div> */}
            </div>
        </div>
    )
}

export default Content;