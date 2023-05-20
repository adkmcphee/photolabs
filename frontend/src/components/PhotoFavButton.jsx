import React, { useCallback, useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

export const PhotoFavButton = function (props) {
  // const [isFavourited, setIsFavourited] = useState(false);
  // const toggleFavourite = () => {
  //   setIsFavourited((prevState) => !prevState);
  //   console.log('button is clicked');
  // };


  const handler = () => {
    console.log('photo Fav Button props:', props.id);
    props.toggleFavourite(props.id);
  };

  return (
    <div
      className="photo-list--fav-icon-svg"
      onClick={handler}
    >
      <FavIcon fill={props.isFavourited ? "#FF0000" : "#EEEEEE"}/>
    </div>
  );
};

export default PhotoFavButton;
