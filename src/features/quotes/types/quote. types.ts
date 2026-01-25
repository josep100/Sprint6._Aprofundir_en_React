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
    selectedServices: {[id: string]: boolean},
    isWebChecked: boolean, 
    onChange: (id: string, checked: boolean) => void, 
    onWebPriceChange: (webExtraPrice: number) => void
};

