import { Coffee } from "@/@types/interface/coffee";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import Pagination from "../pagination";
import { ProductList } from "../productList";

export function SearchBar({
  filteredCoffees,
  setFilteredCoffees,
  setIsFiltering,
  isFiltering,
  setAllFilteredCoffeesMobile,
  setCurrentPage,
  setTotalPages,
  currentPage,
  totalPages,
}: {
  filteredCoffees: Coffee[];
  setFilteredCoffees: React.Dispatch<React.SetStateAction<Coffee[]>>;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  isFiltering: boolean;
  setAllFilteredCoffeesMobile: React.Dispatch<React.SetStateAction<Coffee[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}) {
  const [coffeeName, setCoffeeName] = useState<string>("");
  const [empty, setEmpty] = useState<Boolean>(true);

  async function loadFilteredProducts(valor: string) {
    const response = await fetch(
      `http://localhost:8080/coffee/name?name=${valor}`
    );
    const data = await response.json();
    setFilteredCoffees(data.results);
    setTotalPages(data.totalPages);
    setCurrentPage(data.pageNumber + 1);
    createMobileList(data.totalPages);
  }
  async function handleChangePage(currentPage: number) {
    const contentPage = await fetch(
      `http://localhost:8080/coffee/name?name=${coffeeName}&page=${
        currentPage - 1
      }`
    );
    const page = await contentPage.json();
    setFilteredCoffees(page.results);
    setCurrentPage(currentPage);
  }
  async function createMobileList(totalPages: number) {
    let allCoffeesFiltered: Coffee[] = [];
    for (var i = 0; i < totalPages; i++) {
      const _response = await fetch(
        `http://localhost:8080/coffee/name?name=${coffeeName}&page=${i}`
      );
      const _data = await _response.json();
      for (let j = 0; j < _data.results.length; j++) {
        allCoffeesFiltered.push(_data.results[j]);
      }
    }
    setAllFilteredCoffeesMobile(allCoffeesFiltered);
  }
  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    e.target.value == "" ? setEmpty(true) : setEmpty(false);
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
    var vetor: Coffee[] = [];
    if (e.key === "Enter") {
      loadFilteredProducts(coffeeName);
      setIsFiltering(true);
    }
  }
  return (
    <>
      <div className="flex justify-around lg:justify-normal">
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
          <ProductList
            title={"Cafés filtrados"}
            products={filteredCoffees}
            filteredCoffees={filteredCoffees}
            isFiltering={true}
          />
          <Pagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}
