import {
  GET_POSTS_FAILED,
  GET_POSTS_STARTED,
  GET_POSTS_SUCCESS,
} from "../actionCreators/postsByUser";

const initialState = {
  posts: [],
  isPostsLoading: true,
  isPostsError: false,
};

export const postsByUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_STARTED:
      return {
        ...state,
        isPostsLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        isPostsError: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isPostsLoading: false,
        isPostsError: true,
      };

    default:
      return {
        ...state,
      };
  }
};
