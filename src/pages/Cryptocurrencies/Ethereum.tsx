import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Ethereum/Content"
import Header from "../../components/Cryptocurrencies/Ethereum/Header"
import SiteInfos from "../../components/Cryptocurrencies/Ethereum/Siteinfos"

const Ethereum = () => {
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

export default Ethereum