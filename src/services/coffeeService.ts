import { Filter } from "@/components/home/filter/priceFilter";
import api from "./api";

export async function getCoffees(page: number, filter: Filter | undefined) {
  let url = `/coffee?page=${page}`;
  for (const attr in filter) {
    if (filter[attr]) {
      url += `&${attr}=${filter[attr]}`;
    }
  }
  const response = await api.get(url);
  const data = await response.data;
  return data;
}
