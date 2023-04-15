import React from "react";
import Corousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const Recommedation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <ContentWrapper>
      <Corousel
        title={"Recommendations"}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </ContentWrapper>
  );
};

export default Recommedation;
