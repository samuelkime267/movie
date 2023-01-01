import React from 'react';
import Image from 'next/dist/client/image';
import { PlayBtn } from '/components';

const Hero = ({ data }) => {
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
        <PlayBtn />
      </div>
    </div>
  );
};

export default Hero;
