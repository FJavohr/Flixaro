import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./config/api";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import Explore from "./pages/404/pageNotFound.jsx";
// import pageNotFound from "./pages/404/pageNotFound.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      
      dispatch(getApiConfiguration(url));

      console.log(res);
    });
  };

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};

export default App;
