import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // console.log('photolistitem props:', props);

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        id={props.id}
        isFavourited={props.photoFavourites[props.id]}
        toggleFavourite={props.toggleFavourite}/>
      <img className="photo-list--image" src={props.imageSource} />
      {/* {props.hideUserName && <h3>{props.username}</h3>} */}
    </div>
  );
};



export default PhotoListItem;
