import { useEffect } from "react";


import backgroundImg from "../../../Assets/images/Header.svg"

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
                    <div className="h2">Getting Started at Binance (BNB) Casinos</div>
                    <p>Ever since the Binance rally <a className="text-blue-700" rel="noreferrer noopener" href="https://www.coindesk.com/bitcoin-market-dominance-xrp-bnb" target="_blank">in May 2021</a>, cryptocurrency enthusiasts are looking at the former utility coin as a viable alternative to Bitcoin.</p>
                    <p>And it’s not just investors taking an interest in BNB: Binance casinos are picking up steam. While they aren’t (yet) as numerous as Bitcoin, Ethereum, or even Ripple casinos, their number has recently increased.</p>
                    <p>If you look deeply enough, you can find plenty of <strong>Binance casino</strong> <strong>options</strong>. But which are worthy of your time and money?</p>
                    <p>That’s why we’re here.&nbsp;We keep an eye on the most popular Binance casinos and review them according to several factors, such as their game selection, bonuses, payment options, safety, and how helpful is their customer support.</p>
                    <p>You don’t even have to do anything: you can find all the information you need further down <strong>on this page</strong>! ?</p>
                    <section id="best-casinos">
                        <div className="h2">
                            Best BNB Casinos
                        </div>
                        <p>We selected <a className="text-blue-700" href="https://casinosblockchain.io/duckdice-review/" target="_blank" rel="noreferrer noopener">DuckDice</a> and <a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" data-type="casino" data-id="2016" rel="noreferrer noopener">True Flip</a> as the best two Binance casinos after testing a much more extensive list of brands using BNB as a payment method.</p>
                        <p>Our reviewing process involved:</p>
                        <ol className="is-style-dotted-list">
                            <li>Signing up</li>
                            <li>Depositing and redeeming bonuses</li>
                            <li>Playing the games</li>
                            <li>Withdrawing winnings</li>
                            <li>Contacting customer support</li>
                        </ol>
                        <p>We reach out to the customer support team even when we don’t experience any issues. Contacting customer support is a core step in our process because it lets us understand its effectiveness, speed, and attention to detail.</p>
                        <p>Of course, we highly valued Binance casinos that let you deposit and withdraw without much of a hassle; but we also considered how many games the casino had and if they were fun enough to play.</p>
                        <p>In the end, we ended up with two brands that stood out from the rest. While&nbsp;<strong>DuckDice is a solid option for fans of dice</strong>&nbsp;games,&nbsp;<strong>True Flip is a better choice for slot machines or live casino players</strong>, which is why it’s our number one choice.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[16]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="binance-dapps">
                        <div className="h3">
                            Binance Gambling Dapps
                        </div>
                        <p>Gambling Dapps are great: they provide streamlined payments, more online privacy, and, most of all, a more well-rounded blockchain gambling experience than traditional casinos with cryptocurrency payments.</p>
                        <p>The same is true for Binance gambling Dapps. They are certainly a better option if you’re looking to play provably fair games with BNB since most offer those games exclusively.</p>
                        <p>Both EarnBet and BetFury – our top-two <a className="text-blue-700" href="https://casinosblockchain.io/best-gambling-dapps/" target="_blank" rel="noreferrer noopener">gambling Dapps</a> – have recently started accepting Binance payments. BetFury even has a Binance coin faucet, allowing you to <strong>earn small amounts of BNB</strong> for free from time to time!</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[9], siteDatas[15]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="binance-casino-bonus">
                        <div className="h2">
                            Binance Casino Bonus
                        </div>
                        <p>By far, the best Binace casino bonus that we’ve reviewed is <strong>BetFury’s&nbsp;Binance faucet</strong>. It’s a perfect choice if you’re looking for a&nbsp;<strong>free way to test the casino</strong>. Do note that, in our opinion, faucets are not a viable option in the long term: more traditional casino bonuses may require an initial investment on your side but do give you more bang for your buck.</p>
                        <p>Another option for testing out the casino free is <strong>True Flip’s no deposit bonus. </strong>Just for verifying your ID, True Flip gives you 30 free spins at their exclusive Day &amp; Night slots game.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[15], siteDatas[4]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="casino-games">
                        <div className="h2">Casino Games You Can Play With BNB</div>
                        <p>Although there aren’t many Binance casinos out there yet, there is a wide range of casino games you can play with this coin, especially at casinos such as True Flip, which have a vast collection of slot machines and live casino games.</p>
                        <p>At the moment, you can find:</p>
                        <ol className="is-style-dotted-list">
                            <li><strong>Binance Slots</strong>: almost all major slot game providers are available at Binance casinos, including blockbusters like NetEnt and Quickspin. True Flip is your best option here since this brand provides a wide array of slots, including a few originals. Provably fair slots are also a big hit at brands like BC.Game.</li>
                            <li><strong>Binance Blackjack</strong>: whether you prefer to face the dealer head to head at True Flip’s live blackjack tables or test out your best blackjack strategies at a provably fair blackjack game, you can do so using BNB! Our top choice: EarnBet.</li>
                            <li><strong>Binance Roulette</strong>: except for niche websites focussing on a specific type of game, no online casino is complete without roulette games. The same is true for casinos accepting BNB. Our top choices are True Flip for live roulette, and BetFury for provably fair roulettes.</li>
                            <li><strong>Binance Dice</strong>: the best choice here is, somewhat obviously, DuckDice. This casino may not offer much when it comes to other games, but it’s arguably one of your top choices for cryptocurrency dice games.</li>
                        </ol>
                        <p>That’s not all. Many blockchain casinos and gambling Dapps also have several&nbsp;<a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair games</a>, as well as the following games:</p>
                        <ul className="is-style-checked-list_bubbles">
                            <li>Keno</li>
                            <li>Dice</li>
                            <li>Sic-Bo</li>
                            <li>Plinko</li>
                            <li>Lottery</li>
                            <li>Baccarat</li>
                            <li>Crash</li>
                            <li>Casino poker*</li>
                        </ul>
                        <p>*Do note that Binance poker sites offering poker tournaments where you can play against other players are pretty rare. You can, however, play video poker games at Binance casinos like True Flip or Betfury.</p>
                        <div className="h3">Top Websites For Binance Casino Games</div>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[9], siteDatas[15], siteDatas[16], siteDatas[0]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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

                    <section id="pros-and-cons">
                        <div className="h2">
                            Pros and Cons of Playing with Binance
                        </div>
                        <p>While it’s not as popular as Bitcoin, Binance is a fairly widely accepted cryptocurrency. Currently, you can use it to:</p>
                        <ul className="is-style-checked-list_bubbles">
                            <li>Gamble online (obviously)</li>
                            <li>Play crypto-friendly games</li>
                            <li>Cover transaction fees on Binance</li>
                            <li>Invest</li>
                            <li>Donate to charity</li>
                            <li>Pay for financial products such as loans and credit cards</li>
                            <li>Travel</li>
                            <li>Shop online (on selected stores)</li>
                        </ul>
                        <p>Despite its practicality, Binance isn’t a coin, however, that we recommend to cryptocurrency newcomers. Why? Because it’s <strong>still widely volatile</strong>.</p>
                        <p>The currency has had its ups and downs throughout its history. Since it’s associated with the Binance crypto exchange, it ebbs and flows with the company. For instance, a recent investigation by the United State’s Justice Department and IRS, as <a className="text-blue-700" href="https://www.bloomberg.com/news/articles/2021-05-13/binance-probed-by-u-s-as-money-laundering-tax-sleuths-bore-in" target="_blank" rel="noreferrer noopener">reported by Bloomberg</a>, caused it to plummet. </p>
                        <p>Of course, if you have a good understanding of coin fluctuations and the financial market, then you can use them to your advantage when gambling with Binance.</p>
                        <div className="w-full h-[240px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">OPTIMIZE YOUR BINANCE GAMBLING</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Make the most of Binance bonuses when the market is on a high; or play with real money when the coin is low!
                            </div>
                        </div>
                        <p>Just like with any other cryptocurrency, playing with Binance coin over fiat currencies allows for:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Safe transactions</li>
                            <li>Payment anonymity</li>
                            <li>Fast and decentralized payments</li>
                        </ul>
                    </section>
                    <section id="alternatives">
                        <div className="h2">Alternatives to Binance for Online Gambling</div>
                        <p>Binance is a great option for online gambling, but other coins could be more suitable for your playstyle, especially if you prefer some more stability.</p>
                        <p>Let’s have a look at a few other options.</p>
                        <div className="h3">BUSD Casinos</div>
                        <p>BUSD, or Binance USD, is the stablecoin sister to Binance.</p>
                        <p>Just like USDC and Ripple, it’s pegged to the American Dollar. As such, it’s not as volatile as most other cryptocurrencies.</p>
                        <p>While some gamblers enjoy playing with cryptocurrencies exactly because of the ups and downs of the price fluctuations, some prefer more stability. If you’re one of them, then BUSD might be a great option!</p>
                        <p>It’s now one of the world’s most traded cryptos and it’s gaining more and more acceptance for online payments, including at online casinos.</p>
                        <p>Unfortunately, the amount of casinos accepting BUSD is still limited. However, one of our favourite brands does: <a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a>.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={0}
                                siteIndex={0}
                                summaryData={siteDatas[0]}
                            />
                        </div>
                        <div className="h3">Cardano Casinos</div>
                        <p>Whilst not a stablecoin, Cardano (or ADA) offers a different kind of stability: environmental stability.</p>
                        <p>This coin was created to scale, with a “Proof-of-Stake” system that makes it much less power-hungry – therefore more sustainable – than coins like Bitcoin.</p>
                        <p>Just like BUSD, however, you might have to dig deep to find casinos accepting ADA. Luckily, we’ve prepared a handy <a className="text-blue-700" href="https://casinosblockchain.io/cardano-casinos/" target="_blank" rel="noreferrer noopener">Cardano casino guide</a> to help you out!</p>
                        <p>Feel free to check it out, or have a look at the following Cardano picks below:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[4], siteDatas[16]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="safety-and-legal-aspects">
                        <div className="h2">
                            Are Binance Casinos Safe?
                        </div>
                        <p>If you’re wondering if Binance casinos are safe, then the answer is relatively straightforward: <strong>yes, if you gamble at a reputable (and preferably licensed) casino</strong>. Playing at unlicensed casinos is always a risk, no matter what currency you use.</p>
                        <p>Our top recommendations if safety is of concern to you are True Flip or DuckDice. Both brands have a strong reputation in the cryptocurrency world.  </p>
                        <p>Do note that casinos – cryptocurrency-friendly or otherwise – often withhold funds from players that breach their terms of service, including providing inaccurate information upon sign up.</p>
                        <p>For that reason, you should make sure that you <strong>play from an allowed region</strong> and that you comply with the casino’s terms and conditions.</p>
                        <p>If privacy is important to you, you can also play at gambling Dapps, such as EarnBet and Betfury, which require less invasive personal data.</p>
                    </section>

                    <section id="legal-aspects">
                        <div className="h3">
                            Are Binance Casinos Legal?
                        </div>
                        <p>In most countries, there is no regulation specific to Binance casinos.</p>
                        <p>For the most part, as long as both Binance and online gambling are allowed in your region, you can legally play at Binance casinos as well.</p>
                        <p>Do note that many countries – such as the United Kingdom or the United States – require all online casinos to have a local gambling license. Since Binance casinos prefer to apply for international licenses instead, players from these countries are often blocked from gambling with Binance.</p>
                        <p>If that’s the case for you, then <strong>gambling Dapps</strong> that don’t request personal information (such as your address) <strong>can be a better choice</strong>.</p>
                    </section>


                </div>
            </div>
            {/* RightNavBar */}
            <div className="w-[22%] h-fit xl:block hidden bg-white shadow-md shadow-slate-600 rounded-md sticky top-5">
                <div className="container text-sm h-fit w-full p-2 ">
                    <ul className="list-none w-full text-[#80869e]">
                        <a href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best BNB Casinos
                            </li>
                        </a>
                        <a href="#binance-dapps" className="binance-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Binance Dapps
                            </li>
                        </a>
                        <a href="#binance-casino-bonus" className="binance-casino-bonus hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Binance Casino Bonus
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
                        <a href="#alternatives" className="alternatives hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Alternatives to Binance
                            </li>
                        </a>
                        <a href="#safety-and-legal-aspects" className="safety-and-legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Are Binance Casinos Safe?
                            </li>
                        </a>
                        <a href="#legal-aspects" className="legal-aspects hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Are Binance Casinos Legal?
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
            <div className=" flex h-full w-full flex-col xl:w-11/12 justify-center ">
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