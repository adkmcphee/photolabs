import React, { useState } from "react";
import photosData from "./mocks/photos.json";
import topicsData from "./mocks/topics.json";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";
import "./styles/PhotoDetailsModal.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    isOpen,
    selectedPhotoId,
    photoFavourites,
    toggleFavourite,
    handleImageClick,
    handleCloseModal,
  } = useApplicationData();
 
  const selectedPhoto = photosData.find((photo) => photo.id === selectedPhotoId);

  return (
    <div className="App">
      <HomeRoute
        photos={photosData}
        topics={topicsData}
        handleImageClick={handleImageClick}
        photoFavourites={photoFavourites}
        toggleFavourite={toggleFavourite} />
      {isOpen && <PhotoDetailsModal
        handleCloseModal={handleCloseModal}
        handleImageClick={handleImageClick}
        selectedPhoto={selectedPhoto}
        photos={photosData}
        photoFavourites={photoFavourites}
        toggleFavourite={toggleFavourite}
      />}
    </div>
  );
};

export default App;
