import { Link, useLocation, useNavigate } from "react-router-dom";
import useDeleteBlog from "../hooks/useDelete";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteBlog as storeDeleteBlog } from "../store/blogSlice";
import { BlogType } from "../types/types";
type BlogItemType = BlogType & {
  showFullDescription: boolean;
};
const BlogItem = ({
  title,
  description,
  showFullDescription,
  id,
  authorName,
}: BlogItemType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { deleteBlog, isLoading } = useDeleteBlog();

  const handleDelete = async () => {
    const sucess = await deleteBlog(id);
    if (sucess) {
      console.log("delete Sucessfully");
      dispatch(storeDeleteBlog(id));
      location.pathname === "/" ? navigate("/") : navigate("/home");
      toast.success("Blog deleted successfully!");
    } else {
      toast.error("Failed to delete the blog.");
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 w-[800px] shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2
        className={`text-2xl font-bold text-blue-500 ${
          !showFullDescription && "cursor-pointer"
        }`}
        onClick={() => {
          !showFullDescription && navigate(`/blog/${id}`);
        }}
      >
        {title}
      </h2>
      <p className="text-gray-700 mt-2">
        {showFullDescription
          ? description
          : description.substring(0, 40) + "..."}
      </p>
      {authorName && (
        <p className=" text-sm text-[0.9rem] text-gray-500 mt-2">
          By : {authorName}
        </p>
      )}
      <div className="mt-4">
        <Link
          className="bg-blue-500 text-white px-4 pt-[0.7rem] pb-[0.7rem] rounded mr-2 hover:bg-blue-600 transition-colors duration-300"
          to={`/blog/${id}/edit`}
        >
          Edit
        </Link>
        <button
          className="bg-red-500 text-white px-3 disabled:bg-slate-400 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          onClick={handleDelete}
          disabled={isLoading}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
