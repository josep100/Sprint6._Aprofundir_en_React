import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import WebOptions from "./WebOptions";
import type { serviceCard } from "../types/quote. types";

const ServiceCard = ({id, title, description, price, selectedServices,isWebChecked, onChange, onWebPriceChange}: serviceCard) => {
    return(
        <>
            <div className="ml-1.5">
                <h2 className="text-3xl mb-2 font-semibold">{title}</h2>
                <p className="max-w-2xs">{description}</p>
            </div>
            <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">{price} €</h3>
                <fieldset className="flex gap-3">
                    <Checkbox id = {id} onCheckedChange = {(checked) => onChange(id, checked === true)}  />
                    <Label htmlFor = {id}>Afegir { title }</Label>
                </fieldset>
            </div>
            {id === "3" && selectedServices[id] && <WebOptions isWebChecked = {isWebChecked} onWebPriceChange = {onWebPriceChange} />}
        </>
    );
}

export default ServiceCard;