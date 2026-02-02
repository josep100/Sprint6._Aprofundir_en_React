export interface Quote {
    id: string,
    title: string,
    description: string,
    price: number
};

export interface serviceCard {
    id: string, 
    title: string, 
    description: string, 
    price: number, 
    selectedServices: boolean,
    isWebChecked: boolean, 
    onChange: (id: string, checked: boolean, title: string) => void, 
    onWebPriceChange: (webExtraPrice: number) => void
};

