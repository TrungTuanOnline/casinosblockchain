import backgroundImg from "../../../Assets/images/Header.svg"
import LavaGold from '../../../Assets/images/Content/Lava-gold.png'
import ScarabSpin from "../../../Assets/images/Content/scarab-spin-stake.png"
import Trueflip3 from "../../../Assets/images/Content/trueflip3.png"
import JackpotSlots from "../../../Assets/images/Content/jackpot-slots.png"
import BetFury from "../../../Assets/images/Content/BetFury-Wide-Logo.jpg"
import FortunejackWide from "../../../Assets/images/Content/fortunejack-wide-logo.png"
import BitstarzWide from "../../../Assets/images/Content/bitstarz-wide-logo.png"
import SweetBonanzaBet from "../../../Assets/images/Content/sweet-bonanza-bet-selection.png"
import BookOfDead from "../../../Assets/images/Content/book-of-dead-intro-screen.png"
import NetEntAloha from "../../../Assets/images/Content/NetEnt-Aloha.jpg"

import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import { ISiteRankBlogCardObj } from "../../../Interfaces";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";
import { siteDatas } from "../../../Interfaces/SiteDatas"

const dummyInfos: Array<ISiteRankBlogCardObj> = [siteDatas[0], siteDatas[1], siteDatas[3], siteDatas[2], siteDatas[4]];

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
                    <p>Bitcoin slots are by far the most <a className="text-blue-700" href="https://casinosblockchain.io/" target="_blank" rel="noreferrer noopener">popular blockchain casino</a> game - and a crowd-pleaser in regular casinos, too. </p>
                    <p><strong>Today, we can't imagine gambling without slots. </strong></p>
                    <p>But did you know they only exist since the early 20<sup>th</sup> century? The simple fruit spins then evolved, taking over online and brick-and-mortar casinos alike. </p>
                    <p>With exciting features, original themes, and satisfying bonuses, crypto slots are one of our favorite things to play online. </p>
                    <p>And, thanks to blockchain technology, we can now have <a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">provably fair</a> slots, too: </p>
                    <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <p className="text-sm  text-white opacity-50">PROVABLY FAIR SLOTS</p>
                        <div className="h2 text-white text-lg md:text-2xl">
                            Provably fair slot machines offer verifiable results - no foul play possible.
                        </div>
                    </div>
                    <p className="mt-4"><strong>But where do you find the best crypto slots?</strong> That's what we're here for!</p>
                    <p>In this guide, we will:</p>
                    <ol className="is-style-dotted-list"><li>Take you through the world's best <strong>Bitcoin slot sites and Dapps</strong></li><li>Show you where you can grab the most rewarding <strong>bonuses</strong></li><li>Help you <strong>choose the right casino</strong> for you</li><li>Tell you about the <strong>different cryptocurrencies</strong> you can use to play slots</li><li>Give you tips on how to keep slots <strong>fun &amp; safe.</strong></li></ol>
                    <section id="In-a-Nutshell">
                        <div className="h2">
                            Best Bitcoin Slots: In a Nutshell
                        </div>
                        <p><strong>Can't wait to start playing? </strong>Don't worry, we won't keep up the suspense any longer. </p>
                        <p>Here are the five best Bitcoin slot sites that you can find online:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
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
                        <p className="mt-4">What makes these our top picks? Read on to learn more: </p>
                    </section>
                    <section id="Our-Process">
                        <div className="h2">
                            How We Chose the Best Bitcoin Slots
                        </div>
                        <p>At Casinos Blockchain we take pride in providing <strong>high-quality, tried-and-tested recommendations.</strong> So, we would never suggest a Bitcoin slot to you that we haven’t firstly put to the test ourselves. </p>
                        <p><strong>We sign up to the casinos, deposit our own money, and play the games.</strong> This allows us to get a feel for the casino, the games, the customer support, and anything else that might be important to you.</p>
                        <p><strong>We also make sure that the casinos we recommend use the latest security features</strong> - even better if they're provably fair. And, of course, we only ever recommend casinos that accept Bitcoin. Once again, bonus points if they have extra cryptos.</p>
                        <p>In short, here is our process for trying Bitcoin slots:</p>
                        <ul className="is-style-dotted-list"><li>We look for <strong>casinos that accept Bitcoin</strong> (we love it if they accept other cryptos).</li><li>We check the casino’s <strong>security features and licensing information</strong>.</li><li>We deposit our own money and <strong>test out the slots</strong>. We always play multiple games - including slots from big-name providers, up-and-coming companies, and casino originals.</li><li>We <strong>withdraw our winnings</strong> (hopefully!) and rate the overall experience.</li></ul>
                        <p>And that’s it! </p>
                        <p>We hope that our recommendations save you time by only ever suggesting the highest quality Bitcoin slots out there. Let's break down BTC-friendly slots:</p>
                    </section>
                    <section id="play-slots-online">
                        <div className="h2">
                            Where To Play Slots With Bitcoin
                        </div>
                        <img src={LavaGold} alt="LavaGold" />
                        <p className="mt-4">Lava Gold is one of our favorite slots - find it on BC.Game!</p>
                        <p>Slot machines are the motor that keeps gambling websites running as the most loved games by Bitcoin players and casinos alike:</p>
                        <ul className="is-style-checked-list_sm"><li>Casinos like them for being <strong>profitable and a steady source of income</strong> due to their favorable house margins.</li><li>Players enjoy the large variety of games, the ease of play, and the possibility to <strong>win Bitcoin without having to mine</strong>, trade, or learn deep gambling strategies.</li></ul>
                        <p>With this in mind, it's no surprise that most Bitcoin casinos strive to offer <strong>as many slot machines as possible</strong>. This is no easy feat, since there are new games on the market almost every single day!</p>
                        <div className="h3">Types of Bitcoin Slots</div>
                        <p>Currently, there are three main types of slot machines at blockchain casinos: </p>
                        <ul className="is-style-checked-list_bubbles"><li>Provably fair slots</li><li>Regular video slots</li><li>Jackpot slots</li></ul>
                        <p>Let's have a look at what they're all about, and where you can play them with Bitcoin and other cryptos.</p>
                    </section>
                    <section id="provably-fair-slots">
                        <div className="h3">
                            Provably Fair Slots
                        </div>
                        <img src={ScarabSpin} alt="ScarabSpin" />
                        <p className="mt-4">Stake's Scarab game is a provably fair slot with a decent house edge, if somewhat simple design!</p>
                        <p>Provably fair slot machines let you <strong>verify the outcome of every single spin</strong> through a&nbsp;<a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">blockchain-based process</a>. These games can't be rigged - cheating is impossible by design.</p>
                        <p>What does this mean for players?</p>
                        <p><strong>Provably fair slot machines are safer</strong>&nbsp;than regular games. You don't have to rely on goodwill or third-party providers to guarantee the legitimacy of your own gameplay - the game is fair by the way it was built. </p>
                        <p>Now, the bad news:</p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Don't expect provably fair slots to be as fancy as modern video slots.
                            </div>
                        </div>
                        <p className="mt-10">Since these games are often exclusive to a single blockchain casino or Dapp, they tend to be very straightforward, with a <strong>rough design</strong> and <strong>minimal features</strong>.</p>
                        <p>Not all blockchain casinos offer provably fair slots that are powered by <a href="https://casinosblockchain.io/blockchain-casino-rng/" target="_blank" rel="noreferrer noopener">blockchain casino RNG</a>. We recommend the following websites (all of which are available to Canadian players!):</p>
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
                    <section id="bitcoin-video-slots">
                        <div className="h3">
                            Regular Bitcoin Video Slots
                        </div>
                        <img src={Trueflip3} alt="Trueflip3" />
                        <p className="mt-4">True Flip's Day & Night slot boasts a beautiful design (and you get free spins just for signing up)!</p>
                        <p>At their core, video slots at Bitcoin casinos and traditional casinos alike are quite straightforward games:</p>
                        <ul className="is-style-checked-list_sm"><li>You <strong>pay to spin a set of reels</strong> with rotating symbols</li><li>When the reels stop, you win if you find <strong>three or more consecutive symbols</strong> of the same type across a pre-determined line.</li></ul>
                        <p>However, across the years these games have become more and more complex, especially after moving online. </p>
                        <p>Today, there is a dizzying amount of slot variations:</p>
                        <ul className="is-style-checked-list_bubbles"><li>Multiple bet lines</li><li>No bet lines at all</li><li>Expanding sets of reels</li><li>Game-changing bonus features</li><li>Re-spins</li><li>Free spins</li></ul>
                        <p>The diversity is mind-boggling, and we haven't even touched on the <strong>enormous amount of themes available</strong>.</p>
                        <p>We don't want you to miss out on anything, and that's why we're recommending casinos with thousands of different Bitcoin slot machines.</p>
                        <p><strong><a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/" target="_blank" rel="noreferrer noopener">True Flip</a> tops our list thanks to their original True Lab games</strong>, developed for this Bitcoin casino by their dedicated game studio.</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                               [siteDatas[4], siteDatas[0], siteDatas[1], siteDatas[3]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="bitcoin-jackpot-slots">
                        <div className="h2">
                            Bitcoin Jackpot Slots
                        </div>
                        <img src={JackpotSlots} alt="JackpotSlots" />
                        <p className="mt-4">We love the exotic-themed Jungle Jackpot - find it at Stake casino.</p>
                        <p>Hitting a jackpot is one of the rarer - and, therefore, most memorable - memories one can get at a Bitcoin casino.</p>
                        <p>The popularity of jackpot slots, is, therefore, understandable. However, not all Bitcoin jackpot slots are the same. There are two main types:</p>
                        <ul className="is-style-checked-list_sm"><li><strong>Fixed jackpot slots</strong>: Slot machines with fixed jackpots often have one or more top prizes that can be won after collecting special symbols or finishing bonus rounds.</li><li><strong>Progressive jackpot slots</strong>: When playing at a progressive jackpot slot, part of your bet is added to a combined pool (often shared between multiple casinos). Hitting the jackpot will award the player with the full amount of said prize pool, which can be astronomical!</li></ul>
                        <p>You can find fixed and progressive jackpots at several blockchain casinos, including the brands you'll find below.</p>
                        <p>All three of our choices offer Ozwin Jackpot or other progressive games:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                               [siteDatas[1], siteDatas[3], siteDatas[2], siteDatas[4], siteDatas[5]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                    <section id="slot-machine-dapps">
                        <div className="h3">
                            Slot Machine Dapps
                        </div>
                        <p>Dapps work a bit differently than regular online casinos.</p>
                        <p>One particular reason might explain why there aren't as many slot machine Dapps as you might expect: dividends.</p>
                        <p>Dapps often <strong>distribute part of their profits to the players</strong>, which means the remaining budget makes it less viable to pay the expensive slot providers. </p>
                        <p>Somehow, however, several Dapps have managed to make it work:</p>
                        <img src={BetFury} alt="BetFury" />
                        <p className="mt-4">Besides table games and a live casino section, you'll be able to find a big range of slots at <a href="/go/betfury/" target="_blank" rel="noreferrer noopener">BetFury</a>. </p>
                        <p>This Dapp offers games by <a className="text-blue-700" href="https://casinosblockchain.io/endorphina-casinos/">Endorphina</a>, Playson, and many others. </p>
                        <p>That's not all though. All players who enjoy their games are entitled to cashbacks that can vary between 2% to 25%. You can withdraw these cashbacks twice a week.</p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={15}
                                siteIndex={15}
                                summaryData={siteDatas[15]}/>
                        </div>
                        <img src={FortunejackWide} alt="FortunejackWide" className="my-4" />
                        <p>It's not easy to find a Dapp with slot machines from market-leading providers, but at <a className="text-blue-800" href="https://888tron.com/" target="_blank" rel="noreferrer noopener">888 Tron</a> you can play games by <a className="text-blue-800" href="https://casinosblockchain.io/netent-bitcoin-casinos/">NetEnt</a>, <a className="text-blue-800" href="https://casinosblockchain.io/microgaming-bitcoin-casinos/">Microgaming</a>, and many more. </p>
                        <p>Just like at the majority of the Dapps, you'll be entitled to a part of the dividend, as long as you collect enough tokens. You do this by depositing and wagering real money.</p>
                    </section>
                    <section id="no-deposit-bonus">
                        <div className="h2">
                            Bitcoin Slots No Deposit Bonuses
                        </div>
                        <p>No deposit bonuses are a type of casino promotion that gives players a free bonus to use on casino slot games.</p>
                        <p>The bonus can be used on a wide range of casino slot games, and some casinos will offer specific bonuses for using the bonus on certain games.<br />For the most part, however, casinos use these promos to advertise specific slots. That's why you'll usually get free spins as a no deposit bonus, rather than token credits.</p>
                        <p>Free spins no deposit bonuses are very popular with casino players, as they give you the opportunity to try out a casino and its slot games without having to risk any of your own money.</p>
                        <p>So, which bonuses are worth your time? Check out these casinos first:</p>
                        <div className="h3">True Flip </div>
                        <img src={Trueflip3} alt="Trueflip3" />
                        <p className="mt-2">True Flip's Day & Night slot boasts a beautiful design (and you get free spins just for signing up)!</p>
                        <p><strong>True Flip is our favorite casino for a no deposit bonus. </strong>Just sign up and you get 30 free spins on the Day &amp; Night original slot.</p>
                        <p>There is <strong>no deposit required</strong> and the <strong>wagering requirements are just x1</strong>! You can simply sign up and start playing.</p>
                        <p>Is there a catch? Yup, and it's the KYC.</p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                                To get this bonus, you have to verify your identity.
                            </div>
                        </div>
                        <p className="mt-4">Once you do that, the 30 free spins are yours.</p>
                        <p>The good news is that you can withdraw your winnings without any problems. So, if you hit a big win, you can simply cash out and enjoy your earnings. </p>
                        <p>The bad news? True Flip caps your earnings at 100 EUR (or their crypto equivalent).</p>
                        <p>Still, a pretty good offer, right? Get it here: </p>
                         <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={4}
                                siteIndex={4}
                                summaryData={siteDatas[4]}/>
                        </div>
                        <div className="h3">BitStarz</div>
                        <img src={BitstarzWide} alt="BitstarzWide" />
                        <p className="mt-4">When you sign up at <a className="text-blue-700" href="https://casinosblockchain.io/bitstarz-review/" target="_blank" rel="noreferrer noopener">BitStarz</a>, you are entitled to <a className="text-blue-700" href="/go/bitstarz/" target="_blank" rel="noreferrer noopener">20 free spins</a> right away. </p>
                        <p>This no deposit bonus lets you try out the casino on the house, but it's limited to a small number of slot machines, depending on your location.</p>
                        <p>After taking advantage of your no deposit bonus, you're still entitled to a welcome package of up to 5 BTC and 180 free spins.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={6}
                                siteIndex={6}
                                summaryData={siteDatas[6]}/>
                        </div>
                        <div className="h3">FortuneJack</div>
                        <img src={FortunejackWide} alt="FortunejackWide" />
                        <p className="mt-4"><a className="text-blue-700" href="https://casinosblockchain.io/fortunejack-bitcoin-casino-review/">FortuneJack's</a> no deposit bonus is slightly better than BitStarz's, offering a total of <a href="/go/fortunejack/" data-type="URL" data-id="/go/fortunejack/" target="_blank" rel="noreferrer noopener">25 free spins</a>.</p>
                        <p>After your first deposit, you can also redeem a welcome package of up to 6 BTC and additional 250 free spins.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={13}
                                siteIndex={13}
                                summaryData={siteDatas[13]}/>
                        </div>
                        <div className="h3">Best Bitcoin Slots Bonuses For Canadians</div>
                        <p><strong>Canadian slot aficionados rejoice!</strong> There are plenty of BTC-friendly providers that operate in Canada (psst, rumour has it that Stake will get an Ontario license soon, too).</p>
                        <p>The offers listed above are open to players from Canada, which get the same deal when it comes to the amount of free spins on offer.</p>
                        <p><strong>But are there any deposit bonuses? Yes, there are.</strong> </p>
                        <p>And the amount you get will depend on the casino you choose. BitStarz even offers the welcome bonus in CAD, which is great if you're looking for a fiat alternative. Still, keep this in mind: </p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                                BTC bonuses are almost always better value.
                            </div>
                        </div>
                        <p className="mt-4">Think about it, Bitcoin is a much more "expensive" coin. So, naturally, a 1 BTC bonus would be much better than 5,000 CAD. </p>
                        <p>Our favorite, Canada-friendly slots casinos include: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                               [siteDatas[0], siteDatas[3], siteDatas[2]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <p className="mt-4">You might be wondering why Stake isn't there. </p>
                        <p>Well, while the casino is available in Canada, we actually noticed many of their slots are blocked for Canadians. This is especially true for jackpot slots - and, we might be biased here, but they're one of our favorites.</p>
                        <p>We are keeping a close eye on Stake to see where they go. But, so far, they're not a part of our Canada top-three.</p>
                        <div className="h3">Are Bitcoin Slots Legal In Canada?</div>
                        <p>Just like with any other Bitcoin casino games, Bitcoin slots aren't exactly legal in Canada, but it's also not illegal to play them at casinos registered overseas.</p>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/are-crypto-casinos-legal/#canada">As the law stands</a> in April 2021, online gambling operators must hold a Canadian license in order to operate. This means that only state-sponsored monopolies are strictly legal, which, for the most part, do not accept Bitcoin as a valid payment method.</p>
                        <p>However, Canadians can still play at these casinos legitimately, without fear of being prosecuted by the government. Only the casino operators may be liable.</p>
                    </section>
                    <section id="cryptocurrencies">
                        <div className="h2">
                            Playing Slot Machines With Cryptocurrencies
                        </div>
                        <p>Slot machines are so ubiquitous, that you really won't struggle to find casinos where you can play slot machines with your favorite cryptos.</p>
                        <p>The most common currencies are readily available, such as:</p>
                        <ul className="is-style-checked-list_bubbles"><li>Bitcoin</li><li>Bitcoin Cash</li><li>Dogecoin</li><li><a className="text-blue-700" href="https://casinosblockchain.io/ethereum-slots/">Ethereum</a></li><li><a className="text-blue-700" href="https://casinosblockchain.io/litecoin-slots-guide/">Litecoin</a></li><li>Tether</li></ul>
                        <p>This list is not exhaustive as casinos are constantly changing and adding <a className="text-blue-700" href="https://casinosblockchain.io/cryptocurrencies/">more payment options</a>.</p>
                        <p>Slot machines are not as widespread in the Dapp world, so you might struggle to find a Dapp using your favorite currency. Most Dapps that offer slots use <a className="text-blue-700" href="https://casinosblockchain.io/tron-casinos/">Tron</a> as a payment method.</p>
                        <div className="h3">Are Crypto Slot Machines Safe?</div>
                        <p>Yes! Playing slot machines with cryptocurrencies can be safe (if not safer) than playing with fiat money.</p>
                        <p>While provably fair games can offer you an extra layer of safety and trust, we always recommend that you play at a licensed casino with a pristine reputation.</p>
                        <ul className="is-style-checked-list_sm"><li>Always keep this in mind: <strong>gambling is as safe as the casino where you chose to play</strong>.</li></ul>
                        <p>As for the legality of crypto casinos where you can play Bitcoin slots, that's an entirely different issue. In some territories where gambling is restricted, you may struggle to find legal and licensed Bitcoin casinos that accept your registration.</p>
                    </section>
                    <section id="game-rules">
                        <div className="h2">
                            How to Play Bitcoin Slots
                        </div>
                        <p>Playing on slot machines is, in theory, pretty easy: you just hit the 'Spin' button and the game does everything for you.</p>
                        <ul className="is-style-checked-list_sm"><li>However, <strong>game rules can vary from one slot to the next</strong>, and so can the gameplay itself. It's important you're aware of these differences before you start playing.</li></ul>
                        <p className="mt-4">We're not going to go over every single slot machine rule. Instead, we're going to explain some of the most common, so you're not caught off-guard:</p>
                        <p><strong>Adjusting Bets</strong><br />Slot machines often let you select how much you can bet per round, within certain pre-defined amounts. </p>
                        <p>On some slots, you might be able to decide on how many lines you want to play, or on the value of every winning coin. These decisions will impact the cost of every spin.</p>
                        <img src={SweetBonanzaBet} alt="SweetBonanzaBet" />
                        <p className="mt-2">sweet bonanza slot machine intro screen Intro screen for Sweet Bonanza, where you can see the bet selection menu.</p>
                        <p><strong>Game Symbols</strong><br />When playing a slot machine, you may notice special symbols on your reels, which change the basic rules of the game. For instance:</p>
                        <ul className="is-style-checked-list_sm"><li>Wilds act as a joker and can combine with most other symbols to form a winning combination. </li><li>Scatter symbols don't need to be adjacent to equal symbols to win and often trigger bonus rounds.</li></ul>
                        <img src={BookOfDead} alt="BookOfDead" />
                        <p className="mt-2">On Book of Dead, the scatter and the wild symbol are the same.</p>
                        <p className="mt-4"><strong>Bet Lines</strong><br />To win on a slot machine, you need to collect symbols of the same type on a single bet line (or pay line)... except when you don't.</p>
                        <p>Several modern slot machines reward you for finding clusters of symbols spread out across the game grid (sort of like Candy Crush), for instance, which may be replaced for new symbols without starting a new round.</p>
                        <img src={NetEntAloha} alt="NetEntAloha" />
                        <p className="mt-2">A winning round on Aloha! Cluster Pays, a popular NetEnt slot with no bet lines.</p>
                        <p>Apart from these differences in game mechanics, slot machines might also differ on core rules and visual aspects. Here are a few more differences:</p>
                        <ul className="is-style-checked-list_sm"><li>Newer slot machines tend to have more special effects and sharper graphics, although there are plenty of recent games with an old-fashioned look (especially games with a classic 3-reel grid).</li><li>Slot machines might have higher or lower RTP (Return to Player) percentages. Slots with higher RTP have better odds of winning but often pay out less. </li><li>There are also high volatility slots and low volatility slots. Slots with high volatility pay out larger amounts but not as often, while the opposite is true for slots with low volatility.</li></ul>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-sm  text-white opacity-50">TOP TIP - STAY INFORMED</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Rules and game mechanics vary - read them before you start playing!
                            </div>
                        </div>
                    </section>
                    <section id="choose-good-casino">
                        <div className="h2">
                            How To Choose A Casino To Play Bitcoin Slots
                        </div>
                        <p>The sheer amount of slot games offered at most Bitcoin casinos has one big drawback: choosing the right games can be tricky.</p>
                        <p>Finding a casino that suits your gameplay can be equally tricky. </p>
                        <p>We've already given you some good tips about our top casinos. However, we can't choose for you. We're missing a few important details. We don't know:</p>
                        <ul className="is-style-dotted-list"><li>The size of your wallet</li><li>Your favorite type of games</li><li>Your level of knowledge</li><li>How comfortable you are with Bitcoin and other cryptos</li><li>Where do you live</li></ul>
                        <p>Don't worry: we're not going to stalk you. Instead, we're going to leave you a few tips that will help you find the right games (and the right casinos).</p>
                        <ul className="is-style-dotted-list"><li><strong>Play For Fun At First</strong>.<br />Practically every casino lets you try out its games for free, often even before creating an account. <br />We suggest you always do that, even if someone else (including us) highly recommended the casino. Fun play gives you an idea of the general game feel, casino atmosphere, and slot specifics like loading times. </li><li><strong>Use Your No Deposit Bonus.</strong><br />If the casino offers free spins, use them first. Once again, that's an opportunity to try the game before spending your hard-earned BTC.</li><li><strong>Decide Which Slots You Like Best.</strong><br />There are so many types of slots, you probably won't like most of them. Know your type before you commit.<br />Then, you check if the casino offers most (or at least some) of your favorite slots. You can always discover fun new games, and we don't discourage trying out new arenas, but we also don't want to go through the hassle of creating an account only to discover the casino doesn't have any of your games.</li><li><strong>Research the Web.</strong><br />When a casino has been around for a while, it's likely there's much written about it on the internet. You will find useful information on user review sites, forum threads, social networks, and more.<br />As long as the general opinion is positive, you can assume it's safe to play there.</li></ul>
                        <p>But, the last step is the most important: </p>
                        <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Try out the casino for yourself - but, do it the smart way!
                            </div>
                        </div>
                        <p className="mt-4">Gamble responsibly, especially when you're first starting out. Keep these tips in mind:</p>
                        <ul className="is-style-checked-list_sm"><li><span ><strong>Don't see slots as income</strong>, but as a fun game.</span></li><li><strong>Decide on a budget</strong> beforehand and stick to it. Choose the stake and the number of lines that suit your bankroll. Go for a slot with the volatility that you like the most (and know what it is).</li><li><strong>Stop while you're ahead</strong>, and don't chase losses. You can also use slots to meet wagering requirements for your bonus.</li><li><span ><strong>Don't believe in all slot machine myths</strong>: online slots at reputable casinos don't stop paying out after a big win, nor it has been proven that you have higher chances of winning with higher stakes.</span></li></ul>
                        <p>And, one somewhat controversial tip: </p>
                        <p><strong>Try to avoid progressive jackpots in the beginning</strong>, as their odds of winning are low.</p>
                        <h2>Final Thoughts</h2>
                        <p>Bitcoin slots are a fun way to gamble with BTC. They're also a true casino staple, coming in different varieties and can be found at many online casinos (even <a className="text-blue-700" href="https://casinosblockchain.io/metaverse-gambling/" target="_blank" rel="noreferrer noopener">Metaverse casinos</a>). However, there are a few things to keep in mind when choosing a BTC slots casino.</p>
                        <p>First and foremost, <strong>choose reputable gambling sites</strong> that have been around for a while. These casinos will protect your information and won't cheat you out of your wins.</p>
                        <p>Secondly, try to <strong>choose provably fair games</strong> if you can. Provable fairness means that it's impossible for the casino to rig the results. This is a great way to ensure that you're getting a fair game.</p>
                        <p>Finally, <strong>remember to have fun!</strong> Gambling should be entertaining and not a way to make money. If you're not having fun, then you're doing it wrong.</p>
                        <p>Try these Bitcoin slot sites to start out: </p>
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
                        <div className="mt-32 h3">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">If I'm playing slots at a crypto casino, do I have to pay taxes for my winnings?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                   That depends on the country that you live in. Canadian players, for instance, don't have to pay taxes on any gambling winnings, crypto or not. As for players from other countries, the crypto casino won't withhold any taxes for you, but you might have to pay some additional income tax for the year when you make a huge profit.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Which slots are best to start with at a crypto casino?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    If you don't have much experience with casinos in general, it might be good to start playing slots by a big provider like NetEnt. These are easy to use and have generous RTP percentages. If you already have a couple of favorite games, then look for a blockchain casino which offers them.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are Bitcoin slots safe?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, Bitcoin slots are safe, as long as you play them at a reputable casino, preferably with a valid gambling license.
                                    Provably fair slot games are especially safe, considering that you can verify the result of every single spin yourself.
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
                        <a href="#In-a-Nutshell" className="In-a-Nutshell hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                In a Nutshell
                            </li>
                        </a>
                        <a href="#Our-Process" className="Our-Process hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Our Process
                            </li>
                        </a>
                        <a href="#play-slots-online" className="play-slots-online hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#provably-fair-slots" className="provably-fair-slots hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Provably Fair Slots
                            </li>
                        </a>
                        <a href="#bitcoin-video-slots" className="bitcoin-video-slots hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Video Slots
                            </li>
                        </a>
                        <a href="#bitcoin-jackpot-slots" className="bitcoin-jackpot-slots hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Jackpot Slots
                            </li>
                        </a>
                        <a href="#slot-machine-dapps" className="slot-machine-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Dapps
                            </li>
                        </a>
                        <a href="#no-deposit-bonus" className="no-deposit-bonus hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                No Deposit Bonuses
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Playing With Cryptocurrencies
                            </li>
                        </a>
                        <a href="#game-rules" className="game-rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Game Rules
                            </li>
                        </a>
                        <a href="#choose-good-casino" className="choose-good-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Choosing A Casino
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