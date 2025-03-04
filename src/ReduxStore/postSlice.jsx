import { createSlice } from "@reduxjs/toolkit";
import { PostData } from "../utils/PostData";

const savePosts = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

const loadPosts = () => {
  const storedPosts = localStorage.getItem("posts");
  return storedPosts ? JSON.parse(storedPosts) : PostData;
};

const postSlice = createSlice({
  name: "post",
  initialState: {
    items: loadPosts(),
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
      savePosts(state.items);
      console.log("slice action:", action);
    },
    updatePost: (state, action) => {
      const { id, userName, postBody, hashtags } = action.payload;

      const updatingPost = state.items.find((post) => post.id == id);

      if (updatingPost) {
        updatingPost.userName = userName;
        updatingPost.postBody = postBody;
        updatingPost.hashtags = hashtags;

        savePosts(state.items);
      }
    },

    removePost: (state, action) => {
      const { id } = action.payload;
      const deletingPost = state.items.find((post) => post.id == id);

      if (deletingPost) {
        return state.items.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;

export default postSlice.reducer;
