import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import image from "../../../../public/assets/img/Illustration.png";
export function OrderInfo() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-yellow-dark font-baloo text-[32px] font-semibold leading-snug">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-1 text-base-subtitle text-xl leading-snug font-roboto">
          Agora é so aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex justify-between">
        <div className="min-w-[400px] max-w-[500px] mt-10 w-2/3 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[6px] rounded-br-[6px] h-fit p-[1px] bg-gradient-to-br to-purple from-yellow ">
          <div className="flex flex-col gap-8 p-10 bg-white rounded-tr-[36px] rounded-bl-[36px] rounded-tl-[6px] rounded-br-[6px]">
            <div className="flex gap-3">
              <span className="flex items-center justify-center rounded-full w-8 h-8 bg-purple">
                <MapPin color="#fff" size={16} weight="fill" />
              </span>
              <div className="font-roboto">
                <p>
                  Entrega em <strong>Rua Joãi Daniel Martinelli, 102</strong>{" "}
                </p>
                <p>Farrapos-Porto Alegre, RS</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="flex items-center justify-center rounded-full w-8 h-8 bg-yellow">
                <Timer color="#fff" size={16} weight="fill" />
              </span>
              <div className="font-roboto">
                <p>Previsão de chegada</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="flex items-center justify-center rounded-full w-8 h-8 bg-yellow-dark">
                <CurrencyDollar color="#fff" size={16} />
              </span>
              <div className="font-roboto">
                <p>Pagamento na entrega</p>
                <strong>Cartão de crédito</strong>
              </div>
            </div>
          </div>
        </div>
        <img src={image.src} alt="" />
      </div>
    </>
  );
}
