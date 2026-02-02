import Card from "../../../components/ui/Card";
import ServiceCard from "../../../features/quotes/components/ServiceCard";
import quotes from "../services/quoteApi";
import PriceSummary from "./PriceSummary";
import { useQuote } from "../hooks/useQuote";
import { useQuoteTotal } from "../hooks/useQuoteCalculator";

const ServiceList = () => {
  const {selectedServices, setSelectedServices, webExtraPrice, setWebExtraPrice} = useQuote();
  const total = useQuoteTotal({selectedServices, webExtraPrice});

  const handleServiceChange = (id: string, checked: boolean, title: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: {
            checked:checked,
            title: title
          }
    }));

    if (id === "3" && !checked) {
      setWebExtraPrice(0);
    }
  };

  const onWebPriceChange = (price: number) => {
    setWebExtraPrice(price);
  };

  return (
    <>
      {quotes.map(quote => {
            const isWeb = quote.title === "Web"; // o mejor: quote.type === "web"
            const isExpanded = isWeb && selectedServices[quote.id]?.checked === true;

            return (
                <Card key={quote.id} expanded={isExpanded} className = "grid grid-cols-1 lg:grid-cols-2 place-items-center items-center">
                <ServiceCard
                    id={quote.id}
                    title={quote.title}
                    description={quote.description}
                    price={quote.price}
                    selectedServices={selectedServices[quote.id]?.checked ?? false}
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