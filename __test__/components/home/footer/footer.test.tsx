import { render } from "@testing-library/react";
import Footer from "@/components/home/footer";
describe("footer", () => {
  it("should render footer", () => {
    const { getByText } = render(<Footer />);
    const titleNavLinks = getByText("Início");
    expect(titleNavLinks).toBeInTheDocument();
  });
  it("should render image in footer", () => {
    const { getByRole } = render(<Footer />);
    const content = getByRole("img");
    expect(content).toBeInTheDocument();
  });
});
