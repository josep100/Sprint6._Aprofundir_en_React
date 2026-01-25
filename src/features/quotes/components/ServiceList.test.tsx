import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import ServiceList from "./ServiceList";


describe("ServiceList", () => {
  it("suma y resta correctamente el precio al marcar y desmarcar servicios", async () => {
    const user = userEvent.setup();

    render(<ServiceList />);

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

    expect(summary).toHaveTextContent("400 €");
  });
});

describe("ServiceList – Web service extra pricing", () => {
    it("displays web options when the Web service is selected", async () =>{
          const user = userEvent.setup();
          render(<ServiceList />);

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
          render(<ServiceList />);

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
          render(<ServiceList />);

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