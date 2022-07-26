import { useEffect, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from "@mui/icons-material";

import Cloudbet4 from "../../../Assets/images/Content/cloudbet4.png"


import backgroundImg from "../../../Assets/images/Header.svg"

import { ISiteRankBlogCardObj } from "../../../Interfaces";

import { siteDatas } from "../../../Interfaces/SiteDatas";
import SiteRankBlogTable from "../../Card/SiteRankBlogTable";

const dummyInfos: Array<ISiteRankBlogCardObj> = [siteDatas[15], siteDatas[16]];

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
                    <p>Since its inception in 2014,&nbsp;<a className="text-blue-700" href="https://tether.to/" target="_blank" rel="noreferrer noopener">Tether</a>&nbsp;has become one of the&nbsp;<a className="text-blue-700" href="https://coinmarketcap.com/" target="_blank" rel="noopener">biggest cryptocurrencies</a>&nbsp;in the world. And, it also grew into one of the most popular coins at online casinos. Tether casinos are on the rise – and for a good reason. </p>
                    <p>When it comes to betting, USDT is arguably the best alternative for Bitcoin if you’re looking for a <a className="text-blue-700" href="https://casinosblockchain.io/stablecoin-casinos/" target="_blank" rel="noreferrer noopener">stablecoin casino</a>: that is, a cryptocurrency that doesn’t have constant price fluctuations. </p>
                    <p>Why? Because its value is, theoretically, pegged to the US dollar. That makes Tether an ideal coin for gambling, especially if you plan on exchanging your crypto winnings for fiat money. USDT protects you from losing money to market price swings – which have been getting more and more frequent in the past few months. </p>
                    <p>Nowadays, there are dozens of USDT gambling sites offering Tether casino games and even sports bets!</p>
                    <p>However, finding the right Tether casino is no easy task: the offering has only grown more extensive, and discovering the best casino between several options can be a bit overwhelming.</p>
                    <p>Luckily, this Tether gambling guide is here to help you:</p>
                    <ol className="is-style-dotted-list">
                        <li>Find the best USDT casinos and Dapps with all the best bonuses.</li>
                        <li>Discover what games you can play with Tether.</li>
                        <li>Play safely at Tether casinos.</li>
                    </ol>
                    <section id="selection-process">
                        <div className="h2">
                            How We Choose the Best Tether Casinos
                        </div>
                        <p>At Casinos Blockchain <strong>we don’t just list online casinos</strong>. Before recommending any provider, we make sure they’re a high-quality, trustworthy – and yes, fun, casino.</p>
                        <p>Here is how we made our top picks for the best Tether casinos of 2022:</p>
                        <ul className="is-style-dotted-list">
                            <li><strong>We create real (anonymous!) accounts.</strong><br />We never get paid to review casinos. However, we get a small commission, whenever a new user signs up to a site we recommended (at no cost to you.)<br />To keep our reviews objective, we never tell casinos we’ll test them out. This is to make sure we’re getting a real-user experience, not a casino-approved demo.<br />Plus, our entire team joins in to test the Tether casinos. This way, we get to see different aspects of the experience – and pinpoint potential perks and problem areas.</li>
                            <li><strong>We play with real money.</strong><br />Faucets and free bonuses are all good, but we never limit ourselves to free cash. We play with our own money, to get a real sense of how the games work, how the bonuses are structured, and how easy it is to make a withdrawal.</li>
                            <li><strong>We look for variety and quality.</strong><br />We’re not just looking for games that offer good payouts. We want interesting themes, creative graphics, and smooth gameplay. And of course, we want all the classics: blackjack, roulette, baccarat, etc.</li>
                            <li><strong>We make sure the bonuses are good.</strong><br />We’re not just looking for big bonuses. We want bonuses that are actually worth our time. That means bonuses with low wagering requirements, that don’t expire after a few days, and that offer decent payouts.</li>
                            <li><strong>We look at security and transparency.</strong><br />We’re not just interested in whether a casino is licensed and regulated. We want to know that they take data security seriously and that they’re transparent about their games and payouts.<br />We give extra points for provably fair games, which let players check that the results of each game are fair and unbiased.</li>
                            <li><strong>We test for local compatibility.</strong><br />Since casinos have geographical restrictions, we make sure to test out each site on a range of devices and browsers. That way, we know who the Tether casino works for – what works for Canadians might not be an option in the Netherlands, etc.</li>
                            <li><strong>We check out customer service.</strong><br />We’ve all had bad experiences with customer service. From rude support staff to casinos that take forever to process a withdrawal, it’s not a fun experience.<br />We make sure that our top Tether casinos have responsive customer service – and that they actually solve our problems, not just pass us off to another department.</li>
                        </ul>
                        <p>There you have it – our comprehensive casino testing schedule. It’s here because we want to find the perfect Tether casino for you. And what did we come up with?<br />Quick answer:</p>
                    </section>
                    <section id="best-casinos">
                        <div className="h2">
                            What Is The Best Tether Casino?
                        </div>
                        <p>We’ve tested some of the most popular casinos accepting Tether and selected three brands as our top picks. These Tether casinos are <strong>reputable and fun</strong> – we love playing at them and know that you’ll love it too:</p>
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
                        <div className="h3">BC.Game Casino, True Flip or Cloudbet: Which Is Better for USDT Gambling?</div>
                        <p>Our top-three picks – <a className="text-blue-700" href="https://casinosblockchain.io/bc-game-review/" target="_blank" rel="noreferrer noopener">BC.Game</a>, <a className="text-blue-700" href="https://casinosblockchain.io/trueflip-casino-review/">TrueFlip</a> and <a className="text-blue-700" href="https://casinosblockchain.io/cloudbet-bitcoin-casino-review/" target="_blank" rel="noreferrer noopener">Cloudbet </a>– are all reputable casinos with thousands of games and enticing USDT bonuses. </p>
                        <p>In our opinion, <strong>BC.Game is the best choice</strong> for USDT gambling since it offers <strong>enticing bonuses and a VIP program</strong> and has a large variety of games (some of which are provably fair). </p>
                        <p>But the two other brands are not the wrong choice either! For instance, True Flip has cashback (BC.Game doesn’t offer that) and is home to a set of original games tailor-made for cryptocurrency players. On the other hand, Cloudbet boasts a welcome bonus, along with a stellar sports betting product.  </p>
                        <p>In the end, it’s all a matter of personal preference. </p>
                        <p>While we can’t decide for you, we can help you make an informed choice. For that, let’s have a look at all three Tether betting sites side by side:</p>
                        <figure className="wp-block-table is-style-stripes">
                            <table className="has-fixed-layout">
                                <thead>
                                    <tr>
                                        <th><a className="text-blue-700" href="https://casinosblockchain.io/go/bc-game/" target="_blank" rel="noreferrer noopener">BC.Game</a></th>
                                        <th><a className="text-blue-700" href="https://casinosblockchain.io/go/true-flip/" target="_blank" rel="noreferrer noopener">True Flip</a></th>
                                        <th><a className="text-blue-700" href="https://casinosblockchain.io/go/cloudbet/" target="_blank" rel="noreferrer noopener">Cloudbet</a></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Up to 1 BTC on the daily wheel spin</td>
                                        <td>10% Cashback</td>
                                        <td>Up to 5 BTC (USDT equivalent)</td>
                                    </tr>
                                    <tr>
                                        <td>4,000+ games</td>
                                        <td>1,600+ games</td>
                                        <td>1,200+ games</td>
                                    </tr>
                                    <tr>
                                        <td>Provably fair games</td>
                                        <td>Provably fair games</td>
                                        <td>No provably fair games</td>
                                    </tr>
                                    <tr>
                                        <td>No fiat</td>
                                        <td>Fiat accepted</td>
                                        <td>Fiat accepted</td>
                                    </tr>
                                    <tr>
                                        <td>KYC not required</td>
                                        <td>KYC required</td>
                                        <td>KYC required</td>
                                    </tr>
                                    <tr>
                                        <td>Original games</td>
                                        <td>Original games</td>
                                        <td>Original games</td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </section>
                    <section id="bonuses">
                        <div className="h3">
                            Tether Bonuses
                        </div>
                        <p>Just like with any other cryptocurrencies, you can take advantage of Tether bonuses at most Tether casinos.&nbsp;</p>
                        <p>Since Tether is a stablecoin pegged on the U.S. Dollar, you can usually get the&nbsp;<strong>same value for money as people playing with USD</strong>.</p>
                        <p>In our opinion, this is both an advantage and a disadvantage of betting with Tether: yes, your bonuses won’t suddenly devalue because of currency fluctuations. But, still, they also won’t increase in value.</p>
                        <p>Additionally, some casinos are more generous with their Bitcoin bonuses than promotions for players using altcoins like Tether. This has been changing and we’re happy to say all of our top three Tether casinos offer equal value USDT bonuses.</p>
                        <div className="h3">Tether Betting Sites with the Best Bonuses</div>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[0], siteDatas[3], siteDatas[8]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <div className="h2">
                            Casino Games You Can Play With Tether
                        </div>
                        <p>Nowadays, more and more casinos choose to accept only cryptocurrencies as payment methods. Consequently, more&nbsp;<a className="text-blue-700" rel="noreferrer noopener" target="_blank" href="/">blockchain casinos</a>&nbsp;accept Tether, with an ever-growing portfolio of diverse casino games from USDT poker to USDT baccarat and provably fair slots.</p>
                        <p>Furthermore, since large casinos (such as&nbsp;<a rel="noreferrer noopener" target="_blank" href="/bitstarz-review/">BitStarz</a>&nbsp;and&nbsp;Cloudbet) accept the currency, virtually all casino games are available for Tether players.</p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>Tether Slots</strong>: Nearly all providers and&nbsp;slot machines&nbsp;are available at Tether casinos. You’ll be able to find games such as&nbsp;<em>Mega Moolah</em>&nbsp;from&nbsp;Microgaming, but&nbsp;NetEnt’s progressive jackpots are harder to find.</li>
                            <li><strong>Tether Poker</strong>: You can practice your skills at video&nbsp;poker games&nbsp;at most USDT casinos. However, finding a USDT poker client where you can play against real players might be harder.</li>
                            <li><strong>Tether Blackjack</strong>: Because of blackjack’s popularity, you can often find a separate section of&nbsp;blackjack games&nbsp;at Tether casinos. Live dealer and video blackjack games are equally available.</li>
                            <li><strong>Tether Roulette</strong>: Just like blackjack,&nbsp;roulette&nbsp;often gets its own category in a USDT casino. Similarly, you should be able to play roulette versus a live dealer at a&nbsp;Tether live casino, as well as hone your skills in video roulette games.</li>
                        </ul>
                        <div className="h3">Provably Fair USDT Games</div>
                        <p><a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">Provably fair</a> games are one of the best features that crypto gambling site offer. They ensure that <strong>gamblers can trust the site</strong> the game outcomes.<br />Some of the provably fair Tether games you can play include plinko, mines, and keno.</p>
                        <p>You can find <strong>provably fair gambling</strong> at:</p>
                        <ul className="is-style-checked-list_sm">
                            <li><strong>BC.Game</strong>, which has 20+ internally developped games with built-in provable fairness.</li>
                            <li><strong>Cloudbet</strong>, where the section boasts a fun, arcade-inspired design and a range of games.</li>
                            <li><strong>BitStarz</strong>, which offers 60+ provably fair games from provider BGaming.</li>
                        </ul>
                    </section>
                    <section id="sports-betting">
                        <div className="h2">
                            Sports Betting With Tether
                        </div>
                        <img className="w-full h-auto" src={Cloudbet4} alt="cloudbet-4" />
                        <p className="mt-2">
                            Cloudbet’s Sports Betting Section features 30+ sports, including eSports and virtual sports.
                        </p>
                        <p>Sports enthusiast? There are multiple Tether casinos that allow you to place bets on sporting events:</p>
                        <p><strong>Cloudbet Casino</strong></p>
                        <p>Cloudbet Casino is our top pick for USDT sports betting.</p>
                        <p>It offers a wide range of betting markets on sports such as football, basketball, and tennis. There is also a collections of eSports markets, including CS:GO, LoL, and Dota 2.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={3}
                                siteIndex={3}
                                summaryData={siteDatas[3]}
                            />
                        </div>
                        <p className="mt-4"><strong>Rocketpot.io</strong></p>
                        <p>You can also use Tether to place bets on sports and entertainment at Rocketpot casinos.</p>
                        <p>Rocketpot’s Tether sports betting site features both in-play and pre-match odds on a range of sporting events, including football, basketball, cricket, and horse racing, plus eSports.</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={2}
                                siteIndex={2}
                                summaryData={siteDatas[2]}
                            />
                        </div>
                        <p className="mt-4"><strong>Thunderpick </strong></p>
                        <p>As a leading sports and eSports betting site, <a className="text-blue-700" href="https://casinosblockchain.io/thunderpick-review/" target="_blank" rel="noreferrer noopener">Thunderpick </a>is an easy favorite when it comes to Tether sports betting. While the bonus isn’t as generous, we love this gambling site’s commitment to their sportsbook. As an eSports bookie especially, Thunderpick simply has no rival. </p>
                        <p>Check out their USDT sportsbook here: </p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            <SiteRankBlogTable
                                key={10}
                                siteIndex={10}
                                summaryData={siteDatas[10]}
                            />
                        </div>

                    </section>
                    <section id="pros-cons">
                        <div className="h2">
                            Pros and Cons of Tether Betting
                        </div>
                        <p>With Tether casinos growing in popularity, let’s break it down:</p>
                        <p><strong>Why gamble with USDT? What are the specific perks and downsides?</strong></p>
                        <p>The <strong>main advantages</strong> of Tether casinos include:</p>
                        <p>✔️ <strong>Minimal volatility</strong>: Tether’s stablecoin USDT is pegged to the US dollar, so its value remains stable relative to most other cryptocurrencies. This makes it a more reliable option for gambling, as fluctuations in price can cause losses when betting with other coins.</p>
                        <p>✔️ <strong>Wide range of games</strong>: crypto casinos offer a wide range of games, from classic casino favourites to modern blockchain games. USDT gambling allows you to enjoy the variety without the added volatility risk</p>
                        <p>✔️ <strong>Safe transactions</strong>: blockchain casinos use cryptography to protect player data, making them one of the more secure ways to gamble online.</p>
                        <p>✔️ <strong>Payment anonymity</strong>: blockchain casinos allow players to gamble anonymously, protecting their identity and financial information. Some providers require a KYC check before withdrawal, though, so keep this in mind (and avoid these providers) if complete anonymity is a priority for you.</p>
                        <p>✔️ <strong>Fast and cheap transactions</strong>: blockchain transactions are typically speedier and cost less than those made through traditional online casinos.</p>
                        <div className="w-full h-[240px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className="text-xs  md:text-base text-white opacity-50 uppercase">About Tether</p>
                            <div className="h2 text-white text-lg md:text-2xl">
                                Tether protects you from volatility AND gives you the perks of gambling with crypto – fast processing and low transaction fees.
                            </div>
                        </div>
                        <p className="mt-4">But, Tether casinos are not without <strong>downsides</strong>:</p>
                        <p>❌ <strong>Limited choice</strong>: at the time of writing, Tether casinos are not as prevalent as those that accept other cryptocurrencies (like Bitcoin). This could change in the future, but for now, you may have to do a bit more digging to find a good option.</p>
                        <p>❌ <strong>Lack of trust</strong>: Tether has been embroiled in a major controversy before, with some accusing the company of not having the USD reserves to back up all of the USDT in circulation. While Tether still remains one fo the most trusted stablecoins, it’s certainly something to bear in mind when considering using Tether for gambling.</p>
                        <p>❌ <strong>Centralized control</strong>: Tether is a centralized company, meaning it controls the distribution of USDT. This could be a problem if Tether were to go bankrupt or experience another major issue. It’s also an issue if decentralization is important to you -many people see it as a key component of crypto-anarchy.</p>
                        <p>All in all, there are still <strong>more perks to Tether gambling</strong> than there are downsides. So, if you’re looking to play at a crypto casino without risking the crypto volatility. Just make sure you keep track of your Tether balance and use it responsibly.</p>
                    </section>
                    <section id="deposit-withdrawal">
                        <div className="h3">Deposits And Withdrawals</div>
                        <p>Besides the nearly-instant processing times, Tether offers another benefit when it comes to its payments at online casinos: flexible deposits and withdrawals:</p>
                        <ul className="is-style-checked-list_sm">
                            <li>Minimum <strong>deposits </strong>can be as low as <strong>1 USDT</strong> (for example, at True Flip)</li>
                            <li>Minimum <strong>withdrawals </strong>start at only <strong>0.001 USDT</strong>.</li>
                        </ul>
                        <p>Even better, some Tether casinos don’t have minimum amounts at all. </p>
                        <p>BC.Game, for example, lets you <strong>deposit as little USDT </strong>as you want. However, there is a processing fee associated with the transaction – usually, around 4-5USDT. So, while you can deposit one Tether at a time, the cost is simply not worth it. </p>
                        <p>Unfortunately, while they don’t have a limit on deposits, BC.Game only lets you <strong>withdraw 104 USDT at a time </strong>(100 USDT after fees.)</p>
                        <p>True Flip, on the other hand has a <strong>25 USDT</strong> <strong>withdrawal minimum. </strong>This applies to both deposits and withdrawals. The food news? Neither carries a fee! </p>
                    </section>
                    <section id="legal-aspects1">
                        <div className="h2">
                            Safety At Tether Casinos
                        </div>
                        <p>In general, <strong>stablecoins are safer for gambling</strong> than traditional cryptocurrencies.</p>
                        <p>This is because they’re are pegged to a stable asset, such as the US dollar, which makes them less susceptible to price fluctuations. This means that users can be more certain about the value of their stablecoins when gambling, which reduces the risk of losing them.</p>
                        <p>However, the <strong>recent controversy with Tether got many thinking about whether USDT is the best choice</strong>. It turned out there are&nbsp;<a className="text-blue-700" href="https://www.exodus.io/blog/is-usdt-safe/" target="_blank" rel="noreferrer noopener">no guarantees that Tethers can be redeemed</a>&nbsp;for dollars. </p>
                        <p>But, even though the controversy affected USDT’s reputation, it’s still one of the most stable cryptos in existence. If your’e apprehensive about the coin’s reputation, you can try a stable alternative like <a className="text-blue-700" href="https://casinosblockchain.io/pax-gold-casinos/" target="_blank" rel="noreferrer noopener">PAX Gold</a>. </p>
                    </section>
                    <section id="legal-aspects2">
                        <div className="h3">
                            Are Tether Casinos Legit?
                        </div>
                        <p>Okay so, <strong>USDT is a safe and stable coin </strong>to gamble with. But what about Tether casinos themselves? </p>
                        <p>Okay so, <strong>USDT is a safe and stable coin </strong>to gamble with. But what about Tether casinos themselves? </p>
                        <p>If you want to make sure you’re playing at a legit Tether casino, make sure it&nbsp;<strong>holds a valid gambling license</strong>. </p>
                        <div className="w-full h-[140px] p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                            <p className=" md:text-sm text-white opacity-50">Playing at unlicensed casinos is always a risk, no matter what currency you use.</p>
                        </div>
                        <p className="mt-10">We also strongly suggest you play at cryptocurrency casinos that accept Tether payments directly from your e-wallet and&nbsp;<strong>not hold your funds</strong>. </p>
                        <p><strong><a className="text-blue-700" href="https://casinosblockchain.io/provably-fair-gambling/" target="_blank" rel="noreferrer noopener">Provably fair</a> USDT casinos</strong> are also more trustworthy since your gameplay will be fully verifiable. Players can check the fairness of games by examining the provably fair code or the random number generator (RNG) that is used to produce results. The ensures the game can’t be rigged in the house’s favor.</p>
                        <p>Finally, it is a good idea to play at a&nbsp;<a className="text-blue-700" href="https://casinosblockchain.io/languages/" target="_blank" rel="noreferrer noopener">casino available in your language</a>. This way, if you have an issue with the casino or the games, you can easily communicate with customer service</p>
                        <div className="h2">Final Thoughts</div>
                        <p>So, what’s the verdict? Are Tether casinos worth it?</p>
                        <p>In our opinion, <strong>gambling with a stablecoin like USDT is a great way to reduce volatility</strong>, while enjoying the perks of crypto casinos.</p>
                        <p>However, we recommend always doing your own research before depositing any funds into a new casino. Make sure to read reviews and compare bonus structures to find the best deal for you. </p>
                        <p><strong>Our top pick is definitely BC.Game, which offers a generous bonus scheme and a wide selection of games.</strong> But, since they don’t have a traditional welcome bonus, it’s important to compare the other perks they offer before signing up. If you prefer a deposit gift, our number 2, True Flip might be a better choice for you.</p>
                        <p>Either way, make sure you always gamble responsibly and never risk more than you can afford to lose.</p>

                    </section>

                    <section id="FAQ">
                        <div className="h2">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Where can I play casino games with Tether?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>There are several online casinos where you can play with and win Tether! <a className="text-blue-700" href="https://casinosblockchain.io/go/bc-game/">BC.Game casino</a> is our number one choice.  You can find a comprehensive list of Tether casinos <a href="https://casinosblockchain.io/tether-casinos/">here</a>.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is gambling with Tether legal?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    It depends whether or not gambling is legal in your country or state. If gambling with Tether is allowed in your country or state, and if you are doing it at a licensed USDT casino, you're safe.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I start playing at Tether casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>1 - Find an <a className="text-blue-700" href="https://casinosblockchain.io/tether-casinos/">online casino or Dapp</a> that accepts Tether as a payment method.<br />
                                        2 - Register an account and choose Tether as your currency.<br />
                                        3 - Go to the "Deposit" area and make a payment.<br />
                                        4 - Accept the transaction from your Tether wallet, following the instructions on the website.</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Is Tether betting legit?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Yes, betting with Tether is safe, as long as you do so at a licensed, trustworthy online casino site. You should also keep in mind that gambling with USDT (or any other currency, really) is completely chance-based, which means you should only gamble what you can afford. Our advice? Play for fun, not for profit.
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
                        <a href="#selection-process" className="selection-process hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Selection Process
                            </li>
                        </a>
                        <a href="#best-casinos" className="best-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Best Tether Casinos
                            </li>
                        </a>
                        <a href="#bonuses" className="bonuses hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Tether Bonuses
                            </li>
                        </a>
                        <a href="#casino-games" className="casino-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casino Games
                            </li>
                        </a>
                        <a href="#sports-betting" className="sports-betting hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Sports Betting With Tether
                            </li>
                        </a>
                        <a href="#pros-cons" className="pros-cons hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Pros & Cons
                            </li>
                        </a>
                        <a href="#deposit-withdrawal" className="deposit-withdrawal hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Deposits And Withdrawals
                            </li>
                        </a>
                        <a href="#legal-aspects1" className="legal-aspects1 hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Safety At Tether Casinos
                            </li>
                        </a>
                        <a href="#legal-aspects2" className="legal-aspects2 hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Are Tether Casinos Legit?
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