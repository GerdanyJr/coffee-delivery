import { ProductCart } from "@/components/UI/productCart";
import { render } from "@testing-library/react";

describe("Product Card tests", () => {
  it("SHOULD renders correctly", () => {
    const name = "teste";
    const { getByText } = render(<ProductCart name={name} price="" />);

    const cartButton = getByText(name);

    expect(cartButton).toBeInTheDocument();
  });
});
