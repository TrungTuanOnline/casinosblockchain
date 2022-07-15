import { ISiteSubInfoObj } from "../../Interfaces";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


interface IProps {
    subinfoData: ISiteSubInfoObj
}


const SiteSubInfoCard = (props: IProps) => {
    const subinfoData = props.subinfoData;
    return (
        <div className="pb-4">
            <div className="flex flex-col pt-6 pb-4 px-6 shadow-xl border-b border-l border-r border-gray-300 rounded-b-lg bg-white">
                <div className="flex flex-row justify-between items-center border-b pb-1">
                    <div className="text-xl">
                        {subinfoData.name}
                    </div>
                    <div>
                        <Button
                            className="text-blue text-xs"
                            endIcon={<OpenInNewIcon className="w-4"/>}
                            href="/"
                            target="_BLANK"
                        >
                            {subinfoData.link}
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row py-5">
                    <div className="w-1/3 flex flex-col pr-10 gap-y-4">
                        <div className="flex flex-row gap-x-3">
                            <InfoOutlinedIcon/>
                            <div className="font-bold">About {subinfoData.name}</div>
                        </div>
                        <div className="text-sm">
                            {subinfoData.about}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col px-10  gap-y-4">
                        <div className="flex flex-row gap-x-3">
                            <AssignmentOutlinedIcon/>
                            <div className="font-bold">Overview</div>
                        </div>
                        <div className="flex flex-col border">
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 h-8">
                                <div className="text-sm">
                                    Website
                                </div>
                                <Button
                                    className="text-blue text-sm lowercase"
                                    endIcon={<OpenInNewIcon className="w-4"/>}
                                    href="/"
                                    target="_BLANK"
                                >
                                    {subinfoData.link}
                                </Button>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 h-8">
                                <div className="text-sm">
                                    Established
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.established}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 h-8">
                                <div className="text-sm">
                                    Licence
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.licence ? subinfoData.overview.licence : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 h-8">
                                <div className="text-sm">
                                    Bonus
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.bonus ? subinfoData.overview.bonus : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 h-8">
                                <div className="text-sm">
                                    Wagering Requirement
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.wageringRequrement ? subinfoData.overview.wageringRequrement : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-white px-3 h-8">
                                <div className="text-sm">
                                    No Deposit Bonus
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.noDepositFaucet ? subinfoData.overview.noDepositFaucet : "-"}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between bg-blue-100 px-3 h-8">
                                <div className="text-sm">
                                    Live Chat
                                </div>
                                <div className="text-sm">
                                    {subinfoData.overview.liveChat}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col pl-10  gap-y-4">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-x-3">
                                <StarBorderOutlinedIcon/>
                                <div className="font-bold">Rating</div>
                            </div>
                            <div className="font-bold text-Green-600">
                                {subinfoData.rating.total}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Bonuses
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.bonus)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.bonus}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Look & Feel
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.lookAndFeel)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.lookAndFeel}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Licencing & Safety
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.LicenceAndSafety)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.LicenceAndSafety}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Game Selection
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.gameSelection)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.gameSelection}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Payment Options
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.paymentOption)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.paymentOption}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Customer Support
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.customerSupport)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.customerSupport}/5
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between border-b h-8">
                                <div className="text-sm">
                                    Customer Reviews
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <Rating readOnly defaultValue={Number(subinfoData.rating.customerReview)} precision={0.1} className="mr-3"/>
                                    <div className="text-sm">
                                        {subinfoData.rating.customerReview}/5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        
    )
}

export default SiteSubInfoCard;