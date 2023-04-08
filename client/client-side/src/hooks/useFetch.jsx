import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../config/api";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  
  
  useEffect(() => {
    setLoading("loading ... hehehe")
    setData(null)
    setError(null);

  fetchDataFromApi(url)
  .then((res) => {
    setLoading(false)
    setData(res)
  })
  .catch((err) => {
    setLoading(false)
    setData("Something went wrong ? Cause you dumb man !");
  })
  },[url])

  return {data, loading, error};

}
export default useFetch;