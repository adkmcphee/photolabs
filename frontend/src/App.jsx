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


  const handleImageClick = (id) => {
    console.log(`Image ${id} has been clicked`);
    setSelectedPhotoId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData} handleImageClick={handleImageClick} />
      {isOpen && <PhotoDetailsModal
        handleCloseModal={handleCloseModal}
        handleImageClick={handleImageClick} />}
      {/* <TopNavigationBar/> */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
      {/* <PhotoListItem/> */}
      {/* <TopicListItem/> */}
    </div>
  );
};

export default App;
