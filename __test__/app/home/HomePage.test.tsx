import Home from "@/app/home/page";
import { render } from "@testing-library/react";

describe("HomePage tests", () => {
  it("SHOULD render correctly", () => {
    const { getByText } = render(<Home />);

    const header = getByText(/Home/i);

    expect(header).toBeInTheDocument();
  });
});
