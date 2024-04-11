import { ProductList } from "@/components/home/productList";
import { render } from "@testing-library/react";
import { COOFFES } from "@/constants/coffees";

describe("Product List tests", () => {
  it("SHOULD renders correctly", () => {
    const { getByText } = render(<ProductList title="teste" items={COOFFES} />);

    const cartButton = getByText(/teste/i);

    expect(cartButton).toBeInTheDocument();
  });
  it("SHOULD renders the items list", () => {
    const { getByText } = render(<ProductList title="teste" items={COOFFES} />);

    const cartButton = getByText(COOFFES[0].name);

    expect(cartButton).toBeInTheDocument();
  });
});
