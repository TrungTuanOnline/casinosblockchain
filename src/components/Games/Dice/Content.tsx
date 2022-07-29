import BcgameManual from "../../../Assets/images/Content/bcgame-manual.png"
import StakeSlide from "../../../Assets/images/Content/stake-slide.png"
import CloudbetCircle from "../../../Assets/images/Content/cloudbet-circle.png"
import DiceSlide from "../../../Assets/images/Content/Dice-slide.png"
import EarnBetHomepage from "../../../Assets/images/Content/EarnBet-Homepage.jpg"
import BetfuryCasinoGames from "../../../Assets/images/Content/betfury-casino-games.png"
import MicrogamingCraps from "../../../Assets/images/Content/Microgaming-Craps.jpg"
import BcgamePlace from "../../../Assets/images/Content/bcgame-place.png"
import DifferentDice from "../../../Assets/images/Content/different-dice.png"
import CheckHelp from "../../../Assets/images/Content/check-help.png"
import ReadBcgame from "../../../Assets/images/Content/read-bcgame.png"


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
                    							
    <p><strong>Looking for the best Bitcoin dice games? We have you covered. </strong></p>
    <p><a className="text-blue-700" href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">Crypto casinos</a> have gone a long way in 2022, offering an unprecedented variety of casino games. And dice is no exception. From dice table games to dice-themed slot machines, you name it, they (usually) have it. </p>
    <p>In this article, <strong>we'll tell you all about Bitcoin dice sites</strong>, as well as betting with other cryptos. Read on to learn about: </p>
    <ul className="is-style-checked-list_sm"><li><strong>What crypto dice games are out there? </strong>We'll cover virtual and live games, including the king of them all - Craps.</li><li><strong>How to choose a BTC dice casino? </strong>We have a through casino vetting process and we'll help you pick the best option for your play style. </li><li><strong>Are there any dice strategies worth trying? </strong>We'll guide you through the (sometimes) treacherous world of dice strategy and help you with tips to <em>genuinely </em>improve your experience.</li></ul>
    <p>Ready to go? Let's jump right in: </p>
    <section id="play-dice-online">
        <div className="h2">Where To Play Bitcoin Dice?</div>
        <p>Looking for a list of quick picks? We won't keep you waiting. Here's our selection of the best BTC dice gambling sites: </p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
        {
            [siteDatas[0], siteDatas[1], siteDatas[3]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
        <p>Are you curious to know <em>why </em>we picked these casinos? Let's break it down:</p>
        <div className="h3">BC.Game</div>
        <img src={BcgameManual} alt="BcgameManual" />
        <p className="mt-2">BC.Game's provably fair Ultimate Dice game is one of our favorites!</p>
        <p><a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a> has a <strong>stellar selection of Bitcoin dice games</strong> and it's one of our favorite casinos overall. With 40+ game options to choose from (played with dice alone), you'll never be bored. </p>
        <p>But it gets better, too: </p>
        <p><strong>BC.Game boasts some of the best house edges in the crypto casino world. </strong>They have several dice games with a 99% RTP (extremely generous - and virtually impossible for a brick-and-mortar casino). We love that they display the RTP on the search results page, too. It's the kind of transparency we're all for!</p>
        <p>Check out BC.Game's dice games here:</p>
         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={0}
                siteIndex={0}
                summaryData={siteDatas[0]}
            />
        </div>
        <div className="h3">Stake</div>
        <img src={StakeSlide} alt="StakeSlide" />
        <p className="mt-2">Stake's provably fair dice game might have a simple design, but it's definitely worth checking out!</p>
        <p>Not only will you find a <strong>range of BTC dice games</strong> in the casinos at Stake, but both this casino and BC.Game offer <a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provable fairness</a>. Once again, the house edge and RTP definitely work in your favor. </p>
        <p>Plus, if you're a sports enthusiast, <a className="text-blue-700" href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake </a>also has <strong>a bunch of other betting options</strong>, including a stellar sportsbook. </p>
        <p>But, we owe you a disclaimer. We've had some people specifically ask us for a Stake dice strategy. </p>
        <p>To enhance your experience (and returns), we suggest you stick to the <strong>Stake original dice games</strong>. Since they have the best RTP, they'll give you the statistical upper hand over third-party provider dice. Still, there is no 100% surefire strategy for Bitcoin dice - if that existed, it wouldn't be a game of chance. </p>
        <p>Check out Stake's selection here:</p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={1}
                siteIndex={1}
                summaryData={siteDatas[1]}
            />
        </div>
        <div className="h3">Cloudbet</div>
        <img src={CloudbetCircle} alt="CloudbetCircle" />
        <p className="mt-2">Last but not least, Cloudbet offers a bunch of Bitcoin dice games - including their own take on the game!</p>
        <p>Last on the list (but way up there in our hearts), <a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet </a>also has an <strong>excellent selection of dice games</strong>. </p>
        <p>This crypto-first casino comes with a <strong>range of other benefits</strong>, too. It's easy to navigate, we love the design, and the bonuses are pretty juicy, too. The <strong>sportsbook is a great addition</strong>, and the rest of the casino games are top-notch.</p>
        <p>Cloudbet is a great option for players who are looking for a solid dice casino with a great choice of other games. If you want to check it out, you can get started right here:</p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={3}
                siteIndex={3}
                summaryData={siteDatas[3]}
            />
        </div>
        <div className="h3">Dapps</div>
        <img src={DiceSlide} alt="DiceSlide" />
        <p className="mt-2">EarnBet's Dice Game might not be flashy, but it's a champion when it comes to low house edge (just 1.5%)</p>
        <p>Dapps or decentralized apps are built on the blockchain, which makes their games <strong>automatically provably fair </strong>(they couldn't cheat, even if they wanted to) and <strong>accessible worldwide. </strong>There are new Dapp casinos popping up every day. Fortunately, some do stick around. Our top picks for dice apps include: </p>
        <div className="h3">EarnBet</div>
        <img src={EarnBetHomepage} alt="EarnBetHomepage" />
        <p className="mt-2"><a className="text-blue-700" href="https://casinosblockchain.io/earnbet-review/" target="_blank" rel="noreferrer noopener">EarnBet </a>is our <strong>number one casino Dapp</strong> and for a good reason: </p>
        <p>✔️ <strong>All provably fair games</strong>, including dice</p>
        <p>✔️ <strong>Deposit</strong> <strong>bonus</strong> of $50 in BTC</p>
        <p>✔️ <strong>BET token holders </strong>get the casino's profits (100% of them)</p>
        <p>The one thing we <em>don't </em>love about EarnBet is the less-than-appealing design. The games are simple and fun, but we'd love to see some extra frill. </p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={9}
                siteIndex={9}
                summaryData={siteDatas[9]}
            />
        </div>
        <h3>BetFury</h3>
        <img src={BetfuryCasinoGames} alt="BetfuryCasinoGames" />
        <p className="mt-2">Number two on our list, <a className="text-blue-700" href="https://casinosblockchain.io/betfury-casino-review/" target="_blank" rel="noreferrer noopener">BetFury </a>is a full-fledged online casino with Bitcoin dice games... and it's also a Dapp!</p>
        <p>Standout features include: </p>
        <p>✔️ <strong>Free faucet </strong>to earn extra crypto</p>
        <p>✔️ <strong>5000+ games</strong>, a pretty hard-to-beat selection, especially for a Dapp</p>
        <p>✔️ <strong>In-house token </strong>with staking and farming options</p>
        <p>Unfortunately, BetFury comes with some downsides:</p>
        <p>❌ <strong>No profit sharing</strong></p>
        <p>❌ <strong>Withdrawal fees </strong>and limits</p>
        <p>That said, BetFury is still one of our favorite dice Dapps. Check them out today:</p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={15}
                siteIndex={15}
                summaryData={siteDatas[15]}
            />
        </div>
        <div className="h3">More Dice Dapps</div>
        <p><strong>Dice Dapps are one of the easiest applications to build on the blockchain</strong>. We've seen them come and go throughout the years, that's why we're very cautious about recommending up-and-coming projects. </p>
        <p>That said, there are some recent Dapps that have caught our eye: </p>
        <ul className="is-style-checked-list_sm"><li><strong><a className="text-blue-700" href="https://www.diceplanet.xyz/#/" target="_blank" rel="noreferrer noopener">DicePlanet</a> </strong>is a simple dice game on the on ThunderCore blockchain. It's provably fair and connects directly with your TrustWallet, Thundercore Hub, Metamask, or imToken wallet.</li><li><strong><a className="text-blue-700" href="https://playdice.xyz/" target="_blank" rel="noreferrer noopener">Serious Dice</a> </strong>is another new dice Dapp, which features three games and a token farming option. We love their transparency and the games are fun, but we'd appreciate a nicer design. </li></ul>
        <p>Both of these dice Dapps are provably fair and trustworthy. They also come with the perk of <strong>not holding your coins </strong>as they connect to your crypto wallet. </p>
        <p>That said, still take new projects with a grain of salt. Most Dapps aren't regulated and they could put your money at risk. </p>
    </section>
    <section id="play-live-dice">
	    <div className="h2">What About Live Dice?</div>
        <p><strong>Virtual dice games are fun and all, but for some they simply don't compare to the live experience.</strong> Picture a live casino - the sounds, the lights, the excitement of the game. There's a reason so many Hollywood movies feature Craps! </p>
        <p>Fortuntely, now you <em>can </em>replicate the excitement of an in-person game with the <strong>amazing selection of live dice games </strong>that virtual casinos offer. Here is what you should know about them: </p>
        <div className="h3">Casinos</div>
        <p><a className="text-blue-700" href="https://casinosblockchain.io/evolution-gaming-casinos/" target="_blank" rel="noreferrer noopener">Evolution Gaming</a> is one of the top providers of live dice games like Super Sic Bo and Lightning Dice.</p>
        <p>You can play Live Evolution games at BC.Game, Stake, and True Flip.</p>
        <p>We love the excitement of playing a live game. Even when it's an online casino, the proffessional dealer is there to entertain you and make the game more interesting.</p>
        <p>But there's another huge benefit to games like Super Sic Bo; the potential to receive a multiplier to increase your winnings. </p>
        <p>Check out live Bitcoin dice games at: </p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
        {
            [siteDatas[0], siteDatas[1], siteDatas[3], siteDatas[2]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
        <div className="h3">Dapps</div>
        <p><strong>While Dice games are widely offered on Dapps, this doesn't apply to Live Dice. </strong>The live casino section is only available in a handful of Dapps at the moment and unfortunately, none of them offers live dice just yet. </p>
    </section>
    <section id="cryptocurrencies">
	    <div className="h2">What Cryptos Are Available? </div>
        <p>When you are looking for Dice games in a casino it's very likely that you'll find either the <strong>table game or the slot game version</strong>. The same goes for when you are looking at crypto casinos and for Dapps.</p>
        <p>Casinos like <strong>BC.Game and Stake offer varied options</strong> when it comes to Dice casino games. In these casinos, you can play with <a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">Bitcoin</a>, <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-cash-casinos/" target="_blank" rel="noreferrer noopener">Bitcoin Cash</a>, <a className="text-blue-700" href="https://casinosblockchain.io/litecoin-casinos/" target="_blank" rel="noreferrer noopener">Litecoin</a>, <a className="text-blue-700" href="https://casinosblockchain.io/best-ethereum-casinos/" target="_blank" rel="noreferrer noopener">Ethereum</a>, and <a className="text-blue-700" href="https://casinosblockchain.io/dogecoin-casinos/" target="_blank" rel="noreferrer noopener">Dogecoin</a>. New cryptocurrencies are added every day, so it's good to keep an eye on it if your payment method of choice is not being offered just yet. </p>
        <p>While most online crypto casinos are known for their Bitcoin dice games, the <strong>most common payment methods on Dapps</strong> are <a className="text-blue-700" href="https://casinosblockchain.io/tron-casinos/" target="_blank" rel="noreferrer noopener">Tron</a>, Ethereum, and <a className="text-blue-700" href="https://casinosblockchain.io/eos-casinos/" target="_blank" rel="noreferrer noopener">Eos</a>. That doesn't mean that you won't be able to pay with other cryptocurrencies, you'll just have to look a bit harder for it. And as Dapps are becoming more popular, this is likely to change in the future.</p>

    </section>
    <section id="Craps-Rules">
    	<div className="h2">Popular Dice Games: Everything You Need to Know About Bitcoin Craps	</div>
        <p>When it comes to BTC dice, there is <strong>one game that stands out from the rest</strong>: </p>
        <p>Craps!</p>
        <p>A table game for multiple 20 players, Craps always gathers quite a crowd. No wonder it always looks so exciting in Hollywood movies.</p>
        <p>In this section, we'll cover Bitcoin craps specifically - what it is, where to play it, and why we love it. </p>
        <p>But first, let's go over the rules</p>
        <div className="h3">Bitcoin Craps: Rules Recap</div>
        <img src={MicrogamingCraps} alt="MicrogamingCraps" />
        <p className="mt-2"><strong>There are up to 20 players in Craps, but only one of them rolls the dice.</strong> He is called the shooter and rolls both dice at once. </p>
        <p>You bet on the outcome this dice roll. Craps bets include: </p>
        <ul className="is-style-dotted-list"><li><strong>Pass Line </strong><br />When you make a Pass Line bet, you bet on the shooter getting 7 or 11 points at the first shot (the come out). In case this doesn't happen, there are still two possible scenarios: <br />If the shooter throws one of the point numbers (4, 5, 6, 8, 9, or 10) you can still win back your wagered money if the shooter throws the same number again before throwing a 7.<br />If the shooter throws 2, 3, or 12 points at the come-out, it's called Craps, and all the players who bet on the pass line lose.</li><li><strong>Don't Pass Line</strong><br />A Don't Pass Line bet is basically the opposite of a Pass Line bet.<br />The bet is about the shooter getting Craps at the first try. If after the come-out, the next throw leads to a point, with a Don't Pass Line bet you'll need the next throw to be 7 and not the point number. You are, in fact, betting against the intentions of the shooter with this bet.</li><li><strong>Come</strong><br />When you bet Come, you win if the next throw after a point is a 7 or 11. If the next throw is Craps, you lose.</li><li><strong>Don't Come</strong><br />Just like <em>Don't Pass Line </em>is the opposite of <em>Pass Line</em>, this bet is the opposite of a Come wager.</li></ul>
        <h3>Which Casino Has the Best Bitcoin Craps? </h3>
        <p>BTC craps gives you the glitz and glam of regular craps - but, from the comfort of your own home (or wherever you're playing). </p>
        <p>So which of our top casinos gives you the <strong>best BTC craps experience? </strong>The winner is definitely: </p>
        <p><strong>BC.Game </strong></p>
        <img src={BcgamePlace} alt="BcgamePlace" />
        <p className="mt-2">Play Bitcoin Craps at BC.Game - with an impressive RTP, too!</p>
        <p>BC.Game only has one <strong>virtual craps option</strong>, but it's a great one. </p>
        <p>The <em>Craps slot </em>by Nucleus Gaming has a <strong>98.64% RTP</strong>, which is impressive for a third-party provider game. Don't let the word <em>slot </em>fool you - this <strong>feels like a real Craps table</strong>. </p>
        <p>From slot design to premise and execution, this is one of the <strong>best virtual craps games </strong>we've seen. Obviously, we're thrilled to see it at BC.Game. </p>
        <p>Try it out today: </p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={0}
                siteIndex={0}
                summaryData={siteDatas[0]}
            />
        </div>
    </section>
    <section id="choose-good-casino">
	    <div className="h2">How To Choose A Bitcoin Dice Casino	</div>
        <p>Dice games might not be as easy to find as Crash and Blackjack, but that doesn't mean you should settle. When we compiled this list for you, we went through our <strong>rigorous testing process</strong> to make sure we're only recommending the best. </p>
        <p>Here are the steps to picking the best BTC dice casino - we used them and we think they could help you find your personal favorite, too:</p>
        <div className="h3">Try out Different Dice games</div>
        <img src={DifferentDice} alt="DifferentDice" />
        <p className="mt-2">BC.Game offers 30+ different dice games</p>
        <p>Before you decide on a casino, you can try out <strong>different types of  Bitcoin Dice games</strong> in the play for fun mode. This way you'll get familiar with all the different options and decide which ones you like best. Once you made your choice, you can start looking for a casino that offers these options.</p>
        <div className="h3">Check out the Help&nbsp;Section</div>
        <img src={CheckHelp} alt="CheckHelp" />
        <p className="mt-2">BC.Game's Classic Dice game (and all of their other games) have the game rules as a pop-up right inside the window.</p>
        <p>Does the casino have a page to <strong>explain the Dice rules</strong> to new players? Even better - is it provably fair with an easy way to verify the randomness?  </p>
        <p>If not, at least check out<strong> FAQ page or the customer support team</strong>. This way you'll learn straight away whether or not they are knowledgeable enough in your opinion. </p>
        <p>Also, their <strong>opening hours are important</strong>. If you like to play at night or really early in the morning, it's nice to know there'll be someone available to help you.</p>
        <div className="h3">Read the T&amp;C's</div>
        <img src={ReadBcgame} alt="ReadBcgame" />
        <p className="mt-2">Find the BC.Game TOC in the Help section (along with other useful information)!</p>
        <p>It's a boring task, but that doesn't make it less important. Before joining a casino, you should always read the <strong>Terms and Conditions</strong> to become aware of your rights and obligations towards the casino. Doing this can avoid a lot of misunderstandings and frustrations that come with playing in an unknown casino. </p>
        <p>And it's a <strong>good way to check the trustworthiness of a casino</strong>. If the T&amp;C's don't make sense, you won't want to play there anyway. </p>
        <p>For Dapps this is different though, as you should consult the FAQ page and aim to play at a provably fair operator.</p>
        <div className="h2">Do Bitcoin Dice Strategies Work: Here's the Tea</div>
        <p><strong>It's no secret that casino games are luck-based. </strong>Using a Bitcoin dice strategy can't guarantee wins - because, if it could, casinos wouldn't offer the game (they'd lose on every round, because you'd have them beat). </p>
        <p>Plus, think about it - <strong>if somebody did have a failproof BTC strategy, why would they give it away?</strong> They'd just use it to make money and retire to a tropical location, right? Unfortunately, those who make strategy promises are usually scammers or intentionally mislead you to promote a casino. Don't fall for it!</p>
        <p>No matter what strategy you use, statistically the house has an advantage. That being said, there are certain strategies that can help you <strong>minimize your BTC dice losses and give you a better chance of coming out ahead</strong>. </p>
        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
            <div className="h2 text-white text-lg md:text-2xl">
            Bankroll management is one of the most important things to consider when gambling.
            </div>
        </div>
        <p className="mt-2">You <strong>should never bet more than you can afford to lose</strong>, and it's always a good idea to set aside a certain amount of money for gambling each month. We also recommend not putting more than 2-5% of your bankroll in a single bet to avoid losing quickly. </p>
        <p>Another thing to keep in mind is that <strong>not all casinos are created equal</strong>. Some have a much higher house edge than others, so it's important to do your research before choosing where to play. </p>
        <p><strong>Low house edge casinos include BC.Game and Stake, which give you RTPs of 99%: </strong></p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
        {
            [siteDatas[0], siteDatas[1]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
        <p className="mt-4">Finally, <strong>take advantage of bonuses and promotions whenever possible</strong>. </p>
        <p>Many casinos offer deposit bonuses, cashback offers, and other rewards that can help you stretch your bankroll further. </p>
        <p>By following these tips, you'll be in a better position to win big at the casino - even if luck isn't always on your side.</p>
    </section>
    <section id="beginners-tips">
	    <div className="h2">Final Tips	</div>
        <p>As exciting as it is to start playing Dice, don't go overboard and keep the following tips in mind:</p>
        <ul className="is-style-checked-list_sm"><li><strong>Understand the rules before wagering real money</strong> - you can play in 'play for fun mode' as you get familiar with the game. Check out other people’s games and learn from their strategies, too. </li><li><strong>Bet on options with lower odds</strong> first as these give you a higher chance to win. Then, move on to options with higher odds.</li><li><strong>Play a few rounds in a row</strong> to get more experience.</li><li><strong>Make sure you're calm </strong>when playing. Avoid gambling if you're tired or under the influence. Leave the game to cool down when you are on a losing streak.</li></ul>
        <p>Finally, make sure you only bet at <strong>trustworthy &amp; reputable casinos</strong>. Whether this means sticking to provably fair games (BC.Game and Stake have tons of those) or choosing a provider with a trusted license, never risk your hard-earned cash for an icky casino. </p>
        <p>Our top pick? We love BC.Game's Bitcoin dice options - low house edge, tons of games, and an exciting sociable aspect. What else is there to ask for? </p>
        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
            <SiteRankBlogTable
                key={0}
                siteIndex={0}
                summaryData={siteDatas[0]}
            />
        </div>
    </section>


                    <section id="FAQ" >
                        <div className="h3 mt-32">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is the house edge for dice games lower in crypto casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Due to the many factors that need to be taken into account to be able to calculate the house edge, there's no clear answer to this question. There are, however, a couple of casino Dapps with lower house edges.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Can I only play Craps in crypto casinos in Europe?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    It's true that many land based casinos in Europe don't offer the game of craps, but you still have options at online casinos, crypto casinos and casino Dapps.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is online dice reliable?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, it's very reliable. If you play the game in an online casino with a license, you are safe. The same goes for a Dapp with provably fair games.
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
                        <a href="#play-dice-online" className="play-dice-online hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bitcoin Dice Casinos & Dapps
                            </li>
                        </a>
                        <a href="#play-live-dice" className="play-live-dice hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Live Dice
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Cryptocurrencies
                            </li>
                        </a>
                        <a href="#Craps-Rules" className="Craps-Rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bitcoin Craps
                            </li>
                        </a>
                        <a href="#choose-good-casino" className="choose-good-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                How to Choose a Casino
                            </li>
                        </a>
                        <a href="#beginners-tips" className="beginners-tips hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bitcoin Dice Tips & Final Thoughts
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