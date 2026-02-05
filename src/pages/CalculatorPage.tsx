import HeroBanner from "../components/layout/HeroBanner"
import Section from "../components/layout/Section";
import ServiceList from "../features/quotes/components/ServiceList";
import QuoteRequestForm from "@/features/quotes/components/QuoteRequestForm";
import Card from "@/components/ui/Card";
import QuoteProvider from "@/features/quotes/context/QuoteProvider";
import QuoteList from "@/features/quotes/components/QuoteList";
import BillingToggle from "@/features/quotes/components/BillingToggle";

const CalculatorPage = () => {
    return(
        <>
            <HeroBanner />
            <main>
                <QuoteProvider>
                    <BillingToggle />
                    <Section className="flex flex-col items-center gap-4 mt-8">
                        <ServiceList />
                    </Section>
                    <Section className="flex flex-col items-center gap-4 mt-8">
                        <Card>
                            <QuoteRequestForm />
                        </Card>
                    </Section>
                    <Section className="flex flex-col items-center gap-4 mt-8">
                        <QuoteList />
                    </Section>
                </QuoteProvider>
            </main>
        </>
    )
}

export default CalculatorPage;