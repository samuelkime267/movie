import React from 'react';
import Image from 'next/image';

const ActorsCard = ({ data }) => {
  console.log(data);
  return (
    <div className="actor-card-container">
      <div className="image-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          alt={data.name ?? data.original_name}
          fill
          className="actor-pic"
        />
      </div>
      <p className="actor-name">{data.name ?? data.original_name}</p>
    </div>
  );
};

export default ActorsCard;
