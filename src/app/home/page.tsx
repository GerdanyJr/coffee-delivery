"use client";
import { Coffee } from "@/@types/interface/coffee";
import Banner from "@/components/home/banner";
import { ProductList } from "@/components/home/productList";
import api from "@/services/api";
import React, { useEffect, useState } from "react";
import { Pages } from "@/@types/interface/pages";
import Pagination from "../../components/home/pagination";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { MobileProductList } from "@/components/home/mobileProductList";
import { SearchBar } from "@/components/home/searchBar";
import { SearchBarMobile } from "@/components/home/searchBarMobile";

export default function Home() {
  const { width } = useWindowDimensions();
  const [products, setProducts] = useState<Coffee[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [allFilteredCoffeesMobile, setAllFilteredCoffeesMobile] = useState<
    Coffee[]
  >([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/coffee");
      const data = (await response.data) as Pages<Coffee>;

      setTotalPages(data.totalPages);
      setProducts(data.results);
    }
    loadProducts();
  }, []);

  async function handleChangePage(currentPage: number) {
    const contentPage = await api.get(`/coffee?page=${currentPage - 1}`);
    const page = await contentPage.data;
    setProducts(page.results);
    setCurrentPage(currentPage);
  }

  return (
    <>
      <Banner />
      {width >= 768 && (
        <>
          <SearchBar
            setTotalPages={setTotalPages}
            setCurrentPage={setCurrentPage}
            filteredCoffees={filteredCoffees}
            setFilteredCoffees={setFilteredCoffees}
            setIsFiltering={setIsFiltering}
            isFiltering={isFiltering}
            setAllFilteredCoffeesMobile={setAllFilteredCoffeesMobile}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          {!isFiltering && (
            <>
              <ProductList
                title="Nossos cafés"
                products={products}
                filteredCoffees={filteredCoffees}
                isFiltering={isFiltering}
              />

              <Pagination
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                currentPage={currentPage}
              />
            </>
          )}
        </>
      )}
      {width < 768 && (
        <>
          <SearchBarMobile
            setFilteredCoffees={setFilteredCoffees}
            setIsFiltering={setIsFiltering}
            isFiltering={isFiltering}
            setAllFilteredCoffeesMobile={setAllFilteredCoffeesMobile}
            allFilteredCoffeesMobile={allFilteredCoffeesMobile}
            setTotalPages={setTotalPages}
            setCurrentPage={setCurrentPage}
          />
          {!isFiltering && <MobileProductList title="Nossos cafés" />}
        </>
      )}
    </>
  );
}
