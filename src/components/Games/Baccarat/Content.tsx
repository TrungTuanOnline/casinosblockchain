import StakeBaccarat from "../../../Assets/images/Content/Baccarat/Stake-Baccarat.jpg"
import EarnBet from "../../../Assets/images/Content/Baccarat/EarnBet.jpg"
import BlueBetCasinoDapp from "../../../Assets/images/Content/Baccarat/BlueBet-Casino-Dapp.jpg"
import NetEntBaccarat from "../../../Assets/images/Content/Baccarat/NetEnt-Baccarat.jpg"
import TrueFlipPuntoBanco from "../../../Assets/images/Content/Baccarat/True-Flip-Punto-Banco.jpg"


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
                    <p>This is the original casino game like it was played in the James Bond movie. Baccarat is an exciting game that has the player and the bank play against each other. </p>
                    <p>Who bets on this game can bet on a win for the bank, for the player or a tie. Obviously a tie is much less likely to happen, so it pays much more profit when it happens.</p>
                    <p>There are several different versions of this game like Punto Banco, Baccarat Chemin de Fer and Baccarat Banque, all of which have slightly different rules but work with the same principles. </p>
                    <p>The game is also available in the <a className="text-blue-700"  href="https://casinosblockchain.io/bitcoin-live-casino/">Live Casino</a> and on mobile devices.</p>
                    <p>Blockchain and cryptocurrency enthusiasts who also like to play this iconic table game will notice that the game offer is largely limited to Baccarat and Punto Banco. However, these two are available in most Bitcoin casinos.</p>
                    <div className="w-full h-fit p-10  bg-cover rounded-lg" style={{ backgroundImage: `url(${backgroundImg}),radial-gradient(100% 100% at 100% 100%, #562d81 0%, #1d228e 100%)` }}>
                        <p className="text-sm  text-white opacity-50">BACCARAT BITCOIN</p>
                        <div className="h2 text-white text-lg md:text-2xl">
                            James Bond's favorite casino game is now available in crypto casinos.
                        </div>
                    </div>
                    <section id="play-baccarat-games">
                        <div className="h2">Where To Play Baccarat Games With Bitcoin?	</div>
                        <div className="h3">Casinos</div>
                        <p>Practically all crypto casinos offer a nice amount of Baccarat games. Even casinos like <a className="text-blue-700"  href="https://casinosblockchain.io/stake-bitcoin-casino-review/">Stake</a>, that offer only original and provably fair games, often offer one or more versions of this game.</p>
                        <img src={StakeBaccarat} alt="StakeBaccarat" />
                        <p className="mt-2">A great thing about this is the fact that you can enjoy this game in an ever safer environment because the overall quality of <a className="text-blue-700"  href="https://casinosblockchain.io/">cryptocurrency casinos</a> has only been increasing over the years. </p>
                        <p>Another perk: because using crytpocurrencies like Bitcoin as a payment method is cheaper for the casino, they can offer you this game with a lower house edge - giving you, the player, a <strong>bigger winning margin</strong>!</p>
                        <div className="h3">Best Casinos To Play Baccarat</div>
                        <p>Here are some of the best Bitcoin casinos to where you can play Baccarat:</p>
                        <div className="mt-4 border-t border-gray-300 shadow-gray-500 shadow-md">
                            {
                                [siteDatas[1], siteDatas[4], siteDatas[8], siteDatas[6]].map((summaryInfo: ISiteRankBlogCardObj, index: number) => {
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
                        <p className="mt-4">It's good to remember that some of the provably fair games are a bit simpler.</p>
                        <p>So you will only find the most basic version of the game in most cases - a fair trade if you're looking for transparency when playing your favorite casino games.</p>
                        <div className="h3">Dapps - Decentralized Applications With Baccarat</div>
                        <p>A place where you will also find mostly basic Baccarat versions is in casino Dapps. These decentralized applications offer Baccarat games that are all <strong>provably fair</strong>, as these Dapps run entirely on the <strong>transparent structure</strong> that is the blockchain.</p>
                        <p>In many cases the games are all created in house, which in turn causes for the games to be more simplistic, but just as fun.</p>
                        <p><strong>Earnbet</strong></p>
                        <div className="wp-block-image">
                            <figure className="alignleft">
                                <img src={EarnBet} alt="EarnBet" />
                            </figure>
                        </div>
                        <p className="mt-2">This casino Dapp offers 6 games of which one is a Baccarat game with a <strong>house edge of only 1.06%</strong>. </p>
                        <p>Special about this Dapp is that you get a first deposit bonus of $50, as Dapps usually don't offer any bonuses.</p>
                        <p>Besides this, you also collect tokens with every real money bet that entitle you to a portion of the house profit.</p>
                        <p><strong>BlueBet</strong></p>
                        <div className="wp-block-image">
                            <figure className="alignleft">
                                <img src={BlueBetCasinoDapp} alt="BlueBetCasinoDapp" />
                            </figure>
                        </div>
                        <p className="mt-2">On BlueBet you can play a total of 10 games, but more games are being created as we speak. </p>
                        <p>One of the games is Baccarat which, like the other games, is provably fair.</p>
                        <p>Here you can also collect tokens while playing. These don't just get you a piece of the profit but also voting rights as to what will happen with the Dapp.</p>
                    </section>
                    <section id="play-live-baccarat-games">
                        <div className="h2">Where To Play Live Baccarat Games With Bitcoin?	</div>
                        <div className="h3">Casinos</div>
                        <p>When talking about blockchain casinos, there is a definite distinction between two sorts. </p>
                        <p>On one side there are casinos that only offer provably fair games and on the other hand there are crypto casinos that offer games by known providers.</p>
                        <p>If you are looking to play Live Baccarat, you will only be able to do so in the last category. Casinos like <a className="text-blue-700"  href="https://casinosblockchain.io/bitcoin-casino-review/">Bitcoin Casino</a>, <a className="text-blue-700"  href="https://casinosblockchain.io/bitstarz-review/">BitStarz</a> and others offer a nice range of Live Casino games including Baccarat.</p>
                        <div className="h3">Dapps</div>
                        <p>When it comes to Live Casino games, it revolves mostly around <a className="text-blue-700"  href="https://casinosblockchain.io/roulette-bitcoin-casino/">Roulette</a> and <a className="text-blue-700"  href="https://casinosblockchain.io/blackjack-bitcoin-casino/">Blackjack</a>. The same goes for Live Casino games on Dapps. </p>
                        <p>There is no Dapp yet that offers Live Baccarat, so if you really feel like playing this game, you should divert to <a className="text-blue-700"  href="https://casinosblockchain.io/">other casinos</a>.</p>
                    </section>
                    <section id="cryptocurrencies">
                        <div className="h2">Availability For Cryptocurrencies	</div>
                        <p>It's not difficult to find a crypto casino that offers Baccarat nowadays. This means that if you have your heart set on playing this game and want to pay with cryptocurrencies, there's a big chance that you can make it happen.</p>
                        <p>You can definitely play Baccarat in a casino when using the most common cryptocurrencies like <a className="text-blue-700"  href="https://casinosblockchain.io/best-bitcoin-casinos/">Bitcoin</a>, <a className="text-blue-700"  href="https://casinosblockchain.io/best-ethereum-casinos/">Ethereum</a>, <a className="text-blue-700"  href="https://casinosblockchain.io/litecoin-casinos/">Litecoin</a>, <a className="text-blue-700"  href="https://casinosblockchain.io/dogecoin-casinos/">Dogecoin</a> and more. </p>
                        <p>Do you plan to play with less common coins like <a className="text-blue-700"  href="https://casinosblockchain.io/dash-casinos/">Dash,</a> <a className="text-blue-700"  href="https://casinosblockchain.io/monero-casinos/">Monero</a>, or <a className="text-blue-700"  href="https://casinosblockchain.io/ripple-casinos/">Ripple</a>, then you should divert to casinos like <a className="text-blue-700"  href="https://casinosblockchain.io/1xbit-review/">1xBit</a>. This kind of casino offers a huge amount of games and accepts an equally big amount of currencies.</p>
                        <p>The Dapps that we reviewed accept the following currencies; Bitcoin, Litecoin, <a className="text-blue-700"  href="https://casinosblockchain.io/bitcoin-cash-casinos/">Bitcoin Cash</a>, Ethereum. So you can be sure to be able to play Baccarat when paying with any of these options.</p>
                    </section>
                    <section id="game-rules">
                        <div className="h2">Game Rules	</div>
                        <p>Baccarat is a table game that is played with normal decks of cards, that are also used for other games like Blackjack and <a className="text-blue-700"  href="https://casinosblockchain.io/bitcoin-poker-sites/">Poker</a>. During the game, both the bank and the player are dealt a hand. </p>
                        <p>These hands consist of either 2 or 3 cards. If one of the two hands reaches a point total of 8 or 9, it's called a natural. </p>
                        <p>In case there is no natural, the dealer follows the rules when making a decision as to whether or not he should get more cards for any of the hands. He manages both hands.</p>
                        <p>Players can bet on the bank or the player, but they don't get a hand themselves and have no influence whatsoever in the outcome of the game.</p>
                        <div className="wp-block-image">
                            <img src={NetEntBaccarat} alt="NetEntBaccarat" />
                        </div>
                        <p className="mt-2">The value of the cards is attributed as follows; all cards with an image and the 10 have no value, all cards between 2 and 9 have the value that's written on them and the ace is worth 1 point. </p>
                        <p>If the value of two cards exceeds 10, only the right number counts.</p>
                        <p>This means that with a value of 15, you have 5 points. In this case, with a point total of 5 or less, the player takes an extra card. For the bank, the rules are a bit different.</p>
                        <ul className="is-style-checked-list_sm"><li>The bank only takes a card if the point total is 2 or less. </li><li>If it's 3 and the player has an 8, the bank will stand. </li><li>When it's 4, the bank stands if the player has a 0, 1, 8 or 9. </li><li>With 5 points, the bank only takes a third card if the third card of the player is a 4, 5, 6 or 7.</li><li>With a point total of 6 the bank goes further than the player as it gets a third card, but only if the player's third card is a 6 or a 7. </li><li>Only at an initial total of 7 points, does the bank always stand.</li></ul>
                        <p>These rules sound more complicated than they actually are and you'll see that once you start playing, you will pick up the rules quite quickly.</p>
                    </section>
                    <section id="choose-a-casino">
                        <div className="h2">How To Choose A Good Bitcoin Casino For Baccarat Games	</div>
                        <p>Before you can start playing Baccarat online, you should first put some effort into finding the right casino to play at. </p>
                        <p>This way you will be sure to be able to have fun for the coming years and that's what casino's are all about. Read on for some tips on how to choose.</p>
                        <div className="h3">Choose the Baccarat version that you prefer</div>
                        <p>When playing at crypto casinos you are somewhat limited in your choice as you can only choose between Punto Banco and Baccarat. </p>
                        <p>Punto Banco is a slightly simpler version of the game that you cannot find in all casinos. One casino that offers Punto Banco is <a className="text-blue-700"  href="https://casinosblockchain.io/trueflip-casino-review/">True Flip</a>. It's nice to know this before you sign up anywhere.</p>
                        <div className="wp-block-image">
                            <img src={TrueFlipPuntoBanco} alt="TrueFlipPuntoBanco" />
                        </div>
                        <div className="h3">Try out the games in demo mode</div>
                        <p>Before actually depositing money and wagering it, it might be a good idea to play the game in demo mode first. This also gives you an opportunity to get familiar with the game rules without running the risk of losing money.</p>
                        <div className="h3">Chat it up with other players</div>
                        <p>If you plan to play in the Live Casino, you can already join a table before depositing money. </p>
                        <p>You cannot participate in the game, but you can use the chat function to communicate with the dealer and other players to see if you like the atmosphere.</p>
                    </section>
                    <section id="tips-for-beginners">
                        <div className="h2">Tips For Beginners	</div>
                        <p>If you keep these tips in mind, you'll be off to a flying start with Baccarat:</p>
                        <ul className="list-disc ml-5"><li>Make sure to play at a safe casino or Dapp</li><li>Play for fun and not to make a living out of it</li><li>Don't play under the influence of anything</li><li>Learn the rules before betting real money</li><li>Try out the game with bonus money first</li><li>Keep it civil at all times</li><li>Try not to bet on a tie in the beginning as this is not a common outcome</li><li>Look at the results of the last games before making a decision</li><li>Learn from other players' strategies</li></ul>
                    </section>
    

                    <section id="FAQ" >
                        <div className="h3 mt-32">Frequently Asked Questions</div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">How do I know if a Baccarat game is safe if I can't see the shoe?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    In Live Casino games you can see the shoe, but with all other versions of online Baccarat you won't be able to. When playing at a provably fair casino, you can always check the game play afterwards to verify that the game was played correctly. And licensed casinos have a license to ensure fair games.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Are the house edges the same in a blockchain casino as in a regular online casino?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    When you play games by well known players, the house edge remains the same. However, if you play provably fair games, the house edge is lower which increases your chances of winning.
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={4}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <span className="text-[#262847] text-sm font-medium tracking-[-0.2px] leading-7">Why are Baccarat games not as common as other games in crypto casinos?</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text-gray-600 text-sm">
                                    In blockchain casinos you will find more versions of Roulette and Blackjack because these games are more popular among players. Casinos listen to what players want, so if you want more variation in Baccarat games, the best thing to do is play the game a lot and ask your friends to do the same.
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
                        <a href="#play-baccarat-games" className="play-baccarat-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className=" w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Where To Play
                            </li>
                        </a>
                        <a href="#play-live-baccarat-games" className="play-live-baccarat-games hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Live Baccarat
                            </li>
                        </a>
                        <a href="#cryptocurrencies" className="cryptocurrencies hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Other Cryptocurrencies
                            </li>
                        </a>
                        <a href="#game-rules" className="game-rules hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Baccarat Rules
                            </li>
                        </a>
                        <a href="#choose-a-casino" className="choose-a-casino hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Choosing A Casino
                            </li>
                        </a>
                        <a href="#tips-for-beginners" className="tips-for-beginners hover:text-[#3e47e0] no-underline cursor-pointer">
                            <li className="w-full p-3 pb-3 hover:bg-slate-200 rounded">
                                Beginner Tips
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