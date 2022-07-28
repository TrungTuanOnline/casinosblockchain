import { useEffect } from "react";

import backgroundImg from "../../../Assets/images/Header.svg"
import LavaGold from "../../../Assets/images/Content/Lava-gold.png"
import InfiniteBlackjack from "../../../Assets/images/Content/infinite-blackjack-live-casino-game.jpg"
import LitecoinRoulette from "../../../Assets/images/Content/Litecoin-Roulette.png"
import BcGamesCrash from "../../../Assets/images/Content/bc-games-crash.png"
import EvolutionGaming from "../../../Assets/images/Content/Evolution-Gaming-Live-Poker-1.jpg"

import { ISiteRankBlogCardObj } from "../../../Interfaces";

import { siteDatas } from "../../../Interfaces/SiteDatas";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";

const MainContent = () => {
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
                    <div className="h2">
                        Getting Started at Cardano Casinos
                    </div>
                    <p>Cardano – or ADA – is brimming with righteous potential, perhaps more than any altcoin.</p>
                    <p>This proof-of-stake coin is much less harmful to the environment than mainstream alternatives. It’s also scalable, peer-reviewed, and named after Ada Lovelace, often regarded as the first computer programmer.</p>
                    <p>But can you use ADA at your favourite online casino? And are there <em>any </em>Cardano casinos out there?</p>
                    <p><strong>The answer is: yes, and we tested them for you.</strong></p>
                    <p>Let’s look at our final list of Cardano casinos where you can play safely! ?</p>
                    <section id="best-casinos">
                        <div className="h2">
                            Best Cardano Casinos – Our Top Choices
                        </div>
                        <p>In a time crunch? Here are our top choices: </p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>BC.Game</strong> is the right casino for those that prefer a<strong> social experience</strong> with plenty of original games, including Cardano crash. Read our full <a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game review</a>, too. </li>
                            <li><strong>True Flip </strong>has a regular cryptocurrency jackpot and a <strong>large variety of casino games</strong> that you can play with Cardano and other coins. Learn more in our comprehensive <a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/">True Flip review</a>.</li>
                            <li><strong>Cloudbet </strong>boasts an <strong>amazing ADA bonus </strong>along with a stellar game portfolio. More details in our dedicated <a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet casino</a> review.</li>
                        </ul>
                        <p>Our advice? Try out a few casinos before picking your favorite – but start with these top three: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[4], siteDatas[3]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="cardano-dapps">
                        <div className="h3">
                            Cardano Gambling Dapps
                        </div>
                        <p>Last time we checked, Cardano Dapps were a rarity. But hey, things have changed: </p>
                        <p>? <strong>There are multiple excellent Cardano Dapps </strong>with tons of games and even some bonuses!</p>
                        <p>Our best pick is <a className="text-blue-700" href="https://casinosblockchain.io/betfury-casino-review/" target="_blank" rel="noreferrer noopener">Betfury</a>, which is well-known for the exciting selection of slots, live tables, and provably fair cards:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}
                            />
                        </div>
                    </section>
                    <section id="ada-casino-bonus">
                        <div className="h2">
                            Cardano Casino Bonus	
                        </div>
                        <p>Casino bonuses aren’t what they used to be. Today, some sites will give you free spins, others emphasize VIP programs and promotion, while the ‘traditionalists’ stick to our favorite deposit match bonus. </p>
                        <p>Let’s break down the Cardano bonuses you’ll find at popular casinos: </p>
                        <figure className="wp-block-table">
                            <table>
                            <tbody>
                            <tr>
                            <td><strong>Casino</strong></td>
                            <td><strong>Cardano bonus</strong></td>
                            </tr>
                            <tr>
                            <td>☁️&nbsp;<strong><a className="text-blue-700" href="https://casinosblockchain.io/go/cloudbet/" target="_blank" rel="noreferrer noopener">Cloudbet</a></strong></td>
                            <td><strong>100% deposit match </strong>up to 50,000 ADA</td>
                            </tr>
                            <tr>
                            <td>?&nbsp;<strong><a className="text-blue-700" href="https://casinosblockchain.io/go/bc-game/" target="_blank" rel="noreferrer noopener">BC.Game</a></strong></td>
                            <td><strong>Daily wheel spin</strong> up to 1 BTC (no ADA-specific awards)</td>
                            </tr>
                            <tr>
                            <td>?&nbsp;<strong><a className="text-blue-700" href="https://casinosblockchain.io/go/true-flip/" target="_blank" rel="noreferrer noopener">True Flip</a></strong></td>
                            <td><strong>10% Cashback </strong>in ADA (or any of the other cryptos)</td>
                            </tr>
                            <tr>
                            <td>?&nbsp;<strong><a className="text-blue-700" href="https://casinosblockchain.io/go/betfury/" target="_blank" rel="noreferrer noopener">BetFury</a></strong></td>
                            <td><strong>Wheel Spin</strong> up to 1 BTC (no ADA-specific awards)</td>
                            </tr>
                            </tbody>
                            </table>
                        </figure>
                            <p className="mt-4">It’s pretty clear, right? The best casino bonus is <a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet’s </a>welcome bonus, giving up to 50,000 ADA in a 100% first deposit match.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                        <p className="mt-4">As for BC.Game, it doesn’t offer any special bonuses or faucets paying out in Cardano.</p>
                        <p>What you can find, however, are challenges, tasks, and plenty of other engaging promotions (paid out in other currencies) that reward you for playing at the casino.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                    </section>
                    <section id="casino-games">
                        <div className="h2">
                            Cardano Casino Games
                        </div>
                        <p className="mt-4">The answer to the question: <em>which casino games can I safely play with Cardano</em> is the answer to <em>which casino games are available at True Flip and BC.Game.</em></p>
                        <p>Luckily for us Cardano casino enthusiasts, True Flip has over 1,600 casino games and BC.Game has <strong>over 3,000 games</strong>, <strong>all playable with ADA</strong>!</p>
                        <p>At the moment, you can find:</p>
                        <div className="h3">Cardano Slots</div>
                        <img src={LavaGold} alt='LavaGold' />
                        <p className="mt-4"><a className="text-blue-700" href="https://casinosblockchain.io/slots-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Slots </a>enthusiast? We have great news for you: </p>
                        <p>? <strong>You’ll find all major slot providers at ADA casinos!</strong></p>
                        <p>Blockbusters like NetEnt and Quickspin are crowd-pleasers, but don’t forget about the casino originals. </p>
                        <p>BC.Game is our top pick for <strong>provably fair in-house games</strong>. Another option is True Flip, which develops some gorgeous slots. So far, they haven’t introduced provable fairness, though, which is why our top pick here is BC.Game:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3 my-12">
                            Cardano Blackjack
                        </div>
                        <img src={InfiniteBlackjack} alt="InfiniteBlackjack" className="mt-4"/>
                        <p className="mt-4">Blackjack is one of the most popular games at online casinos. With a low house edge and exciting variations, it’s no wonder so many people are looking for ADA casinos. </p>
                        <p>? <strong>True Flip offers several live blackjack tables, with real-life dealers, alongside many video blackjack games where you can test your strategies.</strong></p>
                        <p>Their live tables from Evolution are our favorite Cardano blackjack destination: </p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={4}
                                siteIndex={4}
                                summaryData={siteDatas[4]}
                            />
                        </div>
                        <div className="h3 my-10">Cardano Roulette</div>
                        <img src={LitecoinRoulette} alt="LitecoinRoulette" />
                        <p className="mt-4">BC.Game has a selection of provably fair originals, including their popular roulette game.</p>
                        <p>Will it be odds or evens? Black or red? Or your lucky number? <a className="text-blue-700" href="https://casinosblockchain.io/roulette-bitcoin-casino/" target="_blank" rel="noreferrer noopener">Roulette </a>games offer endless fun.</p>
                        <p>? <strong>Make the call and hope for a win on one of BC.Game or True Flip’s roulette tables, playable with Cardano.</strong></p>
                        <p>Our top pick is (once again) BC.Game for the provable fairness and user-friendly layout:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3 my-8">Cardano Crash</div>
                        <img src={BcGamesCrash} alt="bc-games-crash.png" />
                        <p className="mt-2">Enjoy Cardano crash at BC.Game!</p>
                        <p className="mt-4"><a className="text-blue-700" href="https://casinosblockchain.io/crash-crypto-game/" target="_blank" data-type="URL" data-id="https://casinosblockchain.io/crash-crypto-game/" rel="noreferrer noopener">Crash </a>is a crypto casino favorite – and now, it’s also available in ADA.</p>
                        <p><strong>? Head on to BC.Game to find one of the hypest, most exciting blockchain games out there: crash. </strong></p>
                        <p>Yes, most play it with Bitcoin, but ADA is another great choice!</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3 my-6">Cardano Poker</div>
                        <img src={EvolutionGaming} alt="EvolutionGaming" />
                        <p className="mt-4">
                            Play live poker at Cloudbet casino!
                        </p>
                        <p>Finally, what about Cardano <a className="text-blue-700" href="https://casinosblockchain.io/bitcoin-poker-sites/">poker</a>? </p>
                        <p>? <strong>Cloudbet has an excellent live table selection, including Cardano poker tables!</strong></p>
                        <p>You can also play virtual poker at BC.Game (provably fair), but that’s arguably not as fun. Unfortunately, we’re yet to see real online poker tournaments that accept ADA. Let’s hope that as the game gets more popular, we’ll find them as well. </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                    </section>
                    <section id="pros-and-cons">
                        <div className="h2">
                            Pros and Cons of Playing with Cardano
                        </div>
                        <p className="mt-4">Unlike other more mainstream alternatives, Cardano isn’t a very controversial coin. </p>
                        <p>There are a few reasons for that:</p>
                        <ol className="is-style-dotted-list">
                            <li>It’s <strong>environmentally friendly</strong>, due to its proof-of-stake protocol</li>
                            <li>It’s <strong>peer-reviewed </strong>and <strong>transparent</strong></li>
                        </ol>
                        <p>Cardano is a good choice for casino players looking for privacy since it’s completely decentralized like most cryptocurrencies.</p>
                        <p>And, of course, Cardano casinos offer all the same advantages that crypto casinos have over more traditional casinos with fiat payments only:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Safe transactions</li>
                            <li>Payment anonymity</li>
                            <li>Fast and decentralized payments</li>
                        </ul>
                        <p>But would we recommend it as your first coin if you’re getting started at crypto casinos? The answer is no.</p>
                        <p>Our reluctance to recommend it to newcomers is simple: </p>
                        <p>❌ It’s just not as stable or as widely available as other altcoins like Tether (pegged to the USD) or even Ethereum or Ripple.</p>
                        <p>Of course, if you have a good understanding of coin fluctuations and the financial market, you can use them to your advantage when gambling with Cardano.</p>
                        <div className="w-full h-[240px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">OPTIMIZE YOUR GAMING</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Make the most of Cardano bonuses when the market is on a high; or play with real money when the coin is low!
                            </div>
                        </div>
                    </section>
                    <section id="safety-and-legal-aspects">
                        <div className="h2 my-8">
                            Are Cardano Casinos Safe?
                        </div>
                        <p>We started this guide by stating there weren’t <em>many</em> Cardano casinos that we could recommend, apart from BC.Game, DuckDice, and True Flip.</p>
                        <p>While there are undoubtedly other casinos that accept ADA as a payment method, we don’t feel like they’re trustworthy enough to warrant a mention on this page. </p>
                        <p><strong>As far as we’re concerned, yes, playing with Cardano at an online casino is perfectly safe…</strong> as long as you do so at a reputable casino. </p>
                        <p>We strongly feel that licensed casinos are a better choice, whether you’re playing with Cardano or another<strong> </strong>cryptocurrency. Playing at unlicensed casinos is always a risk, although it does tend to be more private.</p>
                        <p>Why? Because licensed casinos must comply with anti-money laundering and anti-fraud laws that require them to verify their customers’ identities and personal details.</p>
                        <p>If you provide inaccurate information, the casino may have grounds to confiscate your winnings, so always make sure you read through the casino’s terms and conditions before depositing your ADA!</p>
                    </section>
                    <section id="legal-aspects">
                        <p className="mt-4">In most countries, there is no regulation specific to Cardano casinos.</p>
                        <p>That means that you can play at online casinos with Cardano as long as your local legislation allows for online gambling and cryptocurrency payments.</p>
                        <p>Some countries have stricter rules: players from the United Kingdom or the United States, where online gambling regulations are tight, are often excluded from playing at Cardano casinos.</p>
                        <div className="h2">Final Thoughts</div>
                        <p><strong>Cardano casinos are on the rise – and for a good reason! </strong></p>
                        <p>In 2022, ADA is one of the most exciting altcoins. Uncontroversial and eco-friendly, it’s a universal favorite in the Casinos Blockchain team. But what about Cardano gambling? </p>
                        <p>We’re happy to report Cardano casinos are increasing in number – but more importantly they’re getting better. Today, you can find all of your favorite games at ADA casinos and enjoy some juicy bonuses along the way. </p>
                        <p>Ready to start playing? Start at one of our top-three picks:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[4], siteDatas[3]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-md shadow-slate-600 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best ADA Casinos
                            </li>
                        </a>
                        <a href="#cardano-dapps" className="cardano-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Cardano Dapps
                            </li>
                        </a>
                        <a href="#ada-casino-bonus" className="ada-casino-bonus hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Cardano Casino Bonus
                            </li>
                        </a>
                        <a href="#casino-games" className="casino-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casino Games
                            </li>
                        </a>
                        <a href="#pros-and-cons" className="pros-and-cons hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Pros and Cons
                            </li>
                        </a>
                        <a href="#safety-and-legal-aspects" className="safety-and-legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Are Cardano Casinos Safe?
                            </li>
                        </a>
                        <a href="#legal-aspects" className="legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Are Cardano Casinos Legal?
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