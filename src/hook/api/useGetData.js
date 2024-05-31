import { useQuery } from "react-query";
import { baseURL } from "../../Api/api";

const useGetData = (params = {}) => {
  const getData = async () => {
    try {
      const url = new URL(baseURL);
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Fetching data failed: ${error.message}`);
    }
  };

  const queryKey = ["getData", params];
  const query = useQuery(queryKey, getData, {
    retry: 1, // Number of retries in case of failure
    staleTime: 30000, // Data freshness duration in milliseconds
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  return query;
};

export default useGetData;
