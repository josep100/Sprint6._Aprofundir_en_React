import { useEffect, useState } from "react";
import { QuoteContext } from "./QuoteContext";
import { useQuoteTotal } from "../hooks/useQuoteCalculator";
import type { ReactNode } from "react";
import type { SelectedService } from "./QuoteContext";


// features/quotes/types/budget.ts

type BudgetService =
    {
      id: string,
      name: string;
      phone: number;
      mail: string;
      budget: Array<
        {
            title: string,
            price: number
        }
      >
    }

const QuoteProvider = ({children}: {children: ReactNode}) => {

    const [selectedServices, setSelectedServices] = useState({});
    const [webExtraPrice, setWebExtraPrice] = useState(0);
    const [isDiscountActive, setIsDiscountActive] = useState(false)
    const [budgets, setBudgets] = useState<BudgetService[]>(() => {
        const stored = localStorage.getItem("budgets");
        return stored ? JSON.parse(stored) : [];
    });
    const [dates, setDates] = useState({
        pages: 0,
        languages: 0,
    });
    
    const total = useQuoteTotal({
        selectedServices,
        webExtraPrice,
        isDiscountActive
    });

    const createBudget = ({name, phone, mail}: {name:string, phone:number, mail:string}) => {
            const budgetArray = (Object.values(selectedServices)as SelectedService[]).map(service => ({
                    title: service.title === "Web" ? `${service.title} (${dates.pages} pàgines, ${dates.languages} llenguatges)` 
                    : service.title,
                    price: total
            }));
                
            const newBudget: BudgetService = {
                id: crypto.randomUUID(),
                name: name,
                phone: phone,
                mail: mail,
                budget: budgetArray,
            };
            setBudgets(prev => [...prev, newBudget]);
    }

    useEffect(() => {
        localStorage.setItem("budgets", JSON.stringify(budgets));
    }, [budgets]);

    const resetQuote = () => {
        setSelectedServices({});
        setWebExtraPrice(0);
        setDates({
            pages: 0,
            languages: 0,
        });
    };

    const toggleDiscount = (checked: boolean) => {
         setIsDiscountActive(checked);
    }

    const value = {
        selectedServices, 
        setSelectedServices,
        webExtraPrice, 
        setWebExtraPrice,
        dates, 
        setDates,
        total,
        createBudget,
        budgets,
        resetQuote,
        toggleDiscount,
        isDiscountActive
    };

    return(
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
    );

};

export default QuoteProvider;