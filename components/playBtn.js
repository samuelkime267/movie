import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayBtn = () => {
  return (
    <>
      <Link href={`/movie`} className="link-btn">
        <button className="bgLess playButton">
          <p className="play-text">Play</p>
          <FontAwesomeIcon icon={faPlay} className="play-btn" />
        </button>
      </Link>
    </>
  );
};

export default PlayBtn;
