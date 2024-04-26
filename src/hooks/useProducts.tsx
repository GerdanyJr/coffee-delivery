import { useState, useEffect, useCallback } from "react";
import { Category, Coffee } from "@/@types/interface/coffee";
import { Pages } from "@/@types/interface/pages";
import api from "@/services/api";

export interface Filter {
  priceFilter: {
    sort: string | undefined;
    direction: "asc" | "desc" | undefined;
    min: number | undefined;
    max: number | undefined;
  };
  tags: Category[];
}

export const defaultFilter = {
  priceFilter: {
    sort: undefined,
    direction: undefined,
    min: undefined,
    max: undefined,
  },
  tags: [],
};

export type FilterType = "tagFilter" | "priceFilter" | undefined;

export function useProducts() {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [products, setProducts] = useState<Coffee[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleChangePage(page);
  }, [page, filter]);

  const handleChangePage = useCallback(
    async (currentPage: number) => {
      let url = `/coffee?page=${currentPage - 1}`;
      for (const attr in filter.priceFilter) {
        if (filter.priceFilter[attr as keyof typeof filter.priceFilter]) {
          url += `&${attr}=${
            filter.priceFilter[attr as keyof typeof filter.priceFilter]
          }`;
        }
      }
      if (filter.tags.length > 0) {
        const tagIds = [...filter.tags.map((tag) => tag.id)];
        url = url.replace("/coffee", url.split("?")[0] + "/category");
        url += `&tags=${tagIds.join(",")}`;
      }

      const response = await api.get(url);
      const page = (await response.data) as Pages<Coffee>;

      setProducts(page.results);
      setTotalPages(page.totalPages);
      setPage(page.pageNumber + 1 > page.totalPages ? 1 : page.pageNumber + 1);
    },
    [
      page,
      filter.priceFilter.direction,
      filter.priceFilter.max,
      filter.priceFilter.min,
      filter.priceFilter.sort,
      filter.tags,
    ]
  );

  return {
    products,
    totalPages,
    page,
    filter,
    handleChangePage,
    setFilter,
  };
}
