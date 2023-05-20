import React, { useState } from "react";
import photosData from "./mocks/photos.json";
import topicsData from "./mocks/topics.json";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";
import "./styles/PhotoDetailsModal.scss";
import HomeRoute from "./routes/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [photoFavourites, setIsPhotoFavourites] = useState({});

  const toggleFavourite = (id) => {
    console.log(id);
    if (photoFavourites[id] !== undefined) {
      setIsPhotoFavourites({...photoFavourites, [id]: !photoFavourites[id]});
    } else {
      setIsPhotoFavourites({...photoFavourites, [id]: true});
    }
  };


  const handleImageClick = (id) => {
    console.log(`Image ${id} has been clicked`);
    setSelectedPhotoId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
        
      {/* <TopNavigationBar/> */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
      {/* <PhotoListItem/> */}
      {/* <TopicListItem/> */}
    </div>
  );
};

export default App;
