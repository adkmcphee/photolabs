import {ACTIONS} from './useApplicationData';

const reducer = function (state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      photoFavourites: {
        ...state.photoFavourites,
        [action.payload.id]: true,
      },
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      photoFavourites: {
        ...state.photoFavourites,
        [action.payload.id]: false,
      },
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photosData: action.payload.photosData,
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicsData: action.payload.topicsData,
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhotoId: action.payload.selectedPhotoId,
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      isOpen: action.payload.isOpen,
    };
  case ACTIONS.GET_PHOTOS_BY_TOPIC:
    return {
      ...state,
      selectedTopicId: action.payload.selectedTopicId,
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

export default reducer;