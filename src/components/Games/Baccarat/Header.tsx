import "../css/index.css"

import BaccaratSvg from "../../../Assets/images/games/baccarat.png"

const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={BaccaratSvg} alt="Barracat" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Baccarat</div>
                        </div>
                        <div className="tax-header__description">
                            Baccarat is the exciting card game played by James Bond. Follow his lead and play this game with Bitcoin (BTC) or other cryptocurrencies like Ethereum (ETH), Tether (USDT), Dogecoin (DOGE) and many more. Bonuses are available in all cryptocurrencies as well!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;