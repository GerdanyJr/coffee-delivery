"use client";

import { useInView } from "react-intersection-observer";
import { useRef, useState, useCallback, useEffect } from "react";
import { Pages } from "@/@types/interface/pages";

export function useInfiniteScroll<T>(
  fetchFn: (page: number) => Promise<Pages<T>>
) {
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [ref, inView] = useInView();
  const page = useRef(0);

  const getCoffees = useCallback(async () => {
    setIsFetching(true);
    const data = await fetchFn(page.current);

    if (data.results.length > 0) {
      setData((prevProducts) => [...prevProducts, ...data.results]);
    }
    if (page.current === data.totalPages) {
      setHasMore(false);
    }
    setIsFetching(false);
  }, [page.current]);

  useEffect(() => {
    if ((inView && !isFetching && hasMore) || page.current == 0) {
      getCoffees();
      page.current = page.current + 1;
    }
  }, [getCoffees, inView, hasMore]);

  return { data, isFetching, ref };
}
