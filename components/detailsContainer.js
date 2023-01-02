import React from 'react';
import { AddToFavBtn, GenreBtn, PlayBtn } from '/components';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/dist/client/router';

const DetailsContainer = ({ data, play }) => {
  const router = useRouter();
  const mediaType = router.asPath.split('/')[2];
  return (
    <div
      className="details-container"
      style={{
        '--backgroundImage': `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="details-fold-holder">
        <div className="movie-image-container">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_name ?? data.original_title}
            fill
            className="poster-image"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
        </div>
        <div className="movie-details-container">
          <h1 className="movie-title">
            {data.original_name ?? data.original_title}
          </h1>
          <div className="genre-container">
            {data.genres.map(genre => (
              <GenreBtn
                key={`${genre.id}`}
                link={`/media/${mediaType}/${genre.name}/1`}
                genre={genre.name}
              />
            ))}
          </div>
          <div className="rating-date">
            <div className="details-rating-container">
              <p className="rating-p">Rating: </p>
              <p className="vote-count">{data.vote_average.toFixed(1)}</p>
              <FontAwesomeIcon className="star-icon" icon={faStar} />
            </div>
            <p className="release-date">
              {data.release_date ? 'Released: ' : 'First Aired: '}
              {data.release_date ?? data.first_air_date}
            </p>
          </div>
          <p className="overview-p">{data.overview}</p>
          <div className="btn-container">
            <PlayBtn play={play} />
            <AddToFavBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
