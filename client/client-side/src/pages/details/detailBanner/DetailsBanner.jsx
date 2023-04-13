import React from "react";
import "./DetailBanner.scss";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import useFetch from "../../../hooks/useFetch";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/img";
import backfall from "../../../assets/backfall.png";
import { useSelector } from "react-redux";
import { PlayIcon } from "../Playbtn";

const DetailsBanner = ({ video, crew }) => {
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const genres = data?.genres?.map((ganre) => ganre.id);

  const director = crew?.filter((filtered) => filtered.job === "Director");

  const writer = crew?.filter((filtered) => filtered.job === "Screenplay" || filtered.job === "Story" || filtered.job === "Writer" )



  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div>
                <div className="backdrop-img">
                  {/* бэкгроунд */}
                  <Img src={url.backdrop + data.backdrop_path} />
                </div>
                <div className="opacity-layer"></div>
                <ContentWrapper>
                  <div className="content">
                    <div className="left">
                      {data.poster_path ? (
                        <Img
                          className={"posterImg"}
                          src={url.backdrop + data.poster_path}
                        />
                      ) : (
                        <Img className="posterImg" src={backfall} />
                      )}
                    </div>
                    <div className="right">
                      <div className="title">
                        {`${data.name || data.title} (${dayjs(
                          data?.release_date
                        ).format("YYYY")}) `}
                      </div>
                      <div className="subtitle">{data.tagline}</div>

                      <Genres data={genres} />
                      <div className="row">
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <div className="playbtn" onClick={() => {}}>
                          <PlayIcon />
                          <span className="text">Watch Trailer</span>
                        </div>
                      </div>
                      <div className="overview">
                        <div className="heading">Overview</div>
                        <div className="description">{data.overview}</div>
                      </div>

                      <div className="info">
                        {data.status && (
                          <div className="infoItem">
                            <span className="text bold">Status: </span>
                            <span className="text">{data.status}</span>
                          </div>
                        )}
                        {data.release_date && (
                          <div className="infoItem">
                            <span className="text bold">Release Date: </span>
                            <span className="text">
                              {dayjs(data.release_date).format("MMM D, YYYY")}
                            </span>
                          </div>
                        )}
                        {data.runtime && (
                          <div className="infoItem">
                            <span className="text bold">Runtime: 
                            {" "}</span>
                            <span className="text">
                              {toHoursAndMinutes(data.runtime)}
                            </span>
                          </div>
                        )}
                      </div>
                      {director?.length > 0 && (
                        <div className="info">
                          <span className="text bold">
                        Director: {" "}
                          </span>
                          <span className="text">
                            {
                              director.map((d,i) => (
                                <span key={i}>{d.name}</span>
                              ) )
                            }
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </ContentWrapper>
              </div>
            </React.Fragment>
          )}
        </>
      ) : (
        <>
          <div className="detailsBannerSkeleton">
            <ContentWrapper>
              <div className="left skeleton"></div>
              <div className="right">
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
              </div>
            </ContentWrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsBanner;
