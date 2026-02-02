
const PriceSummary = ({total}: {total: number}) => {
        return(
            <section className="w-full grid grid-cols-3 text-2xl font-semibold mt-4 ">
                <p className="col-start-3" role="status" aria-live="polite" data-testid="price-summary">
                    Preu pressupostat: <span>{total} €</span>
                </p>
            </section>

        );
}

export default PriceSummary;