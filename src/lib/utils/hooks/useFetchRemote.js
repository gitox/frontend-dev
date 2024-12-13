import { useQuery } from "react-query";

const fetchRecipes = async (query) => {
    const res = await fetch(query);
    return res.json();
  };
  
  export const useQueryRemote = (queryKey, query) => {
    console.log("query",query);
    
    const promise = useQuery(queryKey, () => fetchRecipes(query));
    // const { data, isLoading, isError } = promise;
    
    // console.log("data from useQueryRemote : (data)",data);

    

    return promise;
  }