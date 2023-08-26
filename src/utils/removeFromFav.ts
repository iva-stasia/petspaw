import { catApi } from "./catApi";

const removeFromFav = async (id: number) => {
  const json = await catApi.delete(`favourites/${id}`);

  console.log("remove from fav: ", json);
  return json;
};

export default removeFromFav;
