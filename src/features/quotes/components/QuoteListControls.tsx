import Section from "@/components/layout/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const QuoteListControls = ({search, setSortType, onSearchChange}: {search: string; onSearchChange: (value: string) => void; setSortType: (type: "default" | "alpha") => void;}) => {
        return(
            <Section className="md:w-2/3 flex justify-end gap-6 md:mb-6">
                <Input className="w-1xl" value={search} onChange={e => onSearchChange(e.target.value)} placeholder="Cerca per nom…" />
                <Button className="bg-transparent text-black hover:bg-transparent cursor-pointer" type="button" onClick={() => setSortType("default")}>Reset </Button>
                <Button className="bg-transparent text-black hover:bg-transparent cursor-pointer" type="button" onClick={() => setSortType("alpha")}>A-Z </Button>
            </Section>
        );
}

export default QuoteListControls;