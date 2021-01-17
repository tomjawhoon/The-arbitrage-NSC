

export interface Datum {
    Date: string;
    Price: string;
    Open: string;
    High: string;
    Low: string;
    Vol: string;
    Change: string;
}

export interface Datum {
    Date: string;
    MarketCap: string;
    Volume: string;
    Open: string;
    Close: string;
}


export interface RootObject {
    data: Datum[];
}



