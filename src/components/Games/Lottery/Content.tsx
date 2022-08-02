import mbitCasinoBanner from "../../../Assets/images/Content/Lottery/mbit-casino-banner.png"
import RocketGameLogo from "../../../Assets/images/Content/Lottery/rocket-game-logo.png"
import TrichLogo from "../../../Assets/images/Content/Lottery/trich-logo.png"

import backgroundImg from "../../../Assets/images/Header.svg"


import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import { ISiteRankBlogCardObj } from "../../../Interfaces";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";
import { siteDatas } from "../../../Interfaces/SiteDatas"

const dummyInfos: Array<ISiteRankBlogCardObj> = [siteDatas[0], siteDatas[1], siteDatas[15], siteDatas[17]];

const testedCasinos: Array<ISiteRankBlogCardObj> = [
    siteDatas[0],
    siteDatas[1],
    siteDatas[17],
    siteDatas[3],
    siteDatas[13],
];


const Content = () => {
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
        <div className="w-full flex gap-6 justify-center ">
            <div className="xl:w-8/12 w-full h-full bg-white rounded-md shadow-sm shadow-gray-400 mb-10">
                <div className="blog pl-24 pt-12 pb-16 w-10/12">
                   <p>Fast cars. Luxury homes. Extravagant journeys. Who doesn't have a secret&nbsp;<em>if-I-ever-win-the-lottery</em>&nbsp;wishlist?</p>
                <p>This game of chance is so widely accepted people often forget that buying a lottery ticket is just another form of gambling.</p>
                <p>The fact is that the lottery is everywhere, including at&nbsp;<a className="text-blue-700" target="_blank" href="https://casinosblockchain.io/" rel="noreferrer noopener">blockchain casinos</a>.</p>
                <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                    <p className="text-sm  text-white opacity-50">CRYPTOCASINO LOTTERY GAMES</p>
                    <div className="h2 text-white text-lg md:text-2xl">
                        That's right - you can now play lottery games at some of the best Bitcoin casinos!
                    </div>
                </div>
                <p className="mt-2">Playing lottery games with Bitcoin and other cryptocurrencies is possible nowadays, but it's not quite the same as gambling at your local café.</p>
                <p>Before you head straight into the first Bitcoin lottery casino that you can find, we suggest you browse through this guide.</p>
                <p>By the time you're finished, you should be able to:</p>
                <ol className="is-style-dotted-list"><li>Find the best Bitcoin lottery casinos and Dapps.</li><li>Select the very best casino for you.</li><li>Play and pay as safely as possible.</li></ol>
                <section id="where-to-play">
                    <div className="h2">Where To Play Lottery Online With Bitcoin?	</div>
                    <p>Although some of the very best Bitcoin casinos do offer some sort of lottery game, not all do.</p>
                    <p>Most importantly, not all casinos that do have a <strong>helpful customer support team</strong>, are <strong>reliable</strong> and <strong>engaging</strong>, and offer <strong>rewarding promotions.</strong></p>
                    <p>With that in mind, we selected the very best Bitcoin casinos and Dapps where you can find lottery games.</p>
                </section>
                <section id="lottery-bitcoin-casinos">
                <div className="h3">Best Bitcoin Casinos With Lottery Games	</div>
                <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                    {
                        [siteDatas[8], siteDatas[19], siteDatas[24]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                <div className="h3">mBit Casino</div>
                <img src={mbitCasinoBanner} alt="mbitCasinoBanner" />
                <p className="mt-2">Our top-choice for lottery games is <a className="text-blue-700" href="https://casinosblockchain.io/go/mbit/" data-type="URL" data-id="/go/mbit/">mBit casino</a>.</p>
                <p>In mBit's vast game portfolio, you can find a <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-live-casino/">live casino</a> lottery game from Ezugi called <em>Bet on Numbers</em>, which we strongly recommend.</p>
                <p>Apart from that, you play thousands of slot machines, table games, live games, and more with coins such as Bitcoin, Bitcoin Cash, and Ethereum.</p>
                <p>All those highlights are nice, but it was <strong>mBit's pristine reputation among cryptocurrency gamblers</strong> that sealed the deal for us.</p>
                </section>
                <section id="lottery-dapps">
                    <div className="h3">Lottery Dapps - Decentralized Applicationss	</div>
                    <p>Lottery games are not as common yet in Dapps as they are in online casinos, but they are getting more and more popular by the day.</p>
                    <p>How do we know that? Because several up-and-coming Dapps are now creating their own lottery games.</p>
                    <p><strong>RocketGame</strong></p>
                    <img src={RocketGameLogo} alt="RocketGameLogo" />
                <p className="mt-2"><a className="text-blue-700" target="_blank" href="https://rocketgame.io/" rel="noreferrer noopener">RocketGame</a>&nbsp;is quite special. Not only does it offer a large number of games, but it also offers bonuses, and it even has a VIP program.</p>
                <p>That kind of player experience is something you don't often find in Dapps!</p>
                <p>Although you can't play lottery games here yet, the casino has a provably fair lottery in development. In the meantime, we suggest you give a go at RocketGame's 13 available provably fair games</p>
                <p><strong>Trich</strong></p>
                <img src={TrichLogo} alt="TrichLogo" />
                <p className="mt-2">Another Dapp that is developing a Lottery game is <a className="text-blue-700" rel="noreferrer noopener" href="http://trichshot.io/" target="_blank">Trich</a>.</p>
                <p>Like many others, Trich is a Dapp which was created with Tron players in mind.</p>
                <p>At Trich, you can earn tokens that will entitle you to a part of its revenue. </p>
                <p>While you wait for Trich's upcoming lottery, we suggest you try its very own lotto game.</p>
                </section>
                <section id="choosing-a-casino">
                    <div className="h2">How To Choose A Good Casino For Lottery Games	</div>
                <p>Playing the lottery might be easy, but looking for a casino where you can play it with Bitcoin is anything but.</p>
                <p>Not only do you&nbsp;<strong>have to make sure there are enough games</strong>, but you should also&nbsp;<strong>look for a trusted website</strong>.</p>
                <p>&nbsp;Most importantly, you should look for a casino that suits your play-style.</p>
                <p>The following tips might help you make a decision:</p>
                <ol className="is-style-dotted-list"><li>Find out about the prize money.</li><li>Look at the casino's game portfolio.</li><li>Learn about the casino's reputation.</li></ol>
                <div className="h3">Find Out About The Prize Money</div>
                <p>Knowing how much you're expected to make is especially important when playing lottery games.</p>
                <p>However, the value of the said prize is relative. You should always also consider the following factors when picking a lottery game:</p>
                <ul className="is-style-checked-list_sm"><li>The maximum and minimum bets.</li><li>The house edge.</li></ul>
                <p>For instance, a casino with a lower maximum prize but with a lower house edge could offer more value for money than one with an overall higher prize.</p>
                <div className="h3">Look At The Casino's Game Portfolio</div>
                <p>Lottery games are fun, but you might want to switch it up every once in a while.</p>
                <p>That's why it's always good to check what options you can have at your chosen casino before signing up.</p>
                <p>What's more, a casino with a larger game portfolio is more likely to a popular and trustworthy casino.</p>
                <div className="h3">Learn About The Casino's Reputation</div>
                <p>Only casinos with a verifiable license - especially those offering provably fair games - can be really reliable.</p>
                <p>Therefore, you should always confirm that the casino has a valid license before signing up.</p>
                <p>We also suggest you learn more about the casino's reputation within the blockchain casino's community:</p>
                <ul className="is-style-checked-list_sm"><li>Read forum threads about the casino.</li><li>Look for user reviews.</li><li>Read professional reviews at sites like ours.</li></ul>
                <p>You can always <a className="text-blue-700" href="https://casinosblockchain.io/">check our list of reviewed casinos</a> to have a full picture of the casino before you give it a go.</p>
                </section>
                <section id="available-cryptocurrencies">
                    <div className="h2">Playing Lottery With Cryptocurrencies	</div>
                    <p>If you are looking to play a Lottery game, you will be able to do so with many of the most-used cryptocurrencies. </p>
                    <ul className="is-style-checked-list_bubbles"><li><a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-casinos/">Bitcoin</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-cash-casinos/">Bitcoin Cash</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/litecoin-casinos/">Litecoin</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/best-ethereum-casinos/">Ethereum</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/dogecoin-casinos/">Dogecoin</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/tether-casinos/">Tether</a></li></ul>
                    <p>Other less-common coins such as <a className="text-blue-700" href="https://casinosblockchain.io/dash-casinos/">Dash</a> or <a className="text-blue-700" href="https://casinosblockchain.io/monero-casinos/">Monero</a> are also available.</p>
                    <p>As the games are becoming more popular at blockchain casinos, we believe this list will only expand.</p>
                </section>
                <section id="bitcoin-lottery-safety">
                    <div className="h3">Is It Safe To Play The Lottery With Bitcoin?	</div>
                    <p>Because Bitcoin lotteries are a relatively new invention, some blockchain technology newcomers might be wary to give it a go.</p>
                    <p>However, cryptocurrency gambling is not inherently riskier than playing with fiat money.</p>
                    <p>Basically, if you take the right steps to protect yourself when gambling with Bitcoin and other coins, you should be safe:</p>
                    <ol className="is-style-dotted-list"><li>Choose reputable casinos with valid gambling licenses. </li><li>If possible, play at provably fair lotteries.</li><li>Play responsibly and for fun.</li></ol>
                    <div className="h2">Game Rules	</div>
                <p>Everybody knows how to play the lottery:</p>
                <ul className="is-style-checked-list_sm"><li>You buy a lottery ticket.</li><li>You pick a certain set of numbers (or have it already picked for you on the ticket).</li><li>You watch the numbers come out.</li><li>You win, or you lose.</li></ul>
                <p>Bitcoin lotteries and other online lotteries aren't any different. In fact, they might be the easiest of them all, since you can play from the comfort of your own house!</p>
                <p>If you're totally clueless about how lotteries work, just remember to <strong>compare the numbers on your ticket with the numbers that are drawn</strong>. </p>
                <p>Usually, you will need at least a few of the numbers on your ticket to match the drawn numbers for you to win anything.</p>
                <p>In an online casino, everything is automated, so the system will immediately tell you whether or not you've won.</p>
                </section>
                <section id="beginners-tips">
                    <div className="h2">Tips For Beginners	</div>
                    <p>Even with a game as simple as the lottery, there are some tips that can help you along.</p>
                    <p>The tips below can be especially useful for Bitcoin lottery players that just started playing with this cryptocurrency.</p>
                    <ul><li>As said before, only play at licensed or provably fair places.</li><li>Don't exceed your own budget.</li><li>Never drink and play.</li><li>Always remember that the Bitcoin lottery is a game and you should only play it to have fun.</li><li>Never see the lottery as an easy and sure way to win Bitcoin or other cryptocurrencies.</li><li>Verify if you can wager your bonus money with Lottery games.</li><li>Play conservatively at first. Start out by just buying one ticket or card at a time and see how it goes.</li><li>Follow the casino rules at all times.</li><li>Try different variations of the game to see which you like best.</li></ul>
                </section>							
                    <section id="FAQ" >
                        <div className="h3 mt-32">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I play Bitcoin lottery games?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>The first thing you've got to do is findind a casino where you can play it. Luckily, we've prepared a list of the best Bitcoin lottery casinos <a className="text-blue-700" href="https://casinosblockchain.io/lottery-bitcoin-sites/#where-to-play">right here</a>.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What's the best Bitcoin casino to play lottery games?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Our top pick for Bitcoin lottery casinos is <a className="text-blue-700" href="/go/mbit/">mBit </a>. mBit is a reputable blockchain casino with many promotions and a friendly customer support team.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Which lottery types are most common at Bitcoin casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Most lottery games at Bitcoin casinos have a pool of 50, 60, or 90 balls, from which 6 balls are picked.
                                    Bitcoin casinos with lottery games can also offer scratch cards.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-md shadow-slate-600 rounded-md sticky top-1">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#where-to-play" className="where-to-play hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#lottery-bitcoin-casinos" className="lottery-bitcoin-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casinos
                            </li>
                        </a>
                        <a href="#lottery-dapps" className="lottery-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Lottery Dapps
                            </li>
                        </a>
                        <a href="#choosing-a-casino" className="choosing-a-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Choose Good Casino
                            </li>
                        </a>
                        <a href="#available-cryptocurrencies" className="available-cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Available Cryptocurrencies
                            </li>
                        </a>
                         <a href="#bitcoin-lottery-safety" className="bitcoin-lottery-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Is It Safe?
                            </li>
                        </a>
                         <a href="#beginners-tips" className="beginners-tips hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Tips For Beginners
                            </li>
                        </a>
                        <a href="#FAQ" className="FAQ hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Frequently Asked Question
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Content