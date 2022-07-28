import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import BCGame from "../../../Assets/images/Content/bcgame.png"
import CasinoStake from "../../../Assets/images/Content/casino-stake.png"
import Trueflip from "../../../Assets/images/Content/trueflip.png"
import HippoPopStake from "../../../Assets/images/Content/hippo-pop-stake-casino.png"
import DogecoinPoker from "../../../Assets/images/Content/dogecoin-poker.png"
import NetEntLive from "../../../Assets/images/Content/NetEnt-Live-Blackjack.png"
import Roulette from "../../../Assets/images/Content/roulette.png"
import StakeDrake from "../../../Assets/images/Content/stake-drake.png"
import BitcoinSportsBetting from "../../../Assets/images/Content/bitcoin-sports-betting.png"


import backgroundImg from "../../../Assets/images/Header.svg"

import { ISiteRankBlogCardObj } from "../../../Interfaces";

import { siteDatas } from "../../../Interfaces/SiteDatas";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";


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
                    <p>What if crypto could make <strong>transactions faster and easier</strong> than ever? That is exactly what Ripple does. Today, the decentralized payments platform is one of the biggest projects in the cryptocurrency space. Its native token, <a className="text-blue-700" href="https://coinmarketcap.com/" target="_blank" rel="noreferrer noopener">XRP</a> consistently ranks as a top cryptocurrency, in spite of some controversies (we’ll cover these later).</p>
                    <p>Where can you gamble with XRP? In this article, we’ll give you our <strong>top Ripple casino</strong> picks – and what makes XRP a player-friendly coin.</p>
                    <p>Throughout this article, we will:</p>
                    <ol className="is-style-dotted-list">
                        <li>Discover the <strong>best Ripple online casinos</strong> of 2022.</li>
                        <li>Explore what <strong>games you can play</strong> with XRP, such as XRP poker.</li>
                        <li>Discuss the <strong>pros and cons</strong> of gambling with Ripple.</li>
                        <li>Learn about the <strong>legal aspects</strong> of depositing and withdrawing at online casinos with Ripple.</li>
                    </ol>
                    <p>Read on to learn more about XRP casinos, the Ripple network, and how to gamble safely and responsibly:</p>
                    <section id="best-casinos">
                        <div className="h2">
                            Best Casinos To Play With Ripple
                        </div>
                        <p>If you’re here, you’re probably on the lookout for the best Ripple casino to enjoy the perks of XRP gambling? You’ve come to the right place. </p>
                        <p>We’ve exhaustively tested some of the&nbsp;<strong>most popular casinos accepting Ripple&nbsp;</strong>to select a top three.</p>
                        <p>All of our recommendations meet our strict criteria:</p>
                        <ol className="is-style-dotted-list">
                            <li>They’re <strong>trustworthy casinos</strong> with a reputation to withhold.</li>
                            <li>They have <strong>provably fair games</strong> or games from trusted providers.</li>
                            <li>They’re available in <strong>several languages</strong>.</li>
                            <li>They boast <strong>enticing bonuses</strong> or other ways to give you more value for money, such as a low house edge.</li>
                            <li>They allow you to play anonymously or ensure the <strong>safety of your private details</strong>.</li>
                        </ol>
                        <p>Curious to know who made the top three? Here is our selection: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3 mt-10">BC.Game</div>
                        <img src={BCGame} alt="bcgame.png" />
                        <p className="mt-4"><a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" data-type="URL" data-id="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a> is our <strong>number one Ripple casino</strong>. </p>
                        <p>This crypto-first site offers a selection of exciting games, including <strong>20 provably fair BC originals</strong>. There’s also a huge range of slots, table games, and live casino action to enjoy.</p>
                        <p>One of the best things about BC.Game is that they boast an <strong>excellent social aspect</strong> of the experience. Join the community to make new friends, brag about your latest wins, or even ‘make it rain’ in the chat.</p>
                        <p>BC.Game is also one of the <strong>most trusted XRP casinos</strong> around. It has a Curaçao gambling license and uses the latest security technologies to keep your funds safe.</p>
                        <p><strong>Pros:</strong></p>
                        <p>✔️ Huge range of games<br />✔️ Great bonuses and promotions<br />✔️ Trusted and licensed<br />✔️ Sociable<br />✔️ 60+ cryptos available</p>
                        <p><strong>Cons:</strong></p>
                        <p>❌ No deposit bonus <br />❌No fiat currencies</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                    </section>
                    <section id="stake-casino">
                        <div className="h3 mt-10">
                            Stake Casino
                        </div>
                        <img src={CasinoStake} className="w-full h-auto" alt="casino-stake.png" />
                        <p className="mt-4">Coming in at number two, Stake is another great Ripple-friendly provider</p>
                        <p>This casino has a massive games library with over <strong>2,000 slot titles alone</strong> to choose from. You’ll find all your favorite casino games, plus a few Stake originals exclusives thrown in for good measure.</p>
                        <p>But, the <strong>sportsbook </strong>is where Stake really stands out.</p>
                        <p>This is one of the best crypto sportsbooks around with a <strong>huge range of markets and competitive odds</strong>. You can bet on everything from traditional sports to e-sports, and even reality TV.</p>
                        <p><strong>Pros:</strong></p>
                        <p>✔️ Games from all major providers<br />✔️ One of the best crypto sportsbooks<br />✔️ Provably fair Stake originals<br />✔️ Enticing promo schemes</p>
                        <p><strong>Cons:</strong></p>
                        <p>❌ No welcome bonus<br />❌ KYC checks are mandatory</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>
                    </section>
                    <section id="true-flip">
                        <div className="h3">True Flip</div>
                        <img src={Trueflip} alt="trueflip.png" />
                        <p className="mt-4">Last but not least, <a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" rel="noreferrer noopener">True Flip</a> takes a <strong>playful approach to the crypto casino</strong> world.</p>
                        <p>This fun and friendly casino also offers a range of <strong>exciting games</strong>, although provably fair options are not on the menu.</p>
                        <p>One of the best things about this casino is the <strong>regular tournaments</strong>. You can compete against other players to win a share of a huge prize pool. True Flip also offers a <strong>weekly cashback</strong> program, where you get 10% back.</p>
                        <p>Finally (and most excitingly), they recently introduced a <strong>no-deposit bonus</strong>. You get 30 free spins at one of their most popular original games, simply for completing your profile.</p>
                        <p><strong>Pros:</strong></p>
                        <p>✔️ No-deposit bonus<br />✔️ Great selection of games<br />✔️ Regular tournaments<br />✔️ Great customer support</p>
                        <p><strong>Cons:</strong></p>
                        <p>❌ No provably fair games<br />❌ No welcome bonus</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={4}
                                siteIndex={4}
                                summaryData={siteDatas[4]}
                            />
                        </div>
                    </section>
                    <section id="bonuses">
                        <div className="h3">
                            Ripple Bonuses
                        </div>
                        <p>Casino bonuses give you a chance to get even more bang for your buck. Nowadays, virtually every online casino offers some type of promotion. Whether it’s free spins, a first deposit match, or a jackpot lottery, we love providers who reward their loyal players.</p>
                        <div className="w-full h-[150px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-sm text-white opacity-50 ">Most crypto casinos don’t offer the typical welcome bonus.</p>
                        </div>
                        <p className="mt-4">In fact, none of our top three providers offer it. But, they all offer a range of other promos to give you even more value for your XRP.</p>
                        <p>Our <strong>number one casino for Ripple bonuses</strong> is True Flip. True Flip recently introduced a<strong> no deposit bonus</strong>, meaning you don’t have to put in real money at all to start playing at the casino. Instead, you get 30 free spins just for signing up.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={4}
                                siteIndex={4}
                                summaryData={siteDatas[4]}
                            />
                        </div>
                        <p className="mt-4">If you’re looking for a casino with a <strong>first deposit match</strong>, we recommend using <strong>Rocketpot</strong>. They offer a 100% first deposit match up to 1 BTC (or its XRP equivalent). Read more about them in our <a className="text-blue-700" href="https://casinosblockchain.io/rocketpot-review/" target="_blank" rel="noreferrer noopener">Rocketpot review</a>.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={2}
                                siteIndex={2}
                                summaryData={siteDatas[2]}
                            />
                        </div>
                        <p>And finally, our number three pick for Ripple bonuses is <strong>BC.Game</strong>. Even though they don’t have a welcome bonus, BC.Game has a range of exciting promotions, including a <strong>daily free wheel spin</strong>.</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <p>Ultimately, even though most crypto casinos don’t offer the same bonuses as traditional online casinos, there are still plenty of ways to get extra value for your money.</p>
                    </section>
                    <section id="casino-games">
                        <div className="h2">
                            Casino Games You Can Play With Ripple
                        </div>
                        <p className="mt-4">As we mentioned before, a growing number of casinos are starting to offer Ripple as a payment method. Therefore, practically every&nbsp;casino game&nbsp;is available at Ripple casinos nowadays, including:</p>
                        <div className="h3"><strong>Slots</strong></div>
                        <img src={HippoPopStake} className="w-full h-auto" alt="HippoPopStake" />
                        <p className="mt-4">
                            Play exciting slots like Hippo Pop at Stake casino
                        </p>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/slots-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Slots</a>&nbsp;aficionado? Ripple casinos don’t disappoint. </p>
                        <p>You will find all of your favorites by renowned providers, as well as innovative games from newer brands. Many XRP casinos like BC.Game and Stake also offer provably fair games. </p>
                        <p>Unfortunately, progressive jackpot slots are not as easy to find.</p>
                        <p>Find the widest range of <strong>Ripple slots </strong>at: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong>Poker</strong></div>
                        <img src={DogecoinPoker} alt="dogecoin-poker.png" />
                        <p className="mt-4">Enjoy video poker at BC.Game!</p>
                        <p>XRP poker games (especially video poker games with no opponent) are widely available. You will, however, struggle to find a casino where you can play XRP poker tournaments. </p>
                        <p>As we wait for crypto casinos to introduce them, hone your skills with video poker and live poker at: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong>Blackjack</strong></div>
                        <img src={NetEntLive} alt="NetEntLive" />
                        <p className="mt-4">Have fun with live blackjack by Evolution at True Flip casino</p>
                        <p>As expected for such a popular game, you can play Ripple blackjack games in the <strong>live casino or table games section</strong> of most XRP gambling sites.</p>
                        <p>One of our favorite for XRP blackjack is <strong>True Flip casino</strong>. Featuring exciting live games by Evolution Gaming, True Flip allows players to enjoy a more sociable playing experience while betting in XRP. With a wide range of betting limits, players of all experience levels can enjoy this classic game.&nbsp;</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[0]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong>Roulette</strong></div>
                        <img src={Roulette} alt="Roulette" />
                        <p className="mt-4">
                            BC.Game’s roulette boasts great RTP and provable fairness
                        </p>
                        <p>Roulette is one of the simplest casino games to play, but offers some of the best odds for players.</p>
                        <p>Ripple <a className="text-blue-700" href="https://casinosblockchain.io/roulette-bitcoin-casino/">roulette games</a> – live or video – are often found at the same casinos offering XRP blackjack. Both American and European tables are available. We especially love BC.Game’s provably fair roulette. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="sports-betting">
                        <div className="h3">
                            Ripple Sports Betting
                        </div>
                        <p>Looking to bet on sporting events? Here are our top picks for Ripple-friendly sportsbooks:</p>
                        <p className="mt-4"><strong>Stake Casino</strong></p>
                        <img src={StakeDrake} alt="stake-drake" />
                        <p>One of our top-rated casinos overall, Stake boasts a <strong>comprehensive sportsbook</strong> product that covers all the major leagues and events. They offer both <strong>pre-match and in-play betting</strong> on soccer, tennis, basketball, and a variety of other sports, including eSports and fighting sports.</p>
                        <p>In fact, they’re an official sponsor of UFC and popular MMA fighter Israel Adesanya is a brand ambassador.</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>
                        <p><strong>Rocketpot.io</strong></p>
                        <img src={BitcoinSportsBetting} alt="BitcoinSportsBetting" />
                        <p>A relative <strong>newcomer to the sportsbetting scene</strong>, Rocketpot.io offers a Ripple-friendly sportsbook along with their range of other games. They are yet to develop it into a fully-fledged sportsbetting product, but still offer an <strong>impressive variety</strong> in terms of events and odd types.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={2}
                                siteIndex={2}
                                summaryData={siteDatas[2]}
                            />
                        </div>
                    </section>
                    <section id="benefits">
                        <div className="h2">
                            Ripple: Pros & Cons
                        </div>
                        <p>Before we dive into the pros and cons of using Ripple, let’s get one thing clear:</p>
                        <p>Even though people use XRP and Ripple interchangeably, they’re not the same thing. Ripple is a payment platform that allows instant transfers. XRP is a digital currency that helps facilitate these payments:</p>
                        <div className="w-full h-[240px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">Ripple Vs XRP</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                               Ripple is an instant transaction platform. XRP is Ripple’s native currency.
                            </div>
                        </div>
                        <p className="mt-4">Let’s use an example to explain it:</p>
                        <p>Say you’re in Germany and want to send money to the US.</p>
                        <p>The <strong>‘old way’</strong> would be to go to your bank, buy some US dollars for your Euro, then pay for processing to the USD. The whole process would take a <strong>few days</strong> and cost you a hefty fee for buying the dollars and sending the money.</p>
                        <p><strong>With Ripple</strong>, you can exchange the Euro for XRP, send the XRP to your friend in the US, who then exchanges the XRP back into US dollars. The whole process <strong>takes a few seconds</strong>, and you <strong>only pay 0.0001 XRP</strong> for validating the transaction.</p>
                        <p>It’s like sending cash via WhatsApp or Facebook messenger – with Ripple, the payment is processed instantly and there’s virtually no fee.</p>
                        <p>So, now you see how Ripple is a payment platform that allows instant transfers. XRP, on the other hand, is a digital currency that helps facilitate these payments.</p>
                        <p><strong>What are the advantages of gambling with XRP?</strong></p>
                        <p>XRP casinos come with many perks for their players:</p>
                        <p>✔️ <strong>Lower fees</strong>: When you gamble with XRP, you will usually be charged lower fees than with fiat currencies. This is because XRP is a very efficient currency, and using it lowers the casino’s expenses.</p>
                        <p>✔️ <strong>Faster transactions</strong>: XRP transactions are usually processed much faster than other currencies. This means that you can get your winnings sooner, and you won’t have to wait as long for your deposits to go through.</p>
                        <p>✔️ <strong>More anonymity</strong>: If you are looking for a more anonymous way to gamble, XRP is a good option. While most casinos will require some personal information from you, they will usually not need as much if you are using a cryptocurrency like XRP.</p>
                        <p>✔️ <strong>More security</strong>: XRP is a very secure currency, and it is very unlikely that you will experience any fraud or theft when you use it at an online casino (but make sure you only go to reputable providers)</p>
                        <p><strong>Any downsides of Ripple casinos?</strong></p>
                        <p>Even though XRP is a trusted crypto gambling currency, it is not without its downsides:</p>
                        <p>❌ XRP is <strong>not as widely accepted</strong> as other cryptocurrencies, so you may have trouble finding a casino that accepts it.</p>
                        <p>❌ XRP is a <strong>centralized currency</strong>. This means that it is not as ‘democratic’ as other cryptocurrencies, and some people believe this makes it less secure.</p>
                        <p>❌ Recently, there was an <strong>official investigation</strong> into the <a className="text-blue-700" href="https://casinosblockchain.io/ripple-investigation-casino-advice/" target="_blank" rel="noreferrer noopener">Ripple company</a>. There have been multiple controversies regarding XRP and, even though the currency remains one of the biggest cryptos, some blockchain enthusiasts have become wary of it.</p>
                        <p>Nonetheless, Ripple casinos, or XRP casinos, <a className="text-blue-700" href="https://casinosblockchain.io/crypto-casinos-tripled-in-traffic/">alongside other cryptocurrency casinos</a>, are still on the rise. But, there are some risks associated with crypto gambling – let’s talk about how to reduce them:</p>
                    </section>
                    <section id="benefits">
                        <div className="h2">
                            Playing It Safe
                        </div>
                        <p>How do you make sure gambling with Ripple is all fun and no problems? There are two things to keep in mind:</p>
                        <div className="h3">Protecting Yourself</div>
                        <p>Like with any other cryptocurrency, gambling with Ripple has an undeniable added risk: <strong>the coin’s volatility</strong>.</p>
                        <p>This is especially concerning when it comes to XRP since the coin’s mother company has a history of legal actions taken against it.</p>
                        <p>For that reason, we recommend you to play at <strong>casinos that offer other payment solutions</strong>, be it other cryptocurrencies or even fiat payments, giving you more flexibility. You can find more information about how to protect your XRP deposits and winnings <a className="text-blue-700" href="https://casinosblockchain.io/ripple-investigation-casino-advice/">in this article</a>.</p>
                        <p>For the most part, however, XRP gambling is safe, as long as you do it at a reputable casino. That’s why we highly advise you to thoroughly <strong>investigate the casino before signing up</strong>:</p>
                        <ol className="is-style-dotted-list">
                            <li>Read up on our <a className="text-blue-700" href="https://casinosblockchain.io/">casino reviews</a> for an unbiased look at the website.</li>
                            <li>Look for information about the Ripple casino’s reputation in forums or the casino’s social media pages.</li>
                            <li>Try out the casino in free-to-play mode before opening an account.</li>
                            <li>Go through the casino’s terms and conditions to avoid unpleasant surprises.</li>
                        </ol>
                        <p>Even at a reputable casino, look for <strong>provably fair games</strong>. <a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">Provable fairness</a> ensures the outcome can’t be manipulated – it really was random. Both BC.Game and Stake Casino offer provably fair gambling, which is why they get our seal of approval.</p>
                        <div className="h3">Legal Aspects</div>
                        <p>Cryptocurrency gambling (including XRP gambling) tends to have a bad reputation due to its relative novelty. Therefore, it’s understandable you might have some doubts about the safety and legality of XRP casinos.</p>
                        <p>The best way to ensure you gamble safely with Ripple is to choose a <strong>casino holding a reputable gambling license</strong>. In general, these are the best licenses for Ripple casinos:</p>
                        <ul className="is-style-checked-list_sm">
                            <li><a className="text-blue-700" target="_blank" href="https://www.mga.org.mt/" rel="noreferrer noopener"><strong>Malta</strong></a>: Valid in many European countries.</li>
                            <li><a className="text-blue-700" target="_blank" href="https://www.curacao-egaming.com/" rel="noreferrer noopener"><strong>Curaçao</strong></a>: Recognized around the world.</li>
                        </ul>
                        <p>Do note that online gambling with Ripple might not be legal in your country. Generally speaking, Ripple casinos are legal in countries where online gambling itself is not forbidden or heavily regulated.</p>
                        <p>Another way to protect yourself at Ripple casinos is to choose <a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/">provably fair games</a>, or play at casinos that let you play directly from your wallet and never hold your winnings.</p>
                        <div className="h2">Final Thoughts</div>
                        <p>Playing at a Ripple casino comes with a range of perks. XRP <strong>transactions are faster and cheaper</strong> than those made in fiat currency. Casinos that accept XRP are typically crypto-friendly ones that also emphasize <strong>data safety, provable fairness</strong>, and super <strong>low house</strong> edges. </p>
                        <p>The main drawback of playing at an XRP casino is that there are <strong>not as many options available</strong> as there are for other cryptocurrencies. However, as XRP becomes more widely accepted, this is likely to change. In the mean time, enjoy playing at one of our top rated XRP casino picks – BC.Game is number one!</p>
                    </section>

                                        

                    <section id="FAQ">
                        <div className="h2">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">I have heard that Ripple isn't available for casino use, it that true?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">No, it isn't. Even though Ripple does focus more on financial institutions than other forms of commerce, you can still use this cryptocurrency at online casinos such as <a className="text-blue-700" href="/go/stake/">Stake</a> and <a href="/go/true-flip/">TrueFlip</a>.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Which are the best Ripple online casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Nowadays, there are a few Ripple casinos - or XRP casinos - that are truly great. In our opinion, the very best are <a className="text-blue-700" href="/go/stake/">Stake</a> and <a href="/go/true-flip/">TrueFlip</a>.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How can I use Ripple to play at an online casino?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>1 - Find an online casino that accepts Ripple as a payment method (such as the ones listed <a className="text-blue-700" href="https://casinosblockchain.io/ripple-casinos/#best-casinos">on this page</a>).<br />
                                    2 - Register an account and choose Ripple as your currency.<br />
                                    3 - Go to the "Deposit" area and make a payment.<br />
                                    4 - Accept the transaction from your Ripple wallet, following the instructions on the website.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is it safe to gamble with Ripple?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Yes! Although we do recommend you play at reputable Ripple casinos just to be safe. Due to the recent legal troubles the currency is facing, it's also a good idea to play at <a className="text-blue-700" href="https://casinosblockchain.io/">casinos with a wide variety of coins</a> available.</div>
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
                        <a href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best Casinos
                            </li>
                        </a>
                        <a href="#bc-game" className="bc-game hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BC.Game
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
                        <a href="#bonuses" className="bonuses hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Bonuses
                            </li>
                        </a>
                        <a href="#casino-games" className="casino-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Casino Games
                            </li>
                        </a>
                        <a href="#sports-betting" className="sports-betting hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Ripple Sports Betting
                            </li>
                        </a>
                        <a href="#benefits" className="benefits hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Benefits
                            </li>
                        </a>
                        <a href="#benefits" className="benefits hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                XRP Safety
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