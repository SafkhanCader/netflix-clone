import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBell, FaCaretDown, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import netflixLogo from '../../assets/logo.png'; // your logo
import userAvatar from '../../assets/profile_img.png'; // your user avatar

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Left Section */}
      <div className="nav__left">
        <a className="brand" href="/" aria-label="Netflix Home">
          <img src={netflixLogo} alt="Netflix Logo" className="nav__logo" />
        </a>
        <nav className="nav__links">
          <a href="#" className="active">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="nav__right">
        {/* Search */}
        <div className={`nav__icon search ${showSearch ? 'active' : ''}`}>
          <FaSearch
            onClick={() => setShowSearch(!showSearch)}
            className="icon"
            aria-label="Search"
          />
          <input
            type="search"
            className="search__input"
            placeholder="Titles, people, genres"
            autoFocus={showSearch}
          />
        </div>

        {/* Notifications */}
        <div className="nav__icon">
          <FaBell className="icon" aria-label="Notifications" />
        </div>

        {/* Profile Dropdown */}
        <div className="nav__profile">
          <img src={userAvatar} alt="User" className="avatar" />
          <FaCaretDown className="icon" />

          <div className="dropdown">
            <a href="#"><FaUser /> Account</a>
            <a href="#"><FaQuestionCircle /> Help Center</a>
            <a href="#"><FaSignOutAlt /> Sign out</a>
          </div>
        </div>
      </div>
    </header>
  );
}
