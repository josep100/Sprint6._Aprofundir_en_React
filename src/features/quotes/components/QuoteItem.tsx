

const QuoteItem = ({ name, phone, mail, budget }: { 
    name: string, 
    phone: number, 
    mail: string, 
    budget: { title: string; price: number }[] 
}) => {
        
    return(
        <>
            <div>
                <p className="font-semibold text-3xl">{name}</p>
                <p className="text-gray-400">{mail}</p>
                <p className="text-gray-400">{phone}</p>
            </div>
            <div>
                <p className="font-semibold">Serveis contractats:</p>
                <ul>
                    {budget.map(({title}, index) => (
                    <li key={index}>
                        {title}
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <p className="text-gray-400 text-2xl">Total:</p>
                <p className="font-semibold text-4xl">{budget[0].price} €</p>
            </div>
        </>
    );
};

export default QuoteItem