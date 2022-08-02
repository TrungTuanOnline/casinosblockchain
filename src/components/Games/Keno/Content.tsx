import BCGameKeno from "../../../Assets/images/Content/Keno/bcgame-keno.png"
import StakeKeno from "../../../Assets/images/Content/Keno/Stake-Keno.jpg"
import CloubbetKeno from "../../../Assets/images/Content/Keno/Cloubbet-Keno.png"
import BetFuryWideLogo from "../../../Assets/images/Content/BetFury-Wide-Logo.jpg"
import WinkDappLogo from "../../../Assets/images/Content/wink-dapp-logo.png"
import Bcgamecasino from "../../../Assets/images/Content/bcgamecasino.png"
import KenoChallenge from "../../../Assets/images/Content/Keno/keno-challenge.png"
import PaymentMethod from "../../../Assets/images/Content/Keno/payment-method.png"
import NetEntKeno from "../../../Assets/images/Content/Keno/NetEnt-Keno.png"


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
                    <p>Keno is thousands of years old - but it might just become your favorite game. In this article, we look at the <strong>best Bitcoin Keno games of 2022</strong>. From RTP to strategies, it's all right here!</p>
                    <p>But first, let's answer one basic question: </p>
                    <p><strong>What is Keno </strong>(and why is it so special)? </p>
                    <p>Keno is a <strong>lottery-like game</strong> where you gamble on the outcome of a physical or RNG drawing. You can bet on a single number or a range of numbers. If your numbers get drawn - you win.</p>
                    <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <p className="text-sm  text-white opacity-50">KENO - A TRUE CLASSIC</p>
                        <div className="h2 text-white text-lg md:text-2xl">
                            Keno is thriling, yet easy to learn - no wonder it has gained traction at crypto casinos. 
                        </div>
                    </div>
                    <p>You can play Keno at brick-and-mortar casinos around the world. Even some restaurants, too! Now, it's also available in crypto gambling sites.</p>
                    <p>Bitcoin Keno is (unsurprisingly) the online version, where you can play with BTC. And it comes with many <strong>advantages over traditional Keno games</strong>. From faster <strong>pay-outs and lower fees</strong> to better <strong>value for you money </strong>(since online casinos have lower operational costs).</p>
                    <p>Bottom line: Keno is great, Bitcoin Keno is even better. That's why we set out to create the most comprehensive guide to crypto Keno gambling. </p>
                    <p>On this page, you will learn all about:</p>
                    <ol className="is-style-dotted-list"><li>The <strong>top Keno gambling websites</strong> and Dapps.</li><li>How to <strong>select the casino</strong> that best fits your playstyle.</li><li>How to <strong>pay and play safely.</strong></li><li>The truth about <strong>Keno gambling strategies</strong> (alongside a few helpful tips).</li></ol>
                    <p>Let's jump straight in:</p>
                    <section id="play-keno-online">
                        <div className="h2">Where To Play Keno Online?	</div>
                        <p>Bitcoin Keno games are all over the blockchain casino world... if you know where to find them.</p>
                        <p>We've reviewed all the <strong>popular Bitcoin Keno casinos and Dapps</strong> and selected only the very best.&nbsp;Here are our top picks:</p>
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
                    <p>Here's what you should know about each of them: </p>
                    </section>
                    <section id="bitcoin-keno-casinos">
                        <div className="h2">Bitcoin Keno Casinos</div>
                        <p>Maybe because of their relative simplicity, <strong>Keno is on the rise</strong>, including at casinos that accept Bitcoin.</p>
                        <p>As things are, there aren't Keno games at every single blockchain casino, but you still shouldn't struggle to find them.</p>
                        <p>All three casinos are <strong>Bitcoin-friendly, safe, and entertaining</strong>, each offering a unique gambling experience. Let's break down our top picks: </p>
                    </section>
                    <section id="bc.game">
                        <div className="h3">BC.Game	</div>
                        <img src={BCGameKeno} alt="BCGameKeno" />
                        <p className="mt-3">Coming it at #1, <strong><a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a> is our favorite Keno casino</strong>. </p>
                        <p>Their in-house game lets you <strong>bet on 1-20</strong> and comes with a <strong>tiny house edge</strong>. Since the casino only has a 1% edge, this gives you a <strong>Return-to-Player (RTP) of 99%!</strong> Considering that brick-and-mortar casinos have a house edge of 30% or more and you can see why we love BC.Game’s Keno so much.</p>
                        <p>You don’t have to worry about BC.Game cheating you, as <strong>they’re a provably fair casino</strong>. This means that their games use cryptographic technology that allows you to verify the fairness of each and every game you play.</p>
                        <p>We also love that the casino warns you if your potential earnings are lower than what you're wagering (this happens if you bet on too many numbers.) All in all, excellent site!</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                    </section>
                    <section id="stake">
                        <div className="h3">Stake Casino</div>
                        <img src={StakeKeno} alt="StakeKeno" />
                        <p className="mt-2">Coming in second, <a className="text-blue-700" href="https://casinosblockchain.io/stake-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Stake Casino</a> also offers a <a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair Keno game</a> with a <strong>low house edge of only 1%</strong>. This makes the RTP 99%, which is the same as BC.Game.</p>
                        <p>The main difference between the two is that Stake's game gives you <strong>1-40 numbers </strong>which changes the odds slightly. </p>
                        <p>There is a lot <strong>more variety</strong>, too. Stake even has a sportsbook, if you're looking to switch things up!</p>
                        <p>On the flipside, <strong>BC.Game is far more sociable</strong>. Their chat feature is really cool, and you can even win awards for interacting with other people.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                    </section>
                    <section id="Cloudbet">
                        <div className="h3">Cloudbet</div>
                        <img src={CloubbetKeno} alt="CloubbetKeno" />
                        <p className="mt-2">Last but not least, <a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet </a>takes the cake when it comes to game design. Their <strong>Keno game is much more immersive</strong> and beautiful than the others on this list.</p>
                        <p>The trade-off is that the <strong>house edge is a bit higher at 3%. </strong>However, this is still lower than what you'll find at most land-based casinos. Overall, we think it's worth it for the improved experience.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                    </section>
                    <section id="keno-dapps">
                        <div className="h2">
                        Keno Dapps - Decentralized Applications	</div>
                        <p>Dapps have one big advantage over most blockchain casinos - transparency. Since <a className="text-blue-700" rel="noreferrer noopener" href="https://decrypt.co/resources/dapps" target="_blank">all data and resources must be open to the public</a>, Dapps can't hide anything from you.</p>
                        <p><strong>Keno Dapps</strong> were notoriously hard to find in the past, but <strong>have become increasingly popular</strong> over the past few years.</p>
                        <p>Some of the most popular Dapps nowadays come with at least one Keno game. Below, your can find our top picks for Keno Dapps.</p>
                    </section>
                    <section id="BetFury">
                        <div className="h3">BetFury	</div>
                        <img src={BetFuryWideLogo} alt="BetFuryWideLogo" />
                        <p>Keno is just one of the several games that you can play at <a className="text-blue-700" href="https://casinosblockchain.io/go/betfury/" target="_blank" rel="noreferrer noopener">BetFury</a>.</p>
                        <p>This is one of the most visually-appealing Dapps on the market, with a <strong>polished look and a modern design</strong>.</p>
                        <p>But it's advantages don't stop there. It's arguably one of the most-rewarding Bitcoin gambling Dapps:</p>
                        <ul className="is-style-checked-list_sm"><li>You can earn part of the casino's dividends in BTC and other coins.</li><li>There are many regular promotions, including a 25% cashback and several weekly offers.</li></ul>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}
                            />
                        </div>
                    </section>
                    <section id="Wink">
                        <div className="h3">Wink</div>
                        <img src={WinkDappLogo} alt="WinkDappLogo" />
                        <p className="mt-2">It's not the first time that we rave about <a className="text-blue-700" rel="noreferrer noopener" href="https://casinosblockchain.io/go/wink/" data-type="URL" data-id="/go/wink/" target="_blank">Wink</a>, which is one of our <a className="text-blue-700" href="https://casinosblockchain.io/tron-casinos/">favorite Tron-based gambling Dapps</a>.</p>
                        <p>Wink is one of those rare Dapps that looks and feels like a casino.</p>
                        <p>On top of an excellent Keno game, you can find several slot machines, table games, and live casino games from many providers.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={23}
                                siteIndex={23}
                                summaryData={siteDatas[23]}
                            />
                        </div>
                    </section>
                    <section id="choosing-a-casino">
                        <div className="h2">How To Choose A Good Casino For Keno</div>
                        <p>So what makes a good crypto casino for Keno? Let's talk about <strong>how we chose our top picks </strong>and <strong>what to look for </strong>when you're trying casinos out yourself. </p>
                        <div className="h3">How Many Keno Games Do They Have? </div>
                        <img src={Bcgamecasino} alt="Bcgamecasino" />
                        <p className="mt-2">When we set out to find the best Keno casinos, <em>having Keno </em>was an obvious must. But, we want more than the bare minimum, right? </p>
                        <p>Our top choice, BC.Game has <strong>12 different Keno and Keno-like games</strong>. You see the RTP right away (it goes as high as 99%) and choose the game with the best value. </p>
                        <p>For our research, we also considered the general game selection. Betting is about having fun, so having a variety of options (Stake and Cloudbet even have sportsbooks) is definitely the way to go. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>           
                        <div className="h3">Check Out the Keno Promotions</div>
                        <img src={KenoChallenge} alt="KenoChallenge" />
                        <p className="mt-2">Stake casino has frequent game-specific promotions.</p>
                        <p>Not all Bitcoin casinos&nbsp;- and especially not Dapps -&nbsp;have welcome bonuses&nbsp;and regular promotions.</p>
                        <p><strong>Keno-specific promotions aren't commonplace, either</strong>, but that doesn't mean they don't exist. We love Stake's regular community challenges. Every week, they open several casino promotions with a prize pool for the highest scores in the game. Keep an eye on our Stake review or their forums to stay in the loop. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>  
                        <div className="h3">Learn About Currencies And Payment Methods</div>
                        <img src={PaymentMethod} alt="PaymentMethod" />
                        <p className="mt-2">BC.Game is excellent for BTC and altcoin lovers alike. Here's how depositing DOGE looks like.</p>
                        <p>While some casinos support several <strong>cryptocurrencies alongside fiat money</strong>, not all do. Since we're blockchain casino reviewers, we make sure all gambling sites have a crypto payment option. We also test deposits and withdrawals, stripping points for invasive KYCs. </p>
                        <p>In your own research, make sure the casino has your preferred coin and processes payments safely. It's hard to beat BC.Game here - they have <strong>66+ different cryptos</strong>. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={1}
                                siteIndex={1}
                                summaryData={siteDatas[1]}
                            />
                        </div>  
                        <div className="h3">Put The Customer Support Team To The Test</div>
                        <p>Generally, customer support teams at blockchain casinos are friendly and do their best to solve your issues.</p>
                        <p>You might not know for sure how the casino reacts until an actual issue comes up, but it's always a good idea to&nbsp;<strong>ask the support agents some questions before signing up</strong>. We make sure to contact customer support for all of our reviews. We evaluate them based on responsiveness, knowledge, and availability. </p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">The Golden Standard</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                            Ideally, you want a crypto casino with 24/7 support. You never know when an issue might come up.
                            </div>
                        </div>
                    </section>
                    <section id="cryptocurrencies">
                        <div className="h2">Playing Keno With Cryptocurrencies	</div>
                        <p>As you can probably guess, playing Keno with cryptocurrencies is much easier if you use a popular coin. Some of the most common cryptos you'll find in Keno casinos include:</p>
                        <ul className="is-style-checked-list_bubbles"><li><a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-casinos/">Bitcoin</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/best-ethereum-casinos/">Ethereum</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/tether-casinos/">Tether</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-cash-casinos/">Bitcoin Cash</a></li></ul>
                        <p>A few exotic coins (TrueUSD, Verge, Paxos...) are also reasonably common.</p>
                        <p>Dapps are more limited than casinos. However, it shouldn't be hard to find Dapps that support Bitcoin,&nbsp;<a className="text-blue-700" href="https://casinosblockchain.io/eos-casinos/">EOS</a>, and Tron.</p>
                        <p>Let's break down playing with each of these coins: </p>
                        <div className="h2">Bitcoin Keno Casinos</div>
                        <p><strong>Virtually all crypto Keno casinos offer Bitcoin. </strong></p>
                        <p>No big surprise there, right? BTC is the world's biggest and most popular cryptocurrency. You practically can't have a crypto casino without Bitcoin. </p>
                        <p>Still, a few tips apply when it comes to <strong>picking the best Bitcoin Keno game</strong>: </p>
                        <ul className="is-style-checked-list_sm"><li><strong>Check transaction fees. </strong>You will get charged for deposits and withdrawals, because these taking computing power on the network. But, steer clear from casinos that enforce <em>additional </em>processing fees for your payments. They simply are not worth it. </li><li><strong>Safety first. </strong>Stick to licensed casinos and never share your private keys (to your <a className="text-blue-700" href="https://casinosblockchain.io/best-bitcoin-wallet-for-online-gambling/" target="_blank" rel="noreferrer noopener">BTC wallet</a>) with anyone. </li><li><strong>Don't mix up the address. </strong>If you send money to the wrong Bitcoin address, you're never getting them back. So, make sure you copy the address correctly - I always use Ctrl+C and Ctrl+V, no typing-in manually. </li></ul>
                        <p>Our favorite Bitcoin Keno sites include: </p>
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
                        <div className="h2">Can You Play Keno With Ethereum? </div>
                        <p>You sure can!</p>
                        <p>Ethereum (a.k.a. the second most popular crypto) is a <strong>decentralized platform that runs smart contracts</strong>: applications that run exactly as programmed, making fraud and third-party interference impossible. </p>
                        <p><strong>Keno is perfect for smart contracts</strong> because it's a simple game of chance with a known set of rules. This makes it perfect for blockchain-based gambling. </p>
                        <p>To play Keno on Ethereum, all you need is an <strong>Ethereum wallet and some ETH</strong>. Then, you can either go the casino route or the Dapp one. </p>
                        <p>Unlike casinos, <strong>Dapps are simpler in design but offer amazing RTPs</strong>. You can also hook them up directly to your Ethereum wallet (we're partial to <a className="text-blue-700" href="https://casinosblockchain.io/metamask-casinos/" target="_blank" rel="noreferrer noopener">MetaMask</a>), instead of making deposits. If you want to gamble at a casino, we recommend still sticking to a <strong>high RTP one like Stake or BC.Game</strong>:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[1], siteDatas[15]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="bitcoin-keno-safety">
                        <div className="h3">Is Bitcoin Keno Safe? Can I Safely Play It With Cryptocurrencies?	</div>
                        <p>Because Bitcoin, Ethereum, and other similar coins are relatively new to the online gambling scene, it's understandable if you have some reserves about their safety.</p>
                        <p><strong>The truth is, playing Keno with cryptocurrencies isn't that different from playing it with fiat money.</strong></p>
                        <p>In some cases (such as the Keno game at Stake), it might be even safer due to blockchain casinos' commitment to transparency and the impossible-to-cheat nature of provably fair games.</p>
                        <p>However, if safety is paramount to you, there are some steps you can always take:</p>
                        <ol className="is-style-dotted-list"><li>Read about the casino's reputation in online forums and professional casino reviews.</li><li>Only play at trusted casinos with reputable gambling licenses.</li><li>Prefer provably fair Keno games.</li><li>Never see Keno games as an alternative to mining or a steady source of Bitcoin. Always play for fun - not for profit.</li></ol>
                    </section>
                    <section id="Keno-Strategy">
                        <div className="h2">How to Win at Keno: Can Keno Strategy Help You? </div>
                        <p><strong>Everybody plays to win.</strong> Whether it's poker, slots, or keno, the promise of juicy wins is what keeps us going back to these games. </p>
                        <p>And, while there is nothing wrong with dabbling in Keno odds and strategy, here is what you should always keep in mind:</p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                            Keno is a game of chance. 
                            </div>
                        </div>
                        <p className="mt-2">The only way to always win at Keno is to be extremely lucky. </p>
                        <p><strong>If there were a fool proof strategy, casinos would have stopped offering the game a long time ago. </strong>So, while you can use certain tips and tricks, at the end of the day, it all comes down to luck.</p>
                        <p>That being said, there are some things you can do for a better Keno experience.</p>
                        <div className="h3">Low House Edge</div>
                        <img src={Bcgamecasino} alt="Bcgamecasino" />
                        <p className="mt-2">BC.Game is notorious for its low house edge</p>
                        <p>The first (and simplest) trick in the book is choosing a casino with a low house edge. </p>
                        <p><strong>The house edge describes the advantage the casino has over the</strong> player. In Keno, this can be as high as 25%. So, if you want to give yourself the best chance of winning, it's important to find a casino with a low house edge. </p>
                        <p>Luckily, this is where crypto casinos beat brick-and-mortar. <strong>BC.Game's house edge is just 1%, giving you a 99% Return-to-Player (RTP).</strong></p>
                        <div className="h3">Don't Pick Too Many Numbers</div>
                        <img src={NetEntKeno} alt="NetEntKeno" />
                        <p className="mt-2">On an 80-number board, stick to 4-8 numbers at a time!</p>
                        <p>This may sound counterintuitive but bear with us. </p>
                        <p><strong>The more numbers you pick, the harder it is to hit all of them.</strong> Sure, some of your choices will be a hit. But, since you're betting money on every number, the potential wins can be lower than your original wager.</p>
                        <p>We recommend <strong>choosing between four and eight</strong> numbers and keeping a close eye on your bets. BC.Game helps you with that, by warning you if the maximum wins outweigh your wager.</p>
                        <div className="h3">Use Bankroll Management Strategies</div>
                        <p><strong>Bankroll management is key in any betting.</strong> But, it's even more important in Keno because of how fast the game can be. If you're not careful, you can quickly lose all your money.</p>
                        <p>There are many different bankroll strategies you can try. But, a good rule of thumb is to <strong>never bet more than 5% of your total bankroll</strong>. So, if you have $100 in your account, you shouldn't bet more than $5 per game. </p>
                        <p><strong>And, make sure to set a budget for your gambling</strong> - monthly or weekly, depending on how often you do it. This will help you keep track of your expenses and ensure you're not overspending.</p>
                        <div className="h3">Take Advantage of Bonuses and Promotions</div>
                        <p>Crypto casinos are always offering new bonuses and promotions. And, these can be a great way to <strong>boost your bankroll and give you extra money to play with</strong>. </p>
                        <p>Just make sure you read the Terms and Conditions before claiming any offers. Otherwise, you might not be able to withdraw your winnings.</p>
                        <p>Check out BC.Game's juicy promos here: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>      
                        <div className="h2">Final Thoughts</div>
                        <p>There you have it - <strong>your comprehensive guide to Bitcoin Keno</strong>, as well as playing Keno with other cryptos. Keno is a fun game that's easy to pick up and play. But, as with any gambling, it's important to be responsible and know your limits.</p>
                        <p>We hope this article has helped you understand the ins and outs of Keno casinos. </p>
                        <p>We take pride in <strong>recommending the best crypto gambling sites</strong> by personally testing each and every one. But, our opinions will always be at least a little subjective. So, try out a few of the casinos we've mentioned and see which one suits you best:</p>
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

                    <section id="FAQ" >
                        <div className="h3 mt-32">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I play Keno with Bitcoin?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>The first step in playing Bitcoin Keno is finding a casino where you can do so. You can start by having a look at our list of <a className="text-blue-700" href="https://casinosblockchain.io/keno-bitcoin/#play-keno-online">top Bitcoin Keno websites</a>.<br />
                                    Playing the game is simple: you select a set of numbers on a card, and hope they come out when the numbers are revealed.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What is the house edge for Bitcoin Keno?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    The house edge for Bitcoin Keno, just like any other game of Keno, often lays somewhere around 30% and is one of the highest for casino games. To compensate, prizes also tend to be higher when you do hit the right number.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is there a winning Keno strategy I can use at Bitcoin casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    No really. Keno is purely a game of luck, which means there is no Keno strategy that can increase your chances of winning. Some people believe keeping track of the numbers that came out might help, but even that is pointless.
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
                        <a href="#play-keno-online" className="play-keno-online hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Quick Picks
                            </li>
                        </a>
                        <a href="#bitcoin-keno-casinos" className="bitcoin-keno-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casinos
                            </li>
                        </a>
                        <a href="#bc.game" className="bc.game hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                BC.Game
                            </li>
                        </a>
                        <a href="#stake" className="stake hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Stake
                            </li>
                        </a>
                        <a href="#Cloudbet" className="Cloudbet hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cloudbet
                            </li>
                        </a>
                        <a href="#keno-dapps" className="keno-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Dapps
                            </li>
                        </a>
                        <a href="#BetFury" className="BetFury hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Betfury
                            </li>
                        </a>
                        <a href="#Wink" className="Wink hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Wink
                            </li>
                        </a>
                        <a href="#choosing-a-casino" className="choosing-a-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Choosing A Casino
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Playing Keno With Cryptocurrencies
                            </li>
                        </a>
                        <a href="#bitcoin-keno-safety" className="bitcoin-keno-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Is it Safe?
                            </li>
                        </a>
                         <a href="#Keno-Strategy" className="Keno-Strategy hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Keno Strategy
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