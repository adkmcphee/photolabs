import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = function (props) {
  console.log('home route props:', props);
  const [photoFavourites, setIsPhotoFavourites] = useState({});
  const toggleFavourite = (id) => {
    console.log(id);
    if (photoFavourites[id] !== undefined) {
      setIsPhotoFavourites({...photoFavourites, [id]: !photoFavourites[id]});
    } else {
      setIsPhotoFavourites({...photoFavourites, [id]: true});
    }
  };
  
  console.log('photofavs:', photoFavourites);

  // const handleImageClick = (id) => {
  //   console.log("Image clicked:", id);
  // };

  const hasFavorites = Object.keys(photoFavourites).some((id) => photoFavourites[id]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} hasFavourites={hasFavorites} />
      <PhotoList
        photos={props.photos}
        photoFavourites={photoFavourites}
        toggleFavourite={toggleFavourite}
        handleImageClick={props.handleImageClick}
      />
    </div>
  );
};
export default HomeRoute;
