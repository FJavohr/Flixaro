import React, { useState, useEffect } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  // ахалай махалай с бэкграудом | добовляем бэкграунд
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  // console.log(background);
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  // console.log(loading)
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data?.results, url.backdrop]);

  //обработка запроса при условиях 
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0  ) {
      navigate(`/search/${query}`);
      // console.log("rhuma");
    }
    // console.log("rhuma");
  };
  const searchButton = () => {
    if(query.length > 0){
    navigate(`/search/${query}`);
    }
  }
  return (
    <div className="heroBanner">
      {/* загрузка изображений  */}
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Заходите почитать описнаие фильма и посмотреть только лишь трейлеры, хы     
          </span>
          <span className="subTitle">
            Блин ! Могли ведь сделать API с фильмами, которые можно было бы полноценно посмотреть -_-
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show ..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchButton}> Search </button>
          </div>
        </div>
      </ContentWrapper>
      
        <div className="opacity-layer"></div>

    </div>
  );
};

export default HeroBanner;
