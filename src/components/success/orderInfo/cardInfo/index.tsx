import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
const borderRounded =
  "rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[6px] rounded-br-[6px]";
export const itemsMobile = [
  <div
    className={`block lg:hidden w-[400px] mt-10  ${borderRounded} h-fit p-[1px] bg-gradient-to-br to-purple from-yellow relative`}
  >
    <div
      className={`flex flex-col h-full gap-3 p-10 bg-white lg:hidden ${borderRounded}`}
    >
      <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-4 left-48 bg-purple">
        <MapPin color="#fff" size={20} weight="fill" />
      </span>
      <div className="font-roboto">
        <p>
          Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
        </p>
        <p>Farrapos-Porto Alegre, RS</p>
      </div>
    </div>
  </div>,

  <div
    className={`block lg:hidden w-[400px] mt-10  ${borderRounded} h-fit p-[1px] bg-gradient-to-br to-purple from-yellow relative`}
  >
    <div
      className={`flex flex-col h-full gap-3 p-10 bg-white lg:hidden ${borderRounded}`}
    >
      <span className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-yellow -top-4 left-48">
        <Timer color="#fff" size={20} weight="fill" />
      </span>
      <div className="font-roboto">
        <p>Previsão de chegada</p>
        <strong>20 min - 30 min</strong>
      </div>
    </div>
  </div>,

  <div
    className={`block lg:hidden w-[400px] mt-10  ${borderRounded} h-fit p-[1px] bg-gradient-to-br to-purple from-yellow relative`}
  >
    <div
      className={`flex flex-col h-full gap-3 p-10 bg-white lg:hidden ${borderRounded}`}
    >
      <span className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-yellow-dark -top-4 left-48">
        <CurrencyDollar color="#fff" size={20} />
      </span>
      <div className="font-roboto">
        <p>Pagamento na entrega</p>
        <strong>Cartão de crédito</strong>
      </div>
    </div>
  </div>,
];
export const items = [
  <div className="flex gap-3">
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple">
      <MapPin color="#fff" size={16} weight="fill" />
    </span>
    <div className="font-roboto">
      <p>
        Entrega em <strong>Rua Joãi Daniel Martinelli, 102</strong>{" "}
      </p>
      <p>Farrapos-Porto Alegre, RS</p>
    </div>
  </div>,
  <div className="flex gap-3">
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow ">
      <Timer color="#fff" size={16} weight="fill" />
    </span>
    <div className="font-roboto">
      <p>Previsão de chegada</p>
      <strong>20 min - 30 min</strong>
    </div>
  </div>,
  <div className="flex gap-3">
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-dark">
      <CurrencyDollar color="#fff" size={16} />
    </span>
    <div className="font-roboto">
      <p>Pagamento na entrega</p>
      <strong>Cartão de crédito</strong>
    </div>
  </div>,
];
