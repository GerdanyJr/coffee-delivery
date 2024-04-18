"use client";
import { Coffee } from "@/@types/interface/coffee";
import Banner from "@/components/home/banner";
import { ProductList } from "@/components/home/productList";
import api from "@/services/api";
import React, { useEffect, useState } from "react";
import { Pages } from "@/@types/interface/pages";
import Pagination from "../../components/home/pagination";

export default function Home() {
  const [products, setProducts] = useState<Coffee[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/coffee");
      const data = (await response.data) as Pages;

      setTotalPages(data.totalPages);
      setProducts(data.results);
    }
    loadProducts();
  }, []);
  async function getDataApi(currentPage: number) {
    const contentPage = await api.get(`/coffee?page=${currentPage}`);
    const page = await contentPage.data;
    return page;
  }

  async function handleChangePage(currentPage: number) {
    const contentPage = await api.get(`/coffee?page=${currentPage - 1}`);
    const page = await contentPage.data;
    setProducts(page.results);
    setCurrentPage(currentPage);
  }
  return (
    <>
      <Banner />
      <ProductList
        title="Nossos cafés"
        products={products}
        totalPages={totalPages}
      />
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </>
  );
}
