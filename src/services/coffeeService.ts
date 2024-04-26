import { Filter } from "@/hooks/useFilter";
import api from "./api";
import { Coffee } from "@/@types/interface/coffee";
import { Pages } from "@/@types/interface/pages";

export async function getCoffees(page: number, filter: Filter) {
  let url = `/coffee?page=${page}`;
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
  const data = (await response.data) as Pages<Coffee>;
  return data;
}
