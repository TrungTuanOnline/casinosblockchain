import ReadMoreCards from "../../components/Card/ReadMoreCards";
import Topbar from "../../components/Common/Topbar";
import Content from "../../components/Games/Crash/Content";
import SiteInfos from "../../components/Games/Crash/Siteinfos";
import Header from "../../components/Games/Poker/Header";

const Poker = () => {
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

export default Poker;
