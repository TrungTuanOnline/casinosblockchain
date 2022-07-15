import { IPopularCasinoObj } from "../../Interfaces";
import { Button } from '@mui/material';
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import slotsImg from "../../Assets/images/slots.png";
import routletteImg from "../../Assets/images/roulette.png";
import diceImg from "../../Assets/images/dice.png";
import crashImg from "../../Assets/images/crash.png";
import pokerImg from "../../Assets/images/poker.png";
import plinkoImg from "../../Assets/images/plinko.png";

interface IProps {
    data: IPopularCasinoObj
}

const PopularCasinoCard = (props: IProps) => {
    const data = props.data;
    return (
        <div className="rounded flex flex-col px-5 py-5" style={{backgroundColor:"#231e48"}}>
            <div className="flex items-center justify-start">
                {data.name === "Slots" && <img className="h-12" src={slotsImg}></img>}
                {data.name === "Roulette" && <img className="h-12" src={routletteImg}></img>}
                {data.name === "Dice" && <img className="h-12" src={diceImg}></img>}
                {data.name === "Crash" && <img className="h-12" src={crashImg}></img>}
                {data.name === "Poker" && <img className="h-12" src={pokerImg}></img>}
                {data.name === "Plinko" && <img className="h-12" src={plinkoImg}></img>}
            </div>
            <div className="flex items-center justify-start text-md font-bold text-white mt-2">
                {data.name}
            </div>
            <div className="flex items-start justify-start text-sm text-white mt-5 h-32">
                {data.about}
            </div>
            <div className="w-full mt-6">
                <Button
                    className="text-blue text-sm w-full flex justify-between"
                    endIcon={<KeyboardArrowRight className="w-4"/>}
                    // href="/"
                    // target="_BLANK"
                >
                    READ MORE
                </Button>

            </div>
        </div>
    )
}

export default PopularCasinoCard;