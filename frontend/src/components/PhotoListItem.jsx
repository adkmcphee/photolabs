import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  console.log('photo list item props:', props);

  const handleImageClick = () => {
    props.handleImageClick(props.id);
  };

  return (
    <div className="photo-list--item">
      <PhotoFavButton
        id={props.id}
        isFavourited={props.photoFavourites[props.id]}
        toggleFavourite={props.toggleFavourite}
        handleImageClick={props.handleImageClick}
      />
      <img className="photo-list--image" src={props.imageSource} onClick={handleImageClick} />
      {/* {props.hideUserName && <h3>{props.username}</h3>} */}
    </div>
  );
};



export default PhotoListItem;
