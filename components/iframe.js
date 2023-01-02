import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Bars } from 'react-loader-spinner';

const Iframe = ({ video, isVideo }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={`iframes-container `}>
      <div className="modal-container">
        <button className="close-i" onClick={isVideo}>
          <FontAwesomeIcon icon={faClose} className="close-btn" />
        </button>
        <iframe
          onLoad={() => setIsLoading(false)}
          src={`https://www.youtube.com/embed/${video.key}?rel=0`}
          title={`${video.name}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframe"
        ></iframe>
        {isLoading && (
          <Bars
            height="100"
            width="100"
            color="white"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="bars-loading"
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

export default Iframe;
