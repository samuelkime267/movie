import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CastContainer = ({ castDetail }) => {
  return (
    <div className="cast-container">
      <div className="cast-image-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${castDetail.profile_path}`}
          alt={castDetail.name ?? castDetail.original_name}
          fill
          className="actor-pic"
          sizes="(max-width: 1024px) 50vw,
              33vw"
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w500${castDetail.profile_path}`}
        />
      </div>
      <div className="cast-details">
        <div className="details">
          <p className="details-question">
            name: <span className="details-answer">{castDetail.name}</span>
          </p>
        </div>
        <div className="details">
          <p className="details-question">
            {castDetail.character ? 'character: ' : 'job: '}
            <span className="details-answer">
              {castDetail.character ?? castDetail.job}
            </span>
          </p>
        </div>
        <div className="details">
          <p className="details-question">
            known for:{' '}
            <span className="details-answer">
              {castDetail.known_for_department}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CastContainer;
