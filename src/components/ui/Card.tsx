import type { ReactNode } from "react";
import clsx from "clsx";

const Card = ({children, expanded = false}: { children: ReactNode, expanded: boolean }) => {
    return(
        <article className={clsx(
            "grid grid-cols-1 lg:grid-cols-2 place-items-center items-center bg-white shadow-lg w-full lg:w-5xl rounded-3xl transition-all duration-300 ease-in-out",
            {
               "min-h-80 border-2 border-green-400": expanded,
               "min-h-52": !expanded 
            }
        )}>
            {children}
        </article>
    );
}

export default Card;