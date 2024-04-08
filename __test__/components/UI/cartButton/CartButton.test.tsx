import CartButton from "@/components/UI/cartButton";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("WHEN quantity < 99 should display quantity", () => {
    const quantity = 10;

    render(<CartButton quantity={quantity} />);

    const cartButton = screen.getByText(quantity);

    expect(cartButton).toBeInTheDocument();
  });
  it("WHEN quantity > 99 should display 99+", () => {
    render(<CartButton quantity={100} />);

    const cartButton = screen.getByText("99+");

    expect(cartButton).toBeInTheDocument();
  });
});
