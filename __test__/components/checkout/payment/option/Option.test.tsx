import { Option } from "@/components/checkout/payment/option";
import { fireEvent, render } from "@testing-library/react";

describe("Options tests", () => {
  let onClick: (id: string) => void;
  beforeEach(() => {
    onClick = jest.fn();
  });
  it("SHOULD render correctly", () => {
    const { getByDisplayValue } = render(
      <Option
        id={""}
        name={""}
        value={"teste"}
        icon={undefined}
        title={""}
        checked={false}
        onClick={onClick}
      />
    );

    const option = getByDisplayValue(/teste/i);

    expect(option).toBeInTheDocument();
  });
  it("WHEN clicked should call the onClick function with the right args", () => {
    const inputId = "inputid";
    const { getByText } = render(
      <Option
        id={inputId}
        name={""}
        value={"teste"}
        icon={undefined}
        title="teste"
        checked={false}
        onClick={onClick}
      />
    );

    const option = getByText(/teste/i);
    fireEvent.click(option);

    expect(onClick).toHaveBeenCalledWith(inputId);
  });
});
