import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { Category, Coffee } from "@/@types/interface/coffee";
import { getCoffees } from "@/services/coffeeService";

export interface Filter {
  search: string;
  priceFilter: {
    sort: string | undefined;
    direction: "asc" | "desc" | undefined;
    min: number | undefined;
    max: number | undefined;
  };
  tags: Category[];
}

export const defaultFilter = {
  search: "",
  priceFilter: {
    sort: undefined,
    direction: undefined,
    min: undefined,
    max: undefined,
  },
  tags: [],
};

export type FilterType = "tagFilter" | "priceFilter" | undefined;

export function useFilter(setProducts: Dispatch<SetStateAction<Coffee[]>>) {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [tags, setTags] = useState<Category[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function getTags() {
      const response = await fetch("http://localhost:8080/category");
      const data = (await response.json()) as Category[];
      setTags(data);
    }
    getTags();
  }, []);

  useEffect(() => {
    handleChangePage(page);
  }, [filter]);

  const handleChangePage = useCallback(
    async (currentPage: number) => {
      const data = await getCoffees(currentPage, filter);
      setProducts(data.results);
      setTotalPages(data.totalPages);
      setPage(data.pageNumber > data.totalPages ? 0 : data.pageNumber);
    },
    [filter.priceFilter, filter.tags, filter.search]
  );

  return {
    totalPages,
    tags,
    page: page + 1,
    filter,
    handleChangePage,
    setFilter,
  };
}
