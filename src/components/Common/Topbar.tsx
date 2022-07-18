import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { US, FR, ID, KR, PT, ES, TR, VN } from 'country-flag-icons/react/1x1';

const useStyles = makeStyles({
    menuPaper: {
        backgroundColor: "rgb(231 229 228) !important"
    }
});

const Topbar = () => {
    const { t, i18n } = useTranslation();

    const [openBonusMenu, setOpenBonusMenu] = useState(false);
    const [overBonusMenu, setOverBonusMenu] = useState(false);
    const [openCryptoCurrencyMenu, setOpenCryptoCurrencyMenu] = useState(false);
    const [overCryptoCurrencyMenu, setOverCryptoCurrencyMenu] = useState(false);
    const [openGameMenu, setOpenGameMenu] = useState(false);
    const [overGameMenu, setOverGameMenu] = useState(false);
    const [openGuideMenu, setOpenGuideMenu] = useState(false);
    const [overGuideMenu, setOverGuideMenu] = useState(false);

    // set language
    const classes = useStyles();
    const [languageMenu, setLanguageMenu] = useState<null | HTMLElement>(null);
    const [choosedLanguage, setChoosedLanguage] = useState<string>("English");
    const changeLanguage = (country: string) => {
        setLanguageMenu(null);
        switch (country) {
            case "English":
                i18n.changeLanguage('en');
                break;
            case "French":
                i18n.changeLanguage('fr');
                break;
            case "Indonesian":
                i18n.changeLanguage('id');
                break;
            case "Korean":
                i18n.changeLanguage('kr');
                break;
            case "Portuguese":
                i18n.changeLanguage('pt');
                break;
            case "Spanish":
                i18n.changeLanguage('sp');
                break;
            case "Turkish":
                i18n.changeLanguage('tr');
                break;
            case "Vietnamese":
                i18n.changeLanguage('vi');
                break;
            default:
                i18n.changeLanguage('en');
                break;
        }
        setChoosedLanguage(country);
    }

    const changeLanguageIcon = () => {
        switch (choosedLanguage) {
            case "English":
                return (
                    <div className="flex flex-row w-32">
                        <US className="w-6 rounded-full" />
                        <span className="ml-1">English</span>
                    </div>
                );
            case "French":
                return (
                    <div className="flex flex-row w-32">
                        <FR className="w-6 rounded-full" />
                        <span className="ml-1">Français</span>
                    </div>
                );
            case "Indonesian":
                return (
                    <div className="flex flex-row w-32">
                        <ID className="w-6 rounded-full" />
                        <span className="ml-1">Indonesia</span>
                    </div>
                );
            case "Korean":
                return (
                    <div className="flex flex-row w-32">
                        <KR className="w-6 rounded-full" />
                        <span className="ml-1">한국어</span>
                    </div>
                );
            case "Portuguese":
                return (
                    <div className="flex flex-row w-32">
                        <PT className="w-6 rounded-full" />
                        <span className="ml-1">Português</span>
                    </div>
                );
            case "Spanish":
                return (
                    <div className="flex flex-row w-32">
                        <ES className="w-6 rounded-full" />
                        <span className="ml-1">Español</span>
                    </div>
                );
            case "Turkish":
                return (
                    <div className="flex flex-row w-32">
                        <TR className="w-6 rounded-full" />
                        <span className="ml-1">Türk</span>
                    </div>
                );
            case "Vietnamese":
                return (
                    <div className="flex flex-row w-32">
                        <VN className="w-6 rounded-full" />
                        <span className="ml-1">Tiếng Việt</span>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-row w-32">
                        <US className="w-6 rounded-full" />
                        <span className="ml-1">English</span>
                    </div>
                );
        }
    }

    return (
        <div className="flex justify-center item-center bg-black">
            <div className="w-11/12 flex flex-row justify-between">
                <div className="text-2xl cursor-pointer">
                    <span className="text-red-700">casinos</span>
                    <span className="text-blue-700">blockchain</span>
                    <span className="text-white">.io</span>
                </div>
                <div className="flex flex-row gap-x-2 md:gap-x-5">
                    <div className="relative">
                        <Button
                            href="/"
                            className="text-white hover:text-amber-500"
                        >
                            CASINOS
                        </Button>
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                            endIcon={(openBonusMenu || overBonusMenu) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onMouseEnter={() => { setOpenBonusMenu(true) }}
                            onMouseLeave={() => { setOpenBonusMenu(false) }}
                        >
                            BONUSES
                        </Button>
                        {(openBonusMenu || overBonusMenu) &&
                            <div
                                className="absolute flex flex-col gap-y-2 w-full bg-neutral-800 py-2 rounded"
                                onMouseEnter={() => { setOverBonusMenu(true) }}
                                onMouseLeave={() => { setOverBonusMenu(false) }}
                            >
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Bitcoin Free Spins
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Bitcoin Faucets
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                            endIcon={(openCryptoCurrencyMenu || overCryptoCurrencyMenu) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onMouseEnter={() => { setOpenCryptoCurrencyMenu(true) }}
                            onMouseLeave={() => { setOpenCryptoCurrencyMenu(false) }}
                        >
                            CRYPTOCURRENCIES
                        </Button>
                        {(openCryptoCurrencyMenu || overCryptoCurrencyMenu) &&
                            <div
                                className="absolute flex flex-col gap-y-2 w-32 right-2.5 bg-neutral-800 py-2 rounded"
                                onMouseEnter={() => { setOverCryptoCurrencyMenu(true) }}
                                onMouseLeave={() => { setOverCryptoCurrencyMenu(false) }}
                            >
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Bitcoin
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Ethereum
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Tether
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Dogecoin
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Litecoin
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Ripple
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Binance
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Cardano
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                            endIcon={(openGameMenu || overGameMenu) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onMouseEnter={() => { setOpenGameMenu(true) }}
                            onMouseLeave={() => { setOpenGameMenu(false) }}
                        >
                            GAMES
                        </Button>
                        {(openGameMenu || overGameMenu) &&
                            <div
                                className="absolute flex flex-col gap-y-2 w-full bg-neutral-800 py-2 rounded"
                                onMouseEnter={() => { setOverGameMenu(true) }}
                                onMouseLeave={() => { setOverGameMenu(false) }}
                            >
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Crash
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Jackpots
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Slots
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Roulette
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Blackjack
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Dice
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Plinko
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Poker
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="relative">
                        <Link to="/game-providers">
                            <Button
                                className="text-white hover:text-amber-500"
                            >
                                PROVIDERS
                            </Button>
                        </Link>
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                            endIcon={(openGuideMenu || overGuideMenu) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            onMouseEnter={() => { setOpenGuideMenu(true) }}
                            onMouseLeave={() => { setOpenGuideMenu(false) }}
                        >
                            GUIDES
                        </Button>
                        {(openGuideMenu || overGuideMenu) &&
                            <div
                                className="absolute flex flex-col gap-y-2 w-36 right-1 bg-neutral-800 py-2 rounded"
                                onMouseEnter={() => { setOverGuideMenu(true) }}
                                onMouseLeave={() => { setOverGuideMenu(false) }}
                            >
                                <Link to='/best-bitcoin-wallet-for-online-gambling' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Best Bitcoin Wallet for Online Gambling
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    What Are the Top Stablecoin Casinos?
                                </Link>
                                <Link to='/' className=" px-2 text-white text-sm hover:bg-neutral-700">
                                    Your Ultimate Guide to MetaMask Gambling
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                        >
                            NEWS
                        </Button>
                    </div>
                    <div className="relative">
                        <Button
                            className="text-white hover:text-amber-500"
                            aria-controls={Boolean(languageMenu) ? 'language-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(languageMenu) ? 'true' : undefined}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { setLanguageMenu(event.currentTarget) }}
                        >
                            {choosedLanguage ?
                                changeLanguageIcon() :
                                <US className="w-6 rounded-full" />
                            }
                        </Button>
                        <Menu
                            id="language-menu"
                            anchorEl={languageMenu}
                            open={Boolean(languageMenu)}
                            onClose={() => { setLanguageMenu(null) }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            classes={{ paper: classes.menuPaper }}
                        >
                            <MenuItem onClick={() => { changeLanguage("English") }}>
                                <US className="w-6 rounded-full" />
                                <span className="ml-3">English</span>
                            </MenuItem>
                            <MenuItem onClick={() => { changeLanguage("French") }}>
                                <FR className="w-6 rounded-full" />
                                <span className="ml-3">Français</span>
                            </MenuItem>
                            <MenuItem onClick={() => { changeLanguage("Indonesian") }}>
                                <ID className="w-6 rounded-full" />
                                <span className="ml-3">Indonesia</span>
                            </MenuItem>
                            <MenuItem onClick={() => {changeLanguage("Korean")}}>
                                <KR className="w-6 rounded-full"/>
                                <span className="ml-3">한국어</span>
                            </MenuItem>
                            <MenuItem onClick={() => {changeLanguage("Portuguese")}}>
                                <PT className="w-6 rounded-full"/>
                                <span className="ml-3">Português</span>
                            </MenuItem>
                            <MenuItem onClick={() => { changeLanguage("Spanish") }}>
                                <ES className="w-6 rounded-full" />
                                <span className="ml-3">Español</span>
                            </MenuItem>
                            <MenuItem onClick={() => { changeLanguage("Turkish") }}>
                                <TR className="w-6 rounded-full" />
                                <span className="ml-3">Türk</span>
                            </MenuItem>
                            <MenuItem onClick={() => { changeLanguage("Vietnamese") }}>
                                <VN className="w-6 rounded-full" />
                                <span className="ml-3">Tiếng Việt</span>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar;