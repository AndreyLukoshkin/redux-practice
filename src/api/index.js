import { getPhotos, mutatePhoto } from "./photos";
import { getPostsByUser, mutatePosts } from "./postsByUser";
import { getUser, mutateUser } from "./users";

export const api = {
  photos: {
    getPhotos,
    mutatePhoto,
  },
  users: {
    getUser,
    mutateUser,
  },
  postsByUser: {
    getPostsByUser,
    mutatePosts,
  },
};
