import React, { useState } from "react";
import IconBtn from "./IconBtn";
import removeFromFav from "@src/utils/removeFromFav";
import addToFav from "@src/utils/addToFav";
import { TEMP_USER_ID } from "@src/utils/constants";
import useFavourites from "@src/hooks/useFavourites";

interface AddToFavBtnProps {
  imgId: string;
}

const AddToFavBtn = ({ imgId }: AddToFavBtnProps) => {
  const [favRequest, setFavRequest] = useState("");
  const { favs } = useFavourites(TEMP_USER_ID, favRequest);

  const [fav] = favs.filter(({ image }) => image.id === imgId);
  const favId = fav ? fav.id : null;

  // const hahdleClick = (type: ActionType) => {
  //   const date = new Date();

  //   const action: Action = {
  //     type,
  //     date,
  //     imgId,
  //   };

  //   setAction(action);
  // };

  const handleAddToFav = async () => {
    try {
      if (favId) {
        await removeFromFav(favId);
        // hahdleClick("FavRemove");
      } else {
        await addToFav(imgId, TEMP_USER_ID);
        // hahdleClick("FavAdd");
      }

      setFavRequest(crypto.randomUUID());
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  };

  return (
    <div className="text-red bg-white rounded-[10px]">
      <IconBtn
        icon={favId ? "fav-color" : "fav"}
        onClick={() => handleAddToFav()}
      />
    </div>
  );
};

export default AddToFavBtn;
