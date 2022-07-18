import React from 'react';
import { useState } from 'react';
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


import { ISiteRankBlogCardObj } from "../../Interfaces";

interface IProps {
    siteIndex: number,

    summaryData: ISiteRankBlogCardObj
}

const SiteRankBlogTable = (props: IProps) => {
    const summaryData = props.summaryData;
    return (
        <React.Fragment>
            <a href={summaryData.link} target="_blank">
                <div className="flex flex-row justify-between border-b border-l border-r border-gray-300 p-3 bg-white shadow-xl hover:bg-gray-200 cursor-pointer">
                    <div className="w-full md:w-40 flex flex-row justify-start gap-x-4" >
                        <div className="flex items-center justify-center">
                            <img className="w-16 rounded-full" src={logoImg}></img>
                        </div>
                        <div className="flex flex-col justify-center gap-y-0.5 w-full">
                            <span className="text-xl font-bold">{summaryData.name}</span>
                            <div className='flex md:hidden'>
                                {summaryData.bonus &&
                                    <Button
                                        className="w-24 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                                        endIcon={<KeyboardArrowRightICon className="text-black rounded-full bg-orange-400" />}
                                    >
                                        <img className="h-3" src={giftImg}></img>
                                        <span className="text-xs text-black">{summaryData.bonus}</span>
                                    </Button>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="w-32 md:flex items-center justify-start hidden">
                        {summaryData.bonus &&
                            <Button
                                className="w-24 flex flex-row bg-orange-700 rounded-full px-2 py-0.5 items-center justify-between"
                                endIcon={<KeyboardArrowRightICon className="text-black rounded-full bg-orange-400" />}
                            >
                                <img className="h-3" src={giftImg}></img>
                                <span className="text-xs text-black">{summaryData.bonus}</span>
                            </Button>
                        }
                    </div>
                    <div className="w-40  flex-col items-start justify-center hidden md:flex">
                        {summaryData.features.length > 0 && <div className="text-sm">{summaryData.features[0]}</div>}
                        {summaryData.features.length > 1 && <div className="text-sm">{summaryData.features[1]}</div>}
                    </div>

                    <div className="w-48 flex items-center justify-center">
                        <div className='hidden md:block'>
                            <Button
                                className="text-white text-xs h-10"
                                variant="contained"
                                size='small'
                                color="primary"
                                startIcon={<OpenInNewIcon />}
                                href="/"
                                target="_BLANK"
                            >
                                VISIT WEBSITE
                            </Button>
                        </div>
                        <div className='block md:hidden'>
                            <Button
                                className="text-white text-xs h-10"
                                variant="contained"
                                size='small'
                                color="primary"
                                href="/"
                                target="_BLANK"
                            >
                                Play
                            </Button>
                        </div>
                    </div>
                </div>
            </a>
        </React.Fragment>

    )
}

export default SiteRankBlogTable;