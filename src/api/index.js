import { getPhotos, mutatePhoto } from "./photos";
import { getPostsByUser, mutatePosts } from "./postsByUser";
import { getUser } from "./users";

export const api = {
  photos: {
    getPhotos,
    mutatePhoto,
  },
  users: {
    getUser,
  },
  postsByUser: {
    getPostsByUser,
    mutatePosts,
  },
};
