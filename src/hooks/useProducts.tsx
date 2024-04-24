import { useState, useEffect, useCallback } from "react";
import { Coffee } from "@/@types/interface/coffee";
import { Pages } from "@/@types/interface/pages";
import { Filter } from "@/components/home/filter/priceFilter";
import api from "@/services/api";

export function useProducts() {
  const [filter, setFilter] = useState<Filter | undefined>();
  const [products, setProducts] = useState<Coffee[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleChangePage(page);
  }, [page, filter]);

  const handleChangePage = useCallback(
    async (currentPage: number) => {
      let url = `/coffee?page=${currentPage - 1}`;
      for (const attr in filter) {
        if (filter[attr]) {
          url += `&${attr}=${filter[attr]}`;
        }
      }
      const response = await api.get(url);
      const page = (await response.data) as Pages<Coffee>;

      setProducts(page.results);
      setTotalPages(page.totalPages);
      setPage(page.pageNumber + 1 > page.totalPages ? 1 : page.pageNumber + 1);
    },
    [page, filter?.direction, filter?.max, filter?.min, filter?.sort]
  );

  return { products, totalPages, page, filter, handleChangePage, setFilter };
}
