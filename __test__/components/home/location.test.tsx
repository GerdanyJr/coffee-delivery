import Location from "@/components/home/header/location";
import { render } from "@testing-library/react";

describe("Location Header tests", () => {
  it("SHOULD render correctly", () => {
    const { getByText } = render(<Location place="Porto Alegre, RS" />);

    expect(getByText(/Porto/i)).toBeInTheDocument();
  });
});
