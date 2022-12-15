import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBookmark,
  faFilm,
  faClapperboard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);
  const route = useRouter();
  const path = route.asPath.split('/')[1];
  return (
    <>
      <nav>
        <div className="logo-container">
          <Image src="/logo.png" fill alt="logo" sizes="5rem" />
        </div>
        <button
          className="menu-button bgLess"
          onClick={() => setIsNav(nav => !nav)}
        >
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      </nav>
      <aside
        className={`${isNav ? 'active-nav' : ''}`}
        onClick={() => setIsNav(nav => !nav)}
      >
        <div className="logo-container">
          <Image src="/logo.png" fill alt="logo" sizes="5rem" />
        </div>
        <div className="sidebar-links">
          <div className={`nav-link ${path === '' ? 'active-link' : ''}`}>
            <Link href="/">
              <div className="nav-link-container">
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
                <p className="nav-link-text">Home</p>
              </div>
            </Link>
          </div>
          <div className={`nav-link ${path === 'movie' ? 'active-link' : ''}`}>
            <Link href="/movie/all">
              <div className="nav-link-container">
                <FontAwesomeIcon icon={faClapperboard} className="nav-icon" />
                <p className="nav-link-text">Movies</p>
              </div>
            </Link>
          </div>
          <div className={`nav-link ${path === 'tv' ? 'active-link' : ''}`}>
            <Link href="/tv/all">
              <div className="nav-link-container">
                <FontAwesomeIcon icon={faFilm} className="nav-icon" />
                <p className="nav-link-text">Tv Shows</p>
              </div>
            </Link>
          </div>
          <div
            className={`nav-link ${path === 'favourite' ? 'active-link' : ''}`}
          >
            <Link href="/favourite">
              <div className="nav-link-container">
                <FontAwesomeIcon icon={faBookmark} className="nav-icon" />
                <p className="nav-link-text">Favourite</p>
              </div>
            </Link>
          </div>
          <div className={`nav-link ${path === 'actors' ? 'active-link' : ''}`}>
            <Link href="/actors">
              <div className="nav-link-container">
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                <p className="nav-link-text">Actors</p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
