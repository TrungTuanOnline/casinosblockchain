import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Cardano/Content"
import Header from "../../components/Cryptocurrencies/Cardano/Header"
import SiteInfos from "../../components/Cryptocurrencies/Cardano/Siteinfos"

const Cardano = () => {
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

export default Cardano