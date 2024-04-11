import { Payment } from "@/components/checkout/payment";
import { render } from "@testing-library/react";

describe("Payment tests", () => {
  it("SHOULD render correctly", () => {
    const { getByText } = render(<Payment />);
    const payment = getByText(/o pagamento é feito/i);
    expect(payment).toBeTruthy();
  });
});
