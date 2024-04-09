import Header from "@/components/home/header";
import { render } from "@testing-library/react";

describe("Home Header tests", () => {
  it("SHOULD render correctly", () => {
    const { getByRole } = render(<Header />);

    expect(getByRole("banner")).toBeInTheDocument();
  });
});
