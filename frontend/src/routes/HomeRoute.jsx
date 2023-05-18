import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = function (props) {
  const [photoFavourites, setIsPhotoFavourites] = useState({});
  const toggleFavourite = (id) => {
    console.log(id);
    if (photoFavourites[id] !== undefined) {
      setIsPhotoFavourites({...photoFavourites, [id]: !photoFavourites[id]});
    } else {
      setIsPhotoFavourites({...photoFavourites, [id]: true});
    }
  };
  
  console.log(photoFavourites);
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} />
      <PhotoList
        photos={props.photos}
        photoFavourites={photoFavourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};
export default HomeRoute;
