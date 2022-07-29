import ReadMoreCards from "../../components/Card/ReadMoreCards";
import Footer from "../../components/Common/Footer";
import Topbar from "../../components/Common/Topbar";
import Content from "../../components/Games/Blackjack/Content";
import Header from "../../components/Games/Blackjack/Header";
import SiteInfos from "../../components/Games/Blackjack/Siteinfos";

const Blackjack = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
            {/* <div className="p-10 w-full flex flex-col justify-center">
                <div className="h2">Latest News</div>
                <ReadMoreCards />
            </div> */}
            <Footer />
        </div>
    )
}

export default Blackjack;
