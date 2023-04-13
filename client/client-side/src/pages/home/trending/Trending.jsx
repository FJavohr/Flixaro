import React, { useState } from "react";
import "./Trending.scss";
import Switcher from "../../../components/switcher/Switcher";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Corousel from '../../../components/carousel/Carousel'
// на TMBD этот отдел называется trending
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  // console.log(loading)
  //почему нельзя передавать switch ?
  const onSwitchChange = (switcher) => {
    setEndpoint(switcher === "Day" ? "day" : "week");
  };
  
  return (
    <div className="sectionCorousel">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* В TMDB можно только day and week, поэтому да ..  */}
        <Switcher data={["Day", "Week"]} onSwitchChange={onSwitchChange} />
      </ContentWrapper>
      <Corousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
