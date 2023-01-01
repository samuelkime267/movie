import React from 'react';
import Link from 'next/link';

const GenreBtn = ({ link, genre }) => {
  return (
    <>
      <Link href={`${link}`}>
        <button className="genre-btn">{genre}</button>
      </Link>
    </>
  );
};

export default GenreBtn;
