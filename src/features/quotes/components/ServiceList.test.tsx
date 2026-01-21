import { render, screen } from "@testing-library/react";
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