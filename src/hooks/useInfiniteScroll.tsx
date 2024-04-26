"use client";

import { useInView } from "react-intersection-observer";
import { useRef, useState, useCallback, useEffect } from "react";
import { Pages } from "@/@types/interface/pages";
import { Filter, defaultFilter } from "./useProducts";

export function useInfiniteScroll<T>(
  fetchFn: (page: number, filter: Filter) => Promise<Pages<T>>
) {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [ref, inView] = useInView();
  const page = useRef(0);

  const getCoffees = useCallback(
    async (filterChanged: boolean) => {
      setIsFetching(true);
      const data = await fetchFn(page.current, filter);
      if (data.results.length > 0) {
        if (filterChanged) {
          setData([...data.results]);
        } else setData((prevProducts) => [...prevProducts, ...data.results]);
      }
      setHasMore(!(page.current === data.totalPages));
      setIsFetching(false);
    },
    [page.current, filter]
  );

  useEffect(() => {
    if ((inView && !isFetching && hasMore) || page.current == 0) {
      getCoffees(false);
      page.current = page.current + 1;
    }
  }, [getCoffees, inView, hasMore]);

  useEffect(() => {
    if (!isFetching) {
      page.current = 0;
      getCoffees(true);
      page.current = page.current + 1;
    }
  }, [filter]);

  return { data, isFetching, filter, ref, setFilter };
}
