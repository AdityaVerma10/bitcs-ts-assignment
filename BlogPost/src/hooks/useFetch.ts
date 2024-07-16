import { useState } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getData(url: string) {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch blog");
      const data = await res.json();
      setTimeout(() => {
        // this setTimeout basically for only to see delay on UI for testing if there any delay on api call
        setIsLoading(false);
      }, 300);
      return data;
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
      return false;
    }
  }
  return { error, isLoading, getData };
};
