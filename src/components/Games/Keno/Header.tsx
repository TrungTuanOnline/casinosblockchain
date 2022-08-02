import "../css/index.css"

import KenoSvg from "../../../Assets/images/Content/Keno/keno.svg"


const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={KenoSvg} alt="Barracat" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Keno</div>
                        </div>
                        <div className="tax-header__description">
                            Keno feels like a mix of Bingo and lottery - but with much higher payouts. Bitcoin Keno is even better! Crypto casinos offer lower house edges, which means better value for you. Plus, they come with a bunch of other perks. Read on to learn about the best ones!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;