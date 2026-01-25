import { useState } from "react";
import Card from "../../../components/ui/Card";
import ServiceCard from "../../../features/quotes/components/ServiceCard";
import quotes from "../services/quoteApi";
import PriceSummary from "./PriceSummary";

const ServiceList = () => {
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
  const [webExtraPrice, setWebExtraPrice] = useState(0);

  const handleServiceChange = (id: string, checked: boolean) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: checked,
    }));

    if (id === "3" && !checked) {
      setWebExtraPrice(0);
    }
  };

  const onWebPriceChange = (price: number) => {
    setWebExtraPrice(price);
  };

  const total = quotes.reduce((acc, quote) => {
    if (!selectedServices[quote.id]) return acc;

    if (quote.id === "3") {
      return acc + quote.price + webExtraPrice;
    }

    return acc + quote.price;
  }, 0);

  return (
    <>
      {quotes.map(quote => {
            const isWeb = quote.title === "Web"; // o mejor: quote.type === "web"
            const isExpanded = isWeb && selectedServices[quote.id];

            return (
                <Card key={quote.id} expanded={isExpanded}>
                <ServiceCard
                    id={quote.id}
                    title={quote.title}
                    description={quote.description}
                    price={quote.price}
                    selectedServices={selectedServices}
                    isWebChecked = {isExpanded}
                    onChange={handleServiceChange}
                    onWebPriceChange={onWebPriceChange}
                />
                </Card>
            );
        })}

      <PriceSummary total={total} />
    </>
  );
};

export default ServiceList;