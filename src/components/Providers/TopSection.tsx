import backgroundImg from "../../Assets/images/Header.svg"
import EvolutionGameLogo from "../../Assets/images/evolution-gaming-logo.png"
import StakeNewLogo from "../../Assets/images/stake-new-logo.svg"
import LogoBcGame from "../../Assets/images/logo-bc-game.png"
import RocketPotIcon from "../../Assets/images/rocket-pot-new-logo.svg"
import CloudbetLogo from "../../Assets/images/cloudbet-new-logo.png"
import NetentLogo from "../../Assets/images/netent-logo.png"
import BetSoftLogo from "../../Assets/images/betfsoft-logo.png"

import TopSectionCard from "./TopSectionCard"
import { ITopSectionCardDataObj } from "../../Interfaces"
const TopSection = () => {

    const TopSectionCardData: Array<ITopSectionCardDataObj> = [
        {
            id: 1,
            logo: EvolutionGameLogo,
            title: "Evolution Gaming",
            miniTitle: "Play Evolution Gaming at:",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
                { logo: CloudbetLogo, link: "/game-providers" },
            ],
            count: 18,
        },
        {
            id: 2,
            logo: NetentLogo,
            title: "NetEnt",
            miniTitle: "Play NetEnt at:",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
                { logo: CloudbetLogo, link: "/game-providers" },
            ],
            count: 11,
        },
        {
            id: 3,
            logo: BetSoftLogo,
            title: "Betsoft",
            miniTitle: "Play Betsoft at:",
            gameLogos: [
                { logo: LogoBcGame, link: "/game-providers" },
                { logo: StakeNewLogo, link: "/game-providers" },
                { logo: RocketPotIcon, link: "/game-providers" },
                { logo: CloudbetLogo, link: "/game-providers" },
            ],
            count: 15,
        },
    ]

    return (
        <div className="bg-center bg-cover py-10 px-14 flex justify-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="flex flex-col justify-start w-11/12 gap-y-12">
                <div className="text-white font-bold text-3xl md:text-6xl">
                    Game Providers
                </div>
                <div className="flex flex-col items-start justify-start gap-y-6">
                    <div className="text-white font-bold text-xl md:text-3xl">
                        Top Providers in Crypto Casions of 2022
                    </div>
                    <div className="flex flex-col md:flex-row  w-full justify-start gap-6 flex-wrap mt-3">
                        {
                            TopSectionCardData.map((item: ITopSectionCardDataObj) => (
                                <div key={item.id}>
                                    <TopSectionCard item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}

export default TopSection;