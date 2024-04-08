import CartButton from "@/components/UI/cartButton";
import { render, screen } from "@testing-library/react";

describe("CartButton", () => {
  it("WHEN quantity < 99 should display quantity", () => {
    const quantity = 10;

    const { getByText } = render(<CartButton quantity={quantity} />);

    const cartButton = getByText(quantity);

    expect(cartButton).toBeInTheDocument();
  });
  it("WHEN quantity > 99 should display 99+", () => {
    const { getByText } = render(<CartButton quantity={100} />);

    const cartButton = getByText("99+");

    expect(cartButton).toBeInTheDocument();
  });
  it("WHEN hover should change the color", () => {
    const { getByText } = render(<CartButton quantity={100} />);

    const cartButton = getByText("99+");

    expect(cartButton).toHaveStyle("background-color: var(--yellow-dark)");
  });
});
