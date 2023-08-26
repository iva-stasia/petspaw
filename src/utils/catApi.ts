import ky from "ky";
import { CAT_API_URL } from "./constants";

export const catApi = ky.create({
  prefixUrl: CAT_API_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY!,
  },
});
