import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
const Error = () => {
  const router = useRouter();
  const pageRefresh = function () {
    router.reload(window.location.pathname);
  };
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faCircleExclamation} className="error-icon" />
      <p>something went wrong</p>
      <button className="bgLess playButton" onClick={pageRefresh}>
        <p className="play-text">Try again</p>
      </button>
    </div>
  );
};

export default Error;
