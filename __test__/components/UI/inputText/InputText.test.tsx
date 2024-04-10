import { InputText } from "@/components/UI/inputText";
import { render } from "@testing-library/react";

describe("Input text tests", () => {
  let onChange = jest.fn();
  it("SHOULD renders correctly", () => {
    const placeholder = "teste";
    const { getByPlaceholderText } = render(
      <InputText
        required={true}
        value={""}
        placeholder={placeholder}
        onChange={onChange}
      />
    );

    const inputText = getByPlaceholderText(placeholder);

    expect(inputText).toBeInTheDocument();
  });
  it("WHEN required is false and empty value should render 'opcional' text", () => {
    const name = "";
    const { getByText } = render(
      <InputText
        required={false}
        value={name}
        placeholder={""}
        onChange={onChange}
      />
    );

    const inputText = getByText(/opcional/i);

    expect(inputText).toBeInTheDocument();
  });
  it("WHEN required is true shouldn't render 'opcional' text", () => {
    const name = "";
    const { queryByText } = render(
      <InputText
        required={true}
        value={name}
        placeholder={""}
        onChange={onChange}
      />
    );

    const inputText = queryByText(/opcional/i);

    expect(inputText).not.toBeInTheDocument();
  });
});
