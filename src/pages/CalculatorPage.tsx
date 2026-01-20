import HeroBanner from "../components/layout/HeroBanner"
import Section from "../components/layout/Section";
import ServiceList from "../features/quotes/components/ServiceList";

const CalculatorPage = () => {
    return(
        <>
            <HeroBanner />
            <main>
                <Section>
                    <ServiceList />
                </Section>
            </main>
        </>
    )
}

export default CalculatorPage;