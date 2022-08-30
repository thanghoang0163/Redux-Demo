import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postsSlice";
import useReducer from "../feature/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: useReducer,
  },
});
