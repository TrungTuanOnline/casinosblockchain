import Footer from "../../components/Common/Footer"
import Topbar from "../../components/Common/Topbar"
import Content from "../../components/Cryptocurrencies/Bitcoin/Content"
import Header from "../../components/Cryptocurrencies/Bitcoin/Header"
import SiteInfos from "../../components/Cryptocurrencies/Bitcoin/Siteinfos"

const Bitcoin = () => {
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

export default Bitcoin