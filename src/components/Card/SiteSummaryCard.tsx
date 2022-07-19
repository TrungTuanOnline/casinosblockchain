import React from 'react';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import KeyboardArrowRightICon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import SiteSubInfoCard from './SiteSubInfoCard';
import rankFirstImg from "../../Assets/images/rank-first.png";
import rankSecondImg from "../../Assets/images/rank-second.png";
import rankThirdImg from "../../Assets/images/rank-third.png";
import giftImg from "../../Assets/images/gift.png";
import logoImg from "../../Assets/images/logos/bc-game.png";


import { ISiteSummaryObj, ISiteSubInfoObj } from "../../Interfaces";

interface IProps {
    siteIndex: number,
    openSubInfoIndex: number | null,
    setOpenSubInfoIndex: React.Dispatch<React.SetStateAction<number | null>>,
    summaryData: ISiteSummaryObj,
    subInfoData: ISiteSubInfoObj
}

const SiteSummaryCard = (props: IProps) => {
    const summaryData = props.summaryData;
    const subInfoData = props.subInfoData;
    const onQuickFact = () => {
        if (props.siteIndex === props.openSubInfoIndex) {
            props.setOpenSubInfoIndex(null);
        } else {
            props.setOpenSubInfoIndex(props.siteIndex);
        }
    }
    return (
        <React.Fragment>
            <div className="flex flex-row justify-between border-b border-l border-r border-gray-300 py-3 bg-white shadow-xl hover:bg-gray-200">
                <div className="w-24 flex items-center justify-center">
                    {summaryData.rank === 1 && <img className="h-8" src={rankFirstImg} alt="CardImg" />}
                    {summaryData.rank === 2 && <img className="h-8" src={rankSecondImg} alt="CardImg" />}
                    {summaryData.rank === 3 && <img className="h-8" src={rankThirdImg} alt="CardImg" />}
                    {summaryData.rank > 3 &&
                        <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center">
                            {summaryData.rank}
                        </div>}
                </div>
                <div className="w-64 flex flex-row justify-start gap-x-4">
                    <div className="flex items-center justify-center">
                        <img className="w-16 rounded-full" src={logoImg} alt="CardImg" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-0.5">
                        <span className="text-xl font-bold">{summaryData.name}</span>
                        <span className="text-sm">{summaryData.link}</span>
                    </div>
                </div>
                <div className="w-40 flex items-center justify-start">
                    {summaryData.bonus &&
                        <Button
                            className="w-28 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between gap-x-2"
                            endIcon={<KeyboardArrowRightICon className="text-black rounded-full bg-orange-400" />}
                        >
                            <img className="h-3" src={giftImg} alt="CardImg" />
                            <span className="text-sm text-black">{summaryData.bonus}</span>
                        </Button>
                    }
                </div>
                <div className="w-40 flex flex-col items-start justify-center">
                    {summaryData.features.length > 0 && <div className="text-sm">{summaryData.features[0]}</div>}
                    {summaryData.features.length > 1 && <div className="text-sm">{summaryData.features[1]}</div>}
                </div>
                <div className="w-40 flex items-center justify-center relative">
                    <CircularProgress size={56} thickness={2} sx={{ color: 'green' }} variant="determinate" value={Number(summaryData.rating) * 20} />
                    <div className="absolute flex items-center justify-center inset-0 text-sm">{summaryData.rating}/5%</div>
                </div>
                <div className="w-44 flex items-center justify-center">
                    <Button
                        className="text-black"
                        variant="contained"
                        color="inherit"
                        endIcon={props.openSubInfoIndex === props.siteIndex ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        onClick={() => { onQuickFact() }}
                    >
                        QUICK FACTS
                    </Button>
                </div>
                <div className="w-44 mr-6 flex items-center justify-center">
                    <Button
                        className="text-white"
                        variant="contained"
                        color="primary"
                        startIcon={<OpenInNewIcon />}
                        href="/"
                        target="_BLANK"
                    >
                        VISIT WEBSITE
                    </Button>
                </div>
            </div>
            {props.openSubInfoIndex === props.siteIndex &&
                <SiteSubInfoCard
                    subinfoData={subInfoData}
                />
            }

        </React.Fragment>

    )
}

export default SiteSummaryCard;