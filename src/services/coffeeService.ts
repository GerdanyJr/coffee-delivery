import api from "./api";

export async function getCoffees(page: number) {
  const response = await api.get(`/coffee?page=${page}`);
  const data = await response.data;
  return data;
}
export async function getFilteredCoffes(page:number,name:string) {
  const response = await api.get(`/coffee/name?name=${name}&page=${page}`);
  const data = await response.data;
  return data;
}