import React, { useState, useEffect } from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";
import "./styles/PhotoDetailsModal.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";


const App = () => {
  const [photosData, setPhotosData] = useState([]);
  const [topicsData, setTopicsData] = useState([]);

  const {
    isOpen,
    selectedPhotoId,
    photoFavourites,
    toggleFavourite,
    handleImageClick,
    handleCloseModal,
    selectedTopicId,
    handleTopicClick,
  } = useApplicationData();

  useEffect(() => {
    if (selectedTopicId) {
      fetch(`http://localhost:8001/api/topics/photos/${selectedTopicId}`)
        .then((res) => res.json())
        .then((data) => {
          setPhotosData([...data]);
        });
    } else {
      fetch("http://localhost:8001/api/photos")
        .then((res) => res.json())
        .then((data) => {
          setPhotosData([...data]);
        });
    }
  }, [selectedTopicId]);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopicsData([...data]);
      });
  }, []);

  const selectedPhoto = photosData.find(
    (photo) => photo.id === selectedPhotoId
  );

  return (
    <div className="App">
      <HomeRoute
        photos={photosData}
        topics={topicsData}
        handleImageClick={handleImageClick}
        photoFavourites={photoFavourites}
        toggleFavourite={toggleFavourite}
        handleTopicClick={handleTopicClick}
      />
      {isOpen && (
        <PhotoDetailsModal
          handleCloseModal={handleCloseModal}
          handleImageClick={handleImageClick}
          selectedPhoto={selectedPhoto}
          photos={photosData}
          photoFavourites={photoFavourites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
