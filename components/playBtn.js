import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const PlayBtn = ({ play }) => {
  return (
    <>
      <div className="link-btn">
        <button className="bgLess playButton" onClick={play}>
          <p className="play-text">Play</p>
          <FontAwesomeIcon icon={faPlay} className="play-btn" />
        </button>
      </div>
    </>
  );
};

export default PlayBtn;
