"use client";
import { Bank, CreditCard, Money } from "@phosphor-icons/react/dist/ssr";
import styles from "./options.module.css";
import { Option } from "../option";
const items = [
  {
    id: "creditCard",
    title: "Cartão de Crédito",
    icon: <Bank size={16} color="var(--purple)" />,
  },
  {
    id: "debitCard",
    title: "Cartão de Débito",
    icon: <CreditCard size={16} color="var(--purple)" />,
  },
  {
    id: "money",
    title: "Dinheiro",
    icon: <Money size={16} color="var(--purple)" />,
  },
];

export default function Options({
  select,
  onClick,
}: {
  select: string;
  onClick: (id: string) => void;
}) {
  return (
    <div className={styles.options}>
      {items.map((item) => (
        <Option
          key={item.id}
          id={item.id}
          name="payment"
          value={item.id}
          icon={item.icon}
          title={item.title}
          checked={select === item.id}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  );
}
