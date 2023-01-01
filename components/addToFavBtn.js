import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const AddToFavBtn = () => {
  return (
    <>
      <button className="add-to-fav">
        <FontAwesomeIcon icon={faHeart} className="fav-btn" />
        <p className="fav-text">Favorite</p>
      </button>
    </>
  );
};

export default AddToFavBtn;
