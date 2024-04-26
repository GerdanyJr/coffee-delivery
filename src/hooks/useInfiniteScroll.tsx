"use client";

import { useInView } from "react-intersection-observer";
import {
  useRef,
  useState,
  useCallback,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Pages } from "@/@types/interface/pages";
import { Filter } from "./useFilter";

export function useInfiniteScroll<T>(
  setData: Dispatch<SetStateAction<T[]>>,
  filter: Filter,
  fetchFn: (page: number, filter: Filter) => Promise<Pages<T>>
) {
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();
  const page = useRef(0);

  const getData = useCallback(
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
      getData(false);
      page.current = page.current + 1;
    }
  }, [getData, inView, hasMore]);

  useEffect(() => {
    if (!isFetching) {
      page.current = 0;
      getData(true);
      page.current = page.current + 1;
    }
  }, [filter]);

  return { isFetching, filter, ref };
}
