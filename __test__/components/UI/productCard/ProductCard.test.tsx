import { Coffee } from "@/@types/interface/coffee";
import ProductCard from "@/components/UI/productCard";
import { render } from "@testing-library/react";

describe("Product Card tests", () => {
  const mockCoffee: Coffee = {
    image: "",
    tags: ["tag1", "tag2"],
    name: "teste",
    description: "descricao",
    price: "9,90",
  };
  it("SHOULD renders correctly", () => {
    const { getByText } = render(<ProductCard {...mockCoffee} />);

    const cartButton = getByText(mockCoffee.name);

    expect(cartButton).toBeInTheDocument();
  });
});
