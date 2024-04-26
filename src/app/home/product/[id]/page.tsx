import { PrimaryButton } from "@/components/UI/primaryButton";
import { Metadata } from "next";
type ProductPageProps = {
  params: {
    id: string;
  };
};
export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const response = await fetch(`http://localhost:8080/coffee/${params.id}`);
  const coffee = await response.json();

  return {
    title: `${coffee.name}`,
  };
};
export default async function ProductPage({ params }: ProductPageProps) {
  const response = await fetch(`http://localhost:8080/coffee/${params.id}`);
  const coffee = await response.json();
  return (
    <>
      <div className="flex flex-col mx-auto md:flex-row md:justify-between max-w-[24rem] md:max-w-[900px] items-center md:px-20 py-10 my-10 border-t-2 border-l-4 border-purple bg-purple-light rounded-lg  rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] shadow-xl min-w-[330px]">
        <div>
          <img
            src={`http://localhost:8080${coffee.image}`}
            alt={`Imagem do ${coffee.name}`}
            className="w-40 md:w-[19rem]"
          />
        </div>
        <div className="flex flex-col items-center gap-3 md:w-[21rem] md:items-start md:gap-5 w-fit">
          <h2 className="text-3xl font-extrabold md:text-6xl font-baloo text-purple">
            {coffee.name}
          </h2>
          <span className="text-xl font-extrabold leading-snug md:text-3xl font-baloo text-base-text">
            R$ {parseFloat(coffee.price).toFixed(2)}
          </span>
          <div className="flex flex-col items-center justify-center gap-3 md:items-normal md:flex-row">
            {coffee.categories?.map(
              (categorie: { id: string; name: string }) => (
                <span
                  key={categorie.id}
                  className="flex items-center justify-center px-2 py-1 text-xs font-bold uppercase rounded-full w-fit flex-nowrap bg-yellow-light text-yellow-dark dark:bg-purple dark:text-white font-roboto whitespace-nowrap"
                >
                  {categorie.name}
                </span>
              )
            )}
          </div>
          <p className="text-sm font-roboto text-base-text">
            {coffee.description}
          </p>
          <div className="flex gap-5">
            <PrimaryButton label={"Comprar"} />
            <PrimaryButton label={"Adicionar á sacola"} />
          </div>
        </div>
      </div>
    </>
  );
}
