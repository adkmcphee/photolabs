import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

export const PhotoFavButton = function (props) {
  // const [isFavourited, setIsFavourited] = useState(false);
  // const toggleFavourite = () => {
  //   setIsFavourited((prevState) => !prevState);
  //   console.log('button is clicked');
  // };

  return (
    <div
      className="photo-list--fav-icon-svg"
      onClick={() => props.toggleFavourite(props.id)}
    >
      <FavIcon fill={props.isFavourited ? "#FF0000" : "#EEEEEE"}/>
    </div>
  );
};

export default PhotoFavButton;
