
const PriceSummary = ({total}: {total: number}) => {
        return(
            <section className="w-full flex justify-center md:justify-end gap-7 text-2xl font-semibold mt-4 ">
                <p>Preu pressuposat: <span>{total} €</span></p>
            </section>

        );
}

export default PriceSummary;