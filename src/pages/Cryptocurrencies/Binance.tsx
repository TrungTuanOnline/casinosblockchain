import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Binance/Content"
import Header from "../../components/Cryptocurrencies/Binance/Header"
import SiteInfos from "../../components/Cryptocurrencies/Binance/Siteinfos"

const Binance = () => {
    return (
        <div className="bg-gray-100">
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
            <Footer />
        </div>
    )
}

export default Binance