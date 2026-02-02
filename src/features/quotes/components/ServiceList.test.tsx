import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ServiceList from "./ServiceList";
import QuoteProvider from "@/features/quotes/context/QuoteProvider";
import { useQuote } from "../hooks/useQuote";

const renderWithProvider = () =>
  render(
    <QuoteProvider>
      <ServiceList />
    </QuoteProvider>
);

vi.stubGlobal("crypto", {
  randomUUID: () => "test-id",
});


describe("ServiceList", () => {
  it("suma y resta correctamente el precio al marcar y desmarcar servicios", async () => {
    const user = userEvent.setup();

   renderWithProvider();

    // Total inicial
    const summary = screen.getByTestId("price-summary");
    expect(summary).toHaveTextContent("0 €");

    // Checkbox SEO
    const seoCheckbox = screen.getByLabelText(/afegir seo/i);

    // Marcar SEO (300 €)
    await user.click(seoCheckbox);

    expect(summary).toHaveTextContent("300 €");

    // Checkbox Ads
    const adsCheckbox = screen.getByLabelText(/afegir ads/i);

    // Marcar Ads (400 €)
    await user.click(adsCheckbox);

    expect(summary).toHaveTextContent("700 €");

    // Desmarcar SEO
    await user.click(seoCheckbox);

    expect(summary).toHaveTextContent("700 €");
  });
});

describe("ServiceList – Web service extra pricing", () => {
    it("displays web options when the Web service is selected", async () =>{
          const user = userEvent.setup();
          renderWithProvider();

          const webCheckbox = screen.getByLabelText(/afegir web/i);
          await user.click(webCheckbox);

          expect(
              screen.getByLabelText(/Nombre de pàgines/i)
          ).toBeInTheDocument();

          expect(
              screen.getByLabelText(/Nombre de llenguatges/i)
          ).toBeInTheDocument();

    });

    it("Correctly calculate the extra cost of the web service", async () => {
          const user = userEvent.setup();
          renderWithProvider();

          fireEvent.click(screen.getByLabelText(/afegir web/i));

          fireEvent.change(
            screen.getByLabelText(/nombre de pàgines/i),
            { target: { value: "1" } }
          );

          fireEvent.change(
            screen.getByLabelText(/nombre de llenguatges/i),
            { target: { value: "3" } }
          );

          expect(
              screen.getByText(/620\s*€/i)
          ).toBeInTheDocument();

    });

    it("Resets the extra price when unchecking the Web service", () => {
          renderWithProvider();

          const webCheckbox = screen.getByLabelText(/afegir web/i);

          fireEvent.click(webCheckbox);

          fireEvent.change(
            screen.getByLabelText(/nombre de pàgines/i),
            { target: { value: "2" } }
          );

          fireEvent.change(
            screen.getByLabelText(/nombre de llenguatges/i),
            { target: { value: "1" } }
          );

          // 500 + (2 + 1) * 30 = 590
          expect(screen.getByText(/590\s*€/i)).toBeInTheDocument();

          // Desmarcamos Web
          fireEvent.click(webCheckbox);

          // El total debe volver a 0 (o al resto de servicios activos)
          const summary = screen.getByTestId("price-summary");
          expect(summary).toHaveTextContent("0 €");
    });
});

describe("createBudget", () => {
    it("creates a new budget when called", () => {
    const { result } = renderHook(() => useQuote(), {
      wrapper: QuoteProvider,
    });

    act(() => {
      result.current.setSelectedServices({
        "1": { checked: true, title: "seo" },
        "3": { checked: true, title: "web" },
      });

      result.current.setDates({ pages: 2, languages: 1 });
    });

    act(() => {
      result.current.createBudget({
        name: "Carlos",
        phone: 123456789,
        mail: "carlos@mail.com",
      });
    });

    expect(result.current.budgets).toHaveLength(1);
  });
});