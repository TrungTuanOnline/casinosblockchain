import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Ripple/Content"
import Header from "../../components/Cryptocurrencies/Ripple/Header"
import SiteInfos from "../../components/Cryptocurrencies/Ripple/Siteinfos"

const Ripple = () => {
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

export default Ripple