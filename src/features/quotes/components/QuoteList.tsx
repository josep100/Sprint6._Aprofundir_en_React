import Card from "@/components/ui/Card";
import { useQuote } from "../hooks/useQuote";
import QuoteItem from "./QuoteItem";
import QuoteListControls from "./QuoteListControls";
import { useMemo, useState } from "react";

type SortType = "default" | "alpha";

const QuoteList = () => {
     const {budgets} = useQuote();
     const [sortType, setSortType] = useState<SortType>("default");
     const [search, setSearch] = useState("");

     const processedBudgets = useMemo(() => {
        let result = [...budgets];

        // 🔍 Filtrado
        if (search.trim() !== "") {
            const query = search.toLowerCase();
            result = result.filter(budget =>
            budget.name.toLowerCase().includes(query)
            );
        }

        // 🔤 Orden
        if (sortType === "alpha") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [budgets, search, sortType]);

    return(
        <>
            <div className="w-2/3 border-t-2 border-dashed border-gray-300 my-7"></div>
            <div className="w-2/3 flex justify-start">
               <h2 className="font-semibold text-2xl md:text-3xl">Pressupostos en curs:</h2>
            </div>
            <QuoteListControls search = {search} setSortType = {setSortType} onSearchChange={setSearch}/>
            {processedBudgets.map(({id, name, phone, mail, budget}) => (
                <Card key={id} className="grid grid-cols-1  justify-items-center py-7">
                    <QuoteItem name={name} phone={phone} mail={mail} budget={budget} />
                </Card>
            ))}
            {budgets.length === 0 && <p>Encara no hi ha pressupostos.</p>}
        </>
    )

};

export default QuoteList;