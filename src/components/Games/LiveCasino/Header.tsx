import "../css/index.css"

import LiveCasinoLogo from "../../../Assets/images/Content/LiveCasino/live-casino-logo.svg"


const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={LiveCasinoLogo} alt="LiveCasinoLogo" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Live Casino</div>
                        </div>
                        <div className="tax-header__description">
                            Bitcoin live casino games let you experience the thrill of a land based casino from the comfort of your own home. The best part is that you can use several cryptocurrencies to play these games without having to worry if the casino is fair. Read on to find a list of possibilities.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;