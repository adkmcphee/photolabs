import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import PhotoListItem from "../components/PhotoListItem";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";

export const PhotoDetailsModal = (props) => {
  console.log("photodetailsmodal props:", props);

  const similarPhotos = props.photos.filter(
    (photo) => photo.title === props.selectedPhoto.title
  );

  // console.log("similar photos:", similarPhotos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={props.handleCloseModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--image-container">
        <PhotoFavButton
          id={props.selectedPhoto.id}
          isFavourited={props.photoFavourites[props.selectedPhoto.id]}
          toggleFavourite={props.toggleFavourite}
          handleImageClick={props.handleImageClick}
        />
        <img
          className="photo-details-modal--image"
          src={props.selectedPhoto.urls.regular}
          alt="Photo"
        />
        <h3 className='photo-details-modal--photographer-details'>{props.selectedPhoto.user.name}</h3>
      </div>
      <hr></hr>
      <header className="photo-details-modal--header">Similar photos</header>
      <PhotoList
        photos={similarPhotos}
        photoFavourites={props.photoFavourites}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};

export default PhotoDetailsModal;
