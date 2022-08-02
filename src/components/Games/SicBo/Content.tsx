import WinkDappLogo from "../../../Assets/images/Content/wink-dapp-logo.png"
import EvolutionGamingSicBo from "../../../Assets/images/Content/SicBo/Evolution-Gaming-Sic-Bo.jpg"

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
                <p>
  Finding a Bitcoin Sic Bo casino might seem like a difficult task. After all,
  the game itself is a bit niche, and it's only widespread in Asia.
</p>
<p>
  Combine that with the possibility to play with cryptocurrencies, and you find
  yourself seriously narrowing your search.
</p>
<p>
  However,&nbsp;<a
    className="text-blue-700"
    target="_blank"
    href="https://casinosblockchain.io/"
    rel="noreferrer noopener"
    >blockchain casinos</a
  >&nbsp;have considerably expanded your Sic Bo gambling options.
</p>
<p>
  In fact, getting to the right Sic Bo betting website is easier than it may
  seem.
</p>
<p><strong>You just have to know what to look for.</strong></p>
<p>In this guide, you will learn about:</p>
<ol className="is-style-dotted-list">
  <li>The top Sic Bo Bitcoin sites and Dapps.</li>
  <li>How you can pick the right Sic Bo casino for you.</li>
  <li>What cryptocurrencies you can use to play Sic Bo.</li>
  <li>How to play Sic Bo.</li>
</ol>
<p>
  We will also leave you with a set of&nbsp;<strong
    >Sic Bo betting tips and strategies&nbsp;</strong
  >which were tailor-made&nbsp;<strong>for Bitcoin gamblers</strong>.
</p>
<section id="play-sic-bo-online">
  <div className="h2">Where To Play Sic Bo With Bitcoin?</div>
  <p>Sic Bo at Bitcoin websites comes in two major versions:&nbsp;</p>
  <ul className="is-style-checked-list_sm">
    <li>
      <strong
        ><a
          className="text-blue-700"
          href="https://casinosblockchain.io/bitcoin-live-casino/"
          >Live Casino</a
        >
        Sic Bo</strong
      >, which is the most common variety of the two.
    </li>
    <li><strong>Video Sic Bo</strong>, which is a bit less widespread.</li>
  </ul>
  <p>
    Since Sic Bo live tables are much easier to find, you should&nbsp;<strong
      >be on the lookout for websites with a live casino section</strong
    >.
  </p>
  <p>
    This tends to rule out most smaller casinos and Dapps since they often
    specialize in provably fair table games.
  </p>
  <p>
    Luckily, a few of our favorite casinos do have Bitcoin Sic Bo on their
    roster. Let's have a look at them.
  </p>
</section>
<section id="bitcoin-sic-bo-casinos">
  <div className="h3">Bitcoin Sic Bo Casinos</div>
  <p>
    Looking for the best casino where you can play Sic Bo with Bitcoin is just
    like looking for a casino offering any other game.
  </p>
  <ul className="is-style-checked-list_sm">
    <li>You want a reliable casino.</li>
    <li>You wouldn't say no to a good welcome bonus.</li>
    <li>Your gaming experience must be impeccable.</li>
  </ul>
  <p>
    Our top picks for Bitcoin Sic Bo gambling score high on all those factors.
  </p>
  <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
    { [siteDatas[6], siteDatas[8]].map((summaryInfo: ISiteRankBlogCardObj, index:
    number) => { return (
    <SiteRankBlogTable
      key={index}
      siteIndex={index}
      summaryData={summaryInfo}
    />
    ) }) }
  </div>
</section>
<section id="sic-bo-dapps">
  <div className="h3">Sic Bo Dapps</div>
  <p>
    Sic Bo Dapps - or&nbsp;<em>decentralized applications -</em>&nbsp;aren't
    easy to find. They are simply not as popular as casinos and Dapps with slot
    machines.
  </p>
  <p>
    However, one of our top picks for TRON-based Dapps does offer Sic Bo tables:
    <a
      className="text-blue-700"
      href="https://tron.wink.org/"
      target="_blank"
      rel="noreferrer noopener"
      >Wink</a
    >.
  </p>
  <p>
    There are also dice gambling Dapps that provide a similar playing
    experience, such as&nbsp;<a
      className="text-blue-700"
      rel="noreferrer noopener"
      target="_blank"
      href="http://trichshot.io/"
      >Trich</a
    >&nbsp;(which has plans to include a Sic Bo game in its portfolio)
    and&nbsp;<a
      rel="noreferrer noopener"
      className="text-blue-700"
      target="_blank"
      href="https://goosebet.io/"
      >Goosebet</a
    >.
  </p>
  <p><strong>Wink</strong></p>
  <img src={WinkDappLogo} alt="WinkDappLogo" />
  <p className="mt-2">
    Wink is a Dapp that
    <strong>looks and feels like a regular online casino</strong>.
  </p>
  <p>
    Besides its impressive collection of games, there are regular promotions
    here, which is a welcome change from mostly no-frills Dapps.
  </p>
  <p>
    Although Wink does offer slot machines from several known providers, we're
    mostly interested in its
    <strong>dice section, where you can find Sic Bo</strong>, alongside other
    common dice games.
  </p>
  <p>
    You can play them using <strong>TRON</strong>, Wink's preferred currency.
  </p>
</section>
<section id="choose-good-casino">
  <div className="h2">How To Choose A Good Casino For Sic Bo</div>
  <p>
    We've told you which are our top picks for Bitcoin Sic Bo casinos and Dapps,
    but you might have different favorites.
  </p>
  <p>
    Truth is, only you can pick the best casino for
    <strong>your unique tastes and gambling preferences</strong>.
  </p>
  <p>
    Some things are universal, however. That's why we've prepared a list of
    items you should always consider when choosing a Sic Bo casino.
  </p>
  <ol className="is-style-dotted-list">
    <li>Learn about casino providers.</li>
    <li>Check out the available currencies.</li>
    <li>Make sure the casino is safe.</li>
    <li>Try it out for yourself.</li>
  </ol>
  <div className="h3">Learn About Casino Providers</div>
  <p>
    As we've mentioned before, Sic Bo is most often played as a live casino
    game.
  </p>
  <p>
    The live casino market is dominated by
    <a
      className="text-blue-700"
      href="https://casinosblockchain.io/evolution-gaming-casinos/"
      >Evolution Gaming</a
    >, which is, conveniently, one of the few providers to offer this game.
  </p>
  <p>
    Since most Bitcoin casinos let you filter the games lobby by the provider,
    you now have a convenient way to find your favorite game.
  </p>
  <p>
    If you're looking for games outside of the live casino section,
    <strong>be prepared to look a bit harder</strong>.
  </p>
  <p><strong>Manual Dealer Sic Bo or Automatic Sic Bo?</strong></p>
  <p>
    Sic Bo is usually played at a live casino table with a real-life dealer that
    rolls the dice for you, either manually or at the push of a button.
  </p>
  <p>
    More traditional players prefer manual Sic Bo tables, while some would
    rather have a more modern experience on automatic tables.
  </p>
  <div className="h3">Check Out The Available Currencies</div>
  <p>
    Since Sic Bo is not as readily available as slot games or roulette, it
    should come as no surprise that your cryptocurrency options might be a bit
    limited.
  </p>
  <p>
    Basically, you're restricted to the coins which are supported at the
    blockchain casinos offering Sic Bo.
  </p>
  <p>
    For the most part,
    <strong
      >playing with common coins such as Bitcoin and Ethereum shouldn't be an
      issue</strong
    >, but we still recommend you to check if they're available before signing
    up.
  </p>
  <div className="h3">Make Sure The Casino Is Safe</div>
  <p>
    Although you can only tell for sure if the casino is safe or not when you
    actually play and deposit your money, there are a few things you can do
    beforehand:
  </p>
  <ol className="is-style-dotted-list">
    <li>
      <strong>Look at user reviews</strong> in forums, social media, and review
      websites. These can often be subjective (a big loss or a big win can be
      very impactful), but the consensus should give you a good idea of the
      casino's reputation.
    </li>
    <li>
      <strong>Choose licensed casinos and Dapps</strong>, especially those with
      provable fair games and a focus on transparency.
    </li>
    <li>
      <strong
        >Read
        <a className="text-blue-700" href="https://casinosblockchain.io/"
          >professional reviews</a
        ></strong
      >
      such as ours, with expert opinions from people that are passionate about
      blockchain casinos.
    </li>
  </ol>
</section>
<section id="cryptocurrencies">
  <div className="h2">Playing Sic Bo With Cryptocurrencies</div>
  <p>
    Sic Bo is not the most common online game, but it is still readily available
    at some of the world's biggest blockchain casinos.
  </p>
  <p>
    This means that you should be able to play it with the most common coins.
    Examples of currencies that you can use include:
  </p>
  <ul className="is-style-checked-list_bubbles">
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/best-bitcoin-casinos/"
        >Bitcoin</a
      >
    </li>
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/bitcoin-cash-casinos/"
        >Bitcoin Cash</a
      >
    </li>
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/dogecoin-casinos/"
        >Dogecoin</a
      >
    </li>
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/best-ethereum-casinos/"
        >Ethereum</a
      >
    </li>
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/litecoin-casinos/"
        >Litecoin</a
      >
    </li>
    <li>
      <a
        className="text-blue-700"
        href="https://casinosblockchain.io/tether-casinos/"
        >Tether</a
      >
    </li>
  </ul>
  <p>
    However, you might struggle to find a casino that supports other altcoins.
  </p>
  <p>
    As for Dapps, you should mostly expect to play with
    <a
      className="text-blue-700"
      href="https://casinosblockchain.io/tron-casinos/"
      >Tron</a
    >.
  </p>
</section>
<section id="bitcoin-sic-bo-safety">
  <div className="h3">
    Is It Safe To Play Sic Bo With Bitcoin And Other Cryptocurrencies?
  </div>
  <p>
    Yes! Playing Sic Bo with cryptocurrencies can be safe (if not safer) as
    playing with fiat money.
  </p>
  <p>However, you should always try to do so at reputable online casinos.</p>
  <ul className="is-style-default">
    <li>
      Look for Bitcoin Sic Bo casinos with a
      <strong>valid gambling license</strong>, such as one from Curaçao.
    </li>
    <li>
      Keep in mind that, <strong>depending on your location</strong>, playing
      Sic Bo with cryptocurrencies might be allowed, heavily regulated,
      unregulated, or even outright illegal!
    </li>
  </ul>
</section>
<section id="sic-bo-rules">
  <div className="h2">Game Rules</div>
  <p>
    Do you know how to play
    <a
      className="text-blue-700"
      href="https://casinosblockchain.io/roulette-bitcoin-casino/"
      >Roulette</a
    >? In many ways, Sic Bo it's a
    <strong
      >dice-version of roulette, with higher potential wins but also a higher
      risk</strong
    >.
  </p>
  <p>
    A game of Sic Bo is played with three six-sided dice, which the dealer
    rolls. Your goal is to guess the outcome of this roll.
  </p>
  <p>Here's how it goes:</p>
  <ol className="is-style-dotted-list">
    <li>You place your bets.</li>
    <li>The dealer rolls the three dice.</li>
    <li>You win if you guessed the correct numbers/combinations of numbers.</li>
  </ol>
  <p>Sounds easy, right? That's because it is!</p>

<img src={EvolutionGamingSicBo} alt="EvolutionGamingSicBo" />

  <p className="mt-2">
    However, a Sic Bo table can look a bit daunting at first. This is because it
    offers several betting options. You can bet on:
  </p>
  <ul className="is-style-checked-list_sm">
    <li>
      <strong>Total bets</strong>, where you bet on the total of all three dice.
    </li>
    <li>
      <strong>Big </strong>(4-10) and <strong>small </strong>bets (11-17), where
      you bet on the total being in between two numbers.
    </li>
    <li>
      <strong>Combination bets</strong>, where you bet on two specific numbers
      showing on two of the three dice.
    </li>
    <li>
      <strong>Single bets</strong> on a specific number showing on at least one
      of the dice.
    </li>
    <li>
      <strong>Double bets</strong> on two specific numbers showing on two of the
      dice.
    </li>
    <li>
      <strong><strong>Triple bets</strong>,</strong> where you can bet on any
      number showing on all three of the dice. You can also bet on a specific
      number, which is the riskiest bet and, therefore, has the highest
      potential winnings.
    </li>
  </ul>
  <p>
    Just like with roulette, you can place a single bet, or a combination of
    bets, covering as many outcomes as you wish.
  </p>
  <div className="h3">Are There Any Winning Sic Bo Betting Strategies?</div>
  <p>
    Let's get the cat straight out of the bag: Sic Bo betting strategies can't
    help you <em>win</em> more often. This is true for Sic Bo games at Bitcoin
    casinos, regular online casinos, and brick-and-mortar casinos.
  </p>
  <p>The truth is, Sic Bo is purely a game of chance.</p>
  <p>
    However, you can use Sic Bo
    <strong>betting strategies as a form of risk management</strong>.
  </p>
  <p>
    Some dice outcomes are less likely while also offering higher prizes.
    Basically, <strong>the higher the risk, the higher the reward</strong>.
  </p>
  <p>
    Knowing that, you can devise a strategy that better suits your playing
    style.
  </p>
  <ul className="is-style-checked-list_sm">
    <li>
      Newcomers tend to prefer betting on low-risk outcomes, such as betting on
      big or small.
    </li>
    <li>
      Combination bets are commonly used by more seasoned players looking for
      medium-risk bets with a higher potential payout.
    </li>
    <li>
      Triple bets (especially specific-number triple bets) are only for extreme
      thrill-seekers since the chance of that outcome is extremely low. We
      generally don't recommend them.
    </li>
  </ul>
</section>
<section id="beginners-tips">
  <div className="h2">Tips For Beginners</div>
  <p>
    Even though Sic Bo is an easy game to learn, there are a few tricks that can
    help you get started.
  </p>
  <p>
    The following tips are especially helpful if you're going to play Sic Bo at
    a Bitcoin casino:
  </p>
  <ul>
    <li>Don't play if the casino isn't licensed.</li>
    <li>
      View Sic Bo as a fun game, not a way to earn Bitcoin for free or an
      alternative to mining.
    </li>
    <li>If you stop having fun, it's time to stop playing.</li>
    <li>
      Sic Bo might be a casual game, but you should always be sober when
      playing.
    </li>
    <li>Watch a few rounds first to make sure you know the rules.</li>
    <li>Start out with bets with high odds, such as high/small numbers.</li>
    <li>
      Keep your bets conservative. Don't be tempted to use too many bet areas at
      once just because it's allowed.
    </li>
    <li>Set a budget to play with and stick to it.</li>
    <li>Respect the casino and other players.</li>
  </ul>
</section>


                    <section id="FAQ" >
                        <div className="h3 mt-32">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">What are the Sic Bo betting strategies based on?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    Most Sic Bo strategies are based on betting combinations. They are about risk-control rather than controlling the outcome, as the latter is not possible. After all, the game is completely random.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How high is the house edge for Sic Bo?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    This depends on the bet you choose to place. When you place a high/small bet, the house edge is 2.78%, but depending on the chosen bet option, this can increase to as much as 18.98%.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do you play Sic Bo?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    <div>Playing Sic Bo is actually very simple: <br />
1 - You place your bets. Just like with roulette, you can place a single bet or multiple bets on a single number, two specific numbers or a combination of numbers.<br />
2 - The dealer rolls three dice.<br />
3 - You win if you guessed the correct numbers / combinations of numbers.
</div>
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
                        <a href="#play-sic-bo-online" className="play-sic-bo-online hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#bitcoin-sic-bo-casinos" className="bitcoin-sic-bo-casinos hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Casinos
                            </li>
                        </a>
                        <a href="#sic-bo-dapps" className="sic-bo-dapps hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Dapps
                            </li>
                        </a>
                        <a href="#choose-good-casino" className="choose-good-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Choose Good Casino
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Playing With Cryptocurrencies
                            </li>
                        </a>
                         <a href="#bitcoin-sic-bo-safety" className="bitcoin-sic-bo-safety hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Is It Safe?
                            </li>
                        </a>
                         <a href="#sic-bo-rules" className="sic-bo-rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Sic Bo Rules
                            </li>
                        </a>
                        <a href="#beginners-tips" className="beginners-tips hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 pl-8 hover:bg-slate-200 rounded">
                                Sic Bo Tips
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