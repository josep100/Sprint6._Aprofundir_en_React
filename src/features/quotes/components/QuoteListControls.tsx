import Section from "@/components/layout/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const QuoteListControls = ({search, setSortType, onSearchChange}: {search: string; onSearchChange: (value: string) => void; setSortType: (type: "default" | "alpha") => void;}) => {
        return(
            <Section className="w-2/3 flex justify-end gap-6 mb-6">
                <Input className="w-1xl" value={search} onChange={e => onSearchChange(e.target.value)} placeholder="Cerca per nom…" />
                <Button type="button" onClick={() => setSortType("default")}>Import </Button>
                <Button type="button" onClick={() => setSortType("alpha")}>Nom </Button>
            </Section>
        );
}

export default QuoteListControls;