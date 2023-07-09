import {
  GET_PHOTOS_FAILED,
  GET_PHOTOS_STARTED,
  GET_PHOTOS_SUCCESS,
  MUTATE_PHOTO_FAILED,
  MUTATE_PHOTO_STARTED,
  MUTATE_PHOTO_SUCCESS,
  SET_PHOTOS_TOTAL,
} from "../actionCreators/photos";

const initialState = {
  photos: [],
  isPhotoLoading: true,
  totalPhotos: 0,
  isMutateLoading: false,
  isPhotoError: false,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_STARTED:
      return {
        ...state,
        isPhotoLoading: true,
      };
    case GET_PHOTOS_FAILED:
      return {
        ...state,
        isPhotoLoading: false,
        isPhotoError: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isPhotoLoading: false,
        photos: action.payload,
        isPhotoError: false,
      };
    case SET_PHOTOS_TOTAL:
      return {
        ...state,
        totalPhotos: action.payload,
      };
    case MUTATE_PHOTO_STARTED:
      return {
        ...state,
        isMutateLoading: true,
      };
    case MUTATE_PHOTO_SUCCESS:
      return {
        ...state,
        isMutateLoading: false,
      };
    case MUTATE_PHOTO_FAILED:
      return {
        ...state,
        isMutateLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
