import { OrderSummary } from "@/components/checkout/orderSummary";
import { render } from "@testing-library/react";

describe("Order summary tests", () => {
  it("SHOULD render correctly", () => {
    const { getByText } = render(<OrderSummary />);

    const cartButton = getByText(/cafés selecionados/i);

    expect(cartButton).toBeInTheDocument();
  });
});
