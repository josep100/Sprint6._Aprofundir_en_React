import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useQuote } from "../hooks/useQuote";

const BillingToggle = () => {
        const { toggleDiscount } = useQuote();

    return (
        <div className="flex justify-center gap-6 my-7">
            <Label>Pagament Mensual</Label>
            <Switch className="data-[state=checked]:bg-green-500 scale-150 " onCheckedChange={(checked) => toggleDiscount(checked)} />
            <Label>Pagament Anual</Label>
        </div>
    );
}

export default BillingToggle;