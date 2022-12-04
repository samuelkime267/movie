import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/dist/client/image';

const Hero = ({ data }) => {
  console.log(data);
  return (
    <div className="hero-container">
      <Image
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.original_name ?? data.original_title}
        fill
        className="hero-image"
        sizes="100vw"
        priority
      />
      <div className="text-container">
        <h1 className="movie-title">
          {data.original_name ?? data.original_title}
        </h1>
        <p className="movie-overview">
          {data.overview.length > 120
            ? data.overview.substring(0, 120) + '...'
            : data.overview}
        </p>
        <p className="release-date">Type: {data.media_type.toUpperCase()}</p>
        <Link href={`/movie`} className="link-btn">
          <button className="bgLess playButton">
            <p className="play-text">Play</p>
            <FontAwesomeIcon icon={faPlay} className="play-btn" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
