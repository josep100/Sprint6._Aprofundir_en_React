import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useQuote } from "../hooks/useQuote";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"

const BillingToggle = () => {
        const { toggleDiscount } = useQuote();

    return (
        <div className="flex flex-col items-center md:flex-row md:justify-around my-7">
            <Link className="mb-4 md:mb-0" to="/">
                <Button className="bg-transparent text-black hover:bg-transparent cursor-pointer">
                    <ArrowLeft className="h-4 w-4" />
                    Torna a l'inici
                </Button>
            </Link>
            <div className="flex items-center gap-5 md:gap-7">
                <Label>Pagament Mensual</Label>
                <Switch aria-label="discount" className="data-[state=checked]:bg-green-500 scale-150 " onCheckedChange={(checked) => toggleDiscount(checked)} />
                <Label>Pagament Anual</Label>
            </div>
        </div>
    );
}

export default BillingToggle;