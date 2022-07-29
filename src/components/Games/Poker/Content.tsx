import PokerTronLogo from "../../../Assets/images/Content/poker-tron-logo.png"
import PokerChainedDappLogo from "../../../Assets/images/Content/poker-chained-dapp-logo.png"
import WinkDappLogo from "../../../Assets/images/Content/wink-dapp-logo.png"
import WinningPokerHand from "../../../Assets/images/Content/winning-poker-hand.jpg"
import PokerPlayer from "../../../Assets/images/Content/poker-player-holding-ace.jpg"
import TexasHoldem from "../../../Assets/images/Content/Texas-Holdem.jpg"

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
                    <p>Not too long ago, playing online poker with Bitcoin was just a pipe-dream.</p>
                    <p>Nowadays, there are many Bitcoin casinos and Dapps with video poker and live poker games where you can hone your poker skills.</p>
                    <p>You can even play Bitcoin poker professionally in some casinos which offer real tournaments against real users!</p>
                    <p>But before we delve into the <strong>Bitcoin poker sites</strong> that suit your style, let's have a look at the different types of poker games available.</p>
                    <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <p className="text-sm  text-white opacity-50">POKER</p>
                        <div className="h2 text-white text-lg md:text-2xl">
                            Looking to play poker professionally with full anonymity? Try a Bitcoin casino with real poker tournaments.
                        </div>
                    </div>
                    <section id="play-poker-online">
                        <div className="h2">Where To Play Poker Online	</div>
                        <p>When most of us think of poker, we imagine high-stake tournaments full of big-brained players trying to outwit each other. However, not all poker games require an opponent.</p>
                        <p>In reality, Bitcoin poker games come in three distinct flavors:</p>
                        <ul className="is-style-checked-list_bubbles"><li>Video Poker</li><li>Live Poker</li><li>Real Poker</li></ul>
                    </section>
                    <section id="video-poker">
                        <div className="h3">Video Poker	</div>
                        <p>Video poker tables are ideal if you want to <strong>learn the ropes without facing any real competition</strong>. </p>
                        <p>These are overwhelmingly the easiest Bitcoin poker game to find and are extremely <strong>popular among casual players</strong>.</p>
                        <p>When looking for a casino, we suggest you choose household brands with a wide selection of games: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[8], siteDatas[4], ].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="live-poker">
                        <div className="h3">Live Poker</div>
                        <p>Live Poker is the gateway to what we're calling <em>real poker</em> games. </p>
                        <p>Here, you're <strong>playing against the dealer</strong>, looking for the best possible card combinations. </p>
                        <p>You're <strong>still playing alone</strong>, which means you don't need to practice your poker face. However, it's certainly more engaging than most video poker games. </p>
                        <p>One way to add an extra thrill to the game is to <strong>participate in live poker tournaments</strong>, where you indirectly compete against other players.</p>
                        <p>Live Poker is still somewhat new for Bitcoin poker sites. Look for games by <a className="text-blue-700" href="https://casinosblockchain.io/evolution-gaming-casinos/">Evolution Gaming</a>, Vivo Gaming, and Playtech on your favorite casinos.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[7], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="real-poker">
                        <div className="h3">Real Poker	</div>
                        <p>Video poker and live poker games can be fun, but let's face it: the only way to have a <strong>fully immersive poker experience online</strong> is to play real poker games against real players. </p>
                        <p>Only a few Bitcoin poker sites specialize in this type of game. Those that do, often require you to play on a secondary website or download a poker client.</p>
                        <p>These are minor inconveniences, however, and the thrill of a real poker game is unmatched.</p>
                        <p>It's, perhaps, the style of poker game that <strong>benefits the most from the advantages of blockchain technology</strong>:</p>
                        <ul className="is-style-checked-list_sm"><li>You can play anonymously, but still against real users.</li><li>Since it's the most skilled-based casino game available, it's arguably the best way to win Bitcoin while playing. Just don't forget there is an element of luck to it as well.</li><li>Cheating is almost impossible.</li><li>You eliminate some of the risks of playing in person, such as someone glancing at your cards by chance.</li></ul>
                        <p>Looking to join a Bitcoin poker tournament? We suggest you get started at the following casino:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={11}
                                siteIndex={11}
                                summaryData={siteDatas[11]}
                            />
                        </div>
                    </section>
                    <section id="poker-dapps">
                        <div className="h3">Poker Dapps	</div>
                        <p>Another way to play poker online using cryptocurrencies is with Dapps. </p>
                        <p>They might be relatively new to the scene, but they're becoming more and more popular.</p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">Advantages of Poker Dapps</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                            Blockchain-based decentralized applications are a safe and anonymous way to play online poker. 
                            </div>
                        </div>
                        <p>As with casinos, there are poker Dapps for everybody, although most focus on video poker games.</p>
                        <p>We selected the following three as great places for you to get started:</p>
                        <ul className="is-style-checked-list_bubbles"><li>Poker Tron</li><li>PokerChained</li><li>Wink</li></ul>
                        <img src={PokerTronLogo} alt="PokerTronLogo" />
                        <div className="wp-block-columns mt-2">
                            <div className="wp-block-columns">
                                <p><strong>Website: </strong><a className="text-blue-700" href="https://pokertron.io/" target="_blank" rel="noreferrer noopener">pokertron.io</a><br /><strong><strong>Promotions</strong>: </strong>None available</p>
                            </div>
                            <div className="wp-block-column w-[50%]">
                                <p><strong>Poker Games:</strong> Video poker<br /><strong>Cryptocurrencies</strong>: Tron</p>
                            </div>
                        </div>
                        <p>Poker Tron is certainly&nbsp;<strong>suited for new players</strong>.&nbsp;</p>
                        <p>This poker Dapp offers video poker and blackjack games where you're only playing against yourself.</p>
                        <p>It offers a relaxed playing experience and, since a&nbsp;<strong>part of the dividends is shared among players</strong>, you have an alternative source of income until you master the game.</p>
                        <p>Since all games are&nbsp;<a className="text-blue-700" target="_blank" href="https://casinosblockchain.io/provably-fair-gambling/" rel="noreferrer noopener">provably fair</a>, you can verify the gameplay yourself.</p>
                        <img src={PokerChainedDappLogo} alt="PokerChainedDappLogo" />
                        <div className="wp-block-columns mt-2" >
                            <div className="wp-block-column w-[50%]" >
                                <p><strong>Website</strong>: <a className="text-blue-700" rel="noreferrer noopener" href="https://pokerchained.com/" target="_blank">pokerchained.com</a><br /><strong>Promotions</strong>: Seasonal tournaments, refer-a-friend bonus</p>
                            </div>
                            <div className="wp-block-column w-[50%]">
                                <p><strong>Poker Games:</strong> Video poker<br /><strong>Cryptocurrencies</strong>: EOS</p>
                            </div>
                        </div>
                        <p>The&nbsp;<a className="text-blue-700" target="_blank" href="https://pokerchained.com/" rel="noreferrer noopener">PokerChained</a>&nbsp;Dapp makes the games extra exciting, as it features a leaderboard with the most successful players.</p>
                        <p>This extra layer of competition is welcomed for high-skilled players looking for a&nbsp;<strong>real poker room with all the benefits of a Dapp</strong>.</p>
                        <p>Fair play is guaranteed, and you can withdraw your funds at any time.</p>
                        <img src={WinkDappLogo} alt="WinkDappLogo" />
                        <div className="wp-block-columns mt-2">
                            <div className="wp-block-column w-[50%]">
                                <p><strong>Website</strong>: <a className="text-blue-700" href="https://tron.wink.org/" target="_blank" rel="noreferrer noopener">wink.org</a><br /><strong>Promotions</strong>: Seasonal offers</p>
                            </div>
                            <div className="wp-block-column w-[50%]">
                                <p><strong>Poker Games</strong>: Video poker, real poker, live poker<br /><strong>Cryptocurrencies</strong>: Tron, DICE (TRC20), and BTT (TRC10)</p>
                            </div>
                        </div>
                        <p><a className="text-blue-700" rel="noreferrer noopener" href="https://tron.wink.org/" target="_blank">Wink</a> offers a bit of everything: there are <strong>video poker</strong> games, <strong>real poker</strong> tables, and even a <strong>live poker</strong> game: Bet On Poker.</p>
                        <p>If you want to take a break from poker, you can also play several other casino games at this Tron-based Dapp.</p>
                        <p>Wink's <a className="text-blue-700" href="https://casinosblockchain.io/dice-bitcoin-casino/">dice games</a> are especially prized, and you can even find <a className="text-blue-700" href="https://casinosblockchain.io/slots-bitcoin-casino/">slot machines</a> from the world's top providers, such as <a className="text-blue-700" href="https://casinosblockchain.io/netent-bitcoin-casinos/">NetEnt</a>.</p>
                    </section>
                    <section id="Choose-Good-Casino">
                        <div className="h2">How To Choose A Good Casino For Poker	</div>
                        <p>If you are aspiring to be a professional poker player, the importance of choosing the right Bitcoin poker site is even higher than with other games. After all, your livelihood may end up depending on it! </p>
                        <p>However, hobbyists should be just as careful. </p>
                        <p>Luckily, you're not on your own. We can't decide what's best for you, but we can <a className="text-blue-700" href="https://casinosblockchain.io/">give you our honest opinions and offer you our best advice</a>.</p>
                        <p>Below you can find a few tips on how to pick the right Bitcoin poker casino for you.</p>
                        <img src={WinningPokerHand} alt="WinningPokerHand" />
                        <div className="h3">Be Honest About Your Level</div>
                        <p>When it comes to choosing a Bitcoin poker site, you shouldn't be too ambitious: you should <strong>pick one that suits your current gameplay</strong>.</p>
                        <p>If it's time to try and go professional:</p>
                        <ul className="is-style-checked-list_sm"><li>Choose casinos with lots of tournaments.</li><li>Stay on the lookout for freerolls (free entry).</li></ul>
                        <p>If you are still learning and practicing:</p>
                        <ul className="is-style-checked-list_sm"><li>Find casual video poker games where you can get used to the different poker hands and probabilities.</li><li>Look for casinos with small buy-ins.</li></ul>
                        <div className="h3">Read About Other Poker Players</div>
                        <p>Reading about other poker players can really help you get in their heads.</p>
                        <p>If there's a specific player you admire, you might even find out where they play and try your luck there as well!</p>
                        <p>Otherwise, you can <strong>read poker and Bitcoin forums</strong> where players share their experiences about their favorite casinos and Dapps. If you're lucky, you might even come across a couple of insightful hints.</p>
                        <p>Do take all you learn with a grain of salt, however. An off day might be enough for some to decide against a certain casino or poker strategy, and the opposite is certainly true as well.</p>
                        <img src={PokerPlayer} alt="PokerPlayer" />
                        <div className="h3">Decide Which Poker Versions You Like Best</div>
                        <p>It's not just about video poker, live poker, and real poker. </p>
                        <p>There are many different variants of the game, and you might like some better than others.</p>
                        <p>Not every casino with Texas Hold'em games will also cover Omaha Hi/lo or Seven Card Stud, so do your research before creating an account. </p>
                        <p>Otherwise, you might just sign up for a casino and deposit your hard-earned Bitcoin, <strong>only to find out it doesn't have your favorite version of poker</strong>.</p>
                    </section>
                    <section id="cryptocurrencies">
                        <div className="h2">Cryptocurrencies	</div>
                        <p>Playing poker with cryptocurrencies is not as straightforward as other casino games.</p>
                        <p>Why? Because several <strong>poker websites only support one or two different cryptos</strong>.</p>
                        <ul className="is-style-checked-list_sm"><li><strong>Video Poker: </strong>For video poker, you often have several options. You can play with Bitcoin, <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-cash-casinos/">Bitcoin Cash</a>, <a className="text-blue-700" href="https://casinosblockchain.io/best-ethereum-casinos/">Ethereum</a>, <a className="text-blue-700" href="https://casinosblockchain.io/litecoin-casinos/">Litecoin</a>, and <a className="text-blue-700" href="https://casinosblockchain.io/dogecoin-casinos/">Dogecoin</a>.</li><li><strong>Real Poker: </strong>If you want to play real poker at a casino, against real opponents, then <a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-casinos/">Bitcoin</a> is your best bet. </li><li><strong>Dapps: </strong><a className="text-blue-700" href="https://casinosblockchain.io/tron-casinos/">Tron</a> and <a className="text-blue-700" href="https://casinosblockchain.io/eos-casinos/">Eos</a> are the most commonly accepted currencies on Dapps.</li></ul>
                    </section>
                    <section id="game-rules">
                        <div className="h2">Game Rules	</div>
                        <p>There are quite a few versions of Poker, but in this article, we will focus on<strong> Texas Hold'em</strong>, which is the most popular Bitcoin poker game. </p>
                        <p>The goal of this game is to <strong>get the highest possible hand</strong>. </p>
                        <p>You do this by choosing the combination of cards that give you the best chance of winning from a hand of 5 cards: 2 closed cards (your own hand) and 3 out of 5 common cards that are open to everyone.</p>
                        <img src={TexasHoldem} alt="TexasHoldem" />
                        <p className="mt-2">The actual game starts when each player receives their hand of 2 closed cards. </p>
                        <p>Every round, at least two players are required to pay in: the player holding the 'small blind' (half the minimum stake) button and the player holding the 'big blind' (minimum stake) button.</p>
                        <p>After the blinds have been paid, the next player in line must choose one of the following actions:</p>
                        <ul className="is-style-checked-list_sm"><li><strong>Call</strong>: Pay the big blind and stay in the game.</li><li><strong>Raise: </strong>Raise the stake.</li><li><strong>Fold</strong>: Forfeit the game.</li></ul>
                        <p>This continues until every player who wants to stay in the game paid the required amount.</p>
                        <p>Then, <strong>the flop takes place</strong>: the dealer removes the first card from the undistributed deck of cards and puts the next three cards on the table. </p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">Winning a hand of poker</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                            The game can end at any time! If all but one player fold, the last remaining player gets the pot.
                            </div>
                        </div>
                        <p>All players get to decide what to do again, but now they have a fourth option: <strong>check</strong>, keeping their existing stake without betting further. </p>
                        <p>Afterward, the dealer removes another card from the deck and places it at the center of the table for everyone to see. This is called the <strong>turn</strong>. </p>
                        <p>The wagering and placing of a card are repeated again, during what is called the <strong>river</strong>.</p>
                        <p>After the river, players get another chance to check, call, raise or fold, before all cards (including the two cards on each remaining players' hands) are revealed. The player with the <strong>best hand will win the full pot</strong>, but if two players have equally good hands, they may split it.</p>
                    </section>
                    <section id="Beginners-Tips">
                        <div className="h2">Tips For Beginners	</div>
                        <p>There is no single strategy that will win you every Bitcoin poker game.</p>
                        <p>However, we can give you a few tips that you should always have in mind:</p>
                        <ul className="is-style-checked-list_sm"><li>Learn the possible poker hands by heart.</li><li>Play conservatively until you figure out your opponents' strategy.</li><li>Don't be afraid to fold.</li><li>Start with small tournaments (8 players is a good number) and let that number grow as your game gets better.</li><li>Try not to focus too much on winning money in the beginning, but rather on working on your skills.</li><li>Practice with friends in an informal setting.</li><li>Make sure you only play at a reliable casino or Dapp.</li><li>Research the casino before you invest your funds: read casino reviews and check if they have your favorite games.</li><li>Stick to the rules and keep the game fun for everybody.</li></ul>
                    </section>

                    <section id="FAQ" >
                        <div className="mt-32 h3">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I play the Bitcoin crash game?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Crash is a very simple casino game. To start playing, you simply have to place a bet. Then, you'll see a graph increase until it crashes. You'll win as long as you stop before it does.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What are the best casinos to play the Bitcoin crash game?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">You can play Bitcoin crash games at several popular Bitcoin casinos, including:<br />
                                    - <a className="text-blue-600" href="https://www.cloudbet.com/en/landing/100-free-spins/casinosblockchain/?af_token=aa938b8c991e47071094b255abd00cfd" target={"_blank"} rel="noreferrer noopener"> Cloudbet</a><br />
                                    - <a className="text-blue-600" href="/go/fortunejack/">FortuneJack</a><br />
                                    - <a className="text-blue-600" href="/go/stake/">Stake</a><br />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What about other coins? Can I also find Dogecoin crash games?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes! You can indeed find Dogecoin crash games at several crypto casinos. In fact, there's a whole world of cryptocurrencies that you can use to play crash! Ethereum, Litecoin, Tether, or XRP are just some of your other options.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What is the best crash gambling strategy?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Crash is purely a game of chance, meaning that there is no strategy that can guarantee long-term returns on the game. Every single game round is random, so you can't use data from previous rounds to try to predict the outcome of the following. As for the best playstyle, it really depends on your preferences: some people prefer to stop the game a few seconds after making a profit, while others prefer to push their luck. Our best tip is that you find your own comfort zone and never chase losses.
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
                        <a href="#play-poker-online" className="play-poker-online hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#video-poker" className="video-poker hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Video Poker
                            </li>
                        </a>
                        <a href="#live-poker" className="live-poker hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Live Poker
                            </li>
                        </a>
                        <a href="#real-poker" className="real-poker hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Real Poker
                            </li>
                        </a>
                        <a href="#poker-dapps" className="poker-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Poker Dapps
                            </li>
                        </a>
                        <a href="#Choose-Good-Casino" className="Choose-Good-Casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Choosing A Casino
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cryptocurrencies
                            </li>
                        </a>
                        <a href="#game-rules" className="game-rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Poker Rules
                            </li>
                        </a>
                        <a href="#Beginners-Tips" className="Beginners-Tips hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Beginner Tips
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