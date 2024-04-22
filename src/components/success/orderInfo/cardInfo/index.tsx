import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
export const items=[
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
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow">
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
]