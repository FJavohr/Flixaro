import React, { useState } from "react";
import "../trending/Trending.scss";
import Switcher from "../../../components/switcher/Switcher";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Corousel from "../../../components/carousel/Carousel";
import { useNavigate } from "react-router-dom";
// на TMBD этот отдел называется Popular
const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  // console.log(endpoint)
  // console.log(loading);
  //почему нельзя передавать switch ? Точно, потому как уже зарезервированно. ... 
  const onSwitchChange = (switcher) => {
    setEndpoint(switcher === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="sectionCorousel">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        {/* В TMDB можно только day and week зафетчить , поэтому да ..  */}
        <Switcher
          data={["Movies", "TV Shows "]}
          onSwitchChange={onSwitchChange}
        />
      </ContentWrapper>
      <Corousel
      endpoint={endpoint}
       data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
