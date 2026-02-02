import type { ReactNode } from "react";
import clsx from "clsx";

const Card = ({children, expanded = false, className}: { children: ReactNode, expanded?: boolean, className?: string }) => {
    return(
        <article className={clsx(
            "bg-white shadow-lg w-full lg:w-5xl rounded-3xl transition-all duration-300 ease-in-out",
            {
               "min-h-80 border-2 border-green-400": expanded,
               "min-h-52": !expanded 
            },
            className
        )}>
            {children}
        </article>
    );
}

export default Card;