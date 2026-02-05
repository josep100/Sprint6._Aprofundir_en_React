import { useMemo } from "react";
import quotes from "../services/quoteApi";
import type { SelectedService } from "../context/QuoteContext";

type Params = {
  selectedServices: Record<string, SelectedService>;
  webExtraPrice: number;
  isDiscountActive: boolean;
};

export const useQuoteTotal = ({
  selectedServices,
  webExtraPrice,
  isDiscountActive,
}: Params) => {
  return useMemo(() => {
    const servicesTotal = quotes.reduce((acc, quote) => {
      if (!selectedServices[quote.id]?.checked) return acc;
      return acc + quote.price;
    }, 0);

    const totalWithoutDiscount = servicesTotal + webExtraPrice;

    return isDiscountActive
      ? totalWithoutDiscount * 0.8
      : totalWithoutDiscount;
  }, [selectedServices, webExtraPrice, isDiscountActive]);
};