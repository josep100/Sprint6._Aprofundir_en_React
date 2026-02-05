import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import clsx from "clsx";
import { useQuote } from "../hooks/useQuote";

const WebOptions = ({onWebPriceChange,isWebChecked}: {isWebChecked: boolean, onWebPriceChange: (webExtraPrice: number) => void}) => {
    
//    const [dates, setDates] = useState({
//         pages: 0,
//         languages: 0,
//     });
    const {dates, setDates } = useQuote();

    const handleWebTotalOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setDates({
            ...dates,
            [name]: Number(value)
        });

    };

    useEffect(() => {
        if (!isWebChecked) {
            onWebPriceChange(0);
            return;
        }

       const webExtraPrice = (dates.pages + dates.languages) * 30;;
        onWebPriceChange(webExtraPrice);

    },[dates.pages, dates.languages, isWebChecked]);

     return(
            <fieldset className="grid gap-4 col-start-3">
                <div className={clsx(
                    "grid grid-cols-2 justify-items-end gap-1 transition-all duration-300 overflow-hidden",
                    {
                        "max-h-40 opacity-100": isWebChecked,
                        "max-h-0 opacity-0": !isWebChecked
                    }
                )}>
                    <Label htmlFor="pages"> Nombre de pàgines </Label> <Input id="pages" name="pages" value = {dates.pages} onChange={handleWebTotalOptions} className="w-18 text-center" />
                    <Label htmlFor="languages"> Nombre de llenguatges </Label> <Input id="languages" name="languages" value = {dates.languages} onChange={handleWebTotalOptions} className="w-18 text-center" />
                </div>
            </fieldset>
     )
}

export default WebOptions;