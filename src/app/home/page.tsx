"use client";
import { Coffee } from "@/@types/interface/coffee";
import Banner from "@/components/home/banner";
import { ProductList } from "@/components/home/productList";
import api from "@/services/api";
import React, { useEffect, useState } from "react";
import { Pages } from "@/@types/interface/pages";

export default function Home() {
  const [totalProductsPerPage, setTotalProductsPerPage] = useState(0);
  const [products, setProducts] = useState<Coffee[]>([]);
  const [limitProducts, setLimitProducts] = useState(12);
  const [totalPages, setTotalPages] = useState<Pages[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  console.log(currentPage);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch("http://localhost:8080/coffee");
      const data = await response.json();

      // console.log("testando", data);

      for (let i = 0; i < data.totalPages; i++) {
        const contentPage = await api.get(`/coffee?page=${i}`);
        const page = await contentPage.data;

        console.log(page);

        setTotalPages((prevTotalPages) => [...prevTotalPages, page]);
      }

      setTotalProductsPerPage(data.numberOfElements);
      setProducts(data.results);
    }
    loadProducts();
  }, []);

  async function handleChangePage(currentPage: number) {
    const contentPage = await api.get(`/coffee?page=${currentPage}`);
    const page = await contentPage.data;
    setProducts(page.results);
  }
  return (
    <>
      <Banner />
      <ProductList
        title="Nossos cafés"
        products={products}
        total={totalProductsPerPage}
        limit={limitProducts}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
      <div className="flex justify-between">
        <div>{totalProductsPerPage}</div>
        <div className="flex gap-2">
          <button>Antes</button>
          {totalPages.map((page, index) => (
            <button
              key={index}
              className={`${
                currentPage == page.pageNumber ? "bg-red-500" : "bg-blue-500"
              }`}
              onClick={() => setCurrentPage(index)}
            >
              {page.pageNumber}
            </button>
          ))}
          <button>Depois</button>
        </div>
      </div>
      {/* handleNextPage={()=>setProducts} */}
    </>
  );
}
