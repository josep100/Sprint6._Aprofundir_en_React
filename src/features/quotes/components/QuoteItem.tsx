const QuoteItem = ({
  name,
  phone,
  mail,
  budget,
}: {
  name: string;
  phone: number;
  mail: string;
  budget: { title: string; price: number }[];
}) => {
  return (
    <>
      <div
        className="
  flex flex-col gap-6 w-2/3
  md:grid md:grid-cols-2 md:gap-8 md:w-2xl
  lg:flex lg:flex-row lg:items-center lg:justify-around
"
      >
        {/* 👤 Cliente */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-xl md:text-2xl">{name}</p>

          <div className="text-sm text-gray-700 flex flex-col md:flex-row md:gap-4">
            <span>{mail}</span>
            <span>{phone}</span>
          </div>
        </div>

        {/* 🧾 Servicios */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-gray-600">
            Serveis contractats
          </p>

          <ul className="flex flex-wrap gap-2">
            {budget.map(({ title }, index) => (
              <li
                key={index}
                className="
            rounded-full bg-gray-100
            px-3 py-1 text-sm
            text-gray-700
          "
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* 💰 Total */}
        <div
          className="
    flex items-center justify-between
    md:col-span-2
    lg:col-span-1
    lg:flex-col lg:items-end lg:justify-center
  "
        >
          <p className="text-gray-700 text-sm">Total</p>
          <p className="font-semibold text-3xl md:text-4xl">
            {budget[0].price} €
          </p>
        </div>
      </div>
    </>
  );
};

export default QuoteItem;
