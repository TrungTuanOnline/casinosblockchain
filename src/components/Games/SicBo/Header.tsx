import "../css/index.css"

import SicBoSvg from "../../../Assets/images/Content/SicBo/sic-bo.svg"


const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={SicBoSvg} alt="SicBoSvg" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Sic Bo</div>
                        </div>
                        <div className="tax-header__description">
                            Originally from Asia, Sic Bo is a luck-based dice game popular in glamorous Macau casinos and the Philippines. Thanks to cryptocurrency casinos, it's now widely available to American and European players. You can find regular casino versions, but Sic Bo live tables are by far the most sought-after iteration of the game.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;