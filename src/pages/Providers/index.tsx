import Header from "../../components/Header"
import GameProvider from "../../components/Providers/GameProvider"
import TopSection from "../../components/Providers/TopSection"

const Providers = () => {
    return (
        <div className="select-none">
            <Header />
            <TopSection />
            <GameProvider />
        </div>
    )
}

export default Providers