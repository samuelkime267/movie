import React from 'react';
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="name">Created by Samuel Kime</p>
      <p className="copyright">&copy; {year}</p>
      <p className="api">
        Used <a href="https://www.themoviedb.org/">The Movie Database</a> API.
      </p>
    </footer>
  );
};

export default Footer;
