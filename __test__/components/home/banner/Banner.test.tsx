import Banner from "@/components/home/banner";
import { render } from "@testing-library/react";

describe("Banner tests", () => {
  it("SHOULD render correctly", () => {
    const { getByRole } = render(<Banner />);

    const cartButton = getByRole("heading", { level: 2 });
    expect(cartButton).toBeInTheDocument();
  });
});
