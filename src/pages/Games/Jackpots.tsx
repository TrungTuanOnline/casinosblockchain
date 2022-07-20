import ReadMoreCards from "../../components/Card/ReadMoreCards";
import Topbar from "../../components/Common/Topbar";
import SiteInfos from "../../components/Games/Crash/Siteinfos";
import Content from "../../components/Games/Jackpots/Content";
import Header from "../../components/Games/Jackpots/Header";

const Jackpots = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <SiteInfos />
            <Content />
            <div className="p-10 w-full flex flex-col justify-center">
                <h2>Latest News</h2>
                <ReadMoreCards />
            </div>
        </div>
    )
}

export default Jackpots;
