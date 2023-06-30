import {
  GET_PHOTOS_FAILED,
  GET_PHOTOS_STARTED,
  GET_PHOTOS_SUCCESS,
  SET_PHOTOS_TOTAL,
} from "../actionCreators/photos";

const initialState = {
  photos: [],
  isPhotoLoading: true,
  totalPhotos: 0,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_STARTED:
      return { ...state, isPhotoLoading: true };
    case GET_PHOTOS_FAILED:
      return { ...state, isPhotoLoading: false };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isPhotoLoading: false,
        photos: action.payload,
      };
    case SET_PHOTOS_TOTAL:
      return { ...state, totalPhotos: action.payload };
    default:
      return { ...state };
  }
};
