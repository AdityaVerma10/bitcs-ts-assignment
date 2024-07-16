import { useState } from "react";
import { Error } from "../components/Error";

const useDeleteBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>({
    message: null,
  });

  const deleteBlog = async (id: string) => {
    setIsLoading(true);
    setError({
      message: null,
    });

    try {
      const response = await fetch(`http://localhost:5713/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      setIsLoading(false);
      return true;
    } catch (error: any) {
      setError({
        message: error.message,
      });
      setIsLoading(false);
      return false;
    }
  };

  return { deleteBlog, isLoading, error };
};

export default useDeleteBlog;
