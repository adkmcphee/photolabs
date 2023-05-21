import { useReducer } from "react";
import reducer from "./reducer";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPICS",
};

const initialState = {
  isOpen: false,
  selectedPhotoId: null,
  selectedTopicId: null,
  photoFavourites: {},
  photosData: [],
  topicsData: [],
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (id) => {
    console.log("toggle favourite id:", id);
    if (state.photoFavourites[id] === undefined) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { id },
      });
    } else if (state.photoFavourites[id] === true) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: { id },
      });
    } else if (state.photoFavourites[id] === false) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { id },
      });
    }
  };

  const handleImageClick = (id) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { selectedPhotoId: id },
    });
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { isOpen: true },
    });
  };

  const handleCloseModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { isOpen: false },
    });
  };

  const handleTopicClick = (id) => {
    console.log('handleTopicClick triggered with id:', id);
    dispatch({
      type: ACTIONS.GET_PHOTOS_BY_TOPIC,
      payload: { selectedTopicId: id },
    });
  };

  console.log('app state: ', state);

  return {
    ...state,
    toggleFavourite,
    handleImageClick,
    handleCloseModal,
    handleTopicClick,
  };
}
