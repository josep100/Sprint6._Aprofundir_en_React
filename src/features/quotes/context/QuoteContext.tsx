import { createContext } from "react";

export type SelectedService = {
  checked: boolean;
  title: string;
};

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

type QuoteContextType = {
  selectedServices: Record<string, SelectedService>;
  setSelectedServices: React.Dispatch<React.SetStateAction<Record<string, SelectedService>>>;

  webExtraPrice: number;
  setWebExtraPrice: React.Dispatch<React.SetStateAction<number>>;

  total: number;

  dates: {
    pages: number,
    languages: number
  };
  setDates: React.Dispatch<React.SetStateAction<{
    pages: number,
    languages: number
  }>>;

  createBudget: ({name, phone, mail}: {name:string, phone:number, mail:string}) => void;
  budgets:BudgetService[];
  resetQuote: () => void;

};

export const QuoteContext = createContext<QuoteContextType | null>(null);
