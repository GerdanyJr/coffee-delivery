import api from "./api";

export async function getCoffees(page: number) {
  const response = await api.get(`/coffee?page=${page}`);
  const data = await response.data;
  return data;
}
