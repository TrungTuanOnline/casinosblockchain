import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import backgroundImg from "../../../Assets/images/Header.svg"
import bcgame from "../../../Assets/images/Content/bcgame.png"
import CasinoStake from "../../../Assets/images/Content/casino-stake.png"
import Trueflip from "../../../Assets/images/Content/trueflip.png"
import EarnbetCasino from "../../../Assets/images/Content/earnbet-casino-logo.png"
import Trueflip3 from "../../../Assets/images/Content/trueflip3.png"
import LitecoinSlots from "../../../Assets/images/Content/Litecoin-Slots.png"
import DogecoinPoker from "../../../Assets/images/Content/dogecoin-poker.png"
import BlitzBlackjack from "../../../Assets/images/Content/blitz-blackjack-netent.png"
import LitecoinRoulette from "../../../Assets/images/Content/Litecoin-Roulette.png"

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
                    <p>If you’ve ever played at a <a href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">cryptocurrency casino</a>, you might have come across a coin called Litecoin. As Litecoin gambling grows in popularity, we’re taking an in-depth look into the most popular LTC casinos.</p>
                    <p>If you’ve ever played at a <a href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">cryptocurrency casino</a>, you might have come across a coin called Litecoin. As Litecoin gambling grows in popularity, we’re taking an in-depth look into the most popular LTC casinos.</p>
                    <p>It emerged as a source code fork of&nbsp;<a href="https://casinosblockchain.io/best-bitcoin-casinos/" target="_blank" rel="noreferrer noopener">Bitcoin</a>&nbsp;and, as the name suggests, it positions itself as a ‘lighter’ version of its digital parent:</p>
                    <ul className="is-style-checked-list_sm">
                        <li>Transaction costs are lighter with Bitcoin than with Litecoin.</li>
                        <li>There is a much more Litecoin in circulation than Bitcoin (84 million against 21 million).</li>
                    </ul>
                    <p><strong><strong>Therefore, Litecoin is a more accessible currency, making it ideal for online casinos.</strong></strong></p>
                    <p>On this page, we’ll go over the advantages of Litecoin as an online gambling currency and take you through the best Litecoin casinos.</p>
                    <section id="best-casinos">
                        <div className="h2">Best LiteCoin Casinos</div>
                        <p>You got interested in Litecoin, and you’re looking to spend it, playing favorite casino games. But where do you go? We’re here to help out.</p>
                        <p>We looked at all major Litecoin casinos for you – and evaluated them based on our strict criteria:</p>
                        <ul className="is-style-dotted-list">
                            <li><strong>Litecoin compatibility</strong><br />First, we looked into LTC-friendliness. Does the casino have Litecoin as a payment method? Are deposits quick and easy? Can you play all games with Litecoin or are there exceptions? <br />Since this is a <em>Litecoin-specific article</em>, we tested for LTC compatibility first. After all, the goal is to give Litecoin gamblers the best casino options – not to simply list our favorite crypto casinos.</li>
                            <li><strong>Player experience</strong><br />After we made sure all casinos are genuinely good for LTC gamblers, we played (with our own money!) to check out the experience. <br />We asked questions like: <span>Does the casino offer rewarding Litecoin bonuses?</span> Is there a good variety online casino games? Are those games <a href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair</a>? We gave extra points for well-designed websites and a smooth mobile gambling experience. </li>
                            <li><strong>Reputation and safety</strong><br />Last but <em>absolutely not least</em>, we evaluated the casino’s reputation. We would never want to recommend a Litecoin gambling site that isn’t safe.<br />To make sure we’re giving you only secure and reputable options, we evaluated the casinos’ licensing, data protection (bonus points for anonymous casinos like BC.Game) and customer support. We favored casinos that were <a href="https://casinosblockchain.io/languages/" target="_blank" rel="noreferrer noopener">available in multiple languages</a> and whose client care team was friendly and easy to reach. </li>
                        </ul>
                        <p>Where there any casinos that checked all the boxes? We’re happy to say – yes! </p>
                        <p>Our top three Litecoin casinos are secure, fully LTC compatible, and super fun. Read on to learn more about them: </p>
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
                    <section id="bc-game" className="mt-20">
                        <div className="h3">
                            BC.Game
                        </div>
                        <img src={bcgame} className="w-full h-auto" alt="bcgame.png" />
                        <p className="mt-4">Coming in first, <a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/bc-game-review/" rel="noreferrer noopener">BC.Game</a> is a crypto-exclusive casino with 65+ different currencies. And, yes, Litecoin is one of them.</p>
                        <p>BC.Game’s main perks include:</p>
                        <p>✔️ Free wheel spins every day<br />✔️ Super low house edge<br />✔️ Provably fair originals<br />✔️ Anonymity (no KYC required)<br />✔️ Amazing community</p>
                        <p>But, there are some downsides:</p>
                        <p>❌ No deposit bonus</p>
                        <p>? <strong>Litecoin compatibility: 5/5</strong></p>
                        <p>BC.Game is incredibly crypto-forward. Not only can you play all BC.Game ga
                        mes with LTC, but you can also exchange Litecoin right in the casino. There is a conversion fee, just like any other exchange, but the convenience definitely offsets that.</p>
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
                        <img src={CasinoStake} className="w-full h-auto mt-10" alt="casino-stake.png" />
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake Casino</a> is another great choice for Litecoin users. With an amazing range of games and a first-class sportsbook, it’s no wonder Stake has been gaining so much traction.</p>
                        <p>Some of its main perks include:</p>
                        <p>✔️ A massive game selection<br />✔️ Sports betting and e-sports<br />✔️ Provably fair originals<br />✔️ Excellent VIP program<br />✔️ Experienced and reputable casino operator</p>
                        <p>However, there are still some downsides:</p>
                        <p>❌ No deposit bonus<br />❌ KYC check mandatory</p>
                        <p>? <strong>Litecoin compatibility: 5/5</strong></p>
                        <p>Stake Casino is crypto-exclusive, which means that you won’t be able to use fiat currency to bet. However, its Litecoin friendliness is top-notch.</p>
                        <p>Deposits and withdrawals are quick at Stake and you can buy cryptos directly on the website. Granted, they use a third-party provider, MoonPay, but the exchange is incredibly secure.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>
                    </section>
                    <section id="true-flip">
                        <div className="h3 mt-10">
                            True Flip
                        </div>
                        <img src={Trueflip} alt="trueflip.png" />
                        <p className="mt-10"><a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" rel="noreferrer noopener">True Flip</a> is a popular online casino that’s been around since 2017. And, since they’re a fully licensed and regulated casino, they’re a great option for those who want a well-established casino that accepts Litecoin.</p>
                        <p>True Flip’s main perks are:</p>
                        <p>✔️ Fully licensed and regulated<br />✔️ No-deposit bonus (free spins just for registering)<br />✔️ 10% weekly cashback<br />✔️ Friendly customer support in multiple languages<br />✔️ Fast withdrawals</p>
                        <p>But, it does come with downsides:</p>
                        <p>❌ No deposit bonus<br />❌ KYC check required<br />❌ No provably fair games</p>
                        <p>? <strong>Litecoin compatibility: 4.5/5</strong></p>
                        <p>True Flip Casino is fully compatible with Litecoin. You can deposit and withdraw Litecoin as you please and the processing times are lighting fast.</p>
                        <p>So why are we giving it 4.5 and not 5?</p>
                        <p>Unlike Stake and BC.Game, True Flip doesn’t have an on-site crypto exchange. Granted, it offers fiat (neither of the other two do,) but that’s not a Litecoin-specific perk.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={4}
                                siteIndex={4}
                                summaryData={siteDatas[4]}
                            />
                        </div>
                    </section>
                    <section id="casino-dapps">
                        <div className="h2 mt-10">
                            Litecoin Casino Dapps
                        </div>
                        <p>Litecoin is a relatively easy coin to find at online casinos, but the same is not true for casino Dapps.</p>
                        <p>Only a small group of Dapps accept Litecoin as a form of payment – thankfully, our favorite casino Dapp <a className="text-blue-700" href="https://casinosblockchain.io/earnbet-review/" target="_blank" rel="noreferrer noopener">Earnbet</a> is one of them. Read on to learn why Earnbet is a great LTC gambling alternative.</p>
                        <div className="h3"><strong>Earnbet</strong> </div>
                        <img src={EarnbetCasino} alt="earnbet-casino-logo.png" />
                        <p className="mt-4">If you’re new to Dapps, Earnbet is a great place to get started:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>As the very first decentralized casino, Earnbet has plenty of experience and a solid reputation.</li>
                            <li>Since it’s built on the blockchain, all of Earnbet’s games are provably fair by design.</li>
                        </ul>
                        <p>There are a total of six games on offer, which might not seem much, but it’s not bad for a Dapp since many offer a single game. The most popular seems to be its blackjack game.</p>
                        <p>So why would you go to Earnbet to play? Here are the main advantages of this casino Dapp: </p>
                        <p>✔️ 100% provably fair games<br />✔️ Fast and cheap deposits and withdrawals<br />✔️ Decentralized, so it can’t be shut down<br />✔️ No KYC required<br />✔️ Earn a part of the casino’s profits</p>
                        <p>Come again? How can you earn a portion of what the casino makes?</p>
                        <p>Well, Earnbet is a decentralized casino, so it’s powered by the players. Every time you play, you get BET tokens. EarnBet then distributes 100% of its profits to all of the token holders.</p>
                        <div className="w-full h-[150px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-sm text-white opacity-50 ">The more you play, the more you earn. It’s that simple.</p>
                        </div>
                        <p className="mt-4">But, even with this innovative approach, Earnbet has some cons:</p>
                        <p>❌ Limited game selection<br />❌ Meagre welcome bonus (just $50 in crypto with huge wagering requirements)</p>
                        <p><strong>? Litecoin compatibility: 4.5/5</strong></p>
                        <p>Earnbet is Litecoin-friendly to a tee. You can deposit and withdraw LTC, enjoying hassle-free payments. We took off half a point because Earnbet doesn’t have an exchange</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={9}
                                siteIndex={9}
                                summaryData={siteDatas[9]}
                            />
                        </div>
                    </section>
                    <section id="bonuses">
                        <div className="h2">
                            Litecoin Bonuses
                        </div>
                        <p>At most casinos that accept it as a currency, you can regularly receive Litecoin bonuses and other rewards.</p>
                        <p>With Dapps, it’s a bit different since they often don’t have conventional casino promotions. Instead,&nbsp;<strong>most Dapps distribute part of their earnings among active players</strong>.</p>
                        <p>Some Litecoin casinos offer welcome packages, where they give you a Litecoin bonus with your first deposits. Here are our favorites:</p>
                    </section>
                    <section id="welcome-packs">
                        <div className="h3">
                            Generous Welcome Packs
                        </div>
                        <p>You might have noticed none of our top three casinos have a traditional welcome bonus. Granted, they make up for it with a whole host of other offers to attract new players and reward regulars. But what if you wanted a more typical welcome bonus? These are the casinos with the best welcome packs:</p>
                        <p><strong>Cloudbet</strong></p>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet </a>gives you a 100% deposit match of up to 5 BTC (or the Litecoin equivalent) when you sign up. They also offer frequent free spins, reload bonuses and other special offers.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                        <p className="mt-10"><strong>BitStarz</strong></p>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/bitstarz-review/" target="_blank" rel="noreferrer noopener">Bitstarz </a>offers a single-step welcome bonus that could net you up to 50 LTC and 180 free spins. Simply deposit some Litecoin and they’ll match your money 100%.  </p>
                        <p>Keep in mind that there is a 40x wagering requirement for the deposit match and free spins. Plus, the LTC offer gives you far less value than the BTC bonus (where the maximum is 1 BTC, worth far more than 50 LTC).</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={6}
                                siteIndex={6}
                                summaryData={siteDatas[6]}
                            />
                        </div>
                        <p className="mt-10"><strong>mBit</strong></p>
                        <p>Finally, <a className="text-blue-700" href="https://casinosblockchain.io/mbit-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">mBit </a>matches your initial deposit not by 100%, but 110%! You can get up to 5BTC (their Litecoin equivalent), plus 300 free spins on your first deposit.</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={8}
                                siteIndex={8}
                                summaryData={siteDatas[8]}
                            />
                        </div>
                    </section>
                    <section id="more-bonuses">
                        <div className="h3">No Deposit Bonuses and More</div>
                        <p>Welcome bonuses are important, but they’re not the only factor that makes a casino great. A no-deposit bonus lets you test the Litecoin gambling site without risking your own money. If you like what you see, you can deposit some Litecoin and keep playing.</p>
                        <p><strong>True Flip </strong></p>
                        <img src={Trueflip3} alt="trueflip3.png" />
                        <p className="mt-4">Get no-deposit free spins at TrueFlip’s Day & Night slot</p>
                        <p className="mt-4">True Flip recently introduced a no-deposit bonus for new players. Register for a new account, complete the ID check and you’ll get 30 Free Spins. You can use these spins on their popular Day &amp; Night original slot. </p>
                    </section>
                    <section id="pros-cons">
                        <div className="h2">
                            Pros & Cons of Litecoin Gambling	
                        </div>
                        <p>Litecoin is an accessible currency, which, in many aspects, can be ideal for online gamblers:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Litecoin transactions are <strong>quicker </strong>than fiat currencies and other cryptos like Bitcoin.</li>
                            <li>There are <strong>minimal associated costs</strong>.</li>
                            <li>It’s <strong>easier to mine</strong> than BTC. You can try to make some extra LTC and not face the same fierce competition. </li>
                            <li>You can <strong>protect your privacy</strong> better than at casinos that only accept fiat money.</li>
                        </ul>
                        <p>Most of its advantages for gamblers are shared with other cryptocurrencies. However, Litecoin is&nbsp;<strong>faster and more accessible</strong>&nbsp;than several of its crypto counterparts.</p>
                        <p>Its positioning as ‘Bitcoin, but light’ has established Litecoin as&nbsp;<strong>one of the up and coming cryptocurrencies for online gambling</strong>.</p>
                        <p>But Litecoin gambling isn’t without its downsides:</p>
                        <p>❌ Since it’s not a stablecoin, LTC <strong>exposes you to volatility</strong>, as the value of your coins could drop significantly overnight. As a&nbsp;relatively new cryptocurrency, Litecoin is a bit more volatile than the big guns, such as Bitcoin and Ethereum.</p>
                        <p>❌ It’s also <strong>not accepted by as many casinos</strong> as the more established cryptocurrencies, but this is likely to improve as the coin grows in popularity.</p>
                        <p>All in all, we still think <strong>Litecoin’s perks outweigh its downsides</strong>. And as more people invest in Litecoin, more casinos will accept it as a method of payment. We do believe Litecoin is one of the best crypto gambling options available right now – provided you gamble responsibly, of course.</p>
                    </section>
                    <section id="litecoin-casino-games">
                        <div className="h2">
                            Litecoin Games
                        </div>
                        <p>As Litecoin becomes more commonplace the iGaming industry, you will find that you can use it at most casino games.</p>
                        <p>The world of online casinos never sleeps. As it grows, you should be able to discover even more new games where you can play and, hopefully, win Litecoin.</p>
                        <div className="h3">Litecoin Slots</div>
                        <img src={LitecoinSlots} alt="Litecoin-Slots.png" />
                        <p className="mt-4">
                            Enjoy your favorite slots, including crowd-pleasers like <em>Greedy Goblins </em> at BC.Game
                        </p>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/litecoin-slots-guide/" target="_blank" rel="noreferrer noopener">Litecoin slots</a> are easily one of the most popular LTC games. Big names like NetEnt, Yggdrasil, Evolution, and Quickspin are widely available at Litecoin casinos, alongside less-known brands and even provably fair slot machines.</p>
                        <p>When you play the slots, you can bet with LTC, but casinos also allow you to convert your LTC to other fiat or cryptocurrency right within the game. </p>
                        <p>It’s important to remember that your bankroll stays the same, no matter what currency you bet with. So if you start with $10 in LTC and convert it to $10 in BTC, you’ll still have $10 in your account. The same goes for withdrawals, although the casino can convert your winnings back to LTC.</p>
                        <div className="h3">Litecoin Poker</div>
                        <img src={DogecoinPoker} alt="dogecoin-poker.png" />
                        <p className="mt-4">Play provably fair video poker at BC.Game!</p>
                        <p>Unlike US-based brands, European ‘real’ <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-poker-sites/" target="_blank" rel="noreferrer noopener">poker platforms</a> have still not adopted Litecoin as a payment solution. Video poker, however, is widely available anywhere. You can also play live poker with a dealer in a number of LTC casinos, including BC.Game and Stake</p>
                        <div className="h3">Litecoin Blackjack</div>
                        <img src={BlitzBlackjack} alt="blitz-blackjack-netent.png" />
                        <p>Litecoin casinos offer many versions of <a className="text-blue-700" href="https://casinosblockchain.io/blackjack-bitcoin-casino/" target="_blank" rel="noreferrer noopener">blackjack</a>. <strong>You can take your seat at a live blackjack table or play a few hands of a provably fair video blackjack game. </strong>Blackjack is also one of the games with the lowest house edge, meaning the RTP is higher than with most other games. </p>
                        <p>Live casino games are usually streamed from a professional casino studio that looks like the interior of a traditional brick and mortar casino. The action is broadcast by a webcam that captures the dealer dealing the cards and the players making their bets. The dealer can also communicate with players via chat.</p>
                        <p>Both BC.Game and Stake have stellar live games sections, including plenty of blackjack options.</p>
                        <div className="h3">Litecoin Roulette</div>
                        <img src={LitecoinRoulette} alt="Litecoin-Roulette.png" />
                        <p className="mt-4">Stake has a number of live casino games, including exciting roulette live action!</p>
                        <p>European and American <a className="text-blue-700" href="https://casinosblockchain.io/roulette-bitcoin-casino/" target="_blank" rel="noreferrer noopener">roulettes</a> are easy to find at Litecoin casinos. Video roulette games are, perhaps, a bit easier to find than live roulette games.</p>
                        <p>That’s why we love Stake so much – their selection of live casino games is out of this world. You can play traditional roulette, double ball games, lighting roulette, and even football roulette. The dealer is professionally trained and can offer you a real casino experience.</p>
                    </section>
                    <section id="deposit-withdrawal">
                        <div className="h2">
                            Litecoin Deposits And Withdrawals
                        </div>
                        <p>As long as the casino you choose processes its payments in a timely manner, Litecoin deposits and withdrawals are lightning-fast.</p>
                        <div className="w-full h-[220px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">ABOUT LITECOIN</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Litecoin is 4x quicker than BTC. <br />Give it a try!
                            </div>
                        </div>
                        <p className="mt-10">To get started at Litecoin casinos, you first need to buy some LTC.</p>
                        <p>You can do this at a third-party exchange like Coinbase, or directly from the casino exchange. Both Stake and BC.Game offer crypto buying options, which do have higher fees, but they’re also very convenient.</p>
                        <p>Once you’ve bought your LTC, you can use it to deposit at any casino that accepts it. Make sure you copy-paste the address correctly, as LTC transactions are irreversible.</p>
                        <div className="h3">Withdrawals</div>
                        <p>Since LTC transactions are so fast, cashing out at a Litecoin casino doesn’t take long either. You can also exchange your Litecoin into Bitcoin (on Stake and BC.Game), if you want to use another cryptocurrency.</p>
                        <p>Keep in mind that first-time players are often required to identify themselves before making their first withdrawal. At most casinos, this process – known as ‘Know Your Customer’ or KYC – can take between 1-3 days.</p>
                        <div className="w-full h-[150px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-sm text-white opacity-50 ">In some cases a KYC can keep you from cashing out your winnings at all.</p>
                        </div>
                        <p className="mt-4">For example, if you’re in a restricted country, some casinos won’t block their servers. Come withdrawal time, though, they’ll tell you their system doesn’t accept your location (e.g., because you’re in a US state where online betting is restricted) and refuse to pay out. </p>
                        <p><strong>To prevent this from happening, never lie to casinos about your location.</strong></p>
                        <p>Of course, there are plenty of other reasons to avoid KYC checks. If privacy concerns you, you’ll be better off with a Dapp, where the withdrawals are always instant and your anonymity is protected.</p>
                    </section>
                    <section id="casino-safety">
                        <div className="h2">Litecoin Gambling Safety</div>
                        <p><strong>First things first, make sure online betting is legal in your country and state.</strong> If it’s not, don’t do it! There’s no point in taking unnecessary risks. Even if you manage to register, the KYC check at withdrawal could get you in trouble.</p>
                        <p><strong>The second thing is to find a safe and reputable Litecoin casino.</strong> This is not as easy as it sounds, as there are a lot of casinos that will happily take your money but will do some shady things behind the scenes.</p>
                        <p>Whenever we review online casinos, we always check their <strong>licensing</strong>, check if they offer <strong>provably fair games</strong> and use <strong>SSL encryption</strong>. These are all important factors that show if a casino can be trusted or not. We can vouch for the brands we have on CasinosBlockchain – but, we still encourage you to do your own research.</p>
                        <div className="w-full h-[150px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-sm text-white opacity-50 ">Provably fair games give you extra peace of mind, since they can’t be rigged.</p>
                        </div>
                        <p className="mt-4"><strong>Provably fair games are an excellent perk for any Litecoin casino. </strong><a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">Provable fairness</a> means that you, as a player, can check if the games you’re playing are truly fair and not rigged. </p>
                        <p><strong>Without provably fair games, you’re just trusting the casino</strong> that they’re not trying to cheat you. This isn’t something to worry about with reputable and licensed casinos, but it’s still good to have the option to check the fairness of the games.</p>
                        <p><strong>Mind Your Welcome Bonus</strong></p>
                        <p>As a first-time player in a Litecoin casino, you might be wowed by the generous welcome bonuses available. You should, however,&nbsp;<strong>always read through the bonus terms and conditions</strong>&nbsp;before you deposit.</p>
                        <div className="w-full h-[150px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-sm text-white opacity-50 ">It’s always a good idea to know how the casino works and what your rights are.</p>
                        </div>
                        <p className="mt-4">Finally, <strong>opt for casinos that speak your language</strong>. </p>
                        <p>Most crypto casinos have multiple languages available to give more players better access to their services. A few of the more popular languages include English, French, German, Italian, Russian, and Spanish. This way, if you have an issue with the Litecoin casino, you can contact customer support and get your message across.</p>
                        <div className="h2">
                            Final Thoughts
                        </div>
                        <p><strong>Litecoin is a faster and cheaper version of Bitcoin. </strong>It is decentralized, meaning that there is no one person or institution in charge. It also has a different mining algorithm, which makes it easier to mine. </p>
                        <p>No wonder it’s so popular, right? Well, now it’s also gaining traction in the crypto casino space. </p>
                        <p><strong>Litecoin gambling is becoming more and more popular, as casinos recognise the benefits of this cryptocurrency.</strong> We expect to see even more Litecoin casinos popping up in the near future. In the meantime, be sure to check out our list of the best Litecoin casinos above!</p>
                    </section>


                  
                    <section id="FAQ">
                        <div className="h2 mt-32 mb-10">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are Litecoin casinos safe and legal?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">If you want to gamble with Litecoin, make sure you do it on a regulated casino with a verified gambling license. This will ensure that you are safe and legal. Remember to check your local laws to see if gambling with Litecoin is allowed where you live.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What are the best gambling sites that accept Litecoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Some of the world's best crypto gambling websites that let you play with Litecoin are <a href="/go/bitstarz/">BitStarz</a>, <a href="/go/stake/">Stake</a>, and <a className="text-blue-700" href="/go/true-flip/">True Flip</a>. All these casinos offer <a href="https://casinosblockchain.io/litecoin-casinos/#best-casinos">very different gambling experiences</a>, which means that some might be more suited for you than others.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I use Litecoin for online gambling?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>
                                        1 - Find an <a href="https://casinosblockchain.io/litecoin-casinos/#best-casinos">online casino that accepts Litecoin</a> as a payment method.<br />
                                        2 - Choose Litecoin as a currency when creating your account.<br />
                                        3 - Using your Litecoin wallet, make a deposit on the website. Don't forget to use a deposit bonus if one is offered!<br />
                                        4 - Play your favorite games.
                                    </div>
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
                        <a  href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
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
                        <a href="#casino-dapps" className="casino-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casino Dapps
                            </li>
                        </a>
                        <a href="#bonuses" className="bonuses hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Bonuses
                            </li>
                        </a>
                        <a href="#welcome-packs" className="welcome-packs hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Welcome Bonus
                            </li>
                        </a>
                        <a href="#more-bonuses" className="more-bonuses hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                No-Deposit Bonuses
                            </li>
                        </a>
                        <a href="#pros-cons" className="pros-cons hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Pros and Cons
                            </li>
                        </a>
                        <a href="#litecoin-casino-games" className="litecoin-casino-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Litecoin Games
                            </li>
                        </a>
                        <a href="#deposit-withdrawal" className="deposit-withdrawal hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Deposits And Withdrawals
                            </li>
                        </a>
                        <a href="#casino-safety" className="casino-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Safety
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