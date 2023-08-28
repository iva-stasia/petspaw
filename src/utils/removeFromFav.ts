import { catApi } from "./catApi";

const removeFromFav = async (id: number) => {
  const json = await catApi.delete(`favourites/${id}`);
  return json;
};

export default removeFromFav;
