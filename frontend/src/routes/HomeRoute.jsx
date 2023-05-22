import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = function (props) {
  const hasFavorites = Object.keys(props.photoFavourites).some(
    (id) => props.photoFavourites[id]
  );

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        hasFavourites={hasFavorites}
        handleTopicClick={props.handleTopicClick}
      />
      <PhotoList
        photos={props.photos}
        photoFavourites={props.photoFavourites}
        toggleFavourite={props.toggleFavourite}
        handleImageClick={props.handleImageClick}
      />
    </div>
  );
};
export default HomeRoute;
