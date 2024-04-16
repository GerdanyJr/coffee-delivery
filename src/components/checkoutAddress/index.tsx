import { MapPinLine } from "@phosphor-icons/react";
import { InputText } from "../UI/inputText";
export function CheckoutAddress() {
  return (
    <div>
      <h2 className="font-baloo text-lg font-bold text-base-subtitle mb-[15px] leading-snug">
        Complete seu pedido
      </h2>
      <div className="flex flex-col gap-8 p-10 rounded-md bg-base-card font-roboto">
        <div className="flex items-start">
          <MapPinLine className="mr-2" size={22} color="#C47F17" />
          <div className="flex flex-col">
            <h3 className="leading-snug mb-[2px] text-base-subtitle ">
              Endereço de entrega
            </h3>
            <span className="text-sm leading-snug text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </div>
        <form className="grid gap-4" action="">
          <InputText
            className="w-[200px]"
            placeholder="CEP"
            required
            value={""}
            onChange={() => {}}
          />
          <InputText
            className="w-full"
            placeholder="Rua"
            required
            value={""}
            onChange={() => {}}
          />
          <div className="flex gap-2">
            <InputText
              className="min-w-[200px]"
              placeholder="Número"
              required
              value={""}
              onChange={() => {}}
            />

            <InputText
              className="w-full"
              placeholder="Complemento"
              value={""}
              onChange={() => {}}
            />
          </div>
          <div className="flex gap-2">
            <InputText
              className="min-w-[200px]"
              placeholder="Bairro"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              className="w-full"
              placeholder="Cidade"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              className="max-w-[60px]"
              placeholder="UF"
              required
              value={""}
              onChange={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
