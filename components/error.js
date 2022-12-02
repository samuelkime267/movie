import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const Error = ({ link }) => {
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faCircleExclamation} className="error-icon" />
      <p>something went wrong</p>
      <Link href={`${link}`}>
        <button className="bgLess playButton">
          <p className="play-text">Try again</p>
        </button>
      </Link>
    </div>
  );
};

export default Error;
