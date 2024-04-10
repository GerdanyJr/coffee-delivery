import { OrderInfo } from "@/components/success/orderInfo";
import { render } from "@testing-library/react";
describe("orderInfo", () => {
  it("should render card title orderInfo", () => {
    const { getByText } = render(<OrderInfo />);
    const componentTitle = getByText("Uhu! Pedido confirmado");
    expect(componentTitle).toBeInTheDocument();
  });
});
