import { Coffee } from "@/@types/interface/coffee";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { MobileProductList } from "../mobileProductList";

export function SearchBarMobile({
  allFilteredCoffeesMobile,
  setAllFilteredCoffeesMobile,
  setFilteredCoffees,
  setIsFiltering,
  isFiltering,
  setCurrentPage,
  setTotalPages,
}: {
  allFilteredCoffeesMobile: Coffee[];
  setAllFilteredCoffeesMobile: React.Dispatch<React.SetStateAction<Coffee[]>>;
  setFilteredCoffees: React.Dispatch<React.SetStateAction<Coffee[]>>;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  isFiltering: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [coffeeName, setCoffeeName] = useState<string>("");
  const [empty, setEmpty] = useState<Boolean>(true);

  async function loadFilteredProducts(valor: string) {
    const response = await fetch(
      `http://localhost:8080/coffee/name?name=${valor}`
    );
    const data = await response.json();
    let allCoffeesFiltered: Coffee[] = [];
    for (var i = 0; i < data.totalPages; i++) {
      const _response = await fetch(
        `http://localhost:8080/coffee/name?name=${coffeeName}&page=${i}`
      );
      const _data = await _response.json();
      for (let j = 0; j < _data.results.length; j++) {
        allCoffeesFiltered.push(_data.results[j]);
      }
    }
    setFilteredCoffees(allCoffeesFiltered);
    setAllFilteredCoffeesMobile(allCoffeesFiltered);
    createDesktopList(valor);
  }
  async function createDesktopList(valor: string) {
    const response = await fetch(
      `http://localhost:8080/coffee/name?name=${valor}`
    );
    const data = await response.json();
    setFilteredCoffees(data.results);
    setTotalPages(data.totalPages);
    setCurrentPage(data.pageNumber + 1);
    
  }
  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmpty(e.target.value == "");
    setCoffeeName(value);
  }
  function handleEraseInputValue() {
    setCoffeeName("");
    setEmpty(true);
    setIsFiltering(false);
    loadFilteredProducts("");
  }
  function handleSearchProductNameOnApi(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      loadFilteredProducts(coffeeName);
      setIsFiltering(true);
    }
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="relative flex max-w-max">
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
              empty
                ? "absolute top-12 right-2"
                : "absolute hidden top-12 right-2"
            }  `}
          />

          <button onClick={handleEraseInputValue}>
            <X
              size={18}
              color="#dbac2c"
              weight="bold"
              className={`${
                empty
                  ? "absolute top-12 hidden right-2"
                  : "absolute top-12 right-2"
              }  `}
            />
          </button>
        </div>
      </div>
      {isFiltering && (
        <>
          <MobileProductList
            title="Nossos cafés"
            allCoffeesFiltered={allFilteredCoffeesMobile}
          />
        </>
      )}
    </>
  );
}
