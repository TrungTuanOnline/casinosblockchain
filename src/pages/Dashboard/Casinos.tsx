import { Box } from "@mui/material";
import CasinoTitle from "../../components/Dashboard/CasinoTitle";
import SiteInfos from "../../components/Dashboard/SiteInfos";
import Review from "../../components/Dashboard/Review";
import CasinoExplain from "../../components/Dashboard/CasinoExplain";
import TopDecentralizedCasinos from "../../components/Dashboard/TopDecentralizedCasinos";
import Header from "../../components/Header";

const Casinos = () => {
    return (
        <Box className="pb-80">
            <Header />
            <CasinoTitle />
            <SiteInfos />
            <Review />
            <CasinoExplain />
            <TopDecentralizedCasinos />
        </Box>
    )
}

export default Casinos;