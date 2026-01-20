import type { ReactNode } from "react";

const Section = ({children}: { children: ReactNode }) => {
    return(
        <section className="flex flex-col items-center gap-4 mt-8">
            {children}
        </section>
    );
}

export default Section;