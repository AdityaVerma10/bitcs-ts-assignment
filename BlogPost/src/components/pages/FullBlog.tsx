import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogItem from "../Blogitem";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";
import { BlogType } from "../../types/types";

function FullBlog() {
  const { Id } = useParams();
  const { error, isLoading, getData } = useFetch();
  const [blog, setBlog] = useState<BlogType>({
    id: "",
    title: "",
    description: "",
    authorName: "",
  });
  useEffect(() => {
    async function getblog() {
      const res = await getData(`http://localhost:5713/blogs/${Id}`);
      setBlog(res);
    }
    getblog();
  }, []);
  return (
    <div className="flex justify-center items-center mt-5">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <BlogItem
          title={blog.title}
          description={blog.description}
          showFullDescription={true}
          id={Id || ""}
          authorName={blog.authorName}
        />
      )}
    </div>
  );
}

export default FullBlog;
