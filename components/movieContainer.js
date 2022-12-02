import React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieContainer = ({ link, data }) => {
  return (
    <Link href={`/${link}`} className="movie-link-container">
      <div className="movie-container">
        <div className="image-holder">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_name ?? data.original_title}
            fill
            className="poster-image"
          />
        </div>
        <div className="movie-detail-holder">
          <h1 className="movie-title">
            {data.original_name ?? data.original_title}
          </h1>
          <div className="action-container">
            <button className="bgLess">
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </button>
            <div className="rating">
              <p className="rating-text">{data.vote_average.toFixed(1)}</p>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: ' rgb(0, 195, 255)' }}
                color=" rgb(0, 195, 255)"
                className="star"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieContainer;
