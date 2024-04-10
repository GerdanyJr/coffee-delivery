import Options from "@/components/checkout/payment/options";
import { fireEvent, render } from "@testing-library/react";

describe("Options tests", () => {
  let onClick: (id: string) => void;
  beforeEach(() => {
    onClick = jest.fn();
  });
  it("SHOULD render correctly", () => {
    const { getByText } = render(<Options select="" onClick={onClick} />);

    const option = getByText(/dinheiro/i);

    expect(option).toBeInTheDocument();
  });
  it("SHOULD call the onClick when clicked", () => {
    const { getByText } = render(<Options select="" onClick={onClick} />);
    const option = getByText(/cartão de crédito/i);
    
    fireEvent.click(option);

    expect(onClick).toHaveBeenCalled();
  });
});
