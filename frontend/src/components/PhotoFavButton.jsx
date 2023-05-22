import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

export const PhotoFavButton = function (props) {
  const handler = () => {
    props.toggleFavourite(props.id);
  };

  return (
    <div className="photo-list--fav-icon-svg" onClick={handler}>
      <FavIcon fill={props.isFavourited ? "#FF0000" : "#EEEEEE"} />
    </div>
  );
};

export default PhotoFavButton;
