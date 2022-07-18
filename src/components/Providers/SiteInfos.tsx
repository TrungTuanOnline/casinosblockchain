import SiteSummaryCard from "../Card/SiteSummaryCard";
import { ISiteSummaryObj, ISiteSubInfoObj } from "../../Interfaces";
import { useState } from "react";

const SiteInfos = () => {
    const dummyInfos: Array<ISiteSummaryObj> = [
        {
            rank: 1,
            name: "BC.Game Casino",
            link: "bc.game",
            bonus: "5B",
            rating: "4.8",
            features: ["No Deposit Free Spins", "Multiple Awards", "test3"]
        },
        {
            rank: 2,
            name: "second",
            link: "bc.game",
            bonus: "$5,000",
            rating: "4.7",
            features: ["Weekly Giveaways,", "Stellar Sportsbook"]
        }
    ];

    const subInfos: Array<ISiteSubInfoObj> = [
        {
            name: "BC.Game Casino",
            about: "We ran a 100% anonymous play test for this BC.Game review. Our findings? More than promising! BC.Game offers unique bonuses (wheel spin up to 5BTC!) and juicy BC.Game shitcodes – yes, they really call them shitcodes. And you’ll never be bored. With a huge game selection and amazing social features, this casino is fun central. Plus, we love their commitment to fair gambling – especially the in-house provably fair games.",
            link: "bc.game",
            overview: {
                established: "2017",
                licence: "Test1",
                bonus: "Uo to 5 BTC(Wheel of Fortune)",
                wageringRequrement: null,
                noDepositFaucet: null,
                liveChat: "Yes"
            },
            rating: {
                bonus: "4",
                lookAndFeel: "5",
                LicenceAndSafety: "5",
                gameSelection: "5",
                paymentOption: "4",
                customerSupport: "5",
                customerReview: "4",
                total: "5"
            }
        },
        {
            name: "Stake Casino",
            about: "Stake is more than just a Bitcoin casino. It’s got hundreds of odds on all the best sports, a fresh look, exclusive games, a top-notch VIP program, and no welcome bonus. That’s right: you won’t find a welcome pack at Stake, but you won’t miss it. Instead, you can take advantage of provably fair games across the board, a fully disclosed house edge, and a wide array of rewarding promotions, including a weekly giveaway where you can win $5,000.",
            link: "stack.com",
            overview: {
                established: "2016",
                licence: null,
                bonus: "$5000",
                wageringRequrement: null,
                noDepositFaucet: null,
                liveChat: "Yes"
            },
            rating: {
                bonus: "4",
                lookAndFeel: "5",
                LicenceAndSafety: "5",
                gameSelection: "5",
                paymentOption: "4",
                customerSupport: "5",
                customerReview: "4",
                total: "4.4"
            }
        },
        {
            name: "Rocketpot",
            about: "Rocketpot is a crypto-forward casino with a stellar game selection and some juicy offers. The recent addition of a sportsbook is already making waves in the gambling space. But is the provider actually worth it? Read more in our Rocketpot review…",
            link: "rocketpot.io",
            overview: {
                established: "2019",
                licence: "Test2",
                bonus: "%100 up to 1 BTC",
                wageringRequrement: null,
                noDepositFaucet: null,
                liveChat: "No"
            },
            rating: {
                bonus: "4",
                lookAndFeel: "5",
                LicenceAndSafety: "5",
                gameSelection: "5",
                paymentOption: "4",
                customerSupport: "5",
                customerReview: "4",
                total: "4.7"
            }
        }
    ];

    const [openSubInfoIndex, setOpenSubInfoIndex] = useState<null | number>(null);
    return (
        <div className="bg-gray-100 flex items-center justify-center pb-28">
            <div className="w-full mt-24">
                {dummyInfos.length > 0 &&
                    <div className="flex flex-row justify-between py-2 bg-gray-700 text-white rounded-t-xl shadow-xl">
                        <div className="w-24 flex items-center justify-center">
                            #
                        </div>
                        <div className="w-64 flex flex-row justify-start">
                            Name
                        </div>
                        <div className="w-24 flex items-center justify-start">
                            Bonus
                        </div>
                        <div className="w-40 flex items-start justify-start">
                            Features
                        </div>
                        <div className="w-20 flex items-center justify-center">
                            Rating
                        </div>
                        <div className="w-44">
                        </div>
                        <div className="w-44 mr-6 flex items-center justify-start">
                            Website
                        </div>
                    </div>
                }
                {dummyInfos.length > 0 &&
                    dummyInfos.map((summaryInfo: ISiteSummaryObj, index: number) => {
                        return (
                            <SiteSummaryCard
                                key={index}
                                siteIndex={index}
                                openSubInfoIndex={openSubInfoIndex}
                                setOpenSubInfoIndex={setOpenSubInfoIndex}
                                summaryData={summaryInfo}
                                subInfoData={subInfos[index]}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SiteInfos;