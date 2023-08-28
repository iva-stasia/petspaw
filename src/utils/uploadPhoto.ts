import { catApi } from "./catApi";

const uploadPhoto = async (file: File, userId: string) => {
  const data = {
    file: file,
    sub_id: userId,
  };
  const json = await catApi.post("images/upload", { json: data });

  return json;
};

export default uploadPhoto;
