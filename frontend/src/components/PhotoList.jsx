import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  console.log("photo list props:", props);
  const mappedPhotos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        imageSource={photo.urls.regular}
        username={photo.user.name}
        profilePic={photo.user.profile}
        key={photo.id}
        id={photo.id}
        photoFavourites={props.photoFavourites}
        toggleFavourite={props.toggleFavourite}
        handleImageClick={props.handleImageClick}
      />
    );
  });

  return (
    <ul className="photo-list">
      {props.photos.length === 0 && <h2>Loading your photos, please wait.</h2>}
      {mappedPhotos}
    </ul>
  );
};

export default PhotoList;
