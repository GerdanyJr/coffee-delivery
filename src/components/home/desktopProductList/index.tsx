"use client";

import { Coffee } from "@/@types/interface/coffee";
import { Pages } from "@/@types/interface/pages";
import api from "@/services/api";
import { useState, useEffect } from "react";
import { ProductList } from "../productList";
import Pagination from "../pagination";

export function DesktopProductList() {
  const [products, setProducts] = useState<Coffee[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
      <ProductList products={products} />
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
}
