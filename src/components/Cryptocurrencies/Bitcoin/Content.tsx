import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import { ISiteRankBlogCardObj } from "../../../Interfaces";

import { siteDatas } from "../../../Interfaces/SiteDatas";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";

import backgroundImg from "../../../Assets/images/Header.svg"
import BCGameCasino from "../../../Assets/images/Content/bcgame.png"
import CasinoStake from "../../../Assets/images/Content/casino-stake.png"
import trueflip4 from "../../../Assets/images/Content/trueflip4.jpg"

const dummyInfos: Array<ISiteRankBlogCardObj> = [siteDatas[0], siteDatas[1], siteDatas[4], siteDatas[8], siteDatas[6]];

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
                    <section id="getting-started">
                        <div className="h1">Getting Started at Bitcoin Casinos</div>
                        <p>You’ve decided you want to try your luck at a Bitcoin casino or gambling site, but you don’t know how to get started. We’re here to help.</p>
                        <p>There are many factors to consider when choosing which casinos are worthy of your money, especially if you’re playing with&nbsp;cryptocurrencies.</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Do they offer&nbsp;<a href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair</a>&nbsp;games?</li>
                            <li>Are they&nbsp;available in your language?</li>
                            <li>Are they a <a href="https://casinosblockchain.io/">trustworthy casino</a>?</li>
                            <li>What bonuses do they offer so you can get more value for your money?</li>
                            <li>Can you play anonymously?</li>
                        </ul>
                        <p>Finding all this information can be a bit overwhelming. </p>
                        <p>That’s why we’re here. We regularly assess the most popular Bitcoin casinos and rate them on key factors like game selection, bonuses, payment options, safety, and how helpful is their customer support.</p>
                        <div className="h3">We Don’t Just List Bitcoin Casinos: We Test Them</div>
                        <ol className="is-style-dotted-list">
                            <li><strong>We create real accounts anonymously.</strong>
                                <p>And not just one: several. Even though a single person writes most of our reviews, our entire entire teamteam helps test the Bitcoin casinos.</p>
                                <p> Why? Because we believe that all playing experiences are subjective, including those of seasoned reviewers such as ourselves.</p></li>
                            <li><strong>We deposit, using our own money.</strong><br /><strong><br /></strong>Faucets and free bonuses are great, but there’s nothing like having something real at stake if you’re trying to evaluate a casino.
                                <p>We also look at the different deposit methods available and how fast and easy (or not) the whole process is. And, of course, we redeem deposit bonuses (if available) to understand if they are worth your time.</p></li>
                            <li><strong>We play. We win. We lose.</strong><br /><strong><br /></strong>When playtesting a casino, we try out as many games as possible. We accept our losses and rejoice with every winning spin or perfectly placed bet. Then, we try to withdraw our winnings.
                                <p>Does the casino unnecessarily complicate the process? Do they hold our money? Are there any cumbersome wagering requirements? Our reviews find answers to these questions based on our real-life experiences.</p></li>
                            <li><strong>We evaluate Bitcoin compatibility. </strong><br />For every coin-specific review, we make sure to look into compatibility specifics. Bitcoin players don’t look for the same things Ethereum or USDT gamblers do – so why should we?
                                <p>For our Bitcoin casino ranking, we gave extra points for providing live exchange rates on the website, generous BTC bonuses, and unique games. </p>
                                <p>We don’t want to be mean, but we also remove points if these things are lacking. For example, Crash is a game the Bitcoin gambling community loves. If it’s missing from a casino, is it really Bitcoin-friendly? Or, if it’s Bitcoin-friendly, is it worthy of a top BTC casinos list? Not on our watch.  </p></li>
                            <li><strong>We talk to customer support.</strong><br /><strong><br /></strong>Does the casino have a live chat? How many languages do they speak? Do they provide fast and relevant answers?
                                <p>When reviewing a casino, we chat with the customer support team looking for the answers to those questions. Why? Because they help us assess how professional, transparent, and trustworthy a blockchain casino is.</p></li>
                            <li><strong>We look into the Bitcoin casino’s reputation.</strong>
                                <p>Before signing off on any of our reviews, we lurk around on cryptocurrency forums looking for real player opinions.</p>
                                <p>We also check what the competition says about them and read as many user reviews as possible. Even if our experience were positive, we would let you know if the consensus disagreed.</p></li>
                            <li><strong>We do local-specific tests.</strong><br />Casinos have geo-restrictions. What works for Aussie players might not be an option in Canada. That’s why we also do local-specific testing.
                                <p>We fire up the VPNs and pack our virtual suitcases. In local testing, we make sure the casino works in that country, that they don’t have self-exclusion criteria, and look for perks specific to that country. For example, TrueFlip has AUD jackpots, along with BTC. No wonder we ranked it as one of the best options for Aussies. </p>
                                <p>Find our Canada and Australia-specific rankings here:   <br /><a href="https://casinosblockchain.io/best-bitcoin-casinos-in-canada/" target="_blank" rel="noreferrer noopener" className="text-blue-700">Top Bitcoin Casinos in Canada<br /></a><a href="https://casinosblockchain.io/best-bitcoin-casinos-in-australia/" target="_blank" rel="noreferrer noopener" className="text-blue-700">Top Bitcoin Casinos in Australia<br /></a></p></li>
                        </ol>
                        <p>And there you have it – our Bitcoin casino testing strategy!  What did we come up with? Here’s our selection for the<strong> best Bitcoin gambling sites</strong> available in the English-speaking world.</p>
                        <div className="h3">Best Bitcoin Casinos</div>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
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
                    <section id="bc-game">
                        <div className="h3">BC.Game Casino</div>
                        <img src={BCGameCasino} className="w-full h-auto" alt="BitcoinContentImage" />
                        <p className="mt-4"><a href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener" className="text-blue-600">BC.Game</a> is our #1 Bitcoin casino brand and it comes with multiple perks.<br />✔️ <strong>Up to 1 BTC wins </strong>on the daily wheel spin (for free)<br />✔️ <strong>Cryptocurrency exchange </strong>on the casino<br />✔️ <strong>Low house edge</strong> and maximum RTP<br />✔️ <strong>100+ live tables </strong>and games from all major providers<br />✔️ <strong>20 provably fair games, </strong>developed in-house<br />✔️ <strong>Social features </strong>like an active player chat and rewards for participating</p>
                        <p>There is still one downside – <strong>BC.Game doesn’t have a welcome bonus. </strong></p>
                        <p>While other casinos match your first deposit, BC.Game offers a different selection of promos. The daily spin is free and you can win more than a traditional welcome bonus – but, if you’re looking for a BTC deposit bonus BC.Game might not be the option for you.  </p>
                    </section>
                    <section id="stake">
                        <div className="h3">Stake Casino</div>
                        <img src={CasinoStake} className="w-full h-auto" alt="casino-stake" />
                        <p className="mt-4">Second on our list, <a className="text-blue-700" href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake casino</a><strong> </strong>comes with its unique set of advantages: </p>
                        <p>✔️ <strong>Huge variety </strong>of casino games, including provably fair options<br />✔️ <strong>Comprehensive sportsbook </strong>with all top sports and even eSports<br />✔️ <strong>Transparency </strong>– you can see the house edge on all games to choose the most profitable one<br />✔️ <strong>Exchange rate </strong>always visible on the website </p>
                        <p>Stake is also a <strong>great betting site for Canadians</strong>: its sportsbook features competitive odds for all the popular sports in Canada, including ice hockey, football, basketball, and MMA.</p>
                        <p>So, why do we rank it second? There are still some cons: <br />❌ <strong>KYC required </strong>to play (no anonymity)<br />❌ <strong>No welcome bonus, </strong>although there is a weekly giveaway, community benefits, and money-back on sports betting</p>
                    </section>
                    <section id="true-flip">
                        <div className="h3">
                            True Flip
                        </div>
                        <img src={trueflip4} className="w-full h-auto" alt="trueflip4" />
                        <p className="mt-4"><a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" rel="noreferrer noopener">True Flip</a>‘s friendly penguin takes the next spot on the list. With a solid BTC bonus and a selection of exciting games, it’s one of our favorite online casinos overall. </p>
                    </section>

                    <section id="FAQ">
                        <div className="h2">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are Bitcoin faucets real?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">MetaMask has multilayered security Yes, but they only give you a small amount of BTC and waste a lot of time.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are there still Bitcoin faucets?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, but it's not like the early crypto days. Today, you can only earn a couple of Satoshi's at a time.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Can you make money from Bitcoin faucets?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, but you'll only make tiny amounts. There are much better uses of your time.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Which Bitcoin faucet is best?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Bitcoin casino faucets like <a className="text-blue-700" href="https://casinosblockchain.io/go/betfury/">BetFury</a> are best for extending the fun. Still, we don't recommend relying on them for extra income. </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-md shadow-slate-600 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#getting-started" className="getting-started hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Getting Started
                            </li>
                        </a>
                        <a href="#bc-game" className="bc-game hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BC.Game
                            </li>
                        </a>
                        <a href="#stake" className="stake hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Stake
                            </li>
                        </a>
                        <a href="#true-flip" className="true-flip hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                True Flip
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
                        <a href="#casino-dapps" className="casino-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casino Dapps
                            </li>
                        </a>
                        <a href="#earnbet" className="earnbet hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Earnbet
                            </li>
                        </a>
                        <a href="#deposit-withdrawal" className="deposit-withdrawal hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Deposit And Withdrwal
                            </li>
                        </a>
                        <a href="#legal-aspects" className="legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Legal Aspects
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
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center">
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