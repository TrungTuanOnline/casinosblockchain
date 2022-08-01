import "../css/index.css"

import SportsBettingLogo from "../../../Assets/images/Content/SportsBetting/sports-betting.svg";

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={SportsBettingLogo} alt="SportsBettingLogo" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Sports Betting</div>
                        </div>
                        <div className="tax-header__description">
                            Long gone are the days when cryptocurrency gambling was all about casinos. Nowadays, there is a brave new world of Bitcoin sports betting waiting to be explored. Back your favorite team, engage with the up-and-coming eSports scene, and discover the thrills of betting on virtual sports, all with the advantages of blockchain technology.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;