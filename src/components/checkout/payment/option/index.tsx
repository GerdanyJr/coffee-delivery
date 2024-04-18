import { CreditCardButton } from "@/components/UI/creditCardButton";
interface OptionProps {
  id: string;
  name: string;
  value: string;
  icon: React.ReactNode;
  title: string;
  checked: boolean;
  onClick: (id: string) => void;
}

export function Option({
  id,
  name,
  value,
  icon,
  title,
  checked,
  onClick,
}: OptionProps) {
  return (
    <div className="w-full">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        required
        readOnly
        className="hidden"
      />
      <label htmlFor={id}>
        <CreditCardButton
          icon={icon}
          title={title}
          checked={checked}
          onClick={() => onClick(id)}
        />
      </label>
    </div>
  );
}
