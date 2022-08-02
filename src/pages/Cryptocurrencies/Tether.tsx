import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Tether/Content"
import Header from "../../components/Cryptocurrencies/Tether/Header"
import SiteInfos from "../../components/Cryptocurrencies/Tether/Siteinfos"

const Tether = () => {
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

export default Tether