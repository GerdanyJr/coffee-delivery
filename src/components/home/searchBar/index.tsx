import { Coffee } from "@/@types/interface/coffee";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";

export function SearchBar({
  products,
  filteredCoffees,
  setFilteredCoffees,
  setIsFiltering,
}: {
  products: Coffee[];
  filteredCoffees: Coffee[];
  setFilteredCoffees: React.Dispatch<React.SetStateAction<Coffee[]>>;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [coffeeName, setCoffeeName] = useState<string>("");
  const [empty, setEmpty] = useState<Boolean>(true);
  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    e.target.value == "" ? setEmpty(true) : setEmpty(false);
    setCoffeeName(value);
  }
  function handleEraseInputValue() {
    setCoffeeName("");
    setEmpty(true);
    setIsFiltering(false);
    setFilteredCoffees(products);
  }
  function handleSearchProductNameOnApi(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    console.log("entrou na função");
    var vetor: Coffee[] = [];
    if (e.key === "Enter") {
      products.map((product) => {
        product.name.toLowerCase().includes(coffeeName.toLowerCase()) &&
          !vetor.includes(product) &&
          vetor.push(product);
      });
      setFilteredCoffees(vetor);
      setIsFiltering(true);
    }
    console.log(filteredCoffees);
  }
  return (
    <div className="relative max-w-max">
      <label htmlFor="searchbar" className="sr-only">
        Buscar produtos
      </label>
      <input
        type="text"
        id="searchbar"
        className="p-2 mt-10 border-2 rounded-md bg-yellow-light border-yellow-dark  w-[300px] font-baloo text-sm outline-none focus:border-yellow"
        placeholder="Buscar produtos"
        onChange={(e) => {
          handleChangeInput(e);
        }}
        value={coffeeName}
        onKeyDown={handleSearchProductNameOnApi}
      />

      <MagnifyingGlass
        size={20}
        color="#dbac2c"
        weight="bold"
        className={`${
          empty ? "absolute top-12 right-2" : "absolute hidden top-12 right-2"
        }  `}
      />

      <button onClick={handleEraseInputValue}>
        <X
          size={18}
          color="#dbac2c"
          weight="bold"
          className={`${
            empty ? "absolute top-12 hidden right-2" : "absolute top-12 right-2"
          }  `}
        />
      </button>
    </div>
  );
}
