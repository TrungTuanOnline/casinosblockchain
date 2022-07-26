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
import mBitCasino from "../../../Assets/images/Content/mBit-Casino.jpg"
import BigBass from "../../../Assets/images/Content/big-bass.png"
import Poker1 from "../../../Assets/images/Content/Evolution-Gaming-Live-Poker-1.jpg"
import InfiniteBlackjack from "../../../Assets/images/Content/infinite-blackjack-live-casino-game.jpg"
import LightningRoulette from "../../../Assets/images/Content/lightning-roulette-evolution.png"
import EarnbetCasino from "../../../Assets/images/Content/earnbet-casino-logo.png"
import EarnbetDapp from "../../../Assets/images/Content/earnbet-dapp.png"

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
                            <li>Do they offer&nbsp;<a href="/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair</a>&nbsp;games?</li>
                            <li>Are they&nbsp;available in your language?</li>
                            <li>Are they a <a href="/">trustworthy casino</a>?</li>
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
                                <p>Find our Canada and Australia-specific rankings here:   <br /><a href="/best-bitcoin-casinos-in-canada/" target="_blank" rel="noreferrer noopener" className="text-blue-700">Top Bitcoin Casinos in Canada<br /></a><a href="/best-bitcoin-casinos-in-australia/" target="_blank" rel="noreferrer noopener" className="text-blue-700">Top Bitcoin Casinos in Australia<br /></a></p></li>
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
                        <p className="mt-4"><a href="/bc-game-review/" target="_blank" rel="noreferrer noopener" className="text-blue-600">BC.Game</a> is our #1 Bitcoin casino brand and it comes with multiple perks.<br />✔️ <strong>Up to 1 BTC wins </strong>on the daily wheel spin (for free)<br />✔️ <strong>Cryptocurrency exchange </strong>on the casino<br />✔️ <strong>Low house edge</strong> and maximum RTP<br />✔️ <strong>100+ live tables </strong>and games from all major providers<br />✔️ <strong>20 provably fair games, </strong>developed in-house<br />✔️ <strong>Social features </strong>like an active player chat and rewards for participating</p>
                        <p>There is still one downside – <strong>BC.Game doesn’t have a welcome bonus. </strong></p>
                        <p>While other casinos match your first deposit, BC.Game offers a different selection of promos. The daily spin is free and you can win more than a traditional welcome bonus – but, if you’re looking for a BTC deposit bonus BC.Game might not be the option for you.  </p>
                    </section>
                    <section id="stake">
                        <div className="h3">Stake Casino</div>
                        <img src={CasinoStake} className="w-full h-auto" alt="casino-stake" />
                        <p className="mt-4">Second on our list, <a className="text-blue-700" href="/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake casino</a><strong> </strong>comes with its unique set of advantages: </p>
                        <p>✔️ <strong>Huge variety </strong>of casino games, including provably fair options<br />✔️ <strong>Comprehensive sportsbook </strong>with all top sports and even eSports<br />✔️ <strong>Transparency </strong>– you can see the house edge on all games to choose the most profitable one<br />✔️ <strong>Exchange rate </strong>always visible on the website </p>
                        <p>Stake is also a <strong>great betting site for Canadians</strong>: its sportsbook features competitive odds for all the popular sports in Canada, including ice hockey, football, basketball, and MMA.</p>
                        <p>So, why do we rank it second? There are still some cons: <br />❌ <strong>KYC required </strong>to play (no anonymity)<br />❌ <strong>No welcome bonus, </strong>although there is a weekly giveaway, community benefits, and money-back on sports betting</p>
                    </section>
                    <section id="true-flip">
                        <div className="h3">
                            True Flip
                        </div>
                        <img src={trueflip4} className="w-full h-auto" alt="trueflip4" />
                        <p className="mt-4"><a className="text-blue-700" href="/trueflip-casino-review/" target="_blank" rel="noreferrer noopener">True Flip</a>‘s friendly penguin takes the next spot on the list. With a solid BTC bonus and a selection of exciting games, it’s one of our favorite online casinos overall. </p>
                        <p>Perks for Bitcoin lovers include: </p>
                        <p>✔️ <strong>Up to 1 BTC welcome bonus </strong>+ 150 free spins<br />✔️ <strong>Weekly cashback </strong><br />✔️ <strong>1600+ games</strong>, including True Flip’s own studio productions<br />✔️ <strong>Amazing live game selection</strong><br />✔️ <strong>Laid back, fun vibe</strong></p>
                        <p>But, even with the great BTC bonus, True Flip has some downsides: <br />❌ <strong>No provably fair games</strong><br />❌ <strong>No VIP program </strong></p>
                        <div className="h3">mBit</div>
                        <img src={mBitCasino} className="w-full h-auto" alt="mBit-casino" />
                        <p>Another casino to try out when playing with Bitcoin is <a className="text-blue-700" href="/mbit-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">mBit</a>. Backed by a parent company that owns 35 casinos and offers over 3,000 games, it’s safe to say they have the experience – and reputation. </p>
                        <p>mBit’s main perks for Bitcoin players include: </p>
                        <p>✔️ <strong>110% deposit match </strong>when you first join <br />✔️ <strong>Up to 5 BTC </strong>for your welcome bonus (most casinos offer up to 1 BTC)<br />✔️ <strong>Generous VIP program </strong>and regular promos<br />✔️ <strong>No transaction fees </strong>on deposits or withdrawals</p>
                        <p>Unfortunately, there are also some fairly significant downsides: </p>
                        <p>❌ <strong>No provably fair games</strong><br />❌ <strong>Notable game providers missing </strong>– mBit doesn’t have Quickspin, NetEnt, or Yggdrasil<br />❌ <strong>KYC required </strong>so you’re not truly anonymous</p>
                        <div className="h3">BitStarz</div>
                        <p>Arguably one of the better Bitcoin casinos, <a className="text-blue-700" href="/bitstarz-review/" target="_blank" rel="noreferrer noopener">BitStarz</a> gets our seal of approval, especially for Canadian and Australian customers.</p>.
                        <p>BitStarz perks include:  </p>
                        <p>✔️ <strong>100% deposit bonus</strong> up to 1 BTC (and up to 5 BTC in overall bonuses)<br />✔️ <strong>Convert BTC </strong>directly on the platform<br />✔️ <strong>Industry awards </strong>and recognition – BitStarz is arguably one of the most popular online casinos<br />✔️ <strong>Excellent game selection</strong>, including provably fair games </p>
                        <p>Sadly, even big-name brands aren’t immune from common casino pitfalls. BitStarz’s main downsides are: </p>
                        <p>❌ <strong>Not all games are crypto-friendly</strong>, so playing in Bitcoin limits you<br />❌ <strong>KYC before withdrawal</strong>, meaning limited anonymity – and potential to withhold earnings<br />❌ <strong>Customer complaints </strong>about missing payouts (from people who failed the KYC, so never provide incorrect information)</p>
                    </section>
                    <section id="bonuses">
                        <p>In most casinos that accept Bitcoins, you are entitled to bonuses the same way as playing with other currencies. Some casinos offer them for your first deposit alon, while others reward you for longer. </p>
                        <p>Let’s look at a real-life example: <a className="text-blue-700" href="/trueflip-casino-review/#bonuses" target="_blank" rel="noreferrer noopener">True Flip’s welcome deposit</a> of up to 1BTC:</p>
                        <ol className="is-style-dotted-list">
                            <li>1st Deposit Bonus: 150% up to 0.04 BTC + 50 free spins on Book of Dead</li>
                            <li>2nd Deposit Bonus: 50% up to 0.5 mBTC</li>
                            <li>3rd Deposit Bonus: 75% up to 0.5 mBTC</li>
                            <li>4th Deposit Bonus: 100 free spins</li>
                        </ol>
                        <p>If you’re used to seeing welcome offers with plenty of zeros, the total amount of 1 BTC might seem relatively low. However, <a className="text-blue-700" rel="noreferrer noopener" href="https://coinmarketcap.com/" target="_blank">1 Bitcoin is worth thousands of dollars</a>.</p>
                        <p>True Flip offers both cryptocurrencies and regular money (such as CAD) as payment methods often pack <strong>more value into the Bitcoin version</strong> of the bonus. Consequently, you get more out of your deposit if you choose to receive your bonus in BTC.  </p>
                        <div className="h3">Do You <em>Really </em>Need One? </div>
                        <p>We know that welcome bonuses are one of the first things you look for in an online casino. But, here’s the thing: </p>
                        <p><strong>Our #1 and #2 top casinos don’t have a welcome bonus. </strong></p>
                        <p>Why? Because we think you don’t really need a deposit bonus. You can get better value – and better gameplay, at a no-bonus casino. We evaluate casinos on the <em>experience </em>they provide to players. Ultimately, we found BC.Game and Stake to provide a better experience – that’s why we ranked them. </p>
                        <br />
                        <div className="w-full h-[200px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50">No Welcome Bonus? No Problem.</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                No Welcome Bonus casinos can provide better value and experience!
                            </div>
                        </div>
                        <div className="h3"><strong>BC.Game Casino</strong></div>
                        <p>BC.Game makes up for the lack of a bonus scheme by:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Daily free wheel spins to win up to 1BTC</li>
                            <li>Task bonuses for completing things like 2FA or placing your first bet</li>
                            <li>Master Medals that reward you for casino wins </li>
                            <li>Shit codes hidden all over the website that add bonuses to your balance</li>
                            <li>Lucky Prizes given out to random players every six hours</li>
                        </ul>
                        <p>They reward you for playing and being a part of the community – not just registering.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3">Stake Casino</div>
                        <p>Stake also lacks a welcome bonus, but offers promos like: </p>
                        <ul className="is-style-checked-list_sm">
                            <li>Weekly giveaway for a chance to win $5,000 every Saturday</li>
                            <li>Top-notch VIP program</li>
                            <li>Racing promotions where you win for playing against friends</li>
                            <li>Telegram joining perks</li>
                            <li>Regular promos and special offers – for example, triple winnings on MMA legend Israel Adesanya’s games</li>
                        </ul>
                        <p>Once again, Stake focuses on player experience and community. We love that approach because it shows they value customers and reward regulars. Plus, the programs offer <em>more </em>value than the typical welcome bonus anyway. Win-win in our book!</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>
                        <div className="h3">Free Spins</div>
                        <p>If you’re wondering about free spins, you don’t need to worry. Most Bitcoin casinos offer free spins regularly and as part of their welcome offers. </p>
                        <p>When it comes to other casino bonuses and promotions, everything is business as usual when you use Bitcoin.</p>
                    </section>
                    <section id="pros-and-cons">
                        <div className="h2">
                            Bitcoin Gambling – Pros and Cons
                        </div>
                        <p>When they first emerged, Bitcoin casinos were a bit of a novelty. To most gamblers, they were too <em>niche</em>.</p>
                        <p>However, they have become more established, with more and more players betting on Bitcoin as their currency of choice for gambling.</p>
                        <div className="w-full h-[200px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50">Bitcoin Gambling Is Growing</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                3.04 BTC are wagered every minute – and 319 bets accumulate every second.
                            </div>
                        </div>
                        <p className="mt-10">As the world’s first and most prominent cryptocurrency, BTC isn’t hard to find at any modern online casino. Name recognition matters; Bitcoin is so mainstream, world-renowned payment providers such as <a className="text-blue-700" href="/new-paypal-crypto-wallet/" target="_blank" rel="noreferrer noopener">Paypal now accept it as a currency</a>.</p>
                        <p>But there is more to this coin than its name alone. There are plenty of other advantages to gambling with Bitcoin: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Privacy </strong>– Bitcoin is decentralized an works without bank interference. This makes it much more private than fiat, since there is no middle-man with access to your data. You can protect your information further by playing at an <a className="text-blue-700" href="/anonymous-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">anonymous BTC casino</a>. </li>
                            <li><strong>Cheaper transactions </strong>– Bitcoin transactions are less expensive than fiat money (or other cryptos like Ethereum). Some casinos will still charge you for withdrawals, while others (like True Flip) don’t have transaction fees whatsoever.</li>
                            <li><strong>Lower <a className="text-blue-700" href="/house-edge-casinos/" target="_blank" rel="noreferrer noopener">house edges</a></strong> – since crypto transactions are cheaper, Bitcoin casinos have lower expenses. This allows them to maintain a much lower house edge (house edge is how the casino makes money) and increase the return-to-player.</li>
                            <li><strong>Unique games </strong>– Bitcoin casinos have introduced several one-of-a-kind games into the gambling world. Check out Crash and Plinko to get a taste! </li>
                            <li><strong>Better bonuses </strong>– Bitcoin bonuses are much more enticing than their fiat counterparts. For instance, casinos often offer a 1 BTC equivalent to their $1,000 bonuses.</li>
                            <li><strong>Investment opportunity </strong>– if you’re looking to gamble with Bitcoin, chances are you know at least<em> a little </em>about the currency. The crypto world is growing and BTC started it all. Using Bitcoin is a vote of trust in the currency and the larger crypto landscape. And, since the coin’s value has been increasing for the past few years, it’s also an opportunity to increase your earnings. </li>
                        </ul>
                        <p>Even with all these perks, Bitcoin gambling isn’t without its downsides: </p>
                        <p>❌ <strong>Price fluctuations </strong>can put your money at risk. Large dips in BTC’s value are fairly common (though the coin bounces back up in the long run), so you could end up losing a portion of your wins. <br />❌ <strong>Know Your Customer checks </strong>or KYCs are identity verification procedures that most Bitcoin casinos have to run. This effectively erases your anonymity, but it is a guarantee of the casino’s reputation. <br />❌ <strong>Technical know-how </strong>– you need to set up a <a className="text-blue-700" href="/best-bitcoin-wallet-for-online-gambling/" target="_blank" rel="noreferrer noopener">Bitcoin wallet</a>, buy the coins on an exchange, make sure to protect your BTC (by safeguarding the passwords and seed phrases for example), etc. Crypto is growing in popularity, but this is still fairly new to many people. On top of all that, some online wallets don’t allow transactions to gambling sites, so make sure you read the T&amp;C carefully. </p>
                        <p>Do we still think Bitcoin casinos are worth it? Absolutely. </p>
                        <p>Crypto gambling comes with unique perks and there are now plenty of safe, high-quality casinos. There are drawbacks, but we still believe that with responsible gambling BTC casinos are an awesome alternative to fiat-powered gambling. </p>

                    </section>
                    <section id="casino-games">
                        <div className="h2">
                            Casino Games You Can Play With Bitcoin
                        </div>
                        <p>As more people jump on the Bitcoin bandwagon, some casinos now only offer Bitcoin or other cryptos as a payment method, ignoring fiat currencies altogether!</p>
                        <p>While we generally prefer casinos that give you both options, <strong>this is good news</strong>. Why? Because it gives game developers an incentive to cater to the growing Bitcoin market.</p>
                        <p>Let’s break down the games you will find at crypto casinos:</p>
                        <div className="h3"><strong><a className="text-blue-700" href="/slots-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Bitcoin Slots</a></strong></div>
                        <img src={BigBass} alt="big-pass" />
                        <p className="mt-4">BC.Game has some of our favorite Bitcoin slots, including <em>Big Bass Bonanza.</em> </p>
                        <p>Slot machines are one of the most popular casino games. They are simple to play and offer a lot of excitement and fun. Right now, all big providers like NetEnt, Quickspin, Microgaming, and others are available in many Bitcoin casinos.</p>
                        <p>Some of our top Bitcoin slot casinos include BC.Game and Stake (which has 2000+ slot options.) Find the best Bitcoin slots at:</p>
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
                        <div className="h3"><strong><a className="text-blue-700" href="/bitcoin-poker-sites/" target="_blank" rel="noreferrer noopener">Bitcoin Poker</a></strong></div>
                        <img src={Poker1} alt="Evolution-Gaming-Live-Poker-1" />
                        <p className="mt-2">
                            Evolution Gaming’s live poker games are available at True Flip and many more BTC-friendly casinos.
                        </p>
                        <p>Poker lover? Worry not, you’ll find plenty of virtual and live poker games on Bitcoin casinos. </p>
                        <p>We’re partial to Evolution Gaming’s live games and (thankfully) plenty of BTC casinos have them. If you’re looking for real poker though (where you play against other people), we’re yet to see that in a Bitcoin gambling website. </p>
                        <p>Find the top Bitcoin poker games at: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[0], siteDatas[1]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong><a className="text-blue-700" href="/blackjack-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Bitcoin Blackjack</a></strong></div>
                        <img src={InfiniteBlackjack} className="w-full h-auto" alt="infinite-blackjack-live-casino-game" />
                        <p className="mt-4">Play 90+ live blackjack games (including Infinity Blackjack) and True Flip</p>
                        <p>Unlike poker, blackjack is a game you don’t have to worry about when playing with Bitcoin. Since it’s one of the oldest and most popular casino games of all time, all respectable casinos offer at least a few versions of it – even live blackjack!</p>
                        <p>TrueFlip is our top pick for a Bitcoin blackjack casino. They have 90 different live games, plus plenty of virtual blackjack variations. Our top three Bitcoin blackjack casinos include: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[1], siteDatas[0]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong><a className="text-blue-700" href="/roulette-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Bitcoin Roulette</a></strong></div>
                        <img src={LightningRoulette} alt="LightningRoulette" />
                        <p className="mt-2">Play Evolution Gaming’s Live roulette at True Flip</p>
                        <p>Like blackjack, the roulette is immensely popular among players, and a casino without it would be unfathomable. Almost all Bitcoin casinos offer at least one version of this glamorous game.</p>
                        <p>We’re huge fans of Evolution Gaming’s live tables – find them at True Flip, mBit, and BitStarz. If you prefer virtual roulette, we highly recommend BC.Game’s provably fair game. </p>
                        <p>The best Bitcoin roulette casinos include:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[4], siteDatas[8]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h3"><strong>Provably Fair Games</strong></div>
                        <p>How do you know an online casino is fair? Blockchain-based casinos and Bitcoin gambling sites have <a className="text-blue-700" href="/provably-fair-gambling/">provably fair games</a>, where you can verify the outcome wasn’t rigged. </p>
                        <p>Often, provably fair games were developed by the casino’s own team – BC.Game and Stake are well-known for this. Some of the provably fair options you can enjoy there include:</p>
                        <ul className="is-style-checked-list_bubbles">
                            <li>Keno</li>
                            <li>Dice</li>
                            <li>Sic-Bo</li>
                            <li>Plinko</li>
                            <li>Lottery</li>
                            <li>Baccarat</li>
                            <li>Crash</li>
                        </ul>
                        <p>The best provably fair Bitcoin casinos include: </p>
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
                    </section>
                    <section id="casino-dapps">
                        <div className="h2 mt-20">Bitcoin Casino Dapps</div>
                        <p>Surprisingly there aren’t that many casino Dapps to play with Bitcoin. This phenomenon is more prevalent among other cryptocurrencies like Tron. However, that doesn’t mean it’ll remain like this.</p>
                        <p>There is one Dapp that stands out from the rest: <a className="text-blue-700" href="/go/earnbet">Earnbet</a>.</p>
                    </section>
                    <section id="earnbet">
                        <div className="h3">Earnbet</div>
                        <img src={EarnbetCasino} className="w-full h-auto" alt="earnbet-casino-logo" />
                        <p className="mt-4">Earnbet is a provably fair Dapp licensed by the government of Curaçao, which you can play using Bitcoin. It has a unique take on provable fairness. </p>
                        <p>Here’s how you know <em>all </em>games on Earnbet are fair: </p>
                        <ul className="is-style-dotted-list">
                            <li><strong>Earnbet is a blockchain-based app. </strong><br />Every bet takes place on the blockchain – and it’s recorded there.</li>
                            <li><strong>The games are based on smart contracts.</strong><br />When you place a bet, the game outcome is calculated based on a cryptographic seed and signature. <br /><strong>The smart contract gets verified on the blockchain. </strong><br />It’s cryptographically impossible to create a signature that <em>doesn’t </em>follow the smart contract rules. This means the casino can’t cheat. </li>
                            <li><strong>The blockchain is publicly available</strong>. <br />Every wager ever placed on Earnbet is recorded on the blockchain. Since the ledger is public and the smart contract is open source, you can verify the fairness at any time.  </li>
                        </ul>
                        <p>Since all games are recorded, and it’s possible to trace back the game code, you can easily prove the fairness of every single game round. This “guaranteed fairness” is possible because decentralized applications like this one <strong>run entirely on the blockchain</strong>.</p>
                        <p>Earnbet’s downside: </p>
                        <p><strong>❌ You won’t be able to play your favorite slots in this casino (yet). <br /></strong>Third-party provider partnerships wouldn’t have the same provable fairness. However, there are still six different games you can choose from, including usual classics such as dice, blackjack, baccarat, and roulette. </p>
                        <p>Even better, one of Earnbet’s most significant advantages is that you can <strong>win part of the house’s</strong> profits. </p>
                        <p>Every bet you place earns you BET tokens. As a token holder, every day you’ll receive a portion of the casino’s profits. You can claim your profits every month to generate passive income. And, as an extra perk, if you hold BET tokens (a.k.a., stake them), you are eligible for a <strong>reduced house edge. </strong>It’s like cashback on steroids!</p>
                        <img src={EarnbetDapp} className="w-full h-auto" alt="EarnbetDapp" />
                    </section>
                    <section id="deposit-withdrawal">
                        <div className="h2 mt-20">
                            Deposits And Withdrawals
                        </div>
                        <p>So, you want to play with Bitcoin. How do you go about depositing money? </p>
                        <p>Much like with fiat, it starts with your wallet. <strong>Popular cryptocurrency wallets </strong>include Coinbase, Electrum, and offline options like Trezor and Ledger. Metamask, which Ethereum fans love, doesn’t support Bitcoin. </p>
                        <ul className="is-style-dotted-list">
                            <li><strong>When you set up your wallet, you will get a password and seed phrase. </strong><br />Keep them safe and don’t share them with anyone. With the seed, you can replicate the wallet – so, if a hacker gets it, they’re one step away from stealing your Bitcoin.</li>
                            <li><strong>Then, you go to an exchange and buy Bitcoin.</strong><br />Coinbase has its own exchange, which is great for beginners, but has higher fees. Binance is better but it also takes some time to get used to it.</li>
                            <li><strong>Send your Bitcoin to the wallet.</strong><br />Immediately after buying, transfer your funds. Exchanges are a major target for hackers, so it’s not a good idea to leave BTC on there. </li>
                            <li><strong>Deposit into the Bitcoin casino. </strong><br />Finally, open your casino account and you’ll find a deposit address. Make sure you Copy-Paste into the transaction field. Send BTC to the casino and wait for the blockchain to verify the operation. Soon, your money will appear. </li>
                        </ul>
                        <p>Keep in mind that <strong>Bitcoin transactions should be verified </strong>by the blockchain. When you send your money, it goes into a block. Miners solve a complex equation that verifies the block and sends it to the public ledger. </p>
                        <p>The Bitcoin network can handle <strong>around 7 transactions per second</strong>, but that speed can vary. During busy times, your deposit can take some time to arrive. If you don’t immediately see the money in your account, don’t panic. Give the ledger some time to update – soon, your deposit will be ready. </p>
                        <div className="h3">Withdrawals</div>
                        <p>What happens when it’s time to cash out? </p>
                        <p>The casino will ask for your wallet address and send the money. But, there might be a hitch:</p>
                        <p>Some casinos do <strong>Know Your Customer (KYC) checks. </strong>Depending on their license, this might be a requirement – or simply a policy they’ve decided to implement. Either way, this means two things: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>You’re not 100% anonymous </strong>at all Bitcoin casinos. </li>
                            <li><strong>They could <em>refuse </em>the withdrawal </strong>if you provide false information. </li>
                        </ul>
                        <p>Come again? They could decide <em>not to pay you</em>?!?</p>
                        <p>Not really. </p>
                        <p>You see, online casinos are restricted in some countries. Most websites will block traffic from these regions. Unfortunately, some don’t. </p>
                        <p>Let’s say you’re in a US state where online gambling is illegal. You don’t know that and still sign up at a Bitcoin casino. Come withdrawal time, the KYC doesn’t check out and the casino holds your funds. They’re well within their right to do that – but it doesn’t mean it’s not annoying. </p>
                        <p>To avoid issues like these <strong>always provide truthful information </strong>during signup and make sure you’re <strong>following local legislation. </strong>This way, the KYC can’t get in the way of your cashout. </p>
                        <p>You won’t need to go through ID verification with a casino Dapp, as most don’t have a license. We never recommend unlicensed casinos, but if you play at one, make sure the games are provably fair.</p>
                        <div className="w-full h-[200px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50">BITCOIN PAYMENT</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                A key benefit of using Bitcoin in casinos are the cheaper deposits and withdrawals!
                            </div>
                        </div>
                    </section>
                    <section id="legal-aspects">
                        <div className="h2">Are Bitcoin Casinos Legal?</div>
                        <p><strong>Short answer: </strong>Yes, Bitcoin casinos are legal.</p>
                        <p>When Bitcoin <a rel="noreferrer noopener" href="https://www.nytimes.com/2017/10/01/technology/what-is-bitcoin-price.html" target="_blank">first became known to the public</a>, many raised concerns over its legality. After all, such a decentralized and anonymous currency could (and did) attract wrongdoers. So it’s normal to wonder if Bitcoin gambling sites themselves are <strong>legal, legitimate and safe</strong>.</p>
                        <p>At first, many unlicensed and illegal casinos popped up all over the internet. They accepted payments and then vanished into thin air, which was possible because, without a license, they were virtually untraceable.</p>
                        <p>This gave Bitcoin casinos somewhat of a bad reputation, but it also convinced legitimate businesses that they had to get regulated if they wanted to be taken seriously. Players also learned to only trust casinos with a reputable license. </p>
                        <h3><strong>What Makes a Bitcoin Casino Legal? </strong></h3>
                        <p>There are three main factors that affect Bitcoin casino legality:</p>
                        <ul className="is-style-dotted-list">
                            <li><strong>Licensing</strong><br /><a href="https://www.mga.org.mt/" target="_blank" rel="noreferrer noopener">Malta</a>: Valid mostly throughout Europe. <br /><a href="https://www.curacao-egaming.com/" target="_blank" rel="noreferrer noopener">Curaçao</a>: Recognized across the globe.<br />These licenses assure a casino is trustworthy and verify the validity of game rounds and transactions. It is, therefore, <strong>safe and legal to play at this casino</strong>.</li>
                            <li><strong>Local legislation</strong><br />Even if the license is okay, your local laws might be against BTC gambling. Some countries have banned online gambling altogether, with or without Bitcoin and other cryptos. Others have state or city-level regulations that might make gambling legal or illegal.<br />Casinos often exclude players from countries with harsher gambling laws from registering or accessing their websites. In the end, however, it is up to you to know your local laws and if it’s legal or not for you to play at a Bitcoin casino.</li>
                            <li><strong>Wallet restrictions</strong><br />Finally, you should also ensure your crypto wallet supports Bitcoin payments to gambling websites. As we explain in our Coinbase casinos article, there’s always a risk of breaking the wallet’s terms and conditions.</li>
                        </ul>
                        <h3>What About Taxes? </h3>
                        <p>Some countries recognize Bitcoin as a currency and others don’t, so <strong>you may have to pay taxes</strong> on your Bitcoin earnings depending on where you live. Your gambling winnings are <strong>not taxable in Canada</strong>, but other countries may have different rules.</p>
                        <div className="h2">Final Thoughts</div>
                        <p>Bitcoin casinos offer an exciting and unique gambling experience, where players can enjoy a wide range of games while earning rewards. BTC comes with a bunch of perks for gamblers: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Lower transaction fees </strong>save you money.</li>
                            <li><strong>Casinos offer lower house edges </strong>since their business costs are also lower.</li>
                            <li><strong>BTC payments are anonymous </strong>and secured by the blockchain. </li>
                            <li><strong>Crypto-unique games </strong>offer yet more ways to play. </li>
                        </ul>
                        <p><strong>As long as you’re smart about gambling, Bitcoin casinos</strong> can be a fun way to spend your time and money. Just be sure to do your research before choosing a casino to play at, and always remember to gamble responsibly.</p>

                    </section>

                    <section id="FAQ">
                        <div className="h2">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are Bitcoin casinos legal?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, there are many legal and legitimate Bitcoin casinos that fully operate under the law. You can make sure a casino is reputable if it holds a valid license, which is widely recognised, such as a Curaçao or Malta license. However, a casino might be allowed to operate in several countries, but not in others. If gambling is heavily regulated or illegal in your area of residence, odds are that a licensed Bitcoin casino will not accept you as a player.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How can I use Bitcoin to play at an online casino?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    1 - Find an online casino that accepts Bitcoin as a payment method (such as the ones listed <a className="text-blue-700" href="/best-bitcoin-casinos/#best-casinos">on this page</a>). <br />
                                    2 - Register an account and choose Bitcoin as your currency.<br />
                                    3 - Go to the "Deposit" area and make a payment.<br />
                                    4 - Accept the transaction from your Bitcoin wallet, following the instructions on the website.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Which are the best Bitcoin casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <a href="https://stake.com/" className="text-blue-700" rel="noreferrer noopener">Stake</a> is widely held as one of the best Bitcoin casino in the world. However, there are many other good options out there.
                                    The best Bitcoin casinos will hold a trusted license, have a vast portfolio of games, including provably fair games, and offer several rewarding promotions. We've looked at these and many other factors and ranked the best Bitcoin casinos in 2022. This way, we can help you find trustworthy websites and choose which ones are the right fit for you.</div>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Do I have to pay taxes if I play casino with Bitcoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    If you're Canadian, you're safe: gambling winnings are not taxable in Canada. As for players from other countries, casinos will not withhold any taxes from your winnings. However, that doesn't mean you don't have to pay taxes on your earnings. That will depend on where you live and your local regulations. Some countries recognize Bitcoin as a currency and others don't. Those who don't might be more flexible when it comes to paying taxes on your Bitcoin earnings.
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