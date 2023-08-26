import { catApi } from "./catApi";

const addToFav = async (imgId: string, userId: string) => {
  const data = {
    image_id: imgId,
    sub_id: userId,
  };
  const json = await catApi.post("favourites", { json: data });

  return json;
};

export default addToFav;
