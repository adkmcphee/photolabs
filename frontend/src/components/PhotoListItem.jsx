import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log(props);

  return (
    <div className="photo-list">
      <img className="photo-list--image" src = {props.imageSource} alt="photo" />
    </div>
    
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
