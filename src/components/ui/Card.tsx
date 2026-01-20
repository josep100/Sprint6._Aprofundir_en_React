import type { ReactNode } from "react";

const Card = ({children}: { children: ReactNode }) => {
    return(
        <article className="grid grid-cols-1 lg:grid-cols-2 place-items-center items-center bg-white shadow-lg w-full lg:w-5xl h-52 rounded-3xl">
           {children}
        </article>

    );
}

export default Card;