import { catApi } from "./catApi";

const vote = async (id: string, value: number, userId: string) => {
  const data = {
    image_id: id,
    sub_id: userId,
    value: value,
  };
  const json = await catApi.post("votes", { json: data });

  return json;
};

export default vote;
