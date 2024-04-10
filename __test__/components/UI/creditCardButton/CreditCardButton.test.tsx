import { CreditCardButton } from "@/components/UI/creditCardButton";
import { fireEvent, render } from "@testing-library/react";

describe("Credit Card Button tests", () => {
  let onClick: () => void;
  beforeEach(() => {
    onClick = jest.fn();
  });
  it("SHOULD render correctly", () => {
    const title = "teste";
    const { getByText } = render(
      <CreditCardButton
        icon={undefined}
        title={title}
        checked={false}
        onClick={onClick}
      />
    );

    const creditCardButton = getByText(title);
    expect(creditCardButton).toBeInTheDocument();
  });
  it("WHEN clicked should call the onClick function", () => {
    const title = "teste";
    const { getByText } = render(
      <CreditCardButton
        icon={undefined}
        title={title}
        checked={false}
        onClick={onClick}
      />
    );

    const creditCardButton = getByText(title);
    fireEvent.click(creditCardButton);
    expect(onClick).toHaveBeenCalled();
  });
  it("WHEN checked should render with the checked styles", () => {
    const title = "teste";
    const { getByText } = render(
      <CreditCardButton
        icon={undefined}
        title={title}
        checked={true}
        onClick={onClick}
      />
    );

    const creditCardButton = getByText(title);
    expect(creditCardButton).toHaveStyle("border: 1px solid var(--purple);");
  });
});
