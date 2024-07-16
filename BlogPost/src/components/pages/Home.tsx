import { useEffect } from "react";
import BlogItem from "../Blogitem";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { insertBlogs } from "../../store/blogSlice";
import { BlogType } from "../../types/types";

export default function Home() {
  const blogs: BlogType[] = useAppSelector((state) => state.blogs);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { error, isLoading, getData } = useFetch();
  useEffect(() => {
    async function getBlogs() {
      const res = await getData("http://localhost:5713/blogs");
      dispatch(insertBlogs(res));
    }
    getBlogs();
  }, [location.key]);
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            description={blog.description}
            showFullDescription={false}
            id={blog.id}
            authorName={blog.authorName}
          />
        ))
      )}
    </div>
  );
}
