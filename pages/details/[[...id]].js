import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  Error,
  CastContainer,
  DetailsContainer,
  MovieContainer,
  Iframe,
} from '../../components';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({ data, error, cast, similar, video }) => {
  const router = useRouter();
  const mediaType = router.asPath.split('/')[2];
  const videoResult = video.results.find(video => video.type === 'Trailer');
  if (error) {
    <Error />;
  }

  const [isVideo, setIsVideo] = useState(false);
  const stopVideo = function () {
    setIsVideo(false);
  };
  const playVideo = function () {
    setIsVideo(faTruckMedical);
  };
  return (
    <>
      <section className="details-section">
        <DetailsContainer data={data} play={playVideo} />
        {isVideo && <Iframe video={videoResult} isVideo={stopVideo} />}
        <div className="details-extra-container">
          <div>
            <h1 className="section-title">casts</h1>
            <div className="cast-crew">
              {cast.cast.map(cast => {
                return <CastContainer key={cast.id} castDetail={cast} />;
              })}
            </div>
          </div>
          <section className="movie-listing">
            <h1 className="section-title">
              Similar {mediaType === 'tv' ? 'TV Shows' : 'Movies'}
            </h1>
            <div className="movies-list-carousel">
              {similar.results.map(data => {
                return (
                  <MovieContainer
                    key={data.id}
                    link={`/details/${mediaType}/${data.id}`}
                    data={data}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const mediaType = id[0];
  const mediaId = id[1];

  try {
    // genres
    const reqData = await fetch(
      `${process.env.API_URL}/${mediaType}/${mediaId}?api_key=${process.env.API_KEY}&language=en-US`
    );
    const data = await reqData.json();

    const reqCast = await fetch(
      `${process.env.API_URL}/${mediaType}/${mediaId}/credits?api_key=${process.env.API_KEY}&language=en-US`
    );
    const cast = await reqCast.json();

    const reqSimilar = await fetch(
      `${process.env.API_URL}/${mediaType}/${mediaId}/similar?api_key=${process.env.API_KEY}&language=en-US`
    );
    const similar = await reqSimilar.json();

    const reqVideo = await fetch(
      `${process.env.API_URL}/${mediaType}/${mediaId}/videos?api_key=${process.env.API_KEY}&language=en-US`
    );
    const video = await reqVideo.json();

    return {
      props: { error: false, data, cast, similar, video },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}

export default MovieDetails;
