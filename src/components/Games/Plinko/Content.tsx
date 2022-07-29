import WinkDappLogo from "../../../Assets/images/Content/wink-dapp-logo.png"
import RocketGameLogo from "../../../Assets/images/Content/rocket-game-logo.png"
import RinobetLogo from "../../../Assets/images/Content/rinobet-logo.png"
import StakePlinko from "../../../Assets/images/Content/Stake-Plinko.jpg"

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
        <div className="w-full flex gap-6 justify-center">
            <div className="xl:w-8/12 w-full h-full bg-white rounded-md shadow-sm shadow-gray-400 mb-10">
                <div className="blog pl-24 pt-12 pb-16 w-10/12">
                    
                    <div className="h2">Plinko Gambling - All You Need to Know</div>
                    <p>Simple. Fun. Provably fair.</p>
                    <p>Plinko is, alongside <a className="text-blue-700"  href="https://casinosblockchain.io/crash-crypto-game/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/crash-crypto-game/" rel="noreferrer noopener">crash</a>, the online casino game that best suits cryptocurrency gambling, which is why you're more likely to find it at a&nbsp;<a className="text-blue-700"  href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">blockchain casino</a>&nbsp;than anywhere else.</p>
                    <p>But what exactly is plinko? </p>
                    <p>In a nutshell, plinko is a simplified form of <em>pachinko</em>, a famous Japanese game of chance. </p>
                    <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <p className="text-sm  text-white opacity-50">PLINKO</p>
                        <div className="h2 text-white text-lg md:text-2xl">
                            When playing a round of plinko, you drop a token down a maze of pins until it lands on a slot, which may or may not award a prize.
                        </div>
                    </div>
                    <p className="mt-2">Western audiences were introduced to this game in the 80s with <em>The Price is Right, </em>where it was one of the possible prize rounds. It has, therefore, a certain nostalgia attached to it, like many other <em>arcade games</em> that are now popular at crypto casinos.</p>
                    <p>But what about plinko <em>gambling</em>?</p>
                    <p>The novelty now is that <strong>plinko is a gambling game</strong> where you can place bets and hope for cash prizes. Nowadays, plinko gambling is allowed at several online casinos, most of which accept cryptocurrency payments.</p>
                    <p>In this article, we'll let you know all about the plinko games you can find at online casinos, <strong>focusing on Bitcoin plinko</strong> and other cryptocurrencies.</p>
                    <div className="h3">Plinko Gambling Stats</div>
                    <figure className="wp-block-table is-style-stripes"><table><thead><tr><th>Plinko Gambling Features</th><th className="has-text-align-center" data-align="center">Crypto Casino (BC.Game)</th><th className="has-text-align-center" data-align="center">Regular Casino</th></tr></thead><tbody><tr><td><strong>RTP</strong></td><td className="has-text-align-center" data-align="center">99%</td><td className="has-text-align-center" data-align="center">97%-99%</td></tr><tr><td><strong>House Edge</strong></td><td className="has-text-align-center" data-align="center">1%</td><td className="has-text-align-center" data-align="center">1%-3%</td></tr><tr><td><strong>Minimum Bet</strong></td><td className="has-text-align-center" data-align="center">0.0000001 BTC</td><td className="has-text-align-center" data-align="center">$0.10</td></tr><tr><td><strong>Maximum Bet</strong></td><td className="has-text-align-center" data-align="center">0.2 BTC</td><td className="has-text-align-center" data-align="center">$2,500</td></tr><tr><td><strong>Provably Fair</strong></td><td className="has-text-align-center" data-align="center">✅</td><td className="has-text-align-center" data-align="center">❌</td></tr><tr><td><strong>Crypto Gameplay</strong></td><td className="has-text-align-center" data-align="center">✅</td><td className="has-text-align-center" data-align="center">❌</td></tr><tr><td><strong>Fiat Gameplay</strong></td><td className="has-text-align-center" data-align="center">❌</td><td className="has-text-align-center" data-align="center">✅</td></tr><tr><td><strong>Free Play</strong></td><td className="has-text-align-center" data-align="center">✅</td><td className="has-text-align-center" data-align="center">✅</td></tr><tr><td><strong>Bonus Rounds</strong></td><td className="has-text-align-center" data-align="center">❌</td><td className="has-text-align-center" data-align="center">❌</td></tr></tbody></table></figure>

                    <section  id="where-to-play">
                        <div className="h2">Where To Play Plinko Online With Bitcoin?</div>
                        <p>When it comes to plinko, <em>Bitcoin </em>plinko is more than just another option - it's the default.</p>
                        <p>The truth is: despite its former TV glory, plinko is an often forgotten game that can be hard to find at a more mainstream online casino.</p>
                        <p>When you come across a plinko game, it's more likely than not a&nbsp;Bitcoin plinko game at a crypto casino or Dapp.</p>
                        <p>Why? Because <strong>virtually all games of casino plinko are <a className="text-blue-700"  href="https://casinosblockchain.io/provably-fair-gambling/">provably fair</a></strong>, a feature that requires blockchain technology.</p>
                        <p>That's good news if fairness and cryptocurrencies are important to you, but not so much if you're looking to play the game at more mainstream websites.</p>
                        <p>Luckily, several of our top-rated casinos do offer plinko games. So let's have a look at them.</p>
                    </section>
                    <section id="plinko-casinos">
                        <div className="h3">Bitcoin Plinko Casinos	</div>
                        <p>Besides offering at least one game of plinko that you can play with cryptocurrencies, our top choices for casinos have a few things in common.</p>
                        <ul className="is-style-checked-list_sm"><li>Their customer service is impeccable.</li><li>Their reputation is pristine.</li><li>They offer a strong selection of other games.</li></ul>
                        <p>What's more, they all offer original provably fair games that you can't find anywhere else, including Bitcoin plinko.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[3], ].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3">Playing Plinko Online for Free</div>
                        <p>Most of the casinos listed above allow you to play the plinko crypto game for free, in demonstration or "free-to-play" mode on their websites.</p>
                        <p>What's more, you can also play the game <strong>right on this page</strong>. Simply click "play" on the game below.</p>
                        <p>The plinko game above is from <a className="text-blue-700"  href="https://casinosblockchain.io/bgaming-bitcoin-casinos/">BGaming</a>, which is the same game you can find at <a className="text-blue-700"  href="https://casinosblockchain.io/bitstarz-review/">BitStarz</a> and other similar online casinos.</p>
                    </section>
                    <section id="plinko-dapps">
                        <div className="h3">Plinko Dapps - Decentralized Applications	</div>
                        <p>Since plinko is a provably fair game, it's not difficult to find a Dapp where you can play it.</p>
                        <p>Online plinko was pioneered by Dapps, which helped fuel its newfound popularity.</p>
                        <p>We chose the following three Dapps for the quality of their plinko games.</p>
                        <p><strong>Wink</strong></p>
                        <img src={WinkDappLogo} alt="WinkDappLogo" />
                        <p className="mt-2">One of our favourite gambling Dapps, <a className="text-blue-700"  rel="noreferrer noopener" href="https://casinosblockchain.io/go/wink/" target="_blank">Wink</a>, has the advantage of looking and feeling just like a 'real' online casino.</p>
                        <p>Its many games helped popularize it, and it now has a solid reputation in the blockchain casino world.</p>
                        <p>Unfortunately, you can't play Bitcoin plinko here since the only available currency is <a className="text-blue-700"  href="https://casinosblockchain.io/tron-casinos/">Tron</a>.</p>
                        <p><strong>RocketGame</strong></p>
                        <img src={RocketGameLogo} alt="RocketGameLogo" />
                        <p className="mt-2">With 15 provably fair games (including plinko) and plenty of <a className="text-blue-700"  href="https://casinosblockchain.io/slots-bitcoin-casino/">slot machines</a>, <a className="text-blue-700"  rel="noreferrer noopener" href="https://rocketgame.io/" target="_blank">RocketGame</a> is a solid choice for a plinko Dapp.</p>
                        <p>Like many other Dapps, you can earn a share of the dividends when playing at RocketGame.</p>
                        <p>However, what sets it apart from most are its many promotions, including:</p>
                        <ul className="is-style-checked-list_sm"><li>A referral commission.</li><li>Contents and challenges.</li><li>Cashbacks. </li></ul>
                        <p><strong>Rinobet</strong></p>
                        <img src={RinobetLogo} alt="RinobetLogo" />
                        <p>Do you like <a className="text-blue-700"  href="https://casinosblockchain.io/stake-bitcoin-casino-review/">Stake</a>? Then <a className="text-blue-700"  rel="noreferrer noopener" href="https://rinobet.io/" target="_blank">Rinobet</a> might be the Dapp for you.</p>
                        <p>Rinobet heavily resembles it, which makes it very likely that the two are related or, at least, use the same platform.</p>
                        <p>And just like Stake, Rinobet's provably fair plinko has a house edge of only 1%. </p>
                    </section>
                    <section id="choose-good-casino">
                        <div className="h2">How To Choose A Good Casino For Plinko	</div>
                        <p>Finding the right casino is always important regardless of your favourite type of game.</p>
                        <p>Not all factors matter the same for all games. For instance, with plinko, <strong>safety is not such a big issue</strong> since the game is almost always provably fair.</p>
                        <p>You should still spend some time looking for the plinko casino that best suits you as a player.</p>
                        <p>The good news is: it's <strong>easier than you may think</strong>, especially if you follow our advice:</p>
                        <ol className="is-style-dotted-list"><li>Look for casinos with your favorite type of plinko.</li><li>Find out whether or not you can use bonus money for plinko games.</li><li>Learn about the casino's reputation.</li><li>Test the casino yourself.</li></ol>
                        <div className="h3">Look For Casinos With Your Favorite Type Of Plinko</div>
                        <p>Plinko games might be relatively straightforward, but they're not all the same, nor are they available everywhere.</p>
                        <p>A significant differentiating factor is the shape of the playing field. Triangular grids are standard, but some casinos offer other, more creative plinko setups.</p>
                        <p>The same is true for what kind of cryptocurrencies are supported.</p>
                        <p>For instance, while <strong>Bitcoin plinko is available at most casinos</strong>, it might be <strong>harder to find at Dapps</strong>.&nbsp;</p>
                        <div className="h3">Find Out Whether Or Not You Can Use Bonus Money For Plinko Games</div>
                        <p>Nowadays, most crypto casinos (and even some Dapps) give you a bonus when you first open an account.</p>
                        <p>Before you get excited about <strong>playing Bitcoin plinko with bonus money</strong>, you should check <strong>if the casino lets you wager</strong> <strong>it </strong>on plinko games.</p>
                        <p>Some casinos have finicky terms and conditions restricting bonuses to selected slot machines. That's fine, as long as you're aware. However, do read through terms and conditions carefully before signing up.</p>
                        <div className="h3">Learn About The Casino's Reputation</div>
                        <p>Although Bitcoin plinko is provably fair and, therefore, tendentially safe, it's never a bad idea to <strong>check if the casino has a good reputation</strong>.</p>
                        <p>There are a few ways to do that:</p>
                        <ul className="is-style-checked-list_sm"><li>Discover if the casino holds a license.</li><li>Look for information in forums.</li><li>Read casino reviews, <a className="text-blue-700"  href="https://casinosblockchain.io/">including our own</a>.</li><li>Check if you can find any complaints about the casino and if they were addressed.</li></ul>
                        <h3>Test The Casino Yourself</h3>
                        <p>Choosing a casino is a serious decision, as you will most likely spend a couple of years playing plinko and other games at the same place.</p>
                        <p>Therefore, you must <strong>find a casino where you feel right at home</strong>.</p>
                        <p>Sometimes, you can know that almost instinctively just by how the website looks. Other times, it takes a few rounds before you know for sure.&nbsp;</p>
                        <p>You can always <strong>try the casino in play-for-free mode</strong> to see if you like the games.</p>
                        <p>Another good tip is to ask<strong> </strong>the customer support representatives<strong> a few questions</strong> before making your first deposit.&nbsp;</p>

                    </section>
                    <section id="cryptocurrencies">
                        <div className="h2">Playing Plinko With Cryptocurrencies	</div>
                        <p>When writing about gambling with cryptocurrencies, we often start by saying how it's not so different from playing with fiat money.</p>
                        <p>With plinko, however, that comparison is pointless. If anything, playing with fiat money is&nbsp;<i>more complicated</i>&nbsp;than doing so with your favourite coin.</p>
                        <p>However, it's certainly easier if that coin is popular. You should have no troubles playing plinko with:</p>
                        <ul className="is-style-checked-list_bubbles"><li><a className="text-blue-700"  href="https://casinosblockchain.io/best-bitcoin-casinos/">Bitcoin</a></li><li><a className="text-blue-700"  href="https://casinosblockchain.io/best-ethereum-casinos/">Ethereum</a></li><li><a className="text-blue-700"  href="https://casinosblockchain.io/bitcoin-cash-casinos/">Bitcoin Cash</a></li><li><a className="text-blue-700"  href="https://casinosblockchain.io/litecoin-casinos/">Litecoin</a></li><li><a className="text-blue-700"  href="https://casinosblockchain.io/dogecoin-casinos/">Dogecoin</a></li><li><a className="text-blue-700"  href="https://casinosblockchain.io/tether-casinos/">Tether</a></li></ul>
                        <p>As for Dapps, <a className="text-blue-700"  href="https://casinosblockchain.io/tron-casinos/">Tron</a> is, unsurprisingly, the top currency for plinko games. </p>
                        <p>Other currencies that you can use at plinko Dapps are Bitcoin,&nbsp;Litecoin,&nbsp;and Ethereum.</p>
                    </section>
                    <section id="bitcoin-plinko-safety">
                        <div className="h3">Is It Safe To Play Plinko With Bitcoin And Other Cryptos?	</div>
                        <p>Since Bitcoin plinko games are, tendentially, provably fair, playing this game is, more often than not, safe. But, of course, the same goes for online plinko games with other coins. </p>
                        <p>However, you might be new to cryptocurrency gambling and have a few reservations. That's only normal.</p>
                        <p>If you want to protect yourself when playing plinko online, there is something you should know.</p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">IMPORTANT INFORMATION</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                            Gambling online, even on provably fair plinko games, is always safer at a casino or Dapp with a valid gambling license.
                            </div>
                        </div>
                    </section>
                    <section id="game-rules">
                        <div className="h2">Game Rules	</div>
                        <p>Plinko at an online casino is different from the TV version of the game you might know. </p>
                        <p>Instead of throwing the disc yourself, you press a button. Then, all <strong>gameplay is automated</strong> and controlled by a complex program that randomly generates the outcome of every round.</p>
                        <p>Thanks to that random system, casino plinko games can be entirely provably fair, with verifiable results that you can check yourself.</p>
                        <img src={StakePlinko} alt="StakePlinko" />
                        <p className="mt-2">The picture shows a provably fair plinko game at Stake casino.</p>
                        <div className="h3"><strong>How It Works</strong></div>
                        <p>When you first open the game, you will see a shape (often a triangle) made of pegs. </p>
                        <p>The game starts when you press the 'bet' button. Here's how it works:</p>
                        <ol className="is-style-dotted-list"><li>You choose how much you want to bet.&nbsp;</li><li>The round starts when a ball drops from the top of the screen.</li><li>The ball will then start falling, hitting the pegs on its way down.</li><li>At the end of the round, you get a prize based on where the ball ended. The farthest from the center, the better.</li></ol>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">PLINKO WITH A TWIST</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                            Automatic play is also possible and, in some games, you might play with several balls being dropped consecutively for an added thrill.
                            </div>
                        </div>
                        <p className="mt-2">Some plinko games also let you pick different levels of risk when playing the game:</p>
                        <ul><li>At low-risk games, the prizes are evenly distributed.</li><li>High-risk games have higher prizes at the edges but lower prizes at the center.</li></ul>
                        <p>Similarly, you can also add or remove game lines, making the playing field much larger or smaller.</p>
                    </section>
                    <section id="plinko-tips">
                        <div className="h2">Plinko Tips For Beginners And Pros	</div>
                        <p>Although you certainly don't need a master's degree to play Bitcoin plinko, there are always a few things you should have in mind before getting started.</p>
                        <ol className="is-style-dotted-list"><li>Understand that every round of plinko ends with a prize - but that prize can be smaller than your bet. </li><li>Even though the game is provably fair, you're always safer at a licensed casino.</li><li>Set a budget before playing and stick to it.</li><li>Follow the rules of the casino.</li><li>Always play for fun.</li><li>Stop playing if it feels like an obligation or compulsion.</li><li>Don't see plinko as an alternative to Bitcoin mining or a sure way to win more of your favorite coin.</li><li>When trying out a new version, make sure that you understand the rules before you start playing.</li><li>Don't go all-in at first. Always start slow.</li><li>Start playing plinko on a low risk level and move your way up if and when you're comfortable with the added risk.</li></ol>
                        <p>Newcomers can benefit the most from these tips, but we believe it's worth having a look even if you're a seasoned plinko player.</p>
                    </section>


                    <section id="FAQ" >
                        <div className="mt-32 h3">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Where can I play Bitcoin plinko?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Bitcoin casinos such as <a className="text-blue-700" href="/go/stake/">Stake</a> and <a className="text-blue-700" href="/go/bitstarz/">BitStarz</a> accept Bitcoin. Both offer provably fair plinko games.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is Bitcoin plinko safe?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Playing plinko with Bitcoin and other cryptocurrencies is safe, as long as you do it at a licensed casino with provably fair games. You can find a list of reputable plinko casinos <a className="text-blue-700" href="https://casinosblockchain.io/plinko-bitcoin/#where-to-play">right here</a>.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is it legal to play plinko with Bitcoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    That only depends on your local legislation. In countries such as the United States, where online gambling is forbidden or heavily regulated, playing plinko at a blockchain casino is illegal. In other countries such as the United Kingdom, you can only gamble at a locally regulated casino.
                                    You should also keep in mind that not all countries recognize Bitcoin and other coins as a valid form of currency.
                                    However, for the most part, it's legal (and safe) to play plinko at licensed casinos.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden 
bg-white shadow-md shadow-slate-600 rounded-md sticky top-1">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#where-to-play" className="where-to-play hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#plinko-casinos" className="plinko-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Casinos
                            </li>
                        </a>
                        <a href="#plinko-dapps" className="plinko-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Dapps
                            </li>
                        </a>
                        <a href="#choose-good-casino" className="choose-good-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Choose Good Casino
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Available Cryptocurrencies
                            </li>
                        </a>
                        <a href="#bitcoin-plinko-safety" className="bitcoin-plinko-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Is it Safe?
                            </li>
                        </a>
                        <a href="#game-rules" className="game-rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Plinko Rules
                            </li>
                        </a>
                        <a href="#plinko-tips" className="plinko-tips hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Plinko Tips
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