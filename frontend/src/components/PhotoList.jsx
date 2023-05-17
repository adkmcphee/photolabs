import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        imageSource={photo.imageSource}
        username={photo.username}
        key={photo.id}
      />
    );
  });

  return (
    <ul className="photo-list">
      {props.photos.length === 0 && <h2>Loading your photos, please wait.</h2>}
      {mappedPhotos}</ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;
