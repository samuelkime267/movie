import React from 'react';
import Image from 'next/image';

const ActorsCard = ({ data }) => {
  return (
    <div className="actor-card-container">
      <div className="image-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name ?? data.original_name}
          fill
          className="actor-pic"
          sizes="(max-width: 1024px) 50vw,
              33vw"
          priority="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
        />
      </div>
      <p className="actor-name">{data.name ?? data.original_name}</p>
    </div>
  );
};

export default ActorsCard;
