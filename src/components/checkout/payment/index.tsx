"use client";

import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import Options from "./options";
import { useState } from "react";
export function Payment() {
  const [selected, setSelected] = useState("");
  return (
    <div className="bg-base-card font-roboto rounded-md p-10 flex flex-col ">
      <div className="flex gap-2">
        <CurrencyDollar size={20} color="var(--purple)" />
        <span>
          <p className="text-base-subtitle">Pagamento</p>
          <p className="text-base-text text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </div>
      <Options select={selected} onClick={(id) => setSelected(id)} />
    </div>
  );
}
