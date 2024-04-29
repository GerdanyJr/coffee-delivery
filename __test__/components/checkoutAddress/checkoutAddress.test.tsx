import { CheckoutAddress } from "@/components/checkout/checkoutAddress";
import { render } from "@testing-library/react";

describe("checkoutAddress", () => {
  it("should render title", () => {
    const { getByText } = render(<CheckoutAddress />);

    const titleComponentElement = getByText("Endereço de entrega");

    expect(titleComponentElement).toBeInTheDocument();
  });
  it("should render form", () => {
    const { getByPlaceholderText } = render(<CheckoutAddress />);

    const inputElement = getByPlaceholderText("CEP");

    expect(inputElement).toBeInTheDocument();
  });
});
