import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const ServiceCard = ({id, title, description, price, onChange}: {id: string, title: string, description: string, price: number, onChange: (id: string, checked: boolean) => void}) => {
    return(
        <>
            <div className="ml-1.5">
                <h2 className="text-3xl mb-2 font-semibold">{title}</h2>
                <p className="max-w-2xs">{description}</p>
            </div>
            <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">{price} €</h3>
                <fieldset className="flex gap-3">
                    <Checkbox id = {id} onCheckedChange = {(checked) => onChange(id, checked === true)} />
                    <Label htmlFor = {id}>Afegir</Label>
                </fieldset>
            </div>
        </>
    );
}

export default ServiceCard;