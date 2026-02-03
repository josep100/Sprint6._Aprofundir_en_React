import type { ReactNode } from "react";

const Section = ({className, children}: { children: ReactNode, className: string }) => {
    return(
        <section className={className}>
            {children}
        </section>
    );
}

export default Section;

//"flex flex-col items-center gap-4 mt-8