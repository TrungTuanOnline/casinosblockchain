import ReadMoreCards from "../../components/Card/ReadMoreCards";
import Footer from "../../components/Common/Footer";
import Topbar from "../../components/Common/Topbar";
import Content from "../../components/Games/Roulette/Content";
import SiteInfos from "../../components/Games/Roulette/Siteinfos";
import Header from "../../components/Games/Roulette/Header";

const Roulette = () => {
    return (
        <div className="bg-gray-100">
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

export default Roulette;
