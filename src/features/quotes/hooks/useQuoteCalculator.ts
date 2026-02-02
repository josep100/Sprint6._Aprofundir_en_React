import { useMemo } from "react";
import quotes from "../services/quoteApi";
import type { SelectedService } from "../context/QuoteContext";

type Params = {
  selectedServices: Record<string, SelectedService>;
  webExtraPrice: number;
};

export const useQuoteTotal = ({ selectedServices, webExtraPrice }: Params) => {
  return useMemo(() => {
    return quotes.reduce((acc, quote) => {
      if (!selectedServices[quote.id]?.checked) return acc;

      if (quote.id === "3") {
        return acc + quote.price + webExtraPrice;
      }

      return acc + quote.price;
    }, 0);
  }, [selectedServices, webExtraPrice]);
};