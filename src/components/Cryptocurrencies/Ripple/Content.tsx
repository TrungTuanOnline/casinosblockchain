import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import BitcoinFaucetsScaled from "../../../Assets/images/bitcoin-faucets-scaled.jpg"
import BetFuryWideLogo from "../../../Assets/images/Content/BetFury-Wide-Logo.jpg"
import BetfuryBoxes from "../../../Assets/images/Content/betfury-boxes.png"
import DuckDice from "../../../Assets/images/Content/duck-dice-wide-logo.png"
import Cryptoskull from "../../../Assets/images/Content/cryptoskull-logo.png"
import BcgameSpin from "../../../Assets/images/Content/bcgame-spin.png"
import Cloudbet from "../../../Assets/images/Content/Cloudbet.jpg"


import backgroundImg from "../../../Assets/images/Header.svg"

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
                <div className="w-full xl:h-[435px] md:h-[380px] rounded-md border-4 border-white">
                    <img alt="MainPageImg" src={BitcoinFaucetsScaled} className="w-full max-h-full object-cover rounded-md " />
                </div>
                <div className="blog pl-24 pt-3 pb-16 w-10/12">
                    <p className="text-[#262847]">Updated: <span className="text-black font-bold text-base">June 29, 2022</span></p>
                    <div className="h1">A Beginner’s Guide to Bitcoin Free Spins</div>
                    <p><strong>Do you want free money? Bitcoin faucets promise that. </strong></p>
                    <p>Yes, faucets, the mythical websites that hand out coins free of cost, theoretically allowing you to profit out of their goodwill. </p>
                    <p>But is it really that simple?</p>
                    <p>Today, we’re talking about <strong>Bitcoin casino faucets </strong>– what they are, why they exist, and are they worth your time.</p>
                    <p>By the end, you will have <strong>the power to make an informed decision</strong> on casinos and websites with a free Bitcoin faucet.</p>
                    <div className="h3">Top Bitcoin Casinos With Free Bitcoin Faucets</div>
                    <p>Before we dive in, here’s a quick recap of Bitcoin casino faucets. These are our favorite faucet-offering providers: </p>
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
                    <p className="mt-4">But does the free faucet make them worth your time? Let’s break it down:</p>
                    <section id="what-are-faucets">
                        <div className="h2">What Are Bitcoin Faucets?</div>
                        <p>A Bitcoin faucet <strong>hands out free Bitcoin to its users</strong>. </p>
                        <p>And, while BTC faucets are the most popular, you’ll find other cryptos too – Ethereum, Litecoin, Dogecoin, etc.</p>
                        <p><strong>How does it work? </strong></p>
                        <div className="w-full h-[200px] flex px-10 jusitfy-center items-center  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                                “Faucet” means water tap – Bitcoin faucets work just like an open tap of water.
                            </div>
                        </div>
                        <p className="mt-4">Instead of H20, however, they ‘pour’ Bitcoin to those willing to collect it.</p>
                        <p>But here’s the catch: </p>
                        <p>The tap is just barely open, offering just a few droplets at a time. In other words, <strong>you can only receive a very small amount of Bitcoin from Bitcoin faucets</strong>. In fact, faucets often use Satoshi (which is equivalent to only 0.00000001&nbsp;BTC) as a currency unit – that’s how little you’re getting.</p>
                        <p>This bears the question:</p>
                    </section>
                    <section id="bitcoin-faucets-worth">
                        <div className="h2">Are Bitcoin Faucets Worth It?</div>
                        <p><strong>No, we don’t think Bitcoin faucets are worth your time.</strong> If “free Bitcoin” sounds too good to be true, it’s because it probably is. </p>
                        <p>Here’s what faucet providers don’t want you to know: </p>
                        <div className="w-full h-[220px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50">You are the product</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Nothing is free – with Bitcoin faucets YOU are the product.
                            </div>
                        </div>
                        <p className="mt-4"><strong>It’s only logical: the faucet website can’t give away free money.</strong> They have to cover their costs – and, as it often is with the internet, it’s usually through advertising.</p>
                        <p>Bitcoin casino faucets exist to <strong>draw new players in</strong>. Essentially, they’re a marketing effort for the casino. </p>
                        <p>There are other faucets, too, which would reward you for tasks like surveys and watching videos. Similarly, these ‘sell’ your time to advertisers.</p>
                        <p><strong>And why are faucets so time-consuming? It’s simple: to discourage abuse and bots.</strong></p>
                        <p>When you consider how little you earn and how much time you waste, Bitcoin faucets aren’t usually worth it. However, they could still be fun if you have some time to waste. </p>
                        <p>Bitcoin casinos with faucets give you yet another way to make more bang for your buck. Nothing wrong with that! So, if you’re curious about them, here are the providers we recommend:</p>
                    </section>
                    <section id="gambling-with-faucets">
                        <div className="h2">
                            Bitcoin Casinos With Faucets
                        </div>
                        <p>Bitcoin faucets and Bitcoin casinos are a match made in heaven: they have a similar target audience of people looking for a fun way to pass the time – and, hopefully, win some Bitcoin.</p>
                        <p><strong>Most Bitcoin gambling websites originally offered free faucets alongside the other games.</strong></p>
                        <p>Today, most Bitcoin casinos – like BC.Game and Stake – have “closed the tap” and discontinued their faucets. Why? It wasn’t a single reason:</p>
                        <ol className="is-style-dotted-list"><li>The casinos were looking to invest in other areas of their product.</li><li>Blockchain casino bonuses became more common and rewarding, replacing the need for free faucets.</li><li>Frequent faucet abuse from highly complex bots affected the casinos more and more.</li></ol>
                        <p>And so, most Bitcoin casinos with faucets became obsolete, <a href="https://casinosblockchain.io/bitcoin-no-deposit-bonuses/#free-faucets" target="_blank" rel="noreferrer noopener" className="text-blue-600">as we’ve mentioned before</a>. But not all. A few casinos still have free faucets. </p>
                        <p className="mt-10">Our favourite is, by far, <a aria-label=" (opens in a new tab)" href="/go/betfury/" target="_blank" rel="noreferrer noopener" className="rank-math-link text-blue-600">Betfury</a>. Not only does the brand provide a Bitcoin faucet paying out a variable amount of Satoshi every 20 minutes, but it also comes with a variety of unlockable other faucets (for a price) that give out other coins and offer you more flexibility.</p>
                        <p><strong>Just remember: the main purpose of faucets at Bitcoin gambling sites like Betfury is not to hand out free money. They exist to advertise the brand and its games. </strong></p>
                        <p>Time-consuming as it is, a faucet can be a handy test for a new casino! Let’s find out why.</p>
                        <img src={BetFuryWideLogo} className="w-full h-auto" alt="FaucetImages" />
                        <p className="mt-10">With more than 1,000 games and promotions aplenty, there are many reasons <a className="text-blue-600" href="https://casinosblockchain.io/betfury-casino-review/" target="_blank" rel="noreferrer noopener">why BetFury is one of our favorite gambling Dapps</a>.</p>
                        <p>However, one thing that makes BetFury really unique is the free Bitcoin faucet, <strong>giving out small amounts of BTC several times per day</strong>. They’ve recently revamped the faucet, too, to feature a more appealing design: </p>
                        <p className="mt-10"><strong>Meet the BetFury Boxes!</strong></p>
                        <img src={BetfuryBoxes} className="w-full h-auto" alt="FaucetImages" />
                        <p className="mt-10">BetFury boxes are <strong>free-to-play faucets </strong>that unlock every 20 minutes. Simply wait for the box to fill up, click <em>Withdraw </em>and complete the CAPTCHA. That’s it, no extra conditions (though some people complain the CAPTCHAs take too long.) </p>
                        <p>But there’s more – you can also buy into other daily faucets, for even more free Bitcoin and even Ethereum. Each purchasable box is unique and available for a limited time only. These boxes can payout a <strong>weekly or monthly percentage </strong>(usually 7%) and actually guarantee you’ll make your investment back. </p>
                        <div className="w-full h-[220px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50">Guaranteed ROI</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                BetFury guarantees you’ll get all invested money + % by the end of the box term.
                            </div>
                        </div>
                        <p className="mt-10">Of course, you can use the coins you earned through the faucet at Betfury’s casino games, or withdraw them into your wallet.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}
                            />
                        </div>
                        <img src={DuckDice} className="w-full h-auto mt-10" alt="FaucetImages" />
                        <p className="mt-10 "><a href="https://casinosblockchain.io/duckdice-review/" className="text-blue-600 rank-math-link">DuckDice</a> is an alternative to Betfury with a free faucet where you can win tokens after competing against the computer on a thrilling tic-tac-toe game.</p>
                        <p>To get started with the faucet: </p>
                        <ul className="is-style-dotted-list"><li><strong>Enter Faucet Mode. </strong><br />You’ll find the mode switcher in the top left corner of the game field.</li><li><strong>Play the tic-tac-toe game. </strong><br />The faucet features a fun game, which you have to win to make coins. </li><li><strong>Withdraw your earnings. </strong><br />After the game (if you won), you can cash out to the Main Mode balance. There, you can use them to make more bets or withdraw them completely. </li></ul>
                        <p>One things we love about the DuckDice crypto faucet is it’s available in a huge range of currencies – from BTC and ETH to Dogecoin and even AVAX. </p>
                        <p>The downside? Your earnings are significantly limited although they depend on your level. For their Bitcoin casino faucet, for example: </p>
                        <ul className="is-style-checked-list_sm"><li><strong>Level 0s </strong>get up to 0.00000034 BTC, up to 30 times a day. </li><li><strong>Level 1s</strong> get up to 0.00000115 BTC, up to 35 times a day.</li><li><strong><strong>Level 2s</strong></strong> get up to 0.0000023 BTC, up to 40 times a day.</li><li><strong>Level 3s</strong> get up to 0.0000046 BTC, up to 45 times a day.</li><li><strong>Level 4s</strong> get up to 0.00000691 BTC, up to 50 times a day.</li><li><strong>Level 5s</strong> get up to 0.00000806 BTC, up to 55 times a day.</li></ul>
                        <p>Ultimately, DuckDice doesn’t offer the best value, but they pair a fun game with some extra coins, so they might be worth checking out. But, there are more options, too: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={16}
                                siteIndex={16}
                                summaryData={siteDatas[16]}
                            />
                        </div>
                        <img src={Cryptoskull} className="w-full h-auto my-10" alt="FaucetImages" />
                        <p><a href="https://cryptoskull.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" className="rank-math-link text-blue-600">CryptoSkull</a> is a barebones cryptocurrency casino where you can play a minesweeper-like game for free using its faucet.</p>
                        <p>Unlike DuckDice, you won’t have to play any minigames to unlock the faucet: all you have to do is claim the offered bonus, and you’re good to go!</p>
                        <p>Just like DuckDice, however, you also have to reach a minimum threshold before you can withdraw any faucet winnings.</p>
                        <p>That’s why we recommend Betfury over both DuckDuckDice and CryptoSkull, especially if you’re looking for a more well-rounded Bitcoin gambling experience on top of the Bitcoin faucet:</p>
                        <div className="my-10 border-t border-gray-300 shadow-gray-500 shadow-md ">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}
                            />
                        </div>
                    </section>
                    <section id="highest-paying-faucets">
                        <div className="h2">
                            What’s The Highest Paying Bitcoin Faucet?
                        </div>
                        <p>In the past, not long after Bitcoin was invented, faucets were highly profitable. In an effort to promote the coin (and because its worth at the time was only a fraction of todays’), faucets would pay out much larger amounts, giving lucky early users <strong>up to 5 BTC</strong>!</p>
                        <p><strong>But that amount has, since then, decreased exponentially.</strong> Like we mentioned at the start, Bitcoin faucets nowadays generally offer very small amounts of coin. </p>
                        <p>This is true across the board, meaning that even the highest paying Bitcoin faucet will only give you a very small profit, often at the expense of a considerable time investment.</p>
                        <p><strong>That’s why it’s important to know which faucets currently offer the best profit vs. time-investment ratio.</strong> </p>
                        <p>There are two main types of faucets:</p>
                        <ul className="is-style-dotted-list"><li>Those that reward relatively high prizes at a certain time only (maybe once a day, or every couple of hours).</li><li>Those that consistently give out a very small amount of Satoshi, on a much more regular basis, but requiring a possibly larger time investment.</li></ul>
                        <p>Maybe you do have the time to come back and fulfil a simple task every 20 minutes, maybe you don’t. But let’s assume that you do. If so, adding up the daily total will tell you which faucet pays out the most on a daily basis.</p>
                        <p><strong>If you’re <em>already </em>playing at a Bitcoin casino, the faucet can be a nice perk. </strong>Just take a second between bets, complete the task and you have some extra cash to play with. But, don’t see the faucet as a way to make money. If anything, it’s a way to prolong your fun – just like any other casino bonus. </p>
                        <p>Unfortunately, right now Bitcoin casino faucets are simply <strong>not the best way to make extra casino cash</strong>.<strong> </strong>There are better perks out there – welcome bonuses, free spins, VIP clubs. A faucet is a nice add-on, but, as things stand, not a good enough bonus in itself. </p>
                    </section>
                    <section id="Bitcoin-Faucet-Alternatives">
                        <div className="h2">
                            What Is Better Than a Bitcoin Faucet?
                        </div>
                        <p>So, if faucets aren’t the best value you can get, what other options should you try out? </p>
                        <p>We’re so glad you asked:</p>
                        <div className="h3">Daily &amp; Weekly Promotions</div>
                        <img src={BcgameSpin} className="w-full h-auto my-4" alt="FaucetImages" />
                        <p><a href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener" className="text-blue-600">BC.Game’s</a> Lucky Wheel spin is our favorite in this category. Just register and you’re in to win <strong>up to 5 BTC </strong>every day!</p>
                        <p>Another one of our favorites is Stake’s <strong>weekly giveaway </strong>where you can make up to $5,000. Once again, that’s just for playing, you don’t have to wager anything extra. </p>
                        <p>With these regular promotions, the element of luck is still there. You might not win big (although with the Lucky Wheel you always win <em>something</em>), but you still make more than the faucet offers. Plus, they don’t waste nearly as much time as faucets do. </p>
                        <div className="my-10 border-t border-gray-300 shadow-gray-500 shadow-md ">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3">Welcome Bonus</div>
                        <img src={Cloudbet} className="w-full h-auto my-4" alt="FaucetImages" />
                        <p>The “traditional” welcome bonus for online casinos is a <strong>deposit match </strong>on your first (or first few) deposits. </p>
                        <p>While not all casinos offer that, it’s another excellent way to maximise your money. Keep the wagering requirements in mind, though. You often have to play through the amount x30-40 times before you can withdraw. </p>
                        <p>Our favorite casino for deposit matching is Cloudbet, which also boasts a stellar collection of games and a range of other promotions: </p>
                        <div className="my-10 border-t border-gray-300 shadow-gray-500 shadow-md ">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                    </section>
                    <section id="bitcoin-faucets-safety">
                        <div className="h2">
                            Are Bitcoin Faucets Legit?
                        </div>
                        <p><strong>While there are a lot of Bitcoin faucets out there, not all are fully legitimate and safe.</strong></p>
                        <p>Some websites also only last for a small amount of time, either because they’re not profitable or because they don’t become very popular.</p>
                        <p><strong>As usual, we recommend that you only use reputable websites.</strong> With Bitcoin casinos with faucets, the easiest way is choosing websites that have a valid gambling license, such as Betfury and DuckDice! As long as you comply with their rules (and local regulations), you’re good to go!</p>
                        <div className="my-10 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[15], siteDatas[16]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h2">Final Thoughts</div>
                        <p>Bitcoin casino faucets give you a <strong>steady drip of free coins</strong>, but they’re not a sustainable way to earn money. Since you have to waste so much time – and make so little in exchange – they’re also far from the best casino bonus. We’d much rather use free spins or enjoy a welcome bonus. </p>
                        <p>All in all, Bitcoin casinos with faucets might offer an additional way to make more bang for you buck – but, we still don’t think they’re worth your time. </p>
                        <p>Are there any good faucets? There are some <em>better </em>than others. Check out BetFury for our favorite Bitcoin casino faucet offer: </p>
                        <div className="my-10 border-t border-gray-300 shadow-gray-500 shadow-md ">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}
                            />
                        </div>
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
                        <a href="#what-are-faucets" className="what-are-faucets hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                What Are Faucets?
                            </li>
                        </a>
                        <a href="#bitcoin-faucets-worth" className="bitcoin-faucets-worth hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Are They Worth It?
                            </li>
                        </a>
                        <a href="#gambling-with-faucets" className="gambling-with-faucets hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bitcoin Casinos With Faucets
                            </li>
                        </a>
                        <a href="#highest-paying-faucets" className="highest-paying-faucets hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Highest Paying Faucets
                            </li>
                        </a>
                        <a href="#Bitcoin-Faucet-Alternatives" className="Bitcoin-Faucet-Alternatives hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bitcoin Faucet Alternatives
                            </li>
                        </a>
                        <a href="#Best-for-Beginners" className="Best-for-Beginners hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best for Beginners: Blockstream
                            </li>
                        </a>
                        <a href="#bitcoin-faucets-safety" className="bitcoin-faucets-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Are They Legit?
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

const Content = () => {
    return (
        <div className="h-full w-full flex flex-col items-center bg-[#F8F9FC]">
            <div className="w-full h-32 bg-[#000331]" />
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center xl:mt-[-5rem]">
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