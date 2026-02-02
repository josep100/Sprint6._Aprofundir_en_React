import HeroBanner from "../components/layout/HeroBanner"
import Section from "../components/layout/Section";
import ServiceList from "../features/quotes/components/ServiceList";
import QuoteRequestForm from "@/features/quotes/components/QuoteRequestForm";
import Card from "@/components/ui/Card";
import QuoteProvider from "@/features/quotes/context/QuoteProvider";
import QuoteList from "@/features/quotes/components/QuoteList";

const CalculatorPage = () => {
    return(
        <>
            <HeroBanner />
            <main>
                <QuoteProvider>
                    <Section>
                        <ServiceList />
                    </Section>
                    <Section>
                        <Card>
                            <QuoteRequestForm />
                        </Card>
                    </Section>
                    <Section>
                        <QuoteList />
                    </Section>
                </QuoteProvider>
            </main>
        </>
    )
}

export default CalculatorPage;