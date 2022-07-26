import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Binance/Content"
import Header from "../../components/Cryptocurrencies/Binance/Header"
import SiteInfos from "../../components/Cryptocurrencies/Binance/Siteinfos"

const Binance = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
            <Footer />
        </div>
    )
}

export default Binance