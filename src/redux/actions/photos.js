import { api } from "../../api";
import {
  getPhotosFailed,
  getPhotosStarted,
  getPhotosSuccess,
} from "../actionCreators/photos";

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      dispatch(getPhotosStarted);
      const response = api.photos.getPhotos({
        params: { _page: 0, _limit: 5 },
      });
      dispatch(getPhotosSuccess(response.data));
    } catch (error) {
      dispatch(getPhotosFailed(error));
    }
  };
};
