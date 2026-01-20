import { useState } from "react";
import Card from "../../../components/ui/Card";
import ServiceCard from "../../../features/quotes/components/ServiceCard";
import quotes from "../services/quoteApi"
import PriceSummary from "./PriceSummary";

const ServiceList = () => {
   const [total, setTotal] = useState(0);

    const handleServiceChange = (id: string, checked: boolean) => {
            const totalPrice = quotes.filter(quote => quote.id === id).reduce((accumulator, currentValue) => accumulator + currentValue.price,0);
            setTotal(prev => checked ? prev + totalPrice : prev - totalPrice);      
    }

    return(
        <>
            {quotes.map(quote => (
                <Card key={quote.id}>
                    <ServiceCard id = {quote.id} title = {quote.title} description = {quote.description} price = {quote.price} onChange = {handleServiceChange} />
                </Card>
            ))}
            <PriceSummary total={total} />
        </>
    );
}

export default ServiceList;