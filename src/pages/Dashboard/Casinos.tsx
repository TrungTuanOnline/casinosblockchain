import { Box } from "@mui/material";
import TopBar from "../../components/Dashboard/Topbar";
import Header from "../../components/Dashboard/Header";
import SiteInfos from "../../components/Dashboard/SiteInfos";
import Review from "../../components/Dashboard/Review";

const Casinos = () => {
    return (
        <Box className="pb-80">
            <TopBar/>
            <Header/>
            <SiteInfos/>
            <Review/>
        </Box>
    )
}

export default Casinos;