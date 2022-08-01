import "../css/index.css"

import LotteryLogo from "../../../Assets/images/Content/Lottery/lottery-logo.svg"


const Header = () => {
    return (
        <div className="tax-header tax-header_games">
            <div className="flex flex-col justify-start w-11/12 gap-y-6">
                <div className="container">
                    <div className="row">
                        <div className="tax-header__bg-icon">
                            <img src={LotteryLogo} alt="LotteryLogo" />
                        </div>
                        <div className="tax-header__title">
                            <div className="h1 text-6xl text-white">Lottery</div>
                        </div>
                        <div className="tax-header__description">
                            Lottery games are so mainstream it’s easy to forget they’re games of chance. Several people play them hoping to win – and when they do, they win big. It’s almost as thrilling as investing in an exotic cryptocurrency and seeing it pay out nicely. Guess what? You can play them at crypto casinos too!
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;