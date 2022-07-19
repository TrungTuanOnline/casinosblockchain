export interface ISiteSummaryObj {
    rank: number,
    // logo: da,
    name: string,
    link: string,
    bonus: string | null,
    rating: string,
    features: string[]
}

export interface ISiteRankBlogCardObj {
    rank: number,
    // logo: da,
    name: string,
    link: string,
    bonus: string | null,
    features: string[]
}

export interface ISiteSubInfoObj {
    name: string,
    link: string,
    about: string,
    overview: {
        established: string | null,
        licence: string | null,
        bonus: string | null,
        wageringRequrement: string | null,
        noDepositFaucet: string | null,
        liveChat: string
    },
    rating: {
        bonus: string,
        lookAndFeel: string,
        LicenceAndSafety: string,
        gameSelection: string,
        paymentOption: string,
        customerSupport: string,
        customerReview: string,
        total: string
    }
}


export interface IPopularCasinoObj {
    name: string,
    about: string,
    // link: string
}

export interface IPopularCasinoObj {
    name: string,
    about: string,
    // link: string
}

export interface ISortStringObj {
    id: number,
    str: string,
    Link: string
}

export interface IMainCardDataObj {
    id: string,
    logo: any,
    title: string,
    miniTitle: string,
    link: string,
    gameLogos: Array<IGameLogos>,
    count: number | null
}

export interface ITopSectionCardDataObj {
    id: number,
    logo: any,
    title: string,
    miniTitle: string,
    gameLogos: Array<IGameLogos>,
    count: number
}

export interface IGameLogos {
    logo: any,
    link: string
}

export interface IReadMoreDataObj {
    id: number,
    image: any,
    date: string,
    title: string,
    content: string,
    link: string,
}
