import React from "react";
import useFetch from "../../../hooks/useFetch";
import Corousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar Tv Shows" : "Similar Movies";

  return (
    <ContentWrapper>
      <Corousel
        title={title}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </ContentWrapper>
  );
};

export default Similar;
