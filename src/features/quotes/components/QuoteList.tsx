import Card from "@/components/ui/Card";
import { useQuote } from "../hooks/useQuote";
import QuoteItem from "./QuoteItem";

const QuoteList = () => {
    const {budgets} = useQuote();

    return(
        <>
            <div className="w-2/3 border-t-2 border-dashed border-gray-300 my-7"></div>
            <div className="w-2/3 flex justify-start">
            <h2 className="font-semibold text-3xl">Pressupostos en curs:</h2>
            </div>
            {budgets.map(({id, name, phone, mail, budget}) => (
                <Card key={id} className="grid grid-cols-3 justify-items-center pt-15">
                    <QuoteItem name={name} phone={phone} mail={mail} budget={budget} />
                </Card>
            ))}
            {budgets.length === 0 && <p>No hay presupuestos todavía.</p>}
        </>
    )

};

export default QuoteList;