import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Litecoin/Content"
import Header from "../../components/Cryptocurrencies/Litecoin/Header"
import SiteInfos from "../../components/Cryptocurrencies/Litecoin/Siteinfos"

const Litecoin = () => {
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

export default Litecoin