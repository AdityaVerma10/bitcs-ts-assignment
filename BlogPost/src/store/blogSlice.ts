import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BlogType } from "../types/types";
import { RootState } from "./store";

type BlogState = {
  blogs: BlogType[];
};
const initialState: BlogState = {
  blogs: [],
};
export const blogSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {
    insertBlogs(state, action: PayloadAction<BlogType[]>) {
      state.blogs = action.payload;
    },
    deleteBlog(state, action: PayloadAction<string>) {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    editBlog(state, action: PayloadAction<BlogType>) {
      state.blogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    },
  },
});

export const { insertBlogs, deleteBlog, editBlog } = blogSlice.actions;
export const selectBlogs = (state: RootState) => state.blogs;
export default blogSlice.reducer;
