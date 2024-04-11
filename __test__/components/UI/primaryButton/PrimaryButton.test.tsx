import { PrimaryButton } from "@/components/UI/primaryButton";
import { fireEvent, render } from "@testing-library/react";

describe("Credit Card Button tests", () => {
  let onClick: () => void;
  beforeEach(() => {
    onClick = jest.fn();
  });
  it("SHOULD render correctly", () => {
    const title = "teste";
    const { getByText } = render(<PrimaryButton label={title} />);

    const primaryButton = getByText(title);
    expect(primaryButton).toBeTruthy();
  });
});
