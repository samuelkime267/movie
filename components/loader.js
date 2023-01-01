import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Bars
        height="100"
        width="100"
        color="rgb(0, 195, 255)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
