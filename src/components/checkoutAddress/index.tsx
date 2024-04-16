import { MapPinLine } from "@phosphor-icons/react";
import { InputText } from "../UI/inputText";
export function CheckoutAddress() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold leading-snug font-baloo text-base-subtitle">
        Complete seu pedido
      </h2>
      <div className="flex flex-col gap-8 px-5 rounded-md py-9 lg:p-10 bg-base-card font-roboto">
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
            placeholder="CEP"
            className="lg:w-2/5"
            required
            value={""}
            onChange={() => {}}
          />
          <InputText
            placeholder="Rua"
            required
            value={""}
            onChange={() => {}}
          />
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
            <InputText
              placeholder="Número"
              className="lg:w-2/5"
              required
              value={""}
              onChange={() => {}}
            />
            <InputText
              placeholder="Complemento"
              value={""}
              className="lg:pl-3 lg:w-3/5"
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row">
            <InputText
              placeholder="Bairro"
              className="lg:w-2/5"
              required
              value={""}
              onChange={() => {}}
            />
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-3/5">
              <InputText
                placeholder="Cidade"
                className="lg:w-4/5 xl:w-2/3 lg:px-3"
                required
                value={""}
                onChange={() => {}}
              />
              <InputText
                placeholder="UF"
                className="min-w-[60px] lg:w-1/5 xl:w-1/3"
                required
                value={""}
                onChange={() => {}}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
