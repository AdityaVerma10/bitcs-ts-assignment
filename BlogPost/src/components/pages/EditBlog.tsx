import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "../../hooks/useFetch";
import { useUpdate } from "../../hooks/useUpdate";
import { useDispatch } from "react-redux";
import { editBlog } from "../../store/blogSlice";
import { BlogType } from "../../types/types";
function EditBlog() {
  const { Id } = useParams();
  const { getData } = useFetch();
  const [inputError, setInputError] = useState<string | null>(null);
  const { updateBlog } = useUpdate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState<BlogType>({
    id: Id || "",
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

  const handleUpdate = (fieldName: string, value: string) => {
    setBlog((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSave = async () => {
    if (!blog.title || !blog.authorName || !blog.description) {
      setInputError("All fields are required to update the blog.");
      setTimeout(() => {
        setInputError(null);
      }, 2000);
      return;
    }
    const res = await updateBlog(Id, blog);
    if (!res) {
      throw new Error("cannot updated due to network issue");
    } else {
      toast.success("Blog updated successfully!");
      dispatch(editBlog(blog));
      navigate(-1);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
        Edit Blog
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={blog.title}
          onChange={(e) => handleUpdate("title", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          id="author"
          type="text"
          value={blog.authorName}
          onChange={(e) => handleUpdate("authorName", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={blog.description}
          onChange={(e) => handleUpdate("description", e.target.value)}
          className="w-full px-3 py-3 h-[120px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600 transition-colors duration-300"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      {inputError && <p className="text-[red] text-[0.8rem]">{inputError}</p>}
    </div>
  );
}

export default EditBlog;
