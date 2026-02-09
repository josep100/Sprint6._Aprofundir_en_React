import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import WebOptions from "./WebOptions";
import type { serviceCard } from "../types/quote. types";
import { useQuote } from "../hooks/useQuote";

const ServiceCard = ({id, title, description, price, selectedServices,isWebChecked, onChange, onWebPriceChange}: serviceCard) => {

    const { isDiscountActive } = useQuote();
    return(
        <>
            <div className="ml-1.5">
                <h2 className="text-3xl mb-2 font-semibold">{title}</h2>
                <p className="max-w-2xs">{description}</p>
            </div>
            <div className="flex flex-col md:items-center items-start">
                {isDiscountActive? <p className="text-red-500 mb-1.5">Estalvia un 20%</p> : ""}
                <h3 className="text-3xl font-bold">{isDiscountActive? price * 0.8: price} €</h3>
            </div>
            <fieldset className="flex items-center justify-start md:justify-end gap-3">
                    <Checkbox id = {id} checked={!!selectedServices} onCheckedChange = {(checked) => onChange(id, checked === true,title)}  />
                    <Label htmlFor = {id}>Afegir { title }</Label>
            </fieldset>
            {id === "3" && selectedServices && <WebOptions isWebChecked = {isWebChecked} onWebPriceChange = {onWebPriceChange} />}
        </>
    );
}

export default ServiceCard;