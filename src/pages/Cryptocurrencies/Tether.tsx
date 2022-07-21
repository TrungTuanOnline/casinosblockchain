import Topbar from "../../components/Common/Topbar"
import Header from "../../components/Cryptocurrencies/Tether/Header"
import Content from "../../components/Games/Crash/Content"
import SiteInfos from "../../components/Games/Crash/Siteinfos"

const Tether = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
        </div>
    )
}

export default Tether