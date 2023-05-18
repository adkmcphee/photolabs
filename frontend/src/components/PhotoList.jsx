import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        imageSource={photo.urls.thumb}
        username={photo.user.username}
        key={photo.id}
        // hideUserName={ photo.hideUserName }
      />
    );
  });

  return (
    <ul className="photo-list">
      {props.photos.length === 0 && <h2>Loading your photos, please wait.</h2>}
      {mappedPhotos}</ul>
  );
};



export default PhotoList;
