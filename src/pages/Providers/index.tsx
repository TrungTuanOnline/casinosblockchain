import Topbar from "../../components/Common/Topbar"
import GameProvider from "../../components/Providers/GameProvider"
import TopSection from "../../components/Providers/TopSection"

const Providers = () => {
    return (
        <div className="select-none bg-gray-100">
            <Topbar />
            <TopSection />
            <GameProvider />
        </div>
    )
}

export default Providers