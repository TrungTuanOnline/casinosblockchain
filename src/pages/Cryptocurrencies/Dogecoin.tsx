import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Dogecoin/Content"
import Header from "../../components/Cryptocurrencies/Dogecoin/Header"
import SiteInfos from "../../components/Cryptocurrencies/Dogecoin/Siteinfos"

const Dogecoin = () => {
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

export default Dogecoin