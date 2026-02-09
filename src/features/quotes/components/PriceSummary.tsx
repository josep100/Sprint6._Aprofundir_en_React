
const PriceSummary = ({total}: {total: number}) => {
        return(
            <section className="w-full flex justify-center md:grid md:grid-cols-3 text-2xl font-semibold mt-4 ">
                <p className="md:col-start-3" role="status" aria-live="polite" data-testid="price-summary">
                    Preu pressupostat: <span>{total} €</span>
                </p>
            </section>

        );
}

export default PriceSummary;