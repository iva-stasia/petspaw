import Icon from "@src/components/Icon";
import addToFav from "@src/utils/addToFav";
import vote from "@src/utils/vote";
import { Dispatch, SetStateAction, useState } from "react";
import { Action, ActionType } from "./page";
import useFavourites from "@src/hooks/useFavourites";
import { TEMP_USER_ID } from "@src/utils/constants";
import removeFromFav from "@src/utils/removeFromFav";

interface BtnGroupProps {
  imgId: string;
  setAction: Dispatch<SetStateAction<Action | null>>;
  setRequest: (request: string) => void;
}

const BtnGroup = ({ imgId, setAction, setRequest }: BtnGroupProps) => {
  const [favRequest, setFavRequest] = useState("");
  const { favs } = useFavourites(TEMP_USER_ID, favRequest);

  const [fav] = favs.filter(({ image }) => image.id === imgId);
  const favId = fav ? fav.id : null;

  const hahdleClick = (type: ActionType) => {
    const date = new Date();

    const action: Action = {
      type,
      date,
      imgId,
    };

    setAction(action);
  };

  const handleVote = async (value: number) => {
    try {
      await vote(imgId, value, TEMP_USER_ID);
      hahdleClick(value === 1 ? "Likes" : "Dislikes");
      setRequest(crypto.randomUUID());
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  const handleAddToFav = async () => {
    try {
      if (favId) {
        await removeFromFav(favId);
        hahdleClick("FavRemove");
      } else {
        await addToFav(imgId, TEMP_USER_ID);
        hahdleClick("FavAdd");
      }

      setFavRequest(crypto.randomUUID());
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  return (
    <div className="max-w-max flex gap-1 overflow-hidden rounded-[20px] border-4 border-white bg-white">
      <button
        onClick={() => handleVote(1)}
        className="w-20 h-20 text-white bg-green hover:text-green hover:bg-green/30 transition-all"
      >
        <Icon icon="like" size={30} />
      </button>
      <button
        onClick={() => handleAddToFav()}
        className="w-20 h-20 text-white bg-red hover:text-red hover:bg-red/30 transition-all"
      >
        <Icon icon="fav" size={30} />
      </button>
      <button
        onClick={() => handleVote(-1)}
        className="w-20 h-20 text-white bg-orange hover:text-orange hover:bg-orange/30 transition-all"
      >
        <Icon icon="dislike" size={30} />
      </button>
    </div>
  );
};

export default BtnGroup;
